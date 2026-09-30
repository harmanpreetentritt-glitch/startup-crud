<div class="courses-mega-menu exams-mega-menu" role="region" aria-label="Exams by stream">
    <nav class="exam-menu-categories" aria-label="Exam streams">
        @foreach([
            'Engineering', 'Management', 'Commerce & Banking', 'Medical', 'Sciences',
            'Hotel Management', 'Information Technology', 'Arts & Humanities', 'Mass Communication',
            'Agriculture', 'Design', 'Law', 'Pharmacy', 'Dental', 'Performing Arts', 'Education',
        ] as $stream)
            <a href="{{ url('/colleges#filter-box-stream') }}">{{ $stream }}</a>
        @endforeach
    </nav>

    <div class="exam-menu-panels">
        <div class="exam-menu-column">
            <section class="exam-menu-group">
                <h3><a href="{{ url('/colleges#filter-box-exam') }}">JEE Mains</a></h3>
                @foreach(['Eligibility', 'Syllabus', 'Exam Pattern', 'How to Prepare', 'Previous Year Question Paper'] as $topic)
                    <a href="{{ url('/colleges#filter-box-exam') }}">{{ $topic }}</a>
                @endforeach
            </section>
            <section class="exam-menu-group">
                <h3><a href="{{ url('/colleges#filter-box-exam') }}">GATE</a></h3>
                @foreach(['Eligibility', 'Syllabus', 'Exam Pattern', 'How to Prepare', 'Previous Year Question Paper'] as $topic)
                    <a href="{{ url('/colleges#filter-box-exam') }}">{{ $topic }}</a>
                @endforeach
            </section>
        </div>

        <div class="exam-menu-column">
            <section class="exam-menu-group">
                <h3><a href="{{ url('/colleges#filter-box-exam') }}">JEE Advance</a></h3>
                @foreach(['Eligibility', 'Syllabus', 'Exam Pattern', 'How to Prepare', 'Previous Year Question Paper'] as $topic)
                    <a href="{{ url('/colleges#filter-box-exam') }}">{{ $topic }}</a>
                @endforeach
            </section>
            <section class="exam-menu-group">
                <h3><a href="{{ url('/colleges#filter-box-exam') }}">WBJEE</a></h3>
                @foreach(['Eligibility', 'Syllabus', 'Exam Pattern', 'How to Prepare', 'Previous Year Question Paper'] as $topic)
                    <a href="{{ url('/colleges#filter-box-exam') }}">{{ $topic }}</a>
                @endforeach
            </section>
            <a class="exam-menu-view-all" href="{{ url('/colleges#filter-box-exam') }}">View all</a>
        </div>

        <div class="exam-menu-column">
            <section class="exam-menu-group">
                <h3><a href="{{ url('/colleges#filter-box-exam') }}">BITSAT</a></h3>
                @foreach(['Eligibility', 'Syllabus', 'Exam Pattern', 'How to Prepare', 'Previous Year Question Paper'] as $topic)
                    <a href="{{ url('/colleges#filter-box-exam') }}">{{ $topic }}</a>
                @endforeach
            </section>
        </div>
    </div>
</div>