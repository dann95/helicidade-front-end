<?php


namespace Heliquality\Repositories;

use Heliquality\Models\PreOcorrencia;

class MovementsRepository
{
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
            ->where('pre_correncia.dt_registro', '>=', $start)
            ->where('pre_correncia.dt_registro', '<=', ($end) ? $end : $start)
            ->leftJoin('ocorrencia', 'ocorrencia.id_pre_ocorrencia', '=', 'pre_ocorrencia.id')
            ->get();
    }
}