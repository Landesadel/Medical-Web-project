<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Conferences extends Model
{
    use HasFactory;

    protected $table = 'conferences';

    protected $fillable = [
        'name',
        'description',
        'short_text',
        'image',
        'place',
        'date_start',
        'date_end',
        'is_active',
        'program',
        'all_places',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    /**
     * @return HasMany
     */
    public function event(): HasMany
    {
        return $this->hasMany(RegistrationOrders::class, 'event_id');
    }
}
