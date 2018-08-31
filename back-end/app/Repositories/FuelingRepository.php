<?php

namespace Heliquality\Repositories;

use Heliquality\Models\Fuelling;

class FuelingRepository
{
    /**
     * @param int $amount
     * @return mixed
     */
    public function last($amount = 2)
    {
        return Fuelling::orderBy('dt_registro', 'desc')
            ->where('prefixo', '!=', null)
            ->orderBy('hr_registro', 'desc')
            ->take($amount)
            ->get();
    }
}