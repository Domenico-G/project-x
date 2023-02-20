<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['name', 'description'];

    /**
     * Tables Relationships
     */
    public function salesPoint()
    {
        return $this->belongsToMany(SalesPoint::class);
    }

    public function components()
    {
        return $this->belongsToMany(Component::class);
    }
}
