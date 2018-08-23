<?php

namespace Heliquality\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    protected $guarded = [];
    public $timestamps = false;
}