<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>CampusPath - Top Colleges in India</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  @vite(['resources/css/college.css', 'resources/js/college.js'])
</head>

<body>

  <!-- HEADER -->
  <header class="site-header">
    <div class="container">

      <div class="mainnav">
        <a href="{{ url('/colleges') }}" class="logo">Campus<span>Path</span></a>
        <ul class="menu">
          <li><a href="{{ url('/colleges') }}" style="color: #fff; font-weight: 600;">Colleges</a> <b class="chev"></b></li>
          <li><a href="{{ url('/courses') }}" style="color: #d1d5db;">Courses</a> <b class="chev"></b></li>
          <li><a href="{{ url('/students') }}" style="color: #d1d5db;">Students</a> <b class="chev"></b></li>
          <li><a href="{{ url('/employees') }}" style="color: #d1d5db;">Employees</a> <b class="chev"></b></li>

          <li class="icon">
            <a href="#" id="openSearch" title="Search" aria-label="Search">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
                stroke-linecap="round">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="M15.5 15.5L21 21" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div class="crumb"><b>Colleges in India 2026</b></div>
    </div>
  </header>

  <!-- MAIN -->
  <main class="container">

    <div class="layout">
      <aside class="filters" id="filters"></aside>

      <section class="results">
        <div class="results-toolbar">
          <div class="toggle">
            <label><input type="radio" name="mode" value="all" checked><i></i>All Colleges</label>
            <label><input type="radio" name="mode" value="direct"><i></i>Direct Admission</label>
          </div>

          <div class="toolbar-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="M15.5 15.5L21 21" />
            </svg>
            <input type="search" id="quickSearchInput" placeholder="Quick search by name or city...">
          </div>
        </div>

        <div class="chips" id="chips"></div>
        <h2 class="count" id="count"></h2>
        <a class="add-college-link" href="{{ url('/colleges/create') }}">+ Add a college</a>
        <div id="list"></div>
      </section>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="foot-grid">
        <div class="foot-brand">
          <a href="{{ url('/colleges') }}" class="logo">Campus<span>Path</span></a>
          <p>Find colleges, compare fees, check rankings and get admission guidance in one place.</p>
          <div class="socials">
            <i class="s fb">f</i><i class="s ig">â—Ž</i><i class="s in">in</i><i class="s x">ð•</i><i class="s yt">â–¶</i>
          </div>
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
          <h4>Quick Modules</h4>
          <ul>
            <li><a href="{{ url('/courses') }}">Course Management</a></li>
            <li><a href="{{ url('/students') }}">Student Records</a></li>
            <li><a href="{{ url('/employees') }}">Employee Directory</a></li>
            <li><a href="{{ url('/products') }}">Store &amp; Products</a></li>
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

  <!-- SEARCH PANEL -->
  <div class="sp" id="searchPanel" hidden>
    <div class="sp-box">
      <div class="sp-top">
        <input type="search" id="spInput" placeholder="Search colleges, courses, cities..." autocomplete="off">
        <button class="sp-close" id="spClose" aria-label="Close">✕</button>
      </div>
      <div class="sp-results" id="spResults"></div>
    </div>
  </div>

  <!--TOP BUTTON-->
  <button id="toTop" class="totop" aria-label="Back to top"><span>⌃⌃</span>Top</button>

</body>

</html>

