<?php


namespace Heliquality\Repositories;

use Heliquality\Models\Fuelling;
use Heliquality\Models\PreOcorrencia;

class AnalyticsRepository
{

    public function indicators($start, $end)
    {
        $landings = PreOcorrencia::select('id','sn_falso')
            ->where('id_evento', 2)
            ->where('dt_registro', '>=', $start)
            ->where('dt_registro', '<=', $end)
            ->get();

        return [
            'landings' => $landings->where('sn_falso', 'N')->count(),
            'fake' => $landings->where('sn_falso', 'S')->count(),
            'fuelling' => Fuelling::select('id')
                ->where('dt_registro', '>=', $start)
                ->where('dt_registro', '<=', $end)
                ->count(),
            'movements' => PreOcorrencia::select('id')
                ->where('dt_registro', '>=', $start)
                ->where('dt_registro', '<=', $end)
                ->where('id_evento', 4)
                ->count()
        ];
    }

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