<div class="courses-mega-menu" role="region" aria-label="Popular courses">
    <h2>Popular Courses</h2>
    <div class="popular-course-grid">
        @foreach([
            'B.Tech',
            'B.Arch',
            'B.Tech in Mechanical Engineering',
            'B.Sc Radiotherapy',
            'B.Sc in Medical Laboratory Technology',
            'MBA',
            'Auto CAD',
            'B.Des',
            'B.Ed',
            'B.Sc Agriculture',
            'MBA in Media Management',
            'MBA in International Business',
            'MBA in Operations Management',
            'B.Sc in Statistics',
            'B.Sc in Home Science',
            'Bachelor of Management Studies',
            'Bachelor of Mass Communication',
            'Bachelor of Computer Application',
            'B.Pharma',
            'Bachelor of Dental Surgery (BDS)',
        ] as $course)
            <a href="{{ url('/courses') }}">{{ $course }}</a>
        @endforeach
    </div>
    <a class="popular-courses-all" href="{{ url('/courses') }}">View All Courses</a>
</div>