<?php

namespace Heliquality\Repositories;

use Heliquality\Models\PreOcorrencia;

class LandingsRepository
{
    public function findByPeriod($start, $end = null)
    {
        return PreOcorrencia::where('id_evento', 2)
            ->where('dt_registro', '>=', $start)
            ->where('dt_registro', '<=', ($end) ? $end : $start)
            ->get();
    }

    public function findByPrefixAndPeriod($prefix, $start, $end = null)
    {

    }

    public function paginate($amountPerPage = 15 ,$currentPage = 1)
    {

    }

    /**
     * @return mixed
     */
    public function all()
    {
        return PreOcorrencia::where('id_evento', 2)->orderBy('id', 'desc')->get();
    }
}