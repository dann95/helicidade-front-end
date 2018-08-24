<?php

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

$middleware = function (\Slim\App $app) {
    $app->add(new \Tuupola\Middleware\JwtAuthentication([
        "regexp" => "/(.*)/",
        "header" => "Authorization",
        "path" => "/v1",
        "ignore" => ["/v1/auth/login"],
        "realm" => "Protected",
        "secret" => getenv("JWT_SECRET"),
        "relaxed" => safe_http_domains()
    ]));

    $app->add(new Tuupola\Middleware\CorsMiddleware([
        "origin" => ["*"],
        "methods" => ["GET", "POST", "PUT", "PATCH", "DELETE"],
        "headers.allow" => ["Authorization"],
        "headers.expose" => ["Authorization"],
        "credentials" => false,
        "cache" => 0,
    ]));

    $app->add(function (Request $request, Response $response, $next) {
        $response = $response->withHeader('Content-Type', 'application/json');
        $res = $next($request, $response);
        return $res;
    });

    return $app;
};

return $middleware;