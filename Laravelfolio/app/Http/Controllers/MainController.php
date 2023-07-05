<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\View\View;

class MainController extends Controller
{
    public function main() {

        $projects=Project::all();

        return view('main',['projects'=>$projects]);
    }
}

