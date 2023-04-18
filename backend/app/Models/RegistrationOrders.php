<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RegistrationOrders extends Model
{
    use HasFactory;

    protected $table = 'registration_orders';

    protected $fillable = [
        'event_id',
        'account_id',
    ];

    //todo настроить нормально отношения
    /**
     * @return BelongsTo
     */
    public function conference(): BelongsTo
    {
        return $this->belongsTo(Conferences::class);
    }

    /**
     * @return BelongsTo
     */
    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class);
    }
}
