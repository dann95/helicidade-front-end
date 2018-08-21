<?php

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Firebase\JWT\JWT;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Content-Type: application/json');


$routes = function (\Slim\App $router) {

//    $router->add(function ($req, $res, $next) {
//        $response = $next($req, $res);
//        return $response
//            ->withHeader('Access-Control-Allow-Origin', '*')
//            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
//            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//    });

    $router->options('/{routes:.+}', function ($request, $response, $args) {
        return $response;
    });


    $router->group('/v1', function () use($router){
        $router->get('/auth', function (Request $request, Response $response) {

            $key = "thisisspartaorthisismyrealm95";


            $token = array(
                "user" => "@fidelissauro",
                "twitter" => "https://twitter.com/fidelissauro",
                "github" => "https://github.com/msfidelis"
            );

            $jwt = JWT::encode($token, $key);

            $response->getBody()->write(json_encode([
                'status' => 'success'
            ]));

            $response = $response->withHeader('Authorization', $jwt);

            return $response;
        });
    });

};

return $routes;


/*
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if ( ! $token = JWTAuth::attempt($credentials)) {
            return response([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Invalid Credentials.'
            ], 400);
        }
        return response([
            'status' => 'success'
        ])
            ->header('Authorization', $token);
    }
    public function user(Request $request)
    {
        $user = User::find(Auth::user()->id);
        return response([
            'status' => 'success',
            'data' => $user
        ]);
    }
    public function refresh()
    {
        return response([
            'status' => 'success'
        ]);
    }
    public function logout()
    {
        JWTAuth::invalidate();
        return response([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }
*/