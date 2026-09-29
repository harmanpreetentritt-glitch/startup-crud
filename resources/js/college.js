// DATA (replace later with database / API)
const colleges = [
    {
        name: 'Chandigarh University', stream: 'Engineering', direct: true, rating: 4.4, reviews: 369,
        city: 'Mohali', state: 'Punjab', type: 'Private', approval: 'UGC', approvalMore: 11,
        degrees: ['B.Tech. (Bachelor of Technology)', 'M.B.A. (Master of Business Administration)', 'B.Sc. (Bachelor of Science)'],
        mode: ['Regular'], exams: ['PSEB 12th', 'JEE Main', 'CUET'], examMore: 4,
        fee: '52,000 - 3,97,000', package: '1.7 Crore', nirf: 19, students: 282222, courses: 158, cta: 'Apply Now',
        img: '',
        specials: [
            { t: 'Region', d: 'Strategic Location Advantage - Proximity to Chandigarh/Mohali urban hub - Access to IT and entrepreneurial hubs.' },
            { t: 'Top Industries', d: 'Diverse Industry Recruitment - IT (Microsoft, Google, Amazon) - Core and consulting recruiters visit every year.' },
            { t: 'Hostel', d: 'Separate on-campus hostels for boys and girls with modern facilities.' }]
    },
    {
        name: 'GNA University', stream: 'Management', direct: true, rating: 4.1, reviews: 52,
        city: 'Phagwara', state: 'Punjab', type: 'Private', approval: 'UGC', approvalMore: 3,
        degrees: ['B.Com. (Bachelor of Commerce)', 'M.B.A. (Master of Business Administration)', 'Diploma'],
        mode: ['Regular'], exams: ['CUET', 'CAT'], examMore: 2,
        fee: '60,000 - 2,80,000', package: '12 LPA', nirf: 0, students: 21500, courses: 64, cta: 'Get Free Counselling', img: '',
        specials: [{ t: 'Campus', d: 'Green residential campus with sports facilities and modern labs.' }]
    },
    {
        name: 'Institute of Hotel Management (IHM), Mumbai', stream: 'Hotel Management', direct: false, rating: 4.0, reviews: 4,
        city: 'Mumbai', state: 'Maharashtra', type: 'Private', approval: 'NCHMCT', approvalMore: 1,
        degrees: ['Diploma', 'B.Sc. (Bachelor of Science)'],
        mode: ['Regular'], exams: ['NCHMCT JEE'], examMore: 0,
        fee: '20,000 - 3,18,000', package: '', nirf: 0, students: 1987, courses: 13, cta: 'Download Brochure', img: '',
        specials: [{ t: 'Hostel', d: 'Merit-based residential facilities with separate hostels for boys and girls.' }]
    },
    {
        name: 'IIM Ahmedabad', stream: 'Management', direct: false, rating: 4.8, reviews: 210,
        city: 'Ahmedabad', state: 'Gujarat', type: 'Public', approval: 'AICTE', approvalMore: 0,
        degrees: ['M.B.A. (Master of Business Administration)'],
        mode: ['Regular', 'Part Time'], exams: ['CAT'], examMore: 0,
        fee: '25,00,000', package: '1.1 Crore', nirf: 1, students: 44000, courses: 9, cta: 'Apply Now', img: '',
        specials: [{ t: 'Rankings', d: 'Consistently ranked #1 in the NIRF management category.' }]
    },
    {
        name: 'Lovely Professional University', stream: 'Engineering', direct: true, rating: 4.3, reviews: 512,
        city: 'Phagwara', state: 'Punjab', type: 'Private', approval: 'UGC', approvalMore: 8,
        degrees: ['B.Tech. (Bachelor of Technology)', 'B.Com. (Bachelor of Commerce)', 'M.B.A. (Master of Business Administration)'],
        mode: ['Regular', 'Online'], exams: ['LPUNEST', 'JEE Main'], examMore: 2,
        fee: '1,20,000 - 8,50,000', package: '64 LPA', nirf: 35, students: 190450, courses: 210, cta: 'Apply Now', img: '',
        specials: [
            { t: 'Campus', d: 'Large residential campus with sports complexes, labs and a student community from many states.' },
            { t: 'Placements', d: 'Recruiters from IT, core and consulting sectors visit the campus every year.' }]
    },
    {
        name: 'IIT Bombay', stream: 'Engineering', direct: false, rating: 4.6, reviews: 430,
        city: 'Mumbai', state: 'Maharashtra', type: 'Public', approval: 'UGC', approvalMore: 2,
        degrees: ['B.Tech. (Bachelor of Technology)', 'M.Tech. (Master of Technology)'],
        mode: ['Regular'], exams: ['JEE Advanced', 'GATE'], examMore: 0,
        fee: '8,00,000 - 10,00,000', package: '1.7 Crore', nirf: 3, students: 152300, courses: 45, cta: 'Download Brochure', img: '',
        specials: [{ t: 'Rankings', d: 'Among the top-ranked engineering institutes in India in NIRF.' }]
    },
    {
        name: 'NIT Tiruchirappalli', stream: 'Engineering', direct: false, rating: 4.4, reviews: 260,
        city: 'Tiruchirappalli', state: 'Tamil Nadu', type: 'Public', approval: 'UGC', approvalMore: 1,
        degrees: ['B.Tech. (Bachelor of Technology)', 'M.Tech. (Master of Technology)'],
        mode: ['Regular'], exams: ['JEE Main', 'GATE'], examMore: 0,
        fee: '5,00,000 - 6,00,000', package: '54 LPA', nirf: 9, students: 98100, courses: 38, cta: 'Apply Now', img: '',
        specials: [{ t: 'Hostel', d: 'On-campus hostels for boys and girls with mess and sports facilities.' }]
    },
    {
        name: 'Symbiosis Institute of Business Management', stream: 'Management', direct: true, rating: 4.3, reviews: 145,
        city: 'Pune', state: 'Maharashtra', type: 'Private', approval: 'AICTE', approvalMore: 2,
        degrees: ['M.B.A. (Master of Business Administration)'],
        mode: ['Regular'], exams: ['SNAP', 'CAT'], examMore: 1,
        fee: '22,00,000', package: '32 LPA', nirf: 22, students: 65400, courses: 12, cta: 'Get Free Counselling', img: '',
        specials: [{ t: 'Top Industries', d: 'Consulting, finance, FMCG and technology firms hire from the MBA batch.' }]
    },
    {
        name: 'AIIMS Delhi', stream: 'Medical', direct: false, rating: 4.9, reviews: 300,
        city: 'New Delhi', state: 'Delhi NCR', type: 'Public', approval: 'NMC', approvalMore: 0,
        degrees: ['MBBS', 'M.D.'],
        mode: ['Regular'], exams: ['NEET UG', 'NEET PG'], examMore: 0,
        fee: 'Under 10,000 per year', package: '', nirf: 1, students: 210000, courses: 30, cta: 'Download Brochure', img: '',
        specials: [{ t: 'Rankings', d: 'Ranked first among medical institutes in India in NIRF.' }]
    },
    {
        name: 'National Institute of Design', stream: 'Design', direct: false, rating: 4.5, reviews: 88,
        city: 'Ahmedabad', state: 'Gujarat', type: 'Public', approval: 'UGC', approvalMore: 0,
        degrees: ['B.Des.', 'M.Des.'],
        mode: ['Regular'], exams: ['NID DAT'], examMore: 0,
        fee: '9,00,000 - 12,00,000', package: '30 LPA', nirf: 1, students: 12800, courses: 14, cta: 'Apply Now', img: '',
        specials: [{ t: 'Studios', d: 'Studio-based learning across product, communication and textile design.' }]
    },
    {
        name: 'Shri Ram College of Commerce', stream: 'Commerce & Banking', direct: false, rating: 4.6, reviews: 340,
        city: 'New Delhi', state: 'Delhi NCR', type: 'Public', approval: 'UGC', approvalMore: 0,
        degrees: ['B.Com. (Bachelor of Commerce)', 'B.A. (Bachelor of Arts)'],
        mode: ['Regular'], exams: ['CUET'], examMore: 0,
        fee: '60,000 - 90,000', package: '18 LPA', nirf: 5, students: 88900, courses: 6, cta: 'Get Free Counselling', img: '',
        specials: [{ t: 'Placements', d: 'Banking, consulting and finance recruiters visit every year.' }]
    },
    {
        name: 'Manipal Academy of Higher Education', stream: 'Medical', direct: true, rating: 4.4, reviews: 275,
        city: 'Manipal', state: 'Karnataka', type: 'Private', approval: 'UGC', approvalMore: 6,
        degrees: ['MBBS', 'B.Tech. (Bachelor of Technology)', 'M.B.A. (Master of Business Administration)'],
        mode: ['Regular'], exams: ['NEET UG', 'MET'], examMore: 3,
        fee: '4,00,000 - 20,00,000', package: '45 LPA', nirf: 4, students: 132700, courses: 180, cta: 'Apply Now', img: '',
        specials: [{ t: 'Campus', d: 'A university town with hospitals, labs and research centres on site.' }]
    },
];

// Sidebar groups: radio = single choice, check = multi choice
const groups = [
    { key: 'stream', label: 'Stream', kind: 'radio', get: (c) => [c.stream] },
    { key: 'degree', label: 'Degree', kind: 'check', get: (c) => c.degrees },
    { key: 'state', label: 'State', kind: 'check', get: (c) => [c.state] },
    { key: 'city', label: 'City', kind: 'check', get: (c) => [c.city] },
    { key: 'mode', label: 'Study Mode', kind: 'check', get: (c) => c.mode },
    { key: 'type', label: 'Institute Type', kind: 'check', get: (c) => [c.type] },
    { key: 'exam', label: 'Exam', kind: 'check', get: (c) => c.exams },
];

//STATE
const state = { name: '', sel: {}, q: {}, closed: new Set(), mode: 'all', short: new Set(), fav: new Set(), slide: {} };
groups.forEach((g) => (state.sel[g.key] = new Set()));
const $ = (s) => document.querySelector(s);
const matches = (c) => (!state.name || c.name.toLowerCase().includes(state.name.toLowerCase())) &&
    (state.mode === 'all' || c.direct) &&
    groups.every((g) => !state.sel[g.key].size || g.get(c).some((v) => state.sel[g.key].has(v)));

//  SIDEBAR 
function optionsFor(g) {
    const m = {};
    colleges.forEach((c) => g.get(c).forEach((v) => (m[v] = (m[v] || 0) + 1)));
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
}
function drawFilters() {
    $('#filters').innerHTML = groups.map((g) => {
        const term = (state.q[g.key] || '').toLowerCase();
        const opts = optionsFor(g).filter(([v]) => v.toLowerCase().includes(term));
        return `<div class="fbox ${state.closed.has(g.key) ? 'closed' : ''}">
      <h3 data-toggle="${g.key}">${g.label} <b class="chev"></b></h3>
      <div class="fbody"><input type="search" placeholder="Search" data-q="${g.key}" value="${state.q[g.key] || ''}">
      <div class="opts">${opts.map(([v, n]) => `<label class="opt ${g.kind === 'radio' ? 'r' : 'c'}">
        <input type="${g.kind === 'radio' ? 'radio' : 'checkbox'}" data-g="${g.key}" value="${v}" ${state.sel[g.key].has(v) ? 'checked' : ''}><i></i>${v}<span>(${n})</span></label>`).join('')}
      </div></div></div>`;
    }).join('');
}
$('#filters').addEventListener('click', (e) => {
    const h = e.target.closest('[data-toggle]');
    if (h) { const k = h.dataset.toggle; state.closed.has(k) ? state.closed.delete(k) : state.closed.add(k); drawFilters(); return; }
    const i = e.target.closest('input[data-g]');
    if (!i) return;
    const g = groups.find((x) => x.key === i.dataset.g), set = state.sel[g.key];
    if (g.kind === 'radio') { const was = set.has(i.value); set.clear(); if (!was) set.add(i.value); }
    else i.checked ? set.add(i.value) : set.delete(i.value);
    drawFilters(); drawList();
});
$('#filters').addEventListener('input', (e) => {
    if (!e.target.dataset.q) return;
    const k = e.target.dataset.q, p = e.target.selectionStart;
    state.q[k] = e.target.value; drawFilters();
    const n = document.querySelector(`[data-q="${k}"]`); n.focus(); n.setSelectionRange(p, p);
});

// CARDS 
function card(c, i) {
    const idx = (state.slide[i] || 0) % c.specials.length, sp = c.specials[idx];
    return `<article class="card" data-i="${i}">
    <div class="card-head"><h3>${c.name}</h3><div class="icons"><button title="Share">➦</button>
      <button class="${state.fav.has(i) ? 'on' : ''}" data-fav title="Save">${state.fav.has(i) ? '♥' : '♡'}</button></div></div>
    <div class="card-body">
      <div class="cimg" ${c.img ? `style="background:url(${c.img}) center/cover"` : ''}>${c.img ? '' : c.city}</div>
      <div class="cinfo">
        <div class="meta"><span class="rate">${c.rating.toFixed(1)} ★</span><span class="rv">(${c.reviews} Reviews)</span>
          <span>◎ ${c.city}, ${c.state}</span><span>⚑ ${c.type}</span>
          <span>☆ ${c.approval} ${c.approvalMore ? `<span class="more">...+${c.approvalMore}</span>` : ''}</span></div>
        <div class="stats">
          <div class="stat"><b>₹ ${c.fee}</b><a class="lnk" href="#">🗎 Get Fee Details</a></div>
          ${c.package ? `<div class="stat"><b>${c.package}</b><small>Highest Package</small><a class="lnk" href="#">↗ Placement Trends</a></div>` : ''}
          ${c.nirf ? `<div class="stat"><b>#${c.nirf} NIRF</b><small>Ranking</small></div>` : ''}
          <div class="stat"><b>${c.exams[0]} ${c.examMore ? `<span class="more" style="font-weight:400">...+${c.examMore}</span>` : ''}</b><small>Exams</small></div>
        </div>
        <div class="special"><h4>${c.name} specialties</h4>
          <div class="sbox"><div class="sicon">◈</div>
            ${c.specials.length > 1 ? '<button class="arrow l" data-prev>‹</button><button class="arrow r" data-next>›</button>' : ''}
            <div class="stext"><b>${sp.t}</b> : ${sp.d}</div></div>
          ${c.specials.length > 1 ? `<div class="dots">${c.specials.map((_, d) => `<i class="${d === idx ? 'on' : ''}"></i>`).join('')}</div>` : ''}</div>
        <div class="short"><div class="avs"><u></u><u></u><u></u><u></u></div>Shortlisted by&nbsp;<b>${c.students}</b>+ students</div>
      </div>
    </div>
    <div class="card-foot"><nav><a href="#">Course and Fee (${c.courses})</a><a href="#">Admission</a><a href="#">Placement</a></nav>
      <div><button class="btn">${c.cta === 'Apply Now' ? 'Download Brochure' : c.cta === 'Download Brochure' ? 'Get Free Counselling' : 'Download Brochure'}</button>
      <button class="btn fill ${state.short.has(i) ? 'on' : ''}" data-short>${c.cta === 'Apply Now' ? 'Apply Now' : state.short.has(i) ? 'Shortlisted ✓' : 'Shortlist'}</button></div></div>
  </article>`;
}
function drawList() {
    const rows = colleges.map((c, i) => [c, i]).filter(([c]) => matches(c));
    $('#count').textContent = `Showing ${rows.length} Colleges in India`;
    $('#chips').innerHTML =
        (state.name ? `<button class="chip" data-x="name|${state.name}">Search: ${state.name} ✕</button>` : '') +
        groups.flatMap((g) => [...state.sel[g.key]].map((v) => `<button class="chip" data-x="${g.key}|${v}">${v} ✕</button>`)).join('');
    $('#list').innerHTML = rows.length ? rows.map(([c, i]) => card(c, i)).join('') : '<div class="empty">No colleges match these filters.</div>';
}
$('#list').addEventListener('click', (e) => {
    const el = e.target.closest('.card'); if (!el) return;
    const i = +el.dataset.i, n = colleges[i].specials.length, cur = state.slide[i] || 0;
    if (e.target.closest('[data-next]')) state.slide[i] = (cur + 1) % n;
    else if (e.target.closest('[data-prev]')) state.slide[i] = (cur - 1 + n) % n;
    else if (e.target.closest('[data-fav]')) state.fav.has(i) ? state.fav.delete(i) : state.fav.add(i);
    else if (e.target.closest('[data-short]')) state.short.has(i) ? state.short.delete(i) : state.short.add(i);
    else return;
    drawList();
});
$('#chips').addEventListener('click', (e) => {
    const b = e.target.closest('[data-x]'); if (!b) return;
    const [k, v] = b.dataset.x.split('|');
    if (k === 'name') state.name = ''; else state.sel[k].delete(v);
    drawFilters(); drawList();
});

// TOGGLE, READ MORE, TOP BUTTON
document.querySelectorAll('input[name=mode]').forEach((r) => (r.onchange = () => { state.mode = r.value; drawList(); }));
$('#readMore').onclick = (e) => {
    e.preventDefault(); const t = $('#introText'); t.classList.toggle('clamp');
    e.target.textContent = t.classList.contains('clamp') ? 'Read More' : 'Read Less';
};
const top = $('#toTop');
addEventListener('scroll', () => (top.style.display = scrollY > 400 ? 'flex' : 'none'));
top.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

//  SEARCH PANEL 
const sp = $('#searchPanel'), spInput = $('#spInput'), spRes = $('#spResults');
let spTab = 'all';
function courseList() {
    const m = {};
    colleges.forEach((c) => c.degrees.forEach((d) => (m[d] = (m[d] || 0) + 1)));
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
}
function drawSearch() {
    const q = spInput.value.trim().toLowerCase();
    const cols = colleges.map((c, i) => [c, i]).filter(([c]) => !q || (c.name + c.city + c.state + c.stream).toLowerCase().includes(q)).slice(0, 6);
    const crs = courseList().filter(([d]) => !q || d.toLowerCase().includes(q)).slice(0, 6);
    let html = '';
    if (spTab !== 'courses' && cols.length)
        html += `<div class="sp-h">${q ? 'Colleges' : 'Popular colleges'}</div>` + cols.map(([c, i]) =>
            `<div class="sp-item" data-college="${i}"><span>${c.name}</span><small>${c.city}, ${c.state}</small></div>`).join('');
    if (spTab !== 'colleges' && crs.length)
        html += `<div class="sp-h">${q ? 'Courses' : 'Popular courses'}</div>` + crs.map(([d, n]) =>
            `<div class="sp-item" data-course="${d}"><span>${d}</span><small>${n} colleges</small></div>`).join('');
    spRes.innerHTML = html || '<div class="sp-empty">No results found. Try another keyword.</div>';
}
function openSearch() { sp.hidden = false; spInput.value = ''; drawSearch(); spInput.focus(); document.body.style.overflow = 'hidden'; }
function closeSearch() { sp.hidden = true; document.body.style.overflow = ''; }
function showResults() { closeSearch(); drawFilters(); drawList(); $('#count').scrollIntoView({ behavior: 'smooth' }); }
function clearAll() { state.name = ''; groups.forEach((g) => state.sel[g.key].clear()); }

$('#openSearch').onclick = (e) => { e.preventDefault(); openSearch(); };
$('#spClose').onclick = closeSearch;
sp.addEventListener('click', (e) => { if (e.target === sp) closeSearch(); });
addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sp.hidden) closeSearch(); });
spInput.addEventListener('input', drawSearch);
spInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && spInput.value.trim()) { clearAll(); state.name = spInput.value.trim(); showResults(); }
});
document.querySelectorAll('.sp-tabs button').forEach((b) => (b.onclick = () => {
    document.querySelectorAll('.sp-tabs button').forEach((x) => x.classList.remove('on'));
    b.classList.add('on'); spTab = b.dataset.tab; drawSearch();
}));
spRes.addEventListener('click', (e) => {
    const c = e.target.closest('[data-college]'), d = e.target.closest('[data-course]');
    if (c) { clearAll(); state.name = colleges[+c.dataset.college].name; showResults(); }
    if (d) { clearAll(); state.sel.degree.add(d.dataset.course); showResults(); }
});

drawFilters();
drawList();