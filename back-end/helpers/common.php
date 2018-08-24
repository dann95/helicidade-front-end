<?php

if(! function_exists('obj_opt')) {
    function obj_opt($obj, $prop, $default = null)
    {
        if(property_exists($obj, $prop))
            return $obj->$prop;

        return $default;
    }
}

if(! function_exists('arr_opt')) {
    function arr_opt($arr, $key, $default = null)
    {
        if(key_exists($key, $arr))
            return $arr[$key];

        return $default;
    }
}

if(! function_exists('safe_http_domains')) {
    function safe_http_domains()
    {
        return array_filter(explode(",", getenv("HLQ_SAFE_HTTP")), function ($item) {
            return $item != "";
        });
    }
}