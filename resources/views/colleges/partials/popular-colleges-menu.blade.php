<div class="courses-mega-menu exams-mega-menu colleges-mega-menu" role="region" aria-label="Browse colleges">
    <nav class="exam-menu-categories" aria-label="College categories">
        @foreach([
            'Engineering', 'Management', 'Commerce & Banking', 'Medical', 'Sciences',
            'Hotel Management', 'Information Technology', 'Arts & Humanities', 'Mass Communication',
            'Nursing', 'Agriculture', 'Design', 'Law', 'Pharmacy', 'Para Medical', 'Dental',
            'Performing Arts', 'Education',
        ] as $stream)
            <a href="{{ url('/colleges#filter-box-stream') }}">{{ $stream }}</a>
        @endforeach
    </nav>

    <div class="exam-menu-panels">
        <div class="exam-menu-column">
            <section class="exam-menu-group">
                <h3><a href="{{ url('/colleges#filter-box-degree') }}">Colleges By Degrees</a></h3>
                @foreach(['B.Tech', 'M.Tech', 'B.Arch', 'B.Tech + M.Tech', 'Diploma'] as $degree)
                    <a href="{{ url('/colleges#filter-box-degree') }}">{{ $degree }} colleges in India</a>
                @endforeach
                <a class="exam-menu-view-all" href="{{ url('/colleges#filter-box-degree') }}">View All</a>
            </section>
            <section class="exam-menu-group">
                <h3><a href="{{ url('/colleges#filter-box-state') }}">Colleges By Location</a></h3>
                @foreach(['Maharashtra', 'Tamil Nadu', 'Uttar Pradesh', 'Karnataka', 'Rajasthan'] as $state)
                    <a href="{{ url('/colleges#filter-box-state') }}">Engineering Colleges in {{ $state }}</a>
                @endforeach
                <a class="exam-menu-view-all" href="{{ url('/colleges#filter-box-state') }}">View All</a>
            </section>
        </div>

        <div class="exam-menu-column">
            <section class="exam-menu-group">
                <h3>Popular Colleges</h3>
                @foreach($menuColleges->take(14) as $menuCollege)
                    <a href="{{ url('/colleges/' . $menuCollege->id) }}">{{ $menuCollege->name }}</a>
                @endforeach
            </section>
        </div>

        <div class="exam-menu-column">
            <section class="exam-menu-group">
                <h3>Top Colleges</h3>
                @foreach($menuColleges->sortBy('established_year')->take(9) as $menuCollege)
                    <a href="{{ url('/colleges/' . $menuCollege->id) }}">{{ $menuCollege->name }}</a>
                @endforeach
                <a class="exam-menu-view-all" href="{{ url('/colleges') }}">View All</a>
            </section>
        </div>
    </div>
</div>