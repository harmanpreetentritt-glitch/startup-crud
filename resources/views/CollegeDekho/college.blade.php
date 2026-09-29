<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>CampusPath: Find colleges, exams and courses in India</title>
    <link rel="stylesheet" href="style.css">
    @vite(['resources/css/college.css'])
</head>

<body>
    <header>
        <div class="nav"><a href="#/" class="logo">Campus<span>Path</span></a>
            <ul>
                <li><a href="#/colleges" data-r="colleges">Colleges</a></li>
                <li><a href="#/exams" data-r="exams">Exams</a></li>
                <li><a href="#/shortlist" data-r="shortlist">My shortlist <b id="sc"></b></a></li>
            </ul>
        </div>
    </header>
    <div id="app"></div>
    <footer>© 2026 CampusPath. Sample data for demonstration only; verify fees and dates on official college websites.
    </footer>
    @vite(['resources/js/college.js']);
</body>

</html>