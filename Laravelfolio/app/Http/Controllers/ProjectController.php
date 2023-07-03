<?php

namespace App\Http\Controllers;

use App\Models\Project;
use DateTime;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function projects(){

        setlocale(LC_TIME, 'fr_FR');
        // $projects=Project::all();

        $url = 'https://rmc.bfmtv.com/rss/actualites/'; 

        // envoyer le flux
        $rss = simplexml_load_file($url);
        
        // recupérer le tableau d'items
        $rss= $rss->channel->item;

        $timestamp=strtotime($rss[0]->pubDate);
        
        // formater la date ' l'heure
        $localDateTime = date('d - m - Y  à  H : i : s', $timestamp);

        return view('projects', ['rss'=>$rss, 'date'=>$localDateTime]);
    }
}
