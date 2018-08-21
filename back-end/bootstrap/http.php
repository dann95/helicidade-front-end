<?php

require_once __DIR__.'/../vendor/autoload.php';

$container = new \Slim\Container();

$app = new \Slim\App($container);



//
//$app->add(new \Slim\Middleware\JwtAuthentication([
//    "regexp" => "/(.*)/", //Regex para encontrar o Token nos Headers - Livre
//    "header" => "X-Token", //O Header que vai conter o token
//    "path" => "/", //Vamos cobrir toda a API a partir do /
//    "passthrough" => ["/auth"], //Vamos adicionar a exceção de cobertura a rota /auth
//    "realm" => "Protected",
//    "secret" => $container['secretkey'] //Nosso secretkey criado
//]));


$routeOptions = require '../routes.php';

$routeOptions($app);

return $app;