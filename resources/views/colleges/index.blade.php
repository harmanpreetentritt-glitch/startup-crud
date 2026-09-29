<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Top Colleges in India 2026</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  @vite(['resources/css/college.css', 'resources/js/college.js'])
</head>

<body>

  <!-- HEADER -->
  <header class="site-header">
    <div class="container">
      <div class="topbar">
        <a href="mailto:hello@yoursite.com" class="mail">✈ hello@yoursite.com</a>
        <div class="socials"><span>We're on your favourite socials!</span>
          <i class="s fb">f</i><i class="s ig">◎</i><i class="s in">in</i><i class="s x">𝕏</i><i class="s yt">▶</i>
        </div>
      </div>

      <div class="mainnav">
        <a href="/" class="logo">Campus<span>Path</span></a>
        <ul class="menu">
          <li>Colleges <b class="chev"></b></li>
          <li>Exams <b class="chev"></b></li>
          <li>Courses <b class="chev"></b></li>
          <li>Careers <b class="chev"></b></li>
          <li>Latest Updates <b class="chev"></b></li>
          <li>More <b class="chev"></b></li>

          <li class="icon">
            <a href="{{ route('auth.login') }}" title="Account" aria-label="Account">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3.2" />
                <path d="M5.8 18.5c1.4-2.3 3.7-3.6 6.2-3.6s4.8 1.3 6.2 3.6" />
              </svg>
            </a>
          </li>

          <li class="icon">
            <a href="#" id="openSearch" title="Search" aria-label="Search">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
                stroke-linecap="round">
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="M15.5 15.5L21 21" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div class="crumb"><a href="/">Home</a> / <b>Colleges in India 2026</b></div>
    </div>
  </header>

  <!-- MAIN -->
  <main class="container">
    <section class="intro">
      <h1>Top Colleges in India 2026</h1>
      <div class="author">
        <div class="avatar">👤<span class="tick">✓</span></div>
        <div>Written By <a href="#">Amit Singh - Content Writer</a><br><small>Updated on - Sep 28, 2026 01:17 AM
            IST</small></div>
      </div>
      <p class="intro-text clamp" id="introText">India has developed a significant number of higher education
        institutions over time to meet the demand of the expanding youth population by providing quality education, so
        we have prepared a list of top colleges in India 2026. These colleges have established themselves not only
        nationally but also internationally. India has long been a centre for education worldwide. Students from over
        the world come here to study.</p>
      <a href="#" class="readmore" id="readMore">Read More</a>
    </section>

    <div class="layout">
      <aside class="filters" id="filters"></aside>

      <section class="results">
        <div class="toggle">
          <label><input type="radio" name="mode" value="all" checked><i></i>All Colleges</label>
          <label><input type="radio" name="mode" value="direct"><i></i>Direct Admission</label>
        </div>
        <div class="chips" id="chips"></div>
        <h2 class="count" id="count"></h2>
        <div id="list"></div>
      </section>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="foot-grid">
        <div class="foot-brand">
          <a href="/" class="logo">Campus<span>Path</span></a>
          <p>Find colleges, compare fees, check rankings and get admission guidance in one place.</p>
          <div class="socials">
            <i class="s fb">f</i><i class="s ig">◎</i><i class="s in">in</i><i class="s x">𝕏</i><i class="s yt">▶</i>
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
          <h4>Top Exams</h4>
          <ul>
            <li><a href="#">JEE Main</a></li>
            <li><a href="#">NEET UG</a></li>
            <li><a href="#">CAT</a></li>
            <li><a href="#">CUET</a></li>
            <li><a href="#">NID DAT</a></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
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
      <div class="sp-tabs">
        <button class="on" data-tab="all">All</button>
        <button data-tab="colleges">Colleges</button>
        <button data-tab="courses">Courses</button>
      </div>
      <div class="sp-results" id="spResults"></div>
    </div>
  </div>

  <!--TOP BUTTON-->
  <button id="toTop" class="totop" aria-label="Back to top"><span>⌃⌃</span>Top</button>

</body>

</html>