<?php


namespace Heliquality\Models;

use Heliquality\Models\Model;

class PreOcorrencia extends Model
{
    protected $table = 'pre_ocorrencia';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function photos()
    {
        return $this->hasMany(PreOcorrenciaFoto::class, 'id_pre_ocorrencia');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function fuelling()
    {
        return $this->hasOne(Fuelling::class, 'id', 'id_item');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function ocorrencia()
    {
        return $this->hasOne(Ocorrencia::class, 'id_pre_ocorrencia')
            ->select([
                'ocorrencia.*',
                'checklist_envio.json_envio',
                'checklist_envio.json_retorno',
            ])
            ->leftJoin('checklist_envio', 'checklist_envio.id', '=', 'ocorrencia.id_item');
    }
}