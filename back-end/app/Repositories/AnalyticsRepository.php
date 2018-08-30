<?php


namespace Heliquality\Repositories;

use Heliquality\Models\PreOcorrencia;

class AnalyticsRepository
{
    public function landingsAndChecklists($day)
    {
        return PreOcorrencia::where('id_evento', 2)
            ->where('dt_registro', $day)
            ->with(['ocorrencia'])
            ->get()
            ->map(function ($i) {
                $r = new \StdClass;
                $r->real = ($i->sn_falso === 'N');
                $r->ocurred_at = $i->hr_registro;
                $r->hour = explode(":", $i->hr_registro)[0];
                $r->checklist_done = (! is_null($i->ocorrencia) && $i->ocorrencia->id_item > 0);
                return $r;
            })
            ->groupBy('hour');
    }
}