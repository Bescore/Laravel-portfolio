<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    
        public function technologies(){

            return $this->belongsToMany(Technology::class,'project_has_technology','project_id','technology_id');
        }
    
}
