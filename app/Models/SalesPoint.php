<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesPoint extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['name', 'denomination', 'description', 'note', 'phone', 'street','street_number', 'city', 'province', 'state', 'postcode', 'taxonomy', 'spc', 'latitude', 'longitude'];

    /**
     * Tables Relationships
     */
    public function departments()
    {
        return $this->belongsToMany(Department::class);
    }
}
