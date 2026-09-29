const S = ["Engineering", "Management", "Medical", "Design", "Hotel Management", "Commerce"];
const D = [
    { n: "IIT Bombay", c: "Mumbai", s: "Maharashtra", t: "Public", st: "Engineering", f: 8, fs: "8,00,000 (4 yrs, approx.)", r: 4.6, rk: 3, pk: "1.7 Crore", ex: "JEE Advanced", sh: 52310, col: "#3b5fa8" },
    { n: "NIT Tiruchirappalli", c: "Tiruchirappalli", s: "Tamil Nadu", t: "Public", st: "Engineering", f: 5, fs: "5,50,000 (4 yrs, approx.)", r: 4.4, rk: 9, pk: "54 LPA", ex: "JEE Main", sh: 31200, col: "#4e7f6b" },
    { n: "BITS Pilani", c: "Pilani", s: "Rajasthan", t: "Private", st: "Engineering", f: 19, fs: "19,00,000 (4 yrs, approx.)", r: 4.5, rk: 25, pk: "60 LPA", ex: "BITSAT", sh: 28800, col: "#a8663b" },
    { n: "Chandigarh University", c: "Mohali", s: "Punjab", t: "Private", st: "Engineering", f: 0.5, fs: "52,000 - 3,97,000", r: 4.4, rk: 19, pk: "1.7 Crore", ex: "PSEB 12th", sh: 40100, col: "#6b4ea8" },
    { n: "IIM Ahmedabad", c: "Ahmedabad", s: "Gujarat", t: "Public", st: "Management", f: 25, fs: "25,00,000 (2 yrs, approx.)", r: 4.8, rk: 1, pk: "1.1 Crore", ex: "CAT", sh: 44000, col: "#a83b5f" },
    { n: "Symbiosis Institute of Business Management", c: "Pune", s: "Maharashtra", t: "Private", st: "Management", f: 22, fs: "22,00,000 (2 yrs, approx.)", r: 4.3, rk: 22, pk: "32 LPA", ex: "SNAP", sh: 19800, col: "#3ba8a1" },
    { n: "AIIMS Delhi", c: "New Delhi", s: "Delhi NCR", t: "Public", st: "Medical", f: 1, fs: "Under 10,000 per year", r: 4.9, rk: 1, pk: "N/A", ex: "NEET UG", sh: 61000, col: "#3b8fa8" },
    { n: "National Institute of Design", c: "Ahmedabad", s: "Gujarat", t: "Public", st: "Design", f: 9, fs: "9,00,000 (4 yrs, approx.)", r: 4.5, rk: 1, pk: "30 LPA", ex: "NID DAT", sh: 9800, col: "#a8893b" },
    { n: "Shri Ram College of Commerce", c: "New Delhi", s: "Delhi NCR", t: "Public", st: "Commerce", f: 0.6, fs: "60,000 (3 yrs, approx.)", r: 4.6, rk: 5, pk: "18 LPA", ex: "CUET", sh: 36000, col: "#7a3ba8" },
    { n: "Institute of Hotel Management (IHM), Mumbai", c: "Mumbai", s: "Maharashtra", t: "Private", st: "Hotel Management", f: 0.2, fs: "20,000 - 3,18,000", r: 4.0, rk: 0, pk: "6 LPA", ex: "NCHMCT JEE", sh: 1987, col: "#b08a4e" },
    { n: "IHM Catering & Nutrition, New Delhi", c: "New Delhi", s: "Delhi NCR", t: "Private", st: "Hotel Management", f: 0.4, fs: "40,400", r: 4.4, rk: 0, pk: "5 LPA", ex: "CBSE 12th", sh: 846, col: "#b0634e" },
    { n: "WGSHA Manipal", c: "Manipal", s: "Karnataka", t: "Private", st: "Hotel Management", f: 0.1, fs: "10,000 - 9,24,000", r: 0, rk: 0, pk: "7 LPA", ex: "XAT", sh: 143, col: "#4e8fb0" }];
const X = [
    { n: "JEE Main", st: "Engineering", d: "National entrance for NITs, IIITs and other engineering colleges.", m: "Jan and Apr" },
    { n: "CAT", st: "Management", d: "Entrance test for IIMs and top MBA programmes.", m: "Nov" },
    { n: "NEET UG", st: "Medical", d: "Single national entrance for MBBS, BDS and allied courses.", m: "May" },
    { n: "CUET", st: "Commerce", d: "Common university entrance for central and many state universities.", m: "May" },
    { n: "NCHMCT JEE", st: "Hotel Management", d: "Entrance for B.Sc. in Hospitality and Hotel Administration at IHMs.", m: "Apr" },
    { n: "NID DAT", st: "Design", d: "Design aptitude test for NID and other design schools.", m: "Jan" }];
const st = { q: "", sel: { Stream: new Set(), State: new Set(), Type: new Set(), Fee: new Set() }, short: new Set(), fav: new Set(), tab: "Overview" };
const FEE = { "Under 1 Lakh": f => f < 1, "1 to 10 Lakh": f => f >= 1 && f < 10, "Above 10 Lakh": f => f >= 10 };
const $ = s => document.querySelector(s), app = $("#app");
const get = { Stream: d => d.st, State: d => d.s, Type: d => d.t, Fee: d => Object.keys(FEE).find(k => FEE[k](d.f)) };
function match(d) { return (!st.q || (d.n + d.c + d.st + d.ex).toLowerCase().includes(st.q.toLowerCase())) && Object.keys(st.sel).every(k => !st.sel[k].size || st.sel[k].has(get[k](d))) }
function toast(m) { const t = document.createElement("div"); t.className = "toast"; t.textContent = m; document.body.append(t); setTimeout(() => t.remove(), 1800) }
function toggle(set, i, msg) { set.has(i) ? set.delete(i) : (set.add(i), msg && toast(msg)); route() }
function card(d) {
    const i = D.indexOf(d); return `<article class="card"><div class="ch"><h3><a href="#/college/${i}">${d.n}</a></h3><button class="heart ${st.fav.has(i) ? "on" : ""}" onclick="toggle(st.fav,${i})" aria-label="Save">${st.fav.has(i) ? "♥" : "♡"}</button></div>
<div class="body"><div class="img" style="background:linear-gradient(135deg,${d.col},#1a1a2e)">${d.c}</div><div>
<div class="meta">${d.r ? `<span class="rate">${d.r.toFixed(1)} ★</span>` : ""}<span>📍 ${d.c}, ${d.s}</span><span>${d.t}</span><span>${d.st}</span></div>
<div class="kv"><div><b>₹ ${d.fs}</b><small>Total fees</small></div><div><b>${d.pk}</b><small>Highest package</small></div>${d.rk ? `<div><b>#${d.rk} NIRF</b><small>Ranking</small></div>` : ""}<div><b>${d.ex}</b><small>Exam</small></div></div>
<span class="short">Shortlisted by <b>${d.sh.toLocaleString("en-IN")}+</b> students</span></div></div>
<div class="cf"><nav><a href="#/college/${i}">Course and Fee</a><a href="#/college/${i}">Admission</a><a href="#/college/${i}">Placement</a></nav>
<div><button class="btn" onclick="location.hash='#/college/${i}'">View details</button> <button class="btn fill ${st.short.has(i) ? "on" : ""}" onclick="toggle(st.short,${i},'Added to shortlist')">${st.short.has(i) ? "Shortlisted ✓" : "Shortlist"}</button></div></div></article>`
}
function home() {
    const top = [...D].sort((a, b) => b.sh - a.sh).slice(0, 4);
    app.innerHTML = `<section class="hero"><h1>Find the right college for your future</h1><p>Compare fees, rankings, placements and entrance exams across ${D.length}+ sample colleges.</p>
<div class="sbar"><input id="hq" placeholder="Search colleges, exams or courses" aria-label="Search"><button onclick="go()">Search</button></div>
<div class="stats"><div><b>${D.length}+</b>Colleges</div><div><b>${X.length}</b>Exams</div><div><b>${S.length}</b>Streams</div></div></section>
<div class="wrap"><h2 class="sec" style="margin-top:0">Browse by stream</h2><div class="grid">${S.map(s => `<a class="tile" onclick="pick('${s}')"><b>${s}</b><small>${D.filter(d => d.st === s).length} colleges</small></a>`).join("")}</div>
<h2 class="sec">Most shortlisted colleges</h2>${top.map(card).join("")}
<h2 class="sec">Upcoming entrance exams</h2><div class="grid">${X.map(x => `<a class="tile" href="#/exams"><b>${x.n}</b><small>${x.st} · ${x.m}</small></a>`).join("")}</div></div>`;
    $("#hq").onkeydown = e => e.key === "Enter" && go()
}
function go() { st.q = $("#hq").value; Object.values(st.sel).forEach(s => s.clear()); location.hash = "#/colleges" }
function pick(s) { st.q = ""; Object.values(st.sel).forEach(x => x.clear()); st.sel.Stream.add(s); location.hash = "#/colleges" }
function list() {
    const r = D.filter(match);
    const box = k => { const m = {}; D.forEach(d => { const v = get[k](d); m[v] = (m[v] || 0) + 1 }); return `<div class="fbox"><h3>${k}</h3>${Object.entries(m).map(([v, n]) => `<label><input type="checkbox" ${st.sel[k].has(v) ? "checked" : ""} onchange="this.checked?st.sel['${k}'].add('${v}'):st.sel['${k}'].delete('${v}');route()">${v}<span>(${n})</span></label>`).join("")}</div>` };
    app.innerHTML = `<div class="wrap"><h1 style="margin:0 0 6px">Top Colleges in India 2026</h1><div class="layout"><aside><div class="fbox"><h3>Search</h3><input class="txt" id="lq" value="${st.q}" placeholder="College, city or exam"></div>${["Stream", "State", "Type", "Fee"].map(box).join("")}</aside>
<section><div class="chips">${Object.entries(st.sel).flatMap(([k, s]) => [...s].map(v => `<button class="chip" onclick="st.sel['${k}'].delete('${v}');route()">${v} ✕</button>`)).join("")}${st.q ? `<button class="chip" onclick="st.q='';route()">“${st.q}” ✕</button>` : ""}</div>
<h2 style="color:var(--mut);font-size:20px">Showing ${r.length} Colleges in India</h2>${r.length ? r.map(card).join("") : `<div class="panel">No colleges match these filters. Remove a filter to see more.</div>`}</section></div></div>`;
    $("#lq").oninput = e => { st.q = e.target.value; const p = e.target.selectionStart; route(); const n = $("#lq"); n.focus(); n.setSelectionRange(p, p) }
}
function detail(i) {
    const d = D[i]; if (!d) return list(); const T = {
        Overview: `<p>${d.n} is a ${d.t.toLowerCase()} institute in ${d.c}, ${d.s}, offering ${d.st.toLowerCase()} programmes. Admission is through ${d.ex}.</p><p>Rating: ${d.r || "Not rated yet"} · Highest package: ${d.pk}</p>`,
        "Courses & Fees": `<table><tr><th>Stream</th><th>Total fees (₹)</th><th>Exam</th></tr><tr><td>${d.st}</td><td>${d.fs}</td><td>${d.ex}</td></tr></table>`,
        Admission: `<p>Register for <b>${d.ex}</b>, meet the cutoff, then attend counselling or the college's selection round. Check official dates before applying.</p>`,
        Placement: `<p>Highest package: <b>${d.pk}</b>. Recruiters and averages vary by year and branch.</p>`
    };
    app.innerHTML = `<div class="wrap"><a href="#/colleges" style="color:var(--pri)">← All colleges</a><div class="dhead" style="margin-top:14px"><div class="img" style="background:linear-gradient(135deg,${d.col},#1a1a2e);width:300px">${d.c}</div><div><h1 style="margin:0 0 8px">${d.n}</h1><div class="meta"><span>📍 ${d.c}, ${d.s}</span><span>${d.t}</span>${d.r ? `<span class="rate">${d.r.toFixed(1)} ★</span>` : ""}</div><p><button class="btn fill ${st.short.has(+i) ? "on" : ""}" onclick="toggle(st.short,${i},'Added to shortlist')">${st.short.has(+i) ? "Shortlisted ✓" : "Shortlist"}</button></p></div></div>
<div class="tabs">${Object.keys(T).map(t => `<button class="${st.tab === t ? "on" : ""}" onclick="st.tab='${t}';route()">${t}</button>`).join("")}</div>
<div class="layout" style="grid-template-columns:1fr 340px"><div class="panel">${T[st.tab]}</div>
<div class="panel"><h3 style="margin-top:0">Get free counselling</h3><div class="form"><input class="txt" id="fn" placeholder="Your name"><input class="txt" id="fp" placeholder="Mobile number" inputmode="numeric"><button class="btn fill" onclick="lead()">Request a call back</button></div></div></div></div>`}
function lead() { if (!$("#fn").value || !/^\d{10}$/.test($("#fp").value)) return toast("Enter your name and a 10-digit mobile number"); toast("Thanks! A counsellor will call you."); $("#fn").value = $("#fp").value = "" }
function exams() { app.innerHTML = `<div class="wrap"><h1 style="margin:0 0 14px">Entrance Exams 2026</h1><div class="grid">${X.map(x => `<div class="tile"><b>${x.n}</b><small>${x.st} · ${x.m}</small><p>${x.d}</p><button class="btn" onclick="pick('${x.st}')">View ${x.st} colleges</button></div>`).join("")}</div></div>` }
function shortlist() { const r = [...st.short].map(i => D[i]); app.innerHTML = `<div class="wrap"><h1 style="margin:0 0 14px">My shortlist</h1>${r.length ? r.map(card).join("") : `<div class="panel">You haven't shortlisted any college yet. <a href="#/colleges" style="color:var(--pri)">Browse colleges</a></div>`}</div>` }
function route() {
    const [, p, a] = location.hash.slice(1).split("/"); document.querySelectorAll("[data-r]").forEach(l => l.classList.toggle("act", l.dataset.r === p)); $("#sc").textContent = st.short.size ? `(${st.short.size})` : "";
    ({ colleges: list, exams, shortlist, college: () => detail(a) }[p] || home)()
}
addEventListener("hashchange", () => { window.scrollTo(0, 0); route() }); route();