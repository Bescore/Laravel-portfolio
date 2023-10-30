<?php

namespace App\Http\Controllers;

use App\Models\Project;
use DateTime;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function show($id){

        setlocale(LC_TIME, 'fr_FR');
        $project=Project::findOrfail($id);
        //dump($project->technologies);

        $url = 'https://www.jeuxvideo.com/rss/rss.xml'; 

        // envoyer le flux
        $rss = simplexml_load_file($url);
        
        // recupérer le tableau d'items
        $rss= $rss->channel->item;

        //nombre aleatoire
        $randomNumber=rand(0,count($rss));
        if (isset(($rss[$randomNumber]->pubDate))){
        $timestamp=strtotime($rss[$randomNumber]->pubDate);
        // formater la date ' l'heure
        $localDateTime = date('d - m - Y  à  H : i : s', $timestamp);
        }else{
            $localDateTime = null;
        }
        return view('projects', ['rss'=>$rss, 'date'=>$localDateTime, 'randomNumber'=>$randomNumber,'project'=>$project]);
    }
}
