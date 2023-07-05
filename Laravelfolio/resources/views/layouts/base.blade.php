<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {{-- font-awesome --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="{{ URL::to('/css/app.css') }}">
    {{-- bootstrap --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    {{-- font --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caprasimo&display=swap" rel="stylesheet">
    {{-- js --}}
    <script defer type="module" src="{{ URL::to('/js/onScroll.js') }}"></script>
    <script defer  type="module" src="{{ URL::to('/js/threeAnimation.js') }}"></script>
    <script defer type="module" src="{{ URL::to('/js/webAnimation.js') }}"></script>
    <script defer type="module" src="{{ URL::to('/js/lightMode.js') }}"></script>
    <!-- counterAPI library, insert anywhere on the page. -->
    <script defer src="https://counterapi.com/c.js" async ></script>
    <title>@yield('titre')</title>
</head>
<body class="body">
    <header class="header">
        <nav class="navbar navbar-expand-lg nav-background">
            <div class="little-square"></div>
            <div class="container-fluid nav-item">
            <span class="navbar-brand mx-5 link-light px-2" id="light-mode" >Bescore <i class="fa-regular fa-moon"></i></span>
            <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-light"></span>
            </button>
            
            </div>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav mx-5">
                    <li class="nav-item">
                        <a class="nav-link active link-light" aria-current="page" id="accueil" href="{{ URL::to('/#home') }}">Accueil</a>
                    </li>
                    <li class="nav-item px-4 ">
                        <a class="nav-link link-light a-propos " id="a_propos" href="{{ URL::to('/#about') }}">A propos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link-light " id="projets" href="{{ URL::to('/#projects') }}">Projets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link-light " id="contact_me" href="{{ URL::to('/#contact') }}">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main class="main">
        @yield('main')
    </main>
    <footer class="bg-dark text-center text-white mt-4 footer">
        <!-- Footer -->
    <!-- Grid container -->
    <div class="container p-4 footer_color">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Twitter -->
          <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/jeanmarielator" role="button"
            ><i class="fab fa-twitter"></i
          ></a>

          <!-- Linkedin -->
          <a class="btn btn-outline-light btn-floating m-1" href="www.linkedin.com/in/jean-marie-lator

          " role="button"
            ><i class="fab fa-linkedin-in"></i
          ></a>
    
          <!-- Github -->
          <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Bescore" role="button"
            ><i class="fab fa-github"></i
          ></a>
        </section>
        <!-- Section: Social media -->
        <section class="mb-4">
          <p>
            << Pour être à jour il faut se mettre à l'apache >>
          </p>
          <!-- Add the counter instance somewhere to your template... -->
        <div class="counterapi my-2" label="Visiteurs" style="min-height:44px" nolink=true bg="transparent" iconColor="#e7a631" ></div>
        </section>
        <!-- Section: Text -->
    
        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            
            
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </section>
        <!-- Section: Links -->
      </div>
      <!-- Grid container -->
    
      <!-- Copyright -->
      <div class="text-center p-3 footer footer_bottom">
        © 2023 Copyright:
        <p style="display: inline" class="text-white" >jean-marie Lator - Laravel Project</p>
      </div>
      <!-- Copyright -->
    </footer>
</body>
</html>