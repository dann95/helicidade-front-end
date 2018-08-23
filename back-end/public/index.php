<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

    exit();
}

$app = require __DIR__.'/../bootstrap/http.php';

$app->run();

