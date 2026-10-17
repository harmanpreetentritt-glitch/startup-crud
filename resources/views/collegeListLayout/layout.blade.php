<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CampusFinder</title>

    <!-- Same font and icons as your admin layout.
         If your layout already loads these, you do not need these two lines. -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- The header styles -->
    <!-- <link rel="stylesheet" href="header.css"> -->

    <style>
        body {
            margin: 0;
            background: #f8f9fc;
        }

        .site-header {
            --nav: #05003f;
            --primary-color: #4e73df;
            --primary-dark: #224abe;
            --light-color: #f8f9fc;
            --menu-text: #3a3b45;

            position: sticky;
            top: 0;
            z-index: 999;
            background: var(--nav);
            box-shadow: 0 0.15rem 1.75rem rgba(58, 59, 69, 0.15);
            font-family: 'Nunito', sans-serif;
        }

        .site-header *,
        .site-header *::before,
        .site-header *::after {
            box-sizing: border-box;
        }

        .site-header a {
            text-decoration: none;
        }

        .site-header a:focus-visible,
        .site-header input:focus-visible {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }


        .site-container {
            /* max-width: 1296px; */
            /* margin: 0 auto; */
            padding: 14px 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
        }

        /*  Logo and name  */
        .site-brand {
            display: flex;
            align-items: center;
            /* gap: 12px; */
            flex-shrink: 0;
        }

        .site-brand-icon {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            /* background: var(--primary-gradient); */
            box-shadow: 0 4px 15px rgba(67, 97, 238, 0.3);
            color: #fff;
            font-size: 1.2rem;
        }

        .site-brand-name {
            font-size: 1.3rem;
            font-weight: 700;
            color: #fff;
        }

        /*  Search field and user icon  */
        .site-actions {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .site-search {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 320px;
            min-width: 0;
            height: 44px;
            padding: 0 14px;
            background: var(--light-color);
            border: 1px solid #d1d3e2;
            border-radius: 12px;
        }

        .site-search:focus-within {
            border-color: var(--primary-color);
        }

        .site-search i {
            font-size: 0.9rem;
            color: #858796;
        }

        .site-search input {
            flex: 1;
            min-width: 0;
            border: 0;
            outline: 0;
            background: transparent;
            font-family: inherit;
            font-size: 0.9rem;
            color: var(--menu-text);
        }

        .site-search input::placeholder {
            color: #6b6d7a;
        }

        .site-user {
            width: 44px;
            height: 44px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #e0e0e0;
            border-radius: 50%;
            background: #fff;
            color: #475569;
            font-size: 1.1rem;
            transition: all 0.2s;
        }

        .site-user:hover {
            color: var(--primary-dark);
            background: #eef2f9;
            border-color: #4361ee;
        }

        /* footer */
        .site-footer {
            --nav: #05003f;

            background: var(--nav);
            box-shadow: 0 0.15rem 1.75rem rgba(58, 59, 69, 0.15);
            color: #fff;
            font-family: 'Nunito', sans-serif;
        }

        .site-footer *,
        .site-footer *::before,
        .site-footer *::after {
            box-sizing: border-box;
        }

        .site-footer a {
            text-decoration: none;
        }

        .site-footer a:focus-visible {
            outline: 2px solid #fff;
            outline-offset: 2px;
        }

        .footer-container {
            padding: 36px 32px 0;
        }


        .footer-brand {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            color: #fff;
        }

        .footer-brand-icon {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            /* background: rgba(255, 255, 255, 0.15); */
            font-size: 1.2rem;
        }

        .footer-brand-name {
            font-size: 1.3rem;
            font-weight: 700;
        }

        .footer-about {
            margin: 16px 0 0;
            max-width: 1100px;
            font-size: 0.95rem;
            line-height: 1.8;
            color: #e3e8ff;
        }

        .footer-tagline {
            margin: 16px 0 0;
            font-size: 1rem;
            font-weight: 700;
            color: #fff;
        }

        .footer-columns {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 24px 48px;
            margin-top: 28px;
        }

        .footer-title {
            margin: 0 0 8px;
            font-size: 0.95rem;
            font-weight: 800;
            color: #cfd8ff;
        }

        .footer-links {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .footer-links a {
            display: block;
            padding: 6px 0;
            font-size: 0.85rem;
            font-weight: 600;
            color: #eef2ff;
        }

        .footer-links a:hover {
            color: #fff;
            text-decoration: underline;
            text-underline-offset: 4px;
        }

        /*  Bottom: divider, copyright left, social icons right  */
        .footer-bottom {
            margin-top: 24px;
            padding: 20px 0 24px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.25);
            font-size: 0.9rem;
            color: #e3e8ff;
        }

        .footer-social {
            display: flex;
            gap: 10px;
        }

        .footer-social a {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.15);
            color: #fff;
            font-size: 1rem;
            transition: all 0.2s;
        }

.footer-social a:hover {
    background: #fff;
    color: var(--primary-dark);
}




 </style>
     @stack('meta')
    @stack('styles')
</head>
</head>

<body @yield('body_attributes')>

    <!-- HEADER -->
    <header class="site-header">
        <div class="site-container">


            <a class="site-brand" href="#" aria-label="CampusPath home">
                <span class="site-brand-icon"><i class="fas fa-graduation-cap"></i></span>
                <span class="site-brand-name">CampusPath</span>
            </a>

            <!-- Search and userIcon -->
            <div class="site-actions">
                <form class="site-search" action="#" method="get" role="search">
                    <i class="fas fa-search" aria-hidden="true"></i>
                    <input type="search" name="q" placeholder="Search colleges, courses, exams"
                        aria-label="Search colleges, courses or exams">
                </form>
                <a class="site-user" href="#" aria-label="My account"><i class="fas fa-user"></i></a>
            </div>

        </div>
    </header>


   <!-- Main Content -->
<main>
    @yield('content')
</main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="footer-container">

            <a class="footer-brand" href="#" aria-label="CampusPath home">
                <span class="site-brand-icon"><i class="fas fa-graduation-cap"></i></span>
                <span class="footer-brand-name">CampusPath</span>
            </a>
            <p class="footer-about">
                CampusPath helps students find the right college. Search by course, city or exam,
                compare fees and facilities side by side, and shortlist your favourites in one place
                before you apply.
            </p>
            <p class="footer-tagline">Explore more. Choose smarter.</p>

            <div class="footer-columns">

                <div>
                    <h3 class="footer-title">Company</h3>
                    <ul class="footer-links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Students</a></li>
                        <li><a href="#">Colleges</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="footer-title">Resources</h3>
                    <ul class="footer-links">
                        <li><a href="#">Compare colleges</a></li>
                        <li><a href="#">Register your institute</a></li>
                        <li><a href="#">How it works</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="footer-title">Legal</h3>
                    <ul class="footer-links">
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms &amp; conditions</a></li>
                    </ul>
                </div>

            </div>

            <div class="footer-bottom">
                <span>&copy; 2026 CampusPath &nbsp;|&nbsp; All rights reserved.</span>
                <div class="footer-social">
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                </div>
            </div>

    </div>
</footer>
    @stack('scripts')
</body>
</html>