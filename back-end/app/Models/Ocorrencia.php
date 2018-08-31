<?php


namespace Heliquality\Models;

use Heliquality\Models\Model;

class Ocorrencia extends Model
{

    protected $table = 'ocorrencia';

    public function checklist()
    {
        return $this->hasOne(Checklist::class, 'id', 'id_item');
    }

}