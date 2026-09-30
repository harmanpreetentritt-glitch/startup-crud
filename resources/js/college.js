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
//         rightButton = `<button class="btn fill ${isShort ? 'on' : ''}" data-shortlist>${isShort ? 'Shortlisted âœ“' : 'Shortlist'}</button>`;
//     }

//     // small pieces that only show when data exists
//     const rating = college.rating ? `<span class="rate">${college.rating.toFixed(1)} â˜…</span>` : '';
//     const approvalMore = college.approvalMore ? `<span class="more">...+${college.approvalMore}</span>` : '';
//     const examMore = college.examMore ? `<span class="more" style="font-weight:400">...+${college.examMore}</span>` : '';
//     const packageBox = college.package
//         ? `<div class="stat"><b>${college.package}</b><small>Highest Package</small><a class="lnk" href="#">â†— Placement Trends</a></div>` : '';
//     const nirfBox = college.nirf
//         ? `<div class="stat"><b>#${college.nirf} NIRF</b><small>Ranking</small></div>` : '';
//     const arrows = manySlides ? '<button class="arrow l" data-prev>â€¹</button><button class="arrow r" data-next>â€º</button>' : '';
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
//         <button title="Share">âž¦</button>
//         <button class="${isFav ? 'on' : ''}" data-heart title="Save">${isFav ? 'â™¥' : 'â™¡'}</button>
//       </div>
//     </div>

//     <div class="card-body">
//       <div class="cimg" ${imageStyle}>${imageText}</div>
//       <div class="cinfo">
//         <div class="meta">
//           ${rating}
//           <span class="rv">(${college.reviews} Reviews)</span>
//           <span>â—Ž ${college.city}, ${college.state}</span>
//           <span>âš‘ ${college.type}</span>
//           <span>â˜† ${college.approval} ${approvalMore}</span>
//         </div>

//         <div class="stats">
//           <div class="stat"><b>â‚¹ ${college.fee}</b><a class="lnk" href="#">ðŸ—Ž Get Fee Details</a></div>
//           ${packageBox}
//           ${nirfBox}
//           <div class="stat"><b>${college.exams[0]} ${examMore}</b><small>Exams</small></div>
//         </div>

//         <div class="special">
//           <h4>${college.name} specialties</h4>
//           <div class="sbox">
//             <div class="sicon">â—ˆ</div>
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
//     if (nameSearch) chips += `<button class="chip" data-chip="name|">Search: ${nameSearch} âœ•</button>`;
//     filterBoxes.forEach(function (box) {
//         chosen[box.key].forEach(function (value) {
//             chips += `<button class="chip" data-chip="${box.key}|${value}">${value} âœ•</button>`;
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

// By API
// let colleges = [];

// async function loadColleges() {
//     try {
//         const response = await fetch('/api/colleges');

//         if (!response.ok) {
//             throw new Error('Failed to fetch colleges');
//         }

//         const result = await response.json();

//         colleges = Array.isArray(result.data) ? result.data : [];

//         if (!Array.isArray(result.data)) {
//             throw new Error('Unexpected API response: expected a data array');
//         }

//         console.log('Colleges from API:', colleges);

//         showColleges();

//     } catch (error) {
//         console.error('Error loading colleges:', error);

//         document.querySelector('#list').innerHTML =
//             '<div class="empty">Unable to load colleges.</div>';
//     }
// }

// loadColleges();

// function makeCard(college) {
//     return `
//         <article class="card">

//             <div class="card-head">
//                 <h3>${college.name}</h3>

//                 <div class="icons">
//                     <button title="Share">âž¦</button>
//                     <button title="Save">â™¡</button>
//                 </div>
//             </div>

//             <div class="card-body">

//                 <div class="cimg">
//                     ${college.logo
//                         ? `<img src="${college.logo}" alt="${college.name}">`
//                         : college.name
//                     }
//                 </div>

//                 <div class="cinfo">

//                     <div class="meta">
//                         <span>ðŸ“ ${college.city}, ${college.state}</span>
//                         <span>âš‘ ${college.type}</span>
//                     </div>

//                     <div class="stats">

//                         <div class="stat">
//                             <b>${college.established_year ?? "—"}</b>
//                             <small>Established</small>
//                         </div>

//                     </div>

//                 </div>
//             </div>

//             <div class="card-foot">
//                 <nav>
//                     <a href="#">Courses</a>
//                     <a href="#">Admission</a>
//                     <a href="#">Details</a>
//                 </nav>

//                 <div>
//                     <button class="btn">View College</button>
//                 </div>
//             </div>

//         </article>
//     `;
// }

// function showColleges() {

//     let html = '';

//     colleges.forEach(function (college) {
//         html += makeCard(college);
//     });

//     document.querySelector('#list').innerHTML =
//         html || '<div class="empty">No colleges found.</div>';

//     document.querySelector('#count').textContent =
//         `Showing ${colleges.length} Colleges in India`;
// }



// By API
let colleges = [];
const filterDefinitions = [
    { key: 'stream', label: 'Stream', fields: ['stream', 'streams'], single: true, options: ['Commerce & Banking', 'Design', 'Engineering', 'Hotel Management', 'Information Technology', 'Management', 'Medical', 'Science', 'Law', 'Arts & Humanities', 'Agriculture', 'Education'] },
    { key: 'degree', label: 'Degree', fields: ['degree', 'degrees'], options: ['B.A. (Bachelor of Arts)', 'B.Com. (Bachelor of Commerce)', 'B.Des. (Bachelor of Design)', 'B.Sc. (Bachelor of Science)', 'B.Tech. (Bachelor of Technology)', 'B.B.A. (Bachelor of Business Administration)', 'B.C.A. (Bachelor of Computer Applications)', 'M.A. (Master of Arts)', 'M.B.A. (Master of Business Administration)', 'M.C.A. (Master of Computer Applications)', 'M.Sc. (Master of Science)', 'M.Tech. (Master of Technology)', 'M.B.B.S. (Bachelor of Medicine and Bachelor of Surgery)', 'LL.B. (Bachelor of Laws)'] },
    { key: 'state', label: 'State / Union Territory', fields: ['state'], options: [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
        'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
        'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
        'Lakshadweep', 'Puducherry',
    ] },
    { key: 'city', label: 'City', fields: ['city'] },
    { key: 'study_mode', label: 'Study Mode', fields: ['study_mode', 'study_modes', 'mode'], options: ['Regular', 'Full Time', 'Part Time', 'Online', 'Distance', 'Hybrid'] },
    { key: 'specialization', label: 'Specialization', fields: ['specialization', 'specializations'], options: ['Computer Science', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Electronics', 'Data Science', 'Finance', 'Marketing', 'Human Resources', 'Business Analytics', 'Medicine', 'Design'] },
    { key: 'type', label: 'Institute Type', fields: ['type', 'institute_type'], options: ['Public', 'Government', 'Private', 'Deemed', 'Autonomous'] },
    { key: 'exam', label: 'Exam', fields: ['exam', 'exams'], options: ['JEE Main', 'JEE Advanced', 'NEET UG', 'NEET PG', 'CUET', 'CAT', 'MAT', 'GATE', 'CLAT', 'NIFT', 'NID DAT'] },
    { key: 'hostel', label: 'Hostel', fields: ['hostel', 'hostels', 'hostel_type', 'hostel_facility'], options: ['Boys Hostel', 'Girls Hostel'] },
    { key: 'hostel_fee', label: 'Hostel Fee Range', fields: ['hostel_fee', 'hostel_fee_range', 'hostel_fees'], range: true },
    { key: 'facilities', label: 'Facilities', fields: ['facility', 'facilities'], options: ['Boys Hostel', 'Girls Hostel', 'Library', 'Laboratories', 'Sports Facilities', 'Cafeteria', 'Wi-Fi', 'Transport', 'Medical Facilities', 'Auditorium'] },
];
const chosenFilters = Object.fromEntries(filterDefinitions.map((filter) => [filter.key, new Set()]));
const filterSearch = {};
let quickSearchQuery = '';
const normalizeFilterValue = (value) => String(value).toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
const stateAliases = {
    'andaman and nicobar islands': ['andaman & nicobar islands'],
    'dadra and nagar haveli and daman and diu': ['dadra and nagar haveli', 'daman and diu'],
    delhi: ['delhi ncr', 'new delhi', 'nct of delhi', 'national capital territory of delhi'],
    'jammu and kashmir': ['jammu & kashmir', 'j&k'],
    odisha: ['orissa'],
    puducherry: ['pondicherry'],
    uttarakhand: ['uttaranchal'],
};

function normalizedStateValues(value) {
    const canonical = normalizeFilterValue(value);
    const aliases = Object.entries(stateAliases).find(([name]) => normalizeFilterValue(name) === canonical)?.[1] || [];
    return new Set([canonical, ...aliases.map(normalizeFilterValue)]);
}

function stateMatches(actual, selected) {
    const actualValues = normalizedStateValues(actual);
    const selectedValues = normalizedStateValues(selected);
    return [...actualValues].some((value) => selectedValues.has(value));
}
const savedCollegeIds = new Set(
    JSON.parse(localStorage.getItem('savedCollegeIds') || '[]').map(String)
);

async function loadColleges() {
    try {
        const response = await fetch('/api/colleges');

        if (!response.ok) {
            throw new Error('Failed to fetch colleges');
        }

        const result = await response.json();

        if (!Array.isArray(result.data)) {
            throw new Error('Unexpected API response: expected a data array');
        }

        colleges = result.data;

        console.log('Colleges from API:', colleges);

        renderFilters();
        showColleges();
    } catch (error) {
        console.error('Error loading colleges:', error);

        document.querySelector('#list').innerHTML =
            '<div class="empty">Unable to load colleges.</div>';
    }
}

function makeCard(college) {
    const isSaved = savedCollegeIds.has(String(college.id));

    return `
        <article class="card" id="college-${college.id}">
            <div class="card-head">
                <h3>${escapeHtml(college.name)}</h3>

                <div class="icons">
                    <button class="share-college" data-college-id="${college.id}" data-college-name="${escapeHtml(college.name)}" title="Share" aria-label="Share college">&#8599;</button>
                    <button class="save-college ${isSaved ? 'on' : ''}" data-college-id="${college.id}" title="${isSaved ? 'Remove saved college' : 'Save college'}" aria-label="${isSaved ? 'Remove saved college' : 'Save college'}" aria-pressed="${isSaved}">${isSaved ? '&#9829;' : '&#9825;'}</button>
                </div>
            </div>

            <div class="card-body">
                <div class="cimg">
                    ${college.logo
                        ? `<img src="${escapeHtml(college.logo)}" alt="${escapeHtml(college.name)}">`
                        : escapeHtml(college.name)
                    }
                </div>

                <div class="cinfo">
                    <div class="meta">
                        <span class="college-location"><svg class="location-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10.2c0 5.1-7 11.1-7 11.1S5 15.3 5 10.2a7 7 0 1 1 14 0Z"></path><circle cx="12" cy="10" r="2.3"></circle></svg>${escapeHtml(college.city)}, ${escapeHtml(college.state)}</span>
                        <span>⚑ ${escapeHtml(college.type ?? '')}</span>
                    </div>

                    <div class="stats">
                        <div class="stat">
                            <b>${college.established_year ?? '—'}</b>
                            <small>Established</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-foot">
                <nav>
                    <a href="/colleges/${college.id}#college-courses">Courses</a>
                    <a href="/colleges/${college.id}#admission">Admission</a>
                    <a href="/colleges/${college.id}#college-info">Details</a>
                </nav>

                <div>
                    <button class="btn" type="button" data-view-college="${college.id}">View College</button>
                    <a class="btn edit-college" href="/colleges/${college.id}/edit">Edit college</a>
                    <button class="btn delete-college" type="button" data-delete-college="${college.id}" data-college-name="${escapeHtml(college.name)}">Delete</button>
                </div>
            </div>
        </article>
    `;
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[character]));
}

function fieldValues(college, fields) {
    return fields.flatMap((field) => {
        const value = college[field];
        if (value === null || value === undefined || value === '') return [];
        return (Array.isArray(value) ? value : [value]).map(String);
    });
}

function collegeMatchesStream(college, stream) {
    const normalizedStream = normalizeFilterValue(stream);
    const collegeStreams = fieldValues(college, ['stream', 'streams']);
    const courseNames = (college.courses || []).map((course) => course.name).filter(Boolean);
    const streamCourseTerms = {
        engineering: ['engineering', 'btech', 'mtech', 'bachelorofengineering', 'masterofengineering', 'bacheloroftechnology', 'masteroftechnology'],
    }[normalizedStream] || [normalizedStream];

    return collegeStreams.some((value) => normalizeFilterValue(value) === normalizedStream)
        || courseNames.some((name) => streamCourseTerms.some((term) => normalizeFilterValue(name).includes(term)));
}

const hostelFeeRanges = [
    { key: '0-25000', label: 'Below ₹25,000', min: 0, max: 25000 },
    { key: '25000-50000', label: '₹25,000 – ₹50,000', min: 25000, max: 50000 },
    { key: '50000-100000', label: '₹50,000 – ₹1,00,000', min: 50000, max: 100000 },
    { key: '100000+', label: 'Above ₹1,00,000', min: 100000, max: Infinity },
];

function hostelFeeRange(college) {
    const raw = fieldValues(college, ['hostel_fee', 'hostel_fee_range', 'hostel_fees'])[0];
    if (!raw) return null;
    const numberText = raw.match(/[\d,]+(?:\.\d+)?/)?.[0];
    const amount = numberText ? Number(numberText.replace(/,/g, '')) : NaN;
    if (!Number.isFinite(amount)) return null;
    return hostelFeeRanges.find((range) => amount >= range.min && amount < range.max)?.key ?? null;
}

function filterOptions(definition) {
    if (definition.range) {
        return hostelFeeRanges.map((range) => ({
            value: range.key,
            label: range.label,
            count: colleges.filter((college) => hostelFeeRange(college) === range.key).length,
        }));
    }

    const counts = new Map();
    colleges.forEach((college) => {
        new Set(fieldValues(college, definition.fields)).forEach((value) => {
            counts.set(value, (counts.get(value) || 0) + 1);
        });
    });
    const options = new Map();
    (definition.options || []).forEach((label) => {
        const normalizedOption = normalizeFilterValue(label);
        const optionAliases = definition.key === 'state'
            ? normalizedStateValues(label)
            : new Set([normalizedOption]);
        const matchingCount = definition.key === 'stream'
            ? colleges.filter((college) => collegeMatchesStream(college, label)).length
            : [...counts.entries()].reduce((total, [value, count]) => {
                const normalizedValue = normalizeFilterValue(value);
                return total + (optionAliases.has(normalizedValue) ? count : 0);
            }, 0);
        options.set(normalizedOption, { value: label, label, count: matchingCount });
    });
    counts.forEach((count, value) => {
        const normalizedValue = normalizeFilterValue(value);
        const hasOption = (definition.options || []).some((label) => definition.key === 'state'
            ? stateMatches(value, label)
            : normalizeFilterValue(label) === normalizedValue);
        if (!hasOption && !options.has(normalizedValue)) options.set(normalizedValue, { value, label: value, count });
    });
    return [...options.values()].sort((a, b) => a.label.localeCompare(b.label));
}

function renderFilters() {
    const filters = document.querySelector('#filters');
    filters.innerHTML = filterDefinitions.map((definition) => {
        const search = filterSearch[definition.key] || '';
        const options = filterOptions(definition).filter((option) =>
            option.label.toLowerCase().includes(search.toLowerCase())
        );
        const optionMarkup = options.length
            ? options.map((option) => {
                const checked = chosenFilters[definition.key].has(option.value);
                const inputType = definition.single ? 'radio' : 'checkbox';
                const inputName = definition.single ? `name="filter-${definition.key}"` : '';
                const controlClass = definition.single ? 'r' : 'c';
                return `<label class="opt ${controlClass}">
                    <input type="${inputType}" ${inputName} data-filter-key="${definition.key}" value="${escapeHtml(option.value)}" ${checked ? 'checked' : ''}>
                    <i aria-hidden="true"></i>
                    <span class="opt-label">${escapeHtml(option.label)}</span>
                    <span class="opt-count">(${option.count})</span>
                </label>`;
            }).join('')
            : `<p class="filter-empty">${search ? 'No matching options.' : 'No filter data available yet.'}</p>`;

        return `<section class="fbox" id="filter-box-${definition.key}">
            <button class="filter-heading" type="button" data-fold="${definition.key}" aria-expanded="true">
                <span>${definition.label}</span><span class="filter-chevron" aria-hidden="true"></span>
            </button>
            <div class="fbody">
                <input class="filter-search" type="search" data-search-filter="${definition.key}" value="${escapeHtml(search)}" placeholder="Search" aria-label="Search ${definition.label}">
                <div class="opts">${optionMarkup}</div>
            </div>
        </section>`;
    }).join('');
}

function collegeMatchesFilters(college) {
    if (quickSearchQuery) {
        const searchText = [college.name, college.city, college.state, college.type]
            .filter(Boolean).join(' ').toLocaleLowerCase();
        if (!searchText.includes(quickSearchQuery.toLocaleLowerCase())) return false;
    }
    return filterDefinitions.every((definition) => {
        const selected = chosenFilters[definition.key];
        if (!selected.size) return true;
        if (definition.range) return selected.has(hostelFeeRange(college));
        const values = fieldValues(college, definition.fields);
        if (definition.key === 'stream') {
            return [...selected].some((selectedValue) => collegeMatchesStream(college, selectedValue));
        }
        return [...selected].some((selectedValue) => definition.key === 'state'
            ? values.some((value) => stateMatches(value, selectedValue))
            : values.map(normalizeFilterValue).includes(normalizeFilterValue(selectedValue)));
    });
}

function showColleges() {
    const list = document.querySelector('#list');
    const count = document.querySelector('#count');
    const visibleColleges = colleges.filter(collegeMatchesFilters);

    list.innerHTML = visibleColleges.length
        ? visibleColleges.map(makeCard).join('')
        : '<div class="empty">No colleges match these filters.</div>';

    count.textContent = `Showing ${visibleColleges.length} Colleges in India`;
    renderFilterChips();
}

function renderFilterChips() {
    const chips = document.querySelector('#chips');
    const searchChip = quickSearchQuery
        ? `<button class="chip" type="button" data-remove-search>Search: ${escapeHtml(quickSearchQuery)} &#10005;</button>`
        : '';
    chips.innerHTML = searchChip + filterDefinitions.flatMap((definition) =>
        [...chosenFilters[definition.key]].map((value) => {
            const option = filterOptions(definition).find((item) => item.value === value);
            const label = option?.label || value;
            return `<button class="chip" type="button" data-remove-filter="${definition.key}" data-filter-value="${escapeHtml(value)}">${escapeHtml(label)} &#10005;</button>`;
        })
    ).join('');
}

document.querySelector('#filters').addEventListener('change', (event) => {
    const input = event.target.closest('[data-filter-key]');
    if (!input) return;
    const definition = filterDefinitions.find((filter) => filter.key === input.dataset.filterKey);
    if (definition.single) {
        chosenFilters[definition.key].clear();
        if (input.checked) chosenFilters[definition.key].add(input.value);
    } else if (input.checked) {
        chosenFilters[definition.key].add(input.value);
    } else {
        chosenFilters[definition.key].delete(input.value);
    }
    showColleges();
});

document.querySelector('#filters').addEventListener('input', (event) => {
    const search = event.target.closest('[data-search-filter]');
    if (!search) return;
    filterSearch[search.dataset.searchFilter] = search.value;
    renderFilters();
    const replacement = document.querySelector(`[data-search-filter="${search.dataset.searchFilter}"]`);
    replacement?.focus();
    replacement?.setSelectionRange(replacement.value.length, replacement.value.length);
});

document.querySelector('#filters').addEventListener('click', (event) => {
    const heading = event.target.closest('[data-fold]');
    if (!heading) return;
    const box = document.querySelector(`#filter-box-${heading.dataset.fold}`);
    box.classList.toggle('closed');
    heading.setAttribute('aria-expanded', String(!box.classList.contains('closed')));
});

document.querySelector('#chips').addEventListener('click', (event) => {
    if (event.target.closest('[data-remove-search]')) {
        quickSearchQuery = '';
        const searchInput = document.querySelector('#quickSearchInput');
        if (searchInput) searchInput.value = '';
        showColleges();
        return;
    }
    const chip = event.target.closest('[data-remove-filter]');
    if (!chip) return;
    chosenFilters[chip.dataset.removeFilter].delete(chip.dataset.filterValue);
    renderFilters();
    showColleges();
});

const quickSearchInput = document.querySelector('#quickSearchInput');
quickSearchInput?.addEventListener('input', () => {
    quickSearchQuery = quickSearchInput.value.trim();
    showColleges();
});

document.querySelectorAll('input[name="mode"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        showColleges();
    });
});

document.querySelector('#list').addEventListener('click', (event) => {
    const deleteButton = event.target.closest('[data-delete-college]');
    if (deleteButton) {
        deleteCollege(deleteButton.dataset.deleteCollege, deleteButton.dataset.collegeName);
        return;
    }

    const viewButton = event.target.closest('[data-view-college]');
    if (viewButton) {
        window.location.href = `/colleges/${viewButton.dataset.viewCollege}`;
        return;
    }

    const shareButton = event.target.closest('.share-college');
    if (shareButton) {
        shareCollege(shareButton);
        return;
    }

    const saveButton = event.target.closest('.save-college');
    if (!saveButton) return;

    const collegeId = String(saveButton.dataset.collegeId);
    if (savedCollegeIds.has(collegeId)) {
        savedCollegeIds.delete(collegeId);
    } else {
        savedCollegeIds.add(collegeId);
    }

    localStorage.setItem('savedCollegeIds', JSON.stringify([...savedCollegeIds]));
    showColleges();
});

async function deleteCollege(id, collegeName) {
    if (!window.confirm(`Delete ${collegeName}? This cannot be undone.`)) return;

    try {
        const response = await fetch(`/api/colleges/${encodeURIComponent(id)}`, {
            method: 'DELETE',
            headers: { Accept: 'application/json' },
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'Could not delete this college.');
        await loadColleges();
    } catch (error) {
        window.alert(error.message || 'Unable to delete this college.');
    }
}

async function shareCollege(button) {
    const collegeName = button.dataset.collegeName;
    const collegeUrl = new URL(`/colleges#college-${button.dataset.collegeId}`, window.location.origin).href;
    const shareData = {
        title: collegeName,
        text: `Check out ${collegeName}`,
        url: collegeUrl,
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
            return;
        }

        await navigator.clipboard.writeText(collegeUrl);
        showShareMessage(button, 'Link copied');
    } catch (error) {
        if (error.name !== 'AbortError') {
            showShareMessage(button, 'Could not share');
        }
    }
}

function showShareMessage(button, message) {
    const card = button.closest('.card');
    let notice = card.querySelector('.share-notice');

    if (!notice) {
        notice = document.createElement('span');
        notice.className = 'share-notice';
        notice.setAttribute('role', 'status');
        card.querySelector('.card-head').append(notice);
    }

    notice.textContent = message;
    window.setTimeout(() => notice.remove(), 2200);
}

const searchPanel = document.querySelector('#searchPanel');
const searchInput = document.querySelector('#spInput');
const searchResults = document.querySelector('#spResults');
const closeSearchPanel = () => {
    if (searchPanel) searchPanel.hidden = true;
    document.body.style.overflow = '';
};

document.querySelector('#openSearch')?.addEventListener('click', (event) => {
    event.preventDefault();
    if (!searchPanel) return;
    searchPanel.hidden = false;
    document.body.style.overflow = 'hidden';
    searchInput?.focus();
});
document.querySelector('#spClose')?.addEventListener('click', closeSearchPanel);
searchPanel?.addEventListener('click', (event) => {
    if (event.target === searchPanel) closeSearchPanel();
});
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSearchPanel();
});
searchInput?.addEventListener('input', () => {
    const query = searchInput.value.trim().toLocaleLowerCase();
    const matches = colleges.filter((college) =>
        [college.name, college.city, college.state].filter(Boolean).join(' ').toLocaleLowerCase().includes(query)
    ).slice(0, 6);
    searchResults.innerHTML = query
        ? matches.map((college) => `<a class="sp-item" href="/colleges/${encodeURIComponent(college.id)}"><span>${escapeHtml(college.name)}</span><small>${escapeHtml(college.city)}, ${escapeHtml(college.state)}</small></a>`).join('')
        : '';
    if (query && !matches.length) searchResults.innerHTML = '<div class="sp-empty">No colleges found.</div>';
});

const topButton = document.querySelector('#toTop');
if (topButton) {
    window.addEventListener('scroll', () => { topButton.style.display = window.scrollY > 400 ? 'flex' : 'none'; });
    topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

loadColleges();