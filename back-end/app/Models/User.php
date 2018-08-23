<?php

namespace Heliquality\Models;

use Heliquality\Models\Model;

class User extends Model
{
    protected $table = 'usuario';

    protected $hidden = [
        'id_cliente',
        'id_dispositivo',
        'senha',
        'solicitacao_senha',
        'dt_registro',
        'hr_registro'
    ];
}