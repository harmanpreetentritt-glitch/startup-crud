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
      <div class="topbar">
        <a href="mailto:hello@campuspath.com" class="mail">✈ hello@campuspath.com</a>
        <div class="socials"><span>We're on your favourite socials!</span>
          <i class="s fb">f</i><i class="s ig">◎</i><i class="s in">in</i><i class="s x">𝕏</i><i class="s yt">▶</i>
        </div>
      </div>

      <div class="mainnav">
        <a href="{{ url('/colleges') }}" class="logo">Campus<span>Path</span></a>
        <ul class="menu">
          <li><a href="{{ url('/colleges') }}" style="color: #fff; font-weight: 600;">Colleges</a> <b class="chev"></b></li>
          <li><a href="{{ url('/courses') }}" style="color: #d1d5db;">Courses</a> <b class="chev"></b></li>
          <li><a href="{{ url('/students') }}" style="color: #d1d5db;">Students</a> <b class="chev"></b></li>
          <li><a href="{{ url('/employees') }}" style="color: #d1d5db;">Employees</a> <b class="chev"></b></li>

          <li class="icon">
            <a href="{{ route('dashboard') }}" title="Dashboard" aria-label="Dashboard">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"
                stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </a>
          </li>

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

      <div class="crumb"><a href="{{ url('/dashboard') }}">Dashboard</a> / <b>Colleges in India 2026</b></div>
    </div>
  </header>

  <!-- MAIN -->
  <main class="container">
    <section class="intro">
      <div class="intro-header-row">
        <div>
          <h1>Top Colleges in India 2026</h1>
          <div class="author">
            <div class="avatar">👤<span class="tick">✓</span></div>
            <div>Written By <a href="#">CampusPath Academic Council</a><br><small>Updated on - Sep 30, 2026</small></div>
          </div>
        </div>

        <button type="button" class="btn-add-college" id="openAddModalBtn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add College
        </button>
      </div>

      <p class="intro-text clamp" id="introText">India has developed a significant number of premier higher education
        institutions over time. Explore, manage, and filter registered universities and colleges across India.
        You can add new college profiles, edit details, or manage listings in real time.</p>
      <a href="#" class="readmore" id="readMore">Read More</a>
    </section>

    <div class="layout">
      <aside class="filters" id="filters">
        <!-- Dynamic filters populated by JS -->
      </aside>

      <section class="results">
        <div class="results-toolbar">
          <div class="toggle">
            <label><input type="radio" name="mode" value="all" checked><i></i>All Colleges</label>
            <label><input type="radio" name="mode" value="public"><i></i>Public</label>
            <label><input type="radio" name="mode" value="private"><i></i>Private</label>
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
        <h2 class="count" id="count">Loading colleges...</h2>
        <div id="list">
          <div class="loading-state">
            <div class="spinner"></div>
            <p>Loading colleges from database...</p>
          </div>
        </div>
      </section>
    </div>
  </main>

  <!-- ADD / EDIT COLLEGE MODAL -->
  <div class="modal-backdrop" id="collegeModalBackdrop" hidden>
    <div class="modal-dialog">
      <div class="modal-header">
        <h2 id="modalTitle">Add New College</h2>
        <button type="button" class="modal-close" id="closeModalBtn" aria-label="Close">&times;</button>
      </div>

      <form id="collegeForm" novalidate>
        <div class="modal-body">
          <div class="form-alert" id="formErrorAlert" hidden></div>
          <input type="hidden" id="collegeId" name="id">

          <!-- Name -->
          <div class="form-group">
            <label for="collegeName">College Name <span class="req">*</span></label>
            <input type="text" id="collegeName" name="name" placeholder="e.g. Indian Institute of Technology Bombay" required>
            <span class="field-error" id="nameError"></span>
          </div>

          <!-- City & State -->
          <div class="form-row">
            <div class="form-group col-6">
              <label for="collegeCity">City <span class="req">*</span></label>
              <input type="text" id="collegeCity" name="city" placeholder="e.g. Mumbai" required>
              <span class="field-error" id="cityError"></span>
            </div>

            <div class="form-group col-6">
              <label for="collegeState">State <span class="req">*</span></label>
              <input type="text" id="collegeState" name="state" placeholder="e.g. Maharashtra" required>
              <span class="field-error" id="stateError"></span>
            </div>
          </div>

          <!-- Type & Established Year -->
          <div class="form-row">
            <div class="form-group col-6">
              <label for="collegeType">Institute Type</label>
              <select id="collegeType" name="type">
                <option value="">Select Type</option>
                <option value="Public">Public / Government</option>
                <option value="Private">Private</option>
                <option value="Autonomous">Autonomous</option>
                <option value="Deemed University">Deemed University</option>
                <option value="Institute of National Importance">Institute of National Importance</option>
              </select>
              <span class="field-error" id="typeError"></span>
            </div>

            <div class="form-group col-6">
              <label for="collegeEstablished">Established Year</label>
              <input type="number" id="collegeEstablished" name="established_year" placeholder="e.g. 1958" min="1800" max="2099">
              <span class="field-error" id="establishedYearError"></span>
            </div>
          </div>

          <!-- Website & Logo -->
          <div class="form-row">
            <div class="form-group col-6">
              <label for="collegeWebsite">Website URL</label>
              <input type="url" id="collegeWebsite" name="website" placeholder="https://www.iitb.ac.in">
              <span class="field-error" id="websiteError"></span>
            </div>

            <div class="form-group col-6">
              <label for="collegeLogo">Logo URL</label>
              <input type="url" id="collegeLogo" name="logo" placeholder="https://example.com/logo.png">
              <span class="field-error" id="logoError"></span>
            </div>
          </div>

          <!-- Description -->
          <div class="form-group">
            <label for="collegeDescription">Description</label>
            <textarea id="collegeDescription" name="description" rows="3" placeholder="Brief overview, academic achievements, campus highlights..."></textarea>
            <span class="field-error" id="descriptionError"></span>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="cancelModalBtn">Cancel</button>
          <button type="submit" class="btn btn-primary" id="saveCollegeBtn">
            <span class="btn-spinner" id="btnSpinner" hidden></span>
            <span id="btnText">Save College</span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- DELETE CONFIRMATION MODAL -->
  <div class="modal-backdrop" id="deleteModalBackdrop" hidden>
    <div class="modal-dialog modal-dialog-sm">
      <div class="modal-header">
        <h2>Confirm Deletion</h2>
        <button type="button" class="modal-close" id="closeDeleteModalBtn" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to delete <strong id="deleteCollegeName">this college</strong>?</p>
        <p class="modal-subtext">This action cannot be undone and will permanently remove the record from the database.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="cancelDeleteBtn">Cancel</button>
        <button type="button" class="btn btn-danger" id="confirmDeleteBtn">Delete College</button>
      </div>
    </div>
  </div>

  <!-- TOAST CONTAINER -->
  <div class="toast-container" id="toastContainer"></div>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="foot-grid">
        <div class="foot-brand">
          <a href="{{ url('/colleges') }}" class="logo">Campus<span>Path</span></a>
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
            <li><a href="{{ url('/dashboard') }}">Dashboard</a></li>
            <li><a href="{{ url('/logout') }}">Logout</a></li>
          </ul>
        </div>
      </div>

      <div class="foot-bottom">
        <span>© 2026 CampusPath. All rights reserved.</span>
        <span>Colleges CRUD &amp; Management Module</span>
      </div>
    </div>
  </footer>

  <!-- SEARCH PANEL -->
  <div class="sp" id="searchPanel" hidden>
    <div class="sp-box">
      <div class="sp-top">
        <input type="search" id="spInput" placeholder="Search colleges by name, city, state..." autocomplete="off">
        <button class="sp-close" id="spClose" aria-label="Close">✕</button>
      </div>
      <div class="sp-results" id="spResults"></div>
    </div>
  </div>

  <!-- TOP BUTTON -->
  <button id="toTop" class="totop" aria-label="Back to top"><span>⌃</span>Top</button>

</body>

</html>