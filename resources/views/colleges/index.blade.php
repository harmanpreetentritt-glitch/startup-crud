
@extends('collegeListLayout.layout')

@section('title', 'CampusPath - Top Colleges in India')

@push('meta')
    <meta name="csrf-token" content="{{ csrf_token() }}">
@endpush

@push('styles')
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    @vite(['resources/css/college.css'])
@endpush

@push('scripts')
    @vite(['resources/js/college.js'])
@endpush

{{-- Listing page header --}}
@section('page_header')
<header class="site-header">
    <div class="container">
        <div class="mainnav">

            <button
                type="button"
                class="mobile-filter-toggle"
                id="mobileFilterToggle"
                aria-label="Open filters"
                style="display: none;">
                ☰
            </button>

            <a href="{{ url('/colleges') }}" class="logo">
                Campus<span>Path</span>
            </a>

            <ul class="menu">
                <li class="colleges-menu-item">
                    <a href="{{ url('/colleges') }}"
                       style="color: #fff; font-weight: 600;"
                       aria-haspopup="true">
                        Colleges <b class="chev"></b>
                    </a>
                    @include('colleges.partials.popular-colleges-menu')
                </li>

                <li class="courses-menu-item">
                    <a href="{{ url('/courses') }}"
                       style="color: #d1d5db;"
                       aria-haspopup="true">
                        Courses <b class="chev"></b>
                    </a>
                    @include('colleges.partials.popular-courses-menu')
                </li>

                <li class="exams-menu-item">
                    <a href="{{ url('/colleges#filter-box-exam') }}"
                       style="color: #d1d5db;"
                       aria-haspopup="true">
                        Exams <b class="chev"></b>
                    </a>
                    @include('colleges.partials.popular-exams-menu')
                </li>

                <li class="careers-menu-item">
                    <button type="button"
                            class="careers-menu-trigger"
                            aria-haspopup="true">
                        Careers <b class="chev"></b>
                    </button>
                    @include('colleges.partials.popular-careers-menu')
                </li>

                <li class="icon">
                    <a href="#"
                       id="openSearch"
                       title="Search"
                       aria-label="Search">
                        <svg width="30" height="30"
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="#fff"
                             stroke-width="2"
                             stroke-linecap="round">
                            <circle cx="10.5" cy="10.5" r="6.5" />
                            <path d="M15.5 15.5L21 21" />
                        </svg>
                    </a>
                </li>

                <li class="account-icon">
                    <a href="{{ route('auth.login') }}"
                       title="Log in"
                       aria-label="Log in"
                       style="text-decoration: none; color: #fff;">
                        <svg width="28" height="28"
                             viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor"
                             stroke-width="1.8"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             aria-hidden="true">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21a8 8 0 0 1 16 0" />
                        </svg>
                    </a>
                </li>
            </ul>

        </div>
    </div>
</header>
@endsection

@section('content')

<!-- <main class="container">

    <div class="layout"></div>

    <div class="layout"> -->
      <main class="container">

    <div class="layout">

        <aside class="filters" id="filters"></aside>

        <section class="results">

            <div class="results-toolbar">

                <div class="toggle">
                    <label>
                        <input type="radio" name="mode" value="all" checked>
                        <i></i>All Colleges
                    </label>

                    <label>
                        <input type="radio" name="mode" value="direct">
                        <i></i>Direct Admission
                    </label>
                </div>

                <div class="toolbar-search">
                    <svg width="16" height="16"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         stroke-width="2">
                        <circle cx="10.5" cy="10.5" r="6.5" />
                        <path d="M15.5 15.5L21 21" />
                    </svg>

                    <input
                        type="search"
                        id="quickSearchInput"
                        placeholder="Quick search by name or city...">
                </div>

            </div>

            <div class="chips" id="chips"></div>

            <h2 class="count" id="count"></h2>

            <a class="add-college-link" href="{{ url('/colleges/create') }}">
                + Add a college
            </a>

            <div id="list"></div>

        </section>

    </div>

</main>

{{-- Search panel --}}
<div class="sp" id="searchPanel" hidden>
    <div class="sp-box">

        <div class="sp-top">
            <input
                type="search"
                id="spInput"
                placeholder="Search colleges, courses, cities..."
                autocomplete="off">

            <button
                type="button"
                class="sp-close"
                id="spClose"
                aria-label="Close">
                ✕
            </button>
        </div>

        <div class="sp-results" id="spResults"></div>

    </div>
</div>

{{-- Back to top button --}}
<button type="button" id="toTop" class="totop" aria-label="Back to top">
    <span>⌃⌃</span>Top
</button>

@endsection

{{-- Listing page footer --}}
@section('page_footer')
<footer class="site-footer">
    <div class="container">

        <div class="foot-grid">

            <div class="foot-brand">
                <a href="{{ url('/colleges') }}" class="logo">
                    Campus<span>Path</span>
                </a>

                <p>
                    Find colleges, compare fees, check rankings and get admission guidance in one place.
                </p>
            </div>

            <div>
                <h4>Top Streams</h4>
                <ul>
                    <li><a href="#">Engineering Colleges</a></li>
                    <li><a href="#">Management Colleges</a></li>
                    <li><a href="#">Medical Colleges</a></li>
                    <li><a href="#">Design Colleges</a></li>
                    <li><a href="#">Hotel Management Colleges</a></li>
                </ul>
            </div>

            <div>
                <h4>System</h4>
                <ul>
                    <li><a href="{{ url('/logout') }}">Logout</a></li>
                </ul>
            </div>

        </div>

        <div class="foot-bottom">
            <span>© 2026 CampusPath. All rights reserved.</span>
            <span>Sample data for demonstration only.</span>
        </div>

    </div>
</footer>
@endsection
