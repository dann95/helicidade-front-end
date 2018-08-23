<?php

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Firebase\JWT\JWT;

use Respect\Validation\Validator as v;

$routes = function (\Slim\App $router) {

    $router->get('/', function (Request $request, Response $response) {
        $response->getBody()->write(json_encode([
            'hello' => 'world'
        ]));
        return $response;
    });

    $router->group('/v1', function () use($router){
        $router->post('/auth/login', function (Request $request, Response $response, $args) {

            $parsedBody = $request->getParsedBody();

            $emailValidation = v::email()->validate(arr_opt($parsedBody, 'email'));
            $passwordValidation = v::stringType()->length(6)->validate(arr_opt($parsedBody, 'password'));


            if($emailValidation && $passwordValidation) {

                $repository = new \Heliquality\Repositories\UsersRepository();
                $q = $repository->findByEmailAndPassword($parsedBody['email'], $parsedBody['password']);

                if($q) {
                    $n = time();

                    $session = \Heliquality\Models\Session::create([
                        'sess_id' => str_random(20),
                        'user_id' => $q->id,
                    ]);

                    $token = JWT::encode([
                        'sub' => 'web',
                        'exp' => $n + 3600,
                        'iat' => $n,
                        'nbf' => $n,
                        'jti' => $session->sess_id
                    ], getenv('JWT_SECRET'));

                    $response->getBody()->write(json_encode([
                        'status' => 'success',
                        'token' => $token
                    ]));

                    $response = $response->withHeader("Authorization", $token);

                    return $response;
                }

            }

            $response = $response->withStatus(422);

            $response->getBody()->write(json_encode([
                'success' => false,
                'error_msg' => 'Usuário ou senha incorretos!'
            ]));

            return $response;
        });

        $router->get('/auth/user', function (Request $request, Response $response) {

            $token = JWT::decode($request->getHeader('Authorization')[0], getenv('JWT_SECRET'), ['HS256']);


            $sess = \Heliquality\Models\Session::where('sess_id', $token->jti)->where('valid', 1)->with('user')->get()->first();

            if($sess) {
                $response->getBody()->write(json_encode([
                    'status' => 'success',
                    'data' => $sess->user
                ]));
            }

            return $response;
        });

        $router->get('/auth/refresh', function (Request $request, Response $response) {
            $response->getBody()->write(json_encode(["u" => 'a']));
            return $response;
        });

    });


    return $router;
};

return $routes;