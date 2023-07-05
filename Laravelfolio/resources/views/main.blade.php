@extends('layouts.base')

@section('titre','Home')

@section('main')

<section class="section section-1" id="home">
    <div class="row nopadding">
        <div class=" col-xl-6 left-side nopadding">
            <div class="main-square back-square first-square"></div>
            <div class="main-square back-square second-square"></div>
            <div id="myCanvasContainer" class="main-square third-square"><div class="curtain"></div><div id="myCanvas" style="width: 100%; height: 100%;overflow:hidden;"></div></div>
        </div>
        <div class=" col-xl-6 right-side nopadding">
            <h1 class="my-text firstname">Jean-Marie Lator</h1>
            <p class="my-text name">Développeur Web</p>
        </div>
    </div>
    <div class="circle-decoration">
</section>
<hr class="hr">
<section class="section section-2" id="about">
    <h2 class="background-title">A propos</h2>
    <div class="row">
        <div class="col col-xl-6 section-2-left-side">
            <div class="rounded-jm">
                <img loading="lazy" src="{{ URL::to('/img/jm.png') }}" alt="jean-marie">
            </div>
            <p class="mx-2">Créons des expériences web exceptionnelles avec<br> notre passion pour le développement !</p>
            <div class=>
                <div class="">
                    <p class="m-2"><span class="infos">Niveau d'études</span> : Bac +3</p>
                    <p class="m-2"><span class="infos">Âge :</span> 32 ans</p>
                    <p class="m-2 "><span class="infos">Langues :</span> Anglais intermédiaire</p>
                    <p class="m-2"><span class="infos">Soft skills :</span> Travail d'équipe, curieux, rigoureux</p>
                    <p><a class="cv-link px-2" href="{{ URL::to('/img/JeanMarie_Lator.pdf') }}" download>CV</a></p>
                    <i class=" px-2 fa-solid fa-hand-pointer fa-bounce"></i>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-6 section-2-right-side text-center">
            <p class="p-5">Je suis un développeur web passionné avec une appétence pour le  back-end, prêt à relever tous les défis pour créer des expériences numériques performantes et robustes.</p>
            <h2>Compétences</h2>
            <div class="dev-skills-container">
                <i class="fa-brands fa-php fa-4x" style="color:purple" title="PHP" ></i>
                <i class="fa-brands fa-java fa-4x" style="color:orange" title="Java"> </i>
                <i class="fa-brands fa-js fa-4x" style="color:yellow" title="Javascript"></i>
                <i class="fa-brands fa-symfony fa-4x" style="color:black" title="symfony"></i>
                <i class="fa-brands fa-laravel fa-4x" style="color:red" title="Laravel"></i>
                <i class="fa-brands fa-html5 fa-4x" style="color:orange" title="html"></i>
                <i class="fa-brands fa-css3-alt fa-4x" style="color:rgb(26, 23, 199)" title="css"></i>
                <i class="fa-brands fa-vuejs fa-4x" style="color:green" title="vue.js"></i>
                <i class="fa-brands fa-wordpress fa-4x" title="wordpress"></i>
            </div>
        </div>
        
    </div>
</section>
<section class=" section section-3" id="projects">
    <h2 class="background-title">Projets</h2>
    <div class="row h-100 mx-auto d-flex justify-content-center align-items-center">
        @foreach ($projects as $item)
        <a class='col-12 col-xl-6 m-2 carte' href="{{ route('projects', ['id' =>  $item->id]) }}" >
            <figure class="m-2 d-flex justify-content-center align-items-center ">
                
                <figcaption>{{$item->titre}}</figcaption>
            </figure>
        </a>
        @endforeach
    </div>
</section>
<br><br>
<hr class="hr px-5">
<section class=" section section-3 section-4" id="contact">
    <div class="mask"></div>
    <h2 class="background-title contact-title">Contact</h2>
    <div class="contact-container">
        <form method="POST" class="">
            <label for="nom">Nom/Prenom</label><br>
            <input type="text" id="nom"  name="nom" ><br>
            <label for="email">Email</label><br>
            <input type="text" id="email" name="email" ><br>
            <label for="message">Message</label><br>
            <textarea name="message" id="message" cols="20" rows="10"></textarea><br><br>
            <button type="button" class="btn btn-light">Envoyer</button>
        </form>
    </div>

</section>
@endsection