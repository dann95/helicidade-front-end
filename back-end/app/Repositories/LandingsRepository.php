<?php


namespace Heliquality\Repositories;


use Heliquality\Models\PreOcorrencia;

class LandingsRepository
{
    public function findByPeriod($start, $end = null)
    {
        /**
         *
         *
         *
         * ['pre_ocorrencia.id_cliente',$id_cliente],
        ['pre_ocorrencia.dt_registro','>=',$dataInicial],
        ['pre_ocorrencia.dt_registro','<=',$dataFinal],
         *
         *
         * pre ocorrencia evento id = 2, pouso
         */

        return PreOcorrencia::where('id_evento', 2)
            ->where('dt_registro', '>=', $start)
            ->where('dt_registro', '<=', ($end) ? $end : $start)
            ->get();
    }

    public function findByPrefixAndPeriod($prefix, $start, $end = null)
    {

    }
}