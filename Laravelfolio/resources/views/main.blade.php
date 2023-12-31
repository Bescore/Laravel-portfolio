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
                <img id="jean_marie" loading="lazy" src="{{ mix('/img/jm.png') }}" alt="jean-marie">
            </div>
            
            <div class=>
                <div class="">
                    <p class="mx-2"><span class="infos">Motivations : </span>La passion et l'envie de progresser</p>
                    <p class="m-2"><span class="infos">Niveau d'études</span> : Bac +3</p>
                    <p class="m-2"><span class="infos">Âge :</span> 32 ans</p>
                    <p class="m-2 "><span class="infos">Langues :</span> Anglais intermédiaire</p>
                    <p class="m-2"><span class="infos">Soft skills :</span> Travail d'équipe, curieux, débrouillard</p>
                    <p class="m-2"><span class="infos">Statut :</span> Actuellement en stage</p>
                    <p><a class="cv-link px-2" href="{{ asset('img/JeanMarie_Lator.pdf') }}" download>CV</a></p>
                    <i class=" px-2 fa-solid fa-hand-pointer fa-bounce"></i>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-6 section-2-right-side text-center">
            <p class="p-5">Je suis un développeur web passionné avec une appétence pour le  back-end, prêt à relever tous les défis pour créer des expériences numériques performantes et robustes.</p>
            <h2>Compétences</h2>
            <div class="dev-skills-container">
                <a href="https://www.php.net/manual/fr/intro-whatis.php" target="_blank"><i class="fa-brands fa-php fa-3x"   style="color:purple" title="PHP" ></i></a>
                <a href="https://www.java.com/fr/" target="_blank"><i class="fa-brands fa-java fa-3x" style="color:orange" title="Java"> </i></a>
                <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"><i class="fa-brands fa-js fa-3x" style="color:yellow" title="Javascript"></i></a>
                <a href="https://symfony.com" target="_blank"><i class="fa-brands fa-symfony fa-3x" style="color:black" title="symfony"></i></a>
                <a href="https://laravel.com" target="_blank"><i class="fa-brands fa-laravel fa-3x" style="color:red" title="Laravel"></i></a>
                <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank"><i class="fa-brands fa-html5 fa-3x" style="color:orange" title="html"></i></a>
                <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank"><i class="fa-brands fa-css3-alt fa-3x" style="color:rgb(26, 23, 199)" title="css"></i></a>
                <a href="https://vuejs.org" target="_blank"><i class="fa-brands fa-vuejs fa-3x" style="color:green" title="vue.js"></i></a>
                <a href="https://wordpress.org" target="_blank"><i class="fa-brands fa-wordpress fa-3x" title="wordpress"></i></a>
            </div>
        </div>
        
    </div>
</section>
<section class=" section section-3" id="projects">
    <h2 class="background-title">Projets</h2>
    <div class="row h-100 mx-auto d-flex justify-content-center align-items-center card-b">
        @foreach ($projects as $item)
        <a class='col-12 col-xl-6 m-2 carte' href="{{ route('projects', ['id' =>  $item->id]) }}" >
            <figure class="m-2 d-flex justify-content-center align-items-center ">
                
                <figcaption>{{$item->titre}}</figcaption>
            </figure>
        </a>
        @endforeach
    </div>
    <div class="d-flex justify-content-center align-items-center">
        {{$projects->links('vendor.pagination.semantic-ui')}}
    <div>
</section>
<br><br>
<hr class="hr px-5">
<section class=" section section-3 section-4" id="contact">
    <div class="mask"></div>
    <h2 class="background-title contact-title">Contact</h2>
    <div class="contact-container" id="contact-container">
        <form id="form" method="POST" class="">
            <label for="nom">Nom</label><br>
            <input type="text" id="nom"  name="nom" ><br>
            <label for="email">Email</label><br>
            <input type="text" id="email" name="email" ><br>
            <label for="message">Message</label><br>
            <textarea name="message" id="message" cols="20" rows="10"></textarea><br><br>
            <button class="btn btn-light">Envoyer</button>
        </form>
    </div>
</section>
@endsection