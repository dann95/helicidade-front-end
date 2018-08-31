<?php


namespace Heliquality\Repositories;

use Heliquality\Models\Ocorrencia;
use Heliquality\Models\PreOcorrencia;

class MovementsRepository
{
    public function find($id)
    {
        $res = Ocorrencia::where('id_evento', 4)
            ->with(['checklist'])
            ->where('id', $id)
            ->get()
            ->first();




        if(! $res)
            return ['found' => false];


        return [
            'found' => true,
            'movement' => $res
        ];
    }

    public function all()
    {
        return PreOcorrencia::with(['ocorrencia'])
            ->where('pre_ocorrencia.id_evento',4)
            ->leftJoin('ocorrencia', 'ocorrencia.id_pre_ocorrencia', '=', 'pre_ocorrencia.id')
            ->get();
    }

    public function findByPeriod($start, $end = null)
    {
        return PreOcorrencia::with(['ocorrencia'])
            ->where('pre_ocorrencia.id_evento', 4)
            ->where('pre_ocorrencia.dt_registro', '>=', $start)
            ->where('pre_ocorrencia.dt_registro', '<=', ($end) ? $end : $start)
            ->leftJoin('ocorrencia', 'ocorrencia.id_pre_ocorrencia', '=', 'pre_ocorrencia.id')
            ->get();
    }
}