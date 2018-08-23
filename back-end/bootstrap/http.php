<?php

require_once __DIR__.'/../vendor/autoload.php';


try {
    (new \Dotenv\Dotenv(realpath(__DIR__.'/../')))->load();
}catch (\Dotenv\Exception\InvalidPathException $exception) {

}

$container = new \Slim\Container();

$app = new \Slim\App($container);

foreach (require '../providers.php' as $provider) {
    $app = $provider($app);
}

$middlewarePipeline = require '../middleware.php';

$app = $middlewarePipeline($app);

$routeOptions = require '../routes.php';
return $routeOptions($app);