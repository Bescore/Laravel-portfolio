@extends('layouts.base')

@section('titre','projects')

@section('main')
<section class="section section-projet my-5">
    <h2 class="background-title" id="project-show">{{$project->titre}}</h2>
    <div class="row">
        <div class="col-12 col-xl-6">
            <img class=" col " src="{{ asset('img/').'/'.$project->image }}" alt="{{$project->titre}}">
            <p class="py-5 line-height">{{$project->resume}}</p>
            @if (!empty($project->lien_demo))
            <a style="display: block" href="{{$project->lien_demo}}" target="_blank" class="my-4"><i class="fa-solid fa-link"></i> Essayez vous-même</a>
            @else
            <p>🏝️💻🏝️</p>
            @endif
            <a class="my-4" href="{{$project->github}}" target="_blank"> <i class="fa-brands fa-square-github"></i> Le projet sur Github ici</a>
        </div>
        <div class="col-12 col-xl-6">  
            @if (empty($project->lien_video))
                <img class="no-videos-img" src="{{ URL::to('/img/no_vids.svg') }}" alt="">
            @else
            <iframe width="100%" height="420px" src="//www.youtube.com/embed/{{$project->lien_video}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            @endif
            
            <p class="py-2 text-center">Technologies et outils utilisées</p>
            <div class="row">
                @foreach ($project->technologies as $item)
                <div style="background-color: #{{$item->couleur}};" class="text-center col rounded-2 p-2 m-3 tag">{{$item->titre}}</div>
                @endforeach
                
            </div>
        </div>
    </div>
</section>
<hr class="hr">
<section class="text-center section section-rss py-3 ">
    <div class="row">
        <div class="col-12 col-xl-6">
            <img style="object-fit:contain"  src="{{$rss[$randomNumber]->enclosure->attributes()->url}}" alt="{{$rss[$randomNumber]->title}}">
        </div>
            <div class="col-12 col-xl-6 text-center">
                <p class="h2">Breaking News </p>
                <div class="py-3" style="list-style: none">
                        <p><span>Publié le : </span> {{$date}}<p>
                        <p>{{$rss[$randomNumber]->title}}<p>
                        <a href="{{$rss[$randomNumber]->link}}">Voir l'article en cliquant ici <i class="fa-solid fa-square-rss"></i></a>
                        
                </div>
            </div>
    </div>
</section>
@endsection