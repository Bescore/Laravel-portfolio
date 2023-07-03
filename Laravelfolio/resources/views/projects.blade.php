@extends('layouts.base')

@section('titre','projects')

@section('main')
<section class="section section-projet my-5">
    <h2 class="background-title" id="project-show">Titre projet</h2>
    <div class="row">
        <div class="col-12 col-xl-6">
            <img class=" col " src="{{ URL::to('/img/campfire.jpg') }}" alt="">
            <p class="py-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem asperiores vitae saepe inventore dignissimos nulla iste velit accusamus quod culpa fugiat veritatis voluptatem similique, ut unde voluptatum. Odio, dolor facilis!
            Architecto impedit eligendi dolore voluptas asperiores molestias incidunt et est suscipit tempora, pariatur similique dolores reprehenderit alias itaque rerum doloremque fugit soluta. Debitis, nobis! Veniam, quibusdam. Libero nihil ut architecto!
            </p>
            <p class="my-2">Lien demo</p>
            <p class="my-4">Github</p>
        </div>
        <div class="col-12 col-xl-6">
            <iframe width="100%" height="420px" src="https://www.youtube.com/embed/W-7MSuu1qtM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p class="py-3 text-center">Technologies utilisés</p>
            <div class="d-flex justify-content-center">
                <ul class="py-3" style="list-style: none">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li> Lorem, ipsum.</li>
                    <li> Lorem, ipsum.</li>
                    <li> Lorem, ipsum.</li>
                </ul>
            </div>
        </div>
    </div>
</section>
<hr class="hr">
<section class="section section-rss py-3 ">
    <div class="row">
        <div class="col-12 col-xl-6">
            <img class="" src="{{$rss[0]->enclosure->attributes()->url}}" alt="{{$rss[0]->title}}">
        </div>
        <div class="col-12 col-xl-6 text-center">
            <p class="h2">Breaking News</p>
                <div class="py-3" style="list-style: none">
                        <p><span>Publié le :</span> {{$date}}<p>
                        <p>{{$rss[0]->title}}<p>
                        <a href="{{$rss[0]->link}}">Plus d'informations<p>
                </div>
            </div>
        </div>
    </div>

</section>
@endsection