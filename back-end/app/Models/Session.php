<?php

namespace Heliquality\Models;

use Heliquality\Models\Model;

class Session extends Model
{
    public $timestamps = true;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}