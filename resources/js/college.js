// // 1. COLLEGE DATA 
// const colleges = [
//     {
//         name: 'Chandigarh University', stream: 'Engineering', direct: true, rating: 4.4, reviews: 369,
//         city: 'Mohali', state: 'Punjab', type: 'Private', approval: 'UGC', approvalMore: 11,
//         degrees: ['B.Tech. (Bachelor of Technology)', 'M.B.A. (Master of Business Administration)', 'B.Sc. (Bachelor of Science)'],
//         mode: ['Regular'], exams: ['PSEB 12th', 'JEE Main', 'CUET'], examMore: 4,
//         fee: '52,000 - 3,97,000', package: '1.7 Crore', nirf: 19, students: 282222, courses: 158, button: 'apply', img: '',
//         specials: [
//             { title: 'Region', text: 'Strategic location near the Chandigarh/Mohali urban hub with access to IT and entrepreneurial hubs.' },
//             { title: 'Top Industries', text: 'IT, core and consulting recruiters visit the campus every year.' },
//             { title: 'Hostel', text: 'Separate on-campus hostels for boys and girls.' }]
//     },
//     {
//         name: 'Chitkara University',stream: 'Engineering',direct: true,rating: 4.3,reviews: 300,city: 'Rajpura',state: 'Punjab',type: 'Private',approval: 'UGC',approvalMore: 5,

//         degrees: [
//             'B.Tech. (Bachelor of Technology)',
//             'B.B.A. (Bachelor of Business Administration)',
//             'B.C.A. (Bachelor of Computer Applications)',
//             'M.B.A. (Master of Business Administration)',
//             'B.Com. (Bachelor of Commerce)',
//             'B.Des. (Bachelor of Design)',
//             'M.C.A. (Master of Computer Applications)'
//         ],

//         mode: ['Regular'],
//         exams: ['JEE Main', 'CUET'],
//         examMore: 1,

//         fee: '1,20,000 - 8,00,000',
//         package: '40 LPA',
//         nirf: 0,
//         students: 25000,
//         courses: 100,

//         button: 'apply',
//         img: '',

//         specials: [
//             {
//                 title: 'Campus',
//                 text: 'Modern university campus with academic facilities, laboratories, hostels and sports facilities.'
//             },
//             {
//                 title: 'Placements',
//                 text: 'Students receive placement opportunities from companies across technology, management and other sectors.'
//             },
//             {
//                 title: 'Location',
//                 text: 'Located near Chandigarh in Rajpura, Punjab.'
//             }
//         ]
//     },

//     {
//         name: 'GNA University', stream: 'Management', direct: true, rating: 4.1, reviews: 52,
//         city: 'Phagwara', state: 'Punjab', type: 'Private', approval: 'UGC', approvalMore: 3,
//         degrees: ['B.Com. (Bachelor of Commerce)', 'M.B.A. (Master of Business Administration)', 'Diploma'],
//         mode: ['Regular'], exams: ['CUET', 'CAT'], examMore: 2,
//         fee: '60,000 - 2,80,000', package: '12 LPA', nirf: 0, students: 21500, courses: 64, button: 'shortlist', img: '',
//         specials: [{ title: 'Campus', text: 'Green residential campus with sports facilities and modern labs.' }]
//     },

//     {
//         name: 'Institute of Hotel Management (IHM), Mumbai', stream: 'Hotel Management', direct: false, rating: 4.0, reviews: 4,
//         city: 'Mumbai', state: 'Maharashtra', type: 'Private', approval: 'NCHMCT', approvalMore: 1,
//         degrees: ['Diploma', 'B.Sc. (Bachelor of Science)'],
//         mode: ['Regular'], exams: ['NCHMCT JEE'], examMore: 0,
//         fee: '20,000 - 3,18,000', package: '', nirf: 0, students: 1987, courses: 13, button: 'shortlist', img: '',
//         specials: [{ title: 'Hostel', text: 'Merit-based residential facilities with separate hostels for boys and girls.' }]
//     },

//     {
//         name: 'IIM Ahmedabad', stream: 'Management', direct: false, rating: 4.8, reviews: 210,
//         city: 'Ahmedabad', state: 'Gujarat', type: 'Public', approval: 'AICTE', approvalMore: 0,
//         degrees: ['M.B.A. (Master of Business Administration)'],
//         mode: ['Regular', 'Part Time'], exams: ['CAT'], examMore: 0,
//         fee: '25,00,000', package: '1.1 Crore', nirf: 1, students: 44000, courses: 9, button: 'apply', img: '',
//         specials: [{ title: 'Rankings', text: 'Consistently ranked #1 in the NIRF management category.' }]
//     },

//     {
//         name: 'Lovely Professional University', stream: 'Engineering', direct: true, rating: 4.3, reviews: 512,
//         city: 'Phagwara', state: 'Punjab', type: 'Private', approval: 'UGC', approvalMore: 8,
//         degrees: [
//             'B.Tech. (Bachelor of Technology)',
//             'M.B.A. (Master of Business Administration)',
//             'B.Sc. (Bachelor of Science)',
//             'B.C.A. (Bachelor of Computer Applications)',
//             'M.C.A. (Master of Computer Applications)',
//             'B.B.A. (Bachelor of Business Administration)',
//             'B.Com. (Bachelor of Commerce)',
//             'M.Com. (Master of Commerce)'
//         ],
//         mode: ['Regular', 'Online'], exams: ['LPUNEST', 'JEE Main'], examMore: 2,
//         fee: '1,20,000 - 8,50,000', package: '64 LPA', nirf: 35, students: 190450, courses: 210, button: 'apply', img: '',
//         specials: [
//             { title: 'Campus', text: 'Large residential campus with sports complexes and labs.' },
//             { title: 'Placements', text: 'IT, core and consulting recruiters visit every year.' }]
//     },

//     // {
//     //     name: 'IIT Bombay', stream: 'Engineering', direct: false, rating: 4.6, reviews: 430,
//     //     city: 'Mumbai', state: 'Maharashtra', type: 'Public', approval: 'UGC', approvalMore: 2,
//     //     degrees: ['B.Tech. (Bachelor of Technology)', 'M.Tech. (Master of Technology)'],
//     //     mode: ['Regular'], exams: ['JEE Advanced', 'GATE'], examMore: 0,
//     //     fee: '8,00,000 - 10,00,000', package: '1.7 Crore', nirf: 3, students: 152300, courses: 45, button: 'shortlist', img: '',
//     //     specials: [{ title: 'Rankings', text: 'Among the top-ranked engineering institutes in India.' }]
//     // },

//     {
//         name: 'NIT Tiruchirappalli', stream: 'Engineering', direct: false, rating: 4.4, reviews: 260,
//         city: 'Tiruchirappalli', state: 'Tamil Nadu', type: 'Public', approval: 'UGC', approvalMore: 1,
//         degrees: ['B.Tech. (Bachelor of Technology)', 'M.Tech. (Master of Technology)'],
//         mode: ['Regular'], exams: ['JEE Main', 'GATE'], examMore: 0,
//         fee: '5,00,000 - 6,00,000', package: '54 LPA', nirf: 9, students: 98100, courses: 38, button: 'apply', img: '',
//         specials: [{ title: 'Hostel', text: 'On-campus hostels for boys and girls with mess and sports facilities.' }]
//     },

//     {
//         name: 'Symbiosis Institute of Business Management', stream: 'Management', direct: true, rating: 4.3, reviews: 145,
//         city: 'Pune', state: 'Maharashtra', type: 'Private', approval: 'AICTE', approvalMore: 2,
//         degrees: ['M.B.A. (Master of Business Administration)'],
//         mode: ['Regular'], exams: ['SNAP', 'CAT'], examMore: 1,
//         fee: '22,00,000', package: '32 LPA', nirf: 22, students: 65400, courses: 12, button: 'shortlist', img: '',
//         specials: [{ title: 'Top Industries', text: 'Consulting, finance and FMCG firms hire from the MBA batch.' }]
//     },

//     {
//         name: 'AIIMS Delhi', stream: 'Medical', direct: false, rating: 4.9, reviews: 300,
//         city: 'New Delhi', state: 'Delhi NCR', type: 'Public', approval: 'NMC', approvalMore: 0,
//         degrees: ['MBBS', 'M.D.'],
//         mode: ['Regular'], exams: ['NEET UG', 'NEET PG'], examMore: 0,
//         fee: 'Under 10,000 per year', package: '', nirf: 1, students: 210000, courses: 30, button: 'shortlist', img: '',
//         specials: [{ title: 'Rankings', text: 'Ranked first among medical institutes in India.' }]
//     },

//     {
//         name: 'National Institute of Design', stream: 'Design', direct: false, rating: 4.5, reviews: 88,
//         city: 'Ahmedabad', state: 'Gujarat', type: 'Public', approval: 'UGC', approvalMore: 0,
//         degrees: ['B.Des.', 'M.Des.'],
//         mode: ['Regular'], exams: ['NID DAT'], examMore: 0,
//         fee: '9,00,000 - 12,00,000', package: '30 LPA', nirf: 1, students: 12800, courses: 14, button: 'apply', img: '',
//         specials: [{ title: 'Studios', text: 'Studio-based learning across product, communication and textile design.' }]
//     },

//     {
//         name: 'Shri Ram College of Commerce', stream: 'Commerce & Banking', direct: false, rating: 4.6, reviews: 340,
//         city: 'New Delhi', state: 'Delhi NCR', type: 'Public', approval: 'UGC', approvalMore: 0,
//         degrees: ['B.Com. (Bachelor of Commerce)', 'B.A. (Bachelor of Arts)'],
//         mode: ['Regular'], exams: ['CUET'], examMore: 0,
//         fee: '60,000 - 90,000', package: '18 LPA', nirf: 5, students: 88900, courses: 6, button: 'shortlist', img: '',
//         specials: [{ title: 'Placements', text: 'Banking, consulting and finance recruiters visit every year.' }]
//     },

//     {
//         name: 'Manipal Academy of Higher Education', stream: 'Medical', direct: true, rating: 4.4, reviews: 275,
//         city: 'Manipal', state: 'Karnataka', type: 'Private', approval: 'UGC', approvalMore: 6,
//         degrees: [
//             'B.Tech. (Bachelor of Technology)',
//             'M.B.A. (Master of Business Administration)',
//             'B.Sc. (Bachelor of Science)',
//             'B.C.A. (Bachelor of Computer Applications)',
//             'M.C.A. (Master of Computer Applications)',
//             'B.B.A. (Bachelor of Business Administration)',
//             'B.Com. (Bachelor of Commerce)',
//             'M.Com. (Master of Commerce)'
//         ],
//         mode: ['Regular'], exams: ['NEET UG', 'MET'], examMore: 3,
//         fee: '4,00,000 - 20,00,000', package: '45 LPA', nirf: 4, students: 132700, courses: 180, button: 'apply', img: '',
//         specials: [{ title: 'Campus', text: 'A university town with hospitals, labs and research centres on site.' }]
//     },
// ];

// // 2. SIDEBAR FILTER BOXES

// const filterBoxes = [
//     { key: 'stream', label: 'Stream', type: 'radio', field: 'stream' },
//     { key: 'degree', label: 'Degree', type: 'checkbox', field: 'degrees' },
//     { key: 'state', label: 'State', type: 'checkbox', field: 'state' },
//     { key: 'city', label: 'City', type: 'checkbox', field: 'city' },
//     { key: 'mode', label: 'Study Mode', type: 'checkbox', field: 'mode' },
//     { key: 'type', label: 'Institute Type', type: 'checkbox', field: 'type' },
//     { key: 'exam', label: 'Exam', type: 'checkbox', field: 'exams' },
// ];

// // 3. VARIABLES THAT REMEMBER WHAT THE USER DID
// let chosen = {};            // the ticked filters, e.g. chosen.state = ['Punjab']
// let filterSearch = {};      // text typed in each filter's search box
// let nameSearch = '';        // text from the top search panel
// let onlyDirect = false;     // "Direct Admission" selected?
// let shortlisted = [];       // numbers of shortlisted colleges
// let favourites = [];        // numbers of hearted colleges
// let slideNumber = {};       // which specialty slide each card shows

// filterBoxes.forEach(function (box) { chosen[box.key] = []; });

// // short helper: find one element on the page
// function $(selector) { return document.querySelector(selector); }

// // A college property can be text ("Punjab") or a list (["Regular","Online"]).
// // This always gives back a list.
// function valuesOf(college, field) {
//     const v = college[field];
//     return Array.isArray(v) ? v : [v];
// }

// // Add or remove an item from a list
// function toggleInList(list, item) {
//     const position = list.indexOf(item);
//     if (position === -1) list.push(item); else list.splice(position, 1);
// }

// // 4. DECIDE IF A COLLEGE SHOULD BE SHOWN
// function collegePasses(college) {
//     // top search text
//     if (nameSearch && !college.name.toLowerCase().includes(nameSearch.toLowerCase())) return false;
//     // Direct Admission toggle
//     if (onlyDirect && !college.direct) return false;
//     // every filter box that has something ticked must match
//     for (const box of filterBoxes) {
//         const ticked = chosen[box.key];
//         if (ticked.length === 0) continue;                       // nothing ticked = ignore this box
//         const collegeValues = valuesOf(college, box.field);
//         const match = collegeValues.some(function (v) { return ticked.includes(v); });
//         if (!match) return false;
//     }
//     return true;
// }

// // 5. SIDEBAR
// // Count how many colleges have each option, e.g. Punjab (3)
// function countOptions(box) {
//     const counts = {};
//     colleges.forEach(function (college) {
//         valuesOf(college, box.field).forEach(function (v) { counts[v] = (counts[v] || 0) + 1; });
//     });
//     return Object.entries(counts).sort(function (a, b) { return b[1] - a[1]; });
// }

// // Draw just the list of options inside one box
// function showOptions(box) {
//     const words = (filterSearch[box.key] || '').toLowerCase();
//     let html = '';
//     countOptions(box).forEach(function ([name, count]) {
//         if (!name.toLowerCase().includes(words)) return;
//         const isChecked = chosen[box.key].includes(name) ? 'checked' : '';
//         html += `<label class="opt ${box.type === 'radio' ? 'r' : 'c'}">
//       <input type="${box.type}" data-box="${box.key}" value="${name}" ${isChecked}><i></i>${name}<span>(${count})</span>
//     </label>`;
//     });
//     $('#opts-' + box.key).innerHTML = html;
// }

// // Draw all the filter boxes (done once)
// function showFilters() {
//     let html = '';
//     filterBoxes.forEach(function (box) {
//         html += `<div class="fbox" id="box-${box.key}">
//       <h3 data-fold="${box.key}">${box.label} <b class="chev"></b></h3>
//       <div class="fbody">
//         <input type="search" placeholder="Search" data-search="${box.key}">
//         <div class="opts" id="opts-${box.key}"></div>
//       </div>
//     </div>`;
//     });
//     $('#filters').innerHTML = html;
//     filterBoxes.forEach(showOptions);
// }

// // 6. COLLEGE CARDS
// function makeCard(college, number) {
//     // which specialty slide to show
//     const slide = (slideNumber[number] || 0) % college.specials.length;
//     const special = college.specials[slide];
//     const manySlides = college.specials.length > 1;

//     const isFav = favourites.includes(number);
//     const isShort = shortlisted.includes(number);

//     // buttons at the bottom
//     let leftButton, rightButton;
//     if (college.button === 'apply') {
//         leftButton = '<button class="btn">Download Brochure</button>';
//         rightButton = '<button class="btn fill">Apply Now</button>';
//     } else {
//         leftButton = '<button class="btn">Get Free Counselling</button>';
//         rightButton = `<button class="btn fill ${isShort ? 'on' : ''}" data-shortlist>${isShort ? 'Shortlisted ✓' : 'Shortlist'}</button>`;
//     }

//     // small pieces that only show when data exists
//     const rating = college.rating ? `<span class="rate">${college.rating.toFixed(1)} ★</span>` : '';
//     const approvalMore = college.approvalMore ? `<span class="more">...+${college.approvalMore}</span>` : '';
//     const examMore = college.examMore ? `<span class="more" style="font-weight:400">...+${college.examMore}</span>` : '';
//     const packageBox = college.package
//         ? `<div class="stat"><b>${college.package}</b><small>Highest Package</small><a class="lnk" href="#">↗ Placement Trends</a></div>` : '';
//     const nirfBox = college.nirf
//         ? `<div class="stat"><b>#${college.nirf} NIRF</b><small>Ranking</small></div>` : '';
//     const arrows = manySlides ? '<button class="arrow l" data-prev>‹</button><button class="arrow r" data-next>›</button>' : '';
//     let dots = '';
//     if (manySlides) {
//         dots = '<div class="dots">';
//         college.specials.forEach(function (s, i) { dots += `<i class="${i === slide ? 'on' : ''}"></i>`; });
//         dots += '</div>';
//     }
//     const imageStyle = college.img ? `style="background:url(${college.img}) center/cover"` : '';
//     const imageText = college.img ? '' : college.city;

//     return `
//   <article class="card" data-number="${number}">
//     <div class="card-head">
//       <h3>${college.name}</h3>
//       <div class="icons">
//         <button title="Share">➦</button>
//         <button class="${isFav ? 'on' : ''}" data-heart title="Save">${isFav ? '♥' : '♡'}</button>
//       </div>
//     </div>

//     <div class="card-body">
//       <div class="cimg" ${imageStyle}>${imageText}</div>
//       <div class="cinfo">
//         <div class="meta">
//           ${rating}
//           <span class="rv">(${college.reviews} Reviews)</span>
//           <span>◎ ${college.city}, ${college.state}</span>
//           <span>⚑ ${college.type}</span>
//           <span>☆ ${college.approval} ${approvalMore}</span>
//         </div>

//         <div class="stats">
//           <div class="stat"><b>₹ ${college.fee}</b><a class="lnk" href="#">🗎 Get Fee Details</a></div>
//           ${packageBox}
//           ${nirfBox}
//           <div class="stat"><b>${college.exams[0]} ${examMore}</b><small>Exams</small></div>
//         </div>

//         <div class="special">
//           <h4>${college.name} specialties</h4>
//           <div class="sbox">
//             <div class="sicon">◈</div>
//             ${arrows}
//             <div class="stext"><b>${special.title}</b> : ${special.text}</div>
//           </div>
//           ${dots}
//         </div>

//         <div class="short">
//           <div class="avs"><u></u><u></u><u></u><u></u></div>
//           Shortlisted by&nbsp;<b>${college.students}</b>+ students
//         </div>
//       </div>
//     </div>

//     <div class="card-foot">
//       <nav><a href="#">Course and Fee (${college.courses})</a><a href="#">Admission</a><a href="#">Placement</a></nav>
//       <div>${leftButton} ${rightButton}</div>
//     </div>
//   </article>`;
// }

// // Draw the list of cards + the heading + the chips
// function showColleges() {
//     let html = '';
//     let shown = 0;
//     colleges.forEach(function (college, number) {
//         if (collegePasses(college)) { html += makeCard(college, number); shown++; }
//     });
//     $('#list').innerHTML = shown ? html : '<div class="empty">No colleges match these filters.</div>';
//     $('#count').textContent = 'Showing ' + shown + ' Colleges in India';

//     // chips = the small tags above the list that remove a filter when clicked
//     let chips = '';
//     if (nameSearch) chips += `<button class="chip" data-chip="name|">Search: ${nameSearch} ✕</button>`;
//     filterBoxes.forEach(function (box) {
//         chosen[box.key].forEach(function (value) {
//             chips += `<button class="chip" data-chip="${box.key}|${value}">${value} ✕</button>`;
//         });
//     });
//     $('#chips').innerHTML = chips;
// }

// // 7. CLICKS ON THE SIDEBAR
// // Tick / untick an option
// $('#filters').addEventListener('change', function (e) {
//     const input = e.target;
//     if (!input.dataset.box) return;
//     const key = input.dataset.box;
//     if (input.type === 'radio') {
//         chosen[key] = [input.value];               // radio = only one value
//     } else {
//         toggleInList(chosen[key], input.value);    // checkbox = add or remove
//     }
//     showColleges();
// });

// // Click again on a selected radio to un-select it
// $('#filters').addEventListener('click', function (e) {
//     // fold / unfold a box when its title is clicked
//     const title = e.target.closest('[data-fold]');
//     if (title) { $('#box-' + title.dataset.fold).classList.toggle('closed'); return; }

//     const input = e.target.closest('input[type=radio]');
//     if (input && chosen[input.dataset.box].includes(input.value) && input.dataset.wasChecked === 'yes') {
//         chosen[input.dataset.box] = [];
//         showOptions(filterBoxes.find(function (b) { return b.key === input.dataset.box; }));   // redraw so the circle is empty
//         showColleges();
//     }
//     if (input) input.dataset.wasChecked = 'yes';
// });

// // Type in a filter's own search box
// $('#filters').addEventListener('input', function (e) {
//     const key = e.target.dataset.search;
//     if (!key) return;
//     filterSearch[key] = e.target.value;
//     showOptions(filterBoxes.find(function (b) { return b.key === key; }));
// });

// // 8. CLICKS ON THE CARDS
// $('#list').addEventListener('click', function (e) {
//     const card = e.target.closest('.card');
//     if (!card) return;
//     const number = Number(card.dataset.number);
//     const slides = colleges[number].specials.length;
//     const now = slideNumber[number] || 0;

//     if (e.target.closest('[data-next]')) slideNumber[number] = (now + 1) % slides;
//     else if (e.target.closest('[data-prev]')) slideNumber[number] = (now - 1 + slides) % slides;
//     else if (e.target.closest('[data-heart]')) toggleInList(favourites, number);
//     else if (e.target.closest('[data-shortlist]')) toggleInList(shortlisted, number);
//     else return;

//     showColleges();
// });

// // Click a chip to remove that filter
// $('#chips').addEventListener('click', function (e) {
//     const chip = e.target.closest('[data-chip]');
//     if (!chip) return;
//     const [key, value] = chip.dataset.chip.split('|');
//     if (key === 'name') nameSearch = '';
//     else chosen[key] = chosen[key].filter(function (v) { return v !== value; });
//     showFilters();
//     showColleges();
// });

// // 9. SMALL THINGS: toggle, read more, top button
// document.querySelectorAll('input[name=mode]').forEach(function (radio) {
//     radio.addEventListener('change', function () {
//         onlyDirect = radio.value === 'direct';
//         showColleges();
//     });
// });

// $('#readMore').addEventListener('click', function (e) {
//     e.preventDefault();
//     const text = $('#introText');
//     text.classList.toggle('clamp');
//     e.target.textContent = text.classList.contains('clamp') ? 'Read More' : 'Read Less';
// });

// const topButton = $('#toTop');
// window.addEventListener('scroll', function () {
//     topButton.style.display = window.scrollY > 400 ? 'flex' : 'none';
// });
// topButton.addEventListener('click', function () {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// // 10. SEARCH PANEL (opens from the search icon)
// const panel = $('#searchPanel');
// const panelInput = $('#spInput');
// const panelResults = $('#spResults');
// let panelTab = 'all';       // 'all', 'colleges' or 'courses'

// // all different degrees with how many colleges offer them
// function allCourses() {
//     const counts = {};
//     colleges.forEach(function (c) {
//         c.degrees.forEach(function (d) { counts[d] = (counts[d] || 0) + 1; });
//     });
//     return Object.entries(counts);
// }

// function showSearchResults() {
//     const words = panelInput.value.trim().toLowerCase();
//     let html = '';

//     // matching colleges (max 6)
//     if (panelTab !== 'courses') {
//         let found = 0, part = '';
//         colleges.forEach(function (c, number) {
//             const text = (c.name + ' ' + c.city + ' ' + c.state + ' ' + c.stream).toLowerCase();
//             if (found < 6 && text.includes(words)) {
//                 part += `<div class="sp-item" data-college="${number}"><span>${c.name}</span><small>${c.city}, ${c.state}</small></div>`;
//                 found++;
//             }
//         });
//         if (part) html += `<div class="sp-h">${words ? 'Colleges' : 'Popular colleges'}</div>` + part;
//     }

//     // matching courses (max 6)
//     if (panelTab !== 'colleges') {
//         let found = 0, part = '';
//         allCourses().forEach(function ([course, count]) {
//             if (found < 6 && course.toLowerCase().includes(words)) {
//                 part += `<div class="sp-item" data-course="${course}"><span>${course}</span><small>${count} colleges</small></div>`;
//                 found++;
//             }
//         });
//         if (part) html += `<div class="sp-h">${words ? 'Courses' : 'Popular courses'}</div>` + part;
//     }

//     panelResults.innerHTML = html || '<div class="sp-empty">No results found. Try another keyword.</div>';
// }

// function openSearch() {
//     panel.hidden = false;
//     panelInput.value = '';
//     showSearchResults();
//     panelInput.focus();
//     document.body.style.overflow = 'hidden';
// }
// function closeSearch() {
//     panel.hidden = true;
//     document.body.style.overflow = '';
// }

// // remove old filters, then show the result on the page
// function applySearch(name, course) {
//     nameSearch = name;
//     filterBoxes.forEach(function (box) { chosen[box.key] = []; });
//     if (course) chosen.degree = [course];
//     closeSearch();
//     showFilters();
//     showColleges();
//     $('#count').scrollIntoView({ behavior: 'smooth' });
// }

// $('#openSearch').addEventListener('click', function (e) { e.preventDefault(); openSearch(); });
// $('#spClose').addEventListener('click', closeSearch);
// panel.addEventListener('click', function (e) { if (e.target === panel) closeSearch(); });   // click outside the box
// window.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSearch(); });
// panelInput.addEventListener('input', showSearchResults);
// panelInput.addEventListener('keydown', function (e) {
//     if (e.key === 'Enter' && panelInput.value.trim()) applySearch(panelInput.value.trim(), '');
// });

// // the All / Colleges / Courses tabs
// document.querySelectorAll('.sp-tabs button').forEach(function (tab) {
//     tab.addEventListener('click', function () {
//         document.querySelectorAll('.sp-tabs button').forEach(function (t) { t.classList.remove('on'); });
//         tab.classList.add('on');
//         panelTab = tab.dataset.tab;
//         showSearchResults();
//     });
// });

// // click a result inside the panel
// panelResults.addEventListener('click', function (e) {
//     const collegeRow = e.target.closest('[data-college]');
//     const courseRow = e.target.closest('[data-course]');
//     if (collegeRow) applySearch(colleges[Number(collegeRow.dataset.college)].name, '');
//     if (courseRow) applySearch('', courseRow.dataset.course);
// });

// // 11. START: draw the page for the first time
// showFilters();
// showColleges();


//By API 
let colleges = [];

async function loadColleges() {
    try {
        const response = await fetch('/api/colleges');

        if (!response.ok) {
            throw new Error('Failed to fetch colleges');
        }

        colleges = await response.json();

        console.log('Colleges from API:', colleges);

        showFilters();
        showColleges();

    } catch (error) {
        console.error('Error loading colleges:', error);
        document.querySelector('#list').innerHTML =
            '<div class="empty">Unable to load colleges.</div>';
    }
}

loadColleges();

function makeCard(college) {
    return `
        <article class="card">

            <div class="card-head">
                <h3>${college.name}</h3>

                <div class="icons">
                    <button title="Share">➦</button>
                    <button title="Save">♡</button>
                </div>
            </div>

            <div class="card-body">

                <div class="cimg">
                    ${college.logo
            ? `<img src="${college.logo}" alt="${college.name}">`
            : college.name
        }
                </div>

                <div class="cinfo">

                    <div class="meta">
                        <span>📍 ${college.city}, ${college.state}</span>
                        <span>⚑ ${college.type}</span>
                    </div>

                    <div class="stats">

                        <div class="stat">
                            <b>${college.established_at}</b>
                            <small>Established</small>
                        </div>

                    </div>

                </div>
            </div>

            <div class="card-foot">
                <nav>
                    <a href="#">Courses</a>
                    <a href="#">Admission</a>
                    <a href="#">Details</a>
                </nav>

                <div>
                    <button class="btn">View College</button>
                </div>
            </div>

        </article>
    `;
}

function showColleges() {

    let html = '';

    colleges.forEach(function (college) {
        html += makeCard(college);
    });

    document.querySelector('#list').innerHTML =
        html || '<div class="empty">No colleges found.</div>';

    document.querySelector('#count').textContent =
        `Showing ${colleges.length} Colleges in India`;
}