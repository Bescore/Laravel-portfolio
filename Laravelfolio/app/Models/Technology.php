<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technology extends Model
{
    use HasFactory;
    public function projects(){

        return $this->belongsToMany(Project::class, 'project_has_technology','technology_id','project_id');
    }
}
