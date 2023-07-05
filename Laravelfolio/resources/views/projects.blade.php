@extends('layouts.base')

@section('titre','projects')

@section('main')
<section class="section section-projet my-5">
    <h2 class="background-title" id="project-show">{{$project->titre}}</h2>
    <div class="row">
        <div class="col-12 col-xl-6">
            <img class=" col " src="{{ URL::to('/img/campfire.jpg') }}" alt="">
            <p class="py-5">{{$project->resume}}</p>
            <p class="my-2">{{$project->lien_demo}}</p>
            <p class="my-4">{{$project->github}}</p>
        </div>
        <div class="col-12 col-xl-6">
            <iframe width="100%" height="420px" src="https://www.youtube.com/embed/W-7MSuu1qtM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p class="py-3 text-center">Technologies utilisées</p>
            <div class="row">
                @foreach ($project->technologies as $item)
                <div style="background-color: #{{$item->couleur}};" class="text-center col rounded-2 p-2 m-2 tag">{{$item->titre}}</div>
                @endforeach
                
            </div>
        </div>
    </div>
</section>
<hr class="hr">
<section class="section section-rss py-3 ">
    <div class="row">
        <div class="col-12 col-xl-6">
            <img style="object-fit:contain" class="" src="{{$rss[$randomNumber]->enclosure->attributes()->url}}" alt="{{$rss[$randomNumber]->title}}">
        </div>
        <div class="col-12 col-xl-6 text-center">
            <p class="h2">Breaking News</p>
                <div class="py-3" style="list-style: none">
                        <p><span>Publié le : </span> {{$date}}<p>
                        <p>{{$rss[$randomNumber]->title}}<p>
                        <a href="{{$rss[$randomNumber]->link}}">Plus d'informations<p>
                        <i class="fa-solid fa-square-rss"></i>
                </div>
            </div>
        </div>
    </div>

</section>
@endsection