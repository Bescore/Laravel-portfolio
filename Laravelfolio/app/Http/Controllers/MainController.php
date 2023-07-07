<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class MainController extends Controller
{
    public function main() {

        $projects=DB::table('projects')->paginate(4);

        return view('main',['projects'=>$projects]);
    }
}

