// ==================== EMPLOYEE DATA ====================
const employeeData = {
  1: {
    name:"James Morrison",initials:"JM",dept:"Finance",risk:87,riskLevel:"CRITICAL",
    trend:"+22",trendDir:"up",trustScore:13,
    factors:{dataTransfer:94,afterHours:78,appAnomaly:67,network:45,login:31},
    radarCurrent:[94,45,67,71,88,78],radarBaseline:[30,65,72,68,35,55],
    productivity:{work:52,personal:31,idle:17},topFactor:"Mass file operations",
    timeline:[
      {time:"08:14",type:"safe",icon:"✅",text:"Login — Corporate Network 192.168.1.45"},
      {time:"08:31",type:"safe",icon:"✅",text:"Apps opened: Microsoft Excel, Outlook 365"},
      {time:"09:45",type:"safe",icon:"✅",text:"Accessed: /Finance/Q4_Projections/ — 12 files"},
      {time:"10:22",type:"safe",icon:"✅",text:"Web session: sharepoint.company.com — 34 min"},
      {time:"11:22",type:"warning",icon:"⚠️",text:"USB Storage Device Connected — Kingston 64GB"},
      {time:"11:23",type:"critical",icon:"🚫",text:"MASS FILE ACCESS: 847 files accessed in 4 minutes"},
      {time:"11:27",type:"critical",icon:"🚫",text:"BLOCKED: Upload attempt to dropbox.com"},
      {time:"11:28",type:"critical",icon:"🚫",text:"BLOCKED: Upload attempt to wetransfer.com"},
      {time:"12:03",type:"idle",icon:"💤",text:"Idle — Lunch Break (47 minutes)"},
      {time:"13:15",type:"safe",icon:"✅",text:"Session resumed — normal activity"},
      {time:"14:15",type:"warning",icon:"⚠️",text:"Login from new IP: 10.4.22.91 unknown subnet"},
      {time:"14:18",type:"warning",icon:"⚠️",text:"Accessed: /Finance/Payroll/2024/ — 23 files"},
      {time:"14:45",type:"warning",icon:"⚠️",text:"Clipboard: Large text block copied 2.4 KB"}
    ]
  },
  2: {
    name:"Rachel Chen",initials:"RC",dept:"IT",risk:64,riskLevel:"HIGH",
    trend:"-5",trendDir:"down",trustScore:36,
    factors:{dataTransfer:42,afterHours:71,appAnomaly:38,network:55,login:67},
    radarCurrent:[42,71,38,55,45,67],radarBaseline:[35,40,65,60,42,38],
    productivity:{work:68,personal:18,idle:14},topFactor:"After-hours logins",
    timeline:[
      {time:"07:45",type:"warning",icon:"⚠️",text:"Login at 07:45 — earlier than usual baseline 09:00"},
      {time:"08:12",type:"safe",icon:"✅",text:"Accessed: IT Admin Console — routine check"},
      {time:"09:30",type:"safe",icon:"✅",text:"Software deployment — 12 endpoints patched"},
      {time:"22:15",type:"warning",icon:"⚠️",text:"After-hours login — 22:15 from office IP"},
      {time:"22:18",type:"warning",icon:"⚠️",text:"Accessed: /IT/Admin/UserCredentials/ directory"},
      {time:"22:45",type:"safe",icon:"✅",text:"Logout"}
    ]
  },
  3: {
    name:"Amit Patel",initials:"AP",dept:"Legal",risk:71,riskLevel:"HIGH",
    trend:"+8",trendDir:"up",trustScore:29,
    factors:{dataTransfer:61,afterHours:44,appAnomaly:72,network:58,login:35},
    radarCurrent:[61,44,72,58,77,35],radarBaseline:[28,55,45,52,30,62],
    productivity:{work:61,personal:24,idle:15},topFactor:"Email forwarding spike",
    timeline:[
      {time:"09:01",type:"safe",icon:"✅",text:"Login — standard corporate network"},
      {time:"10:14",type:"safe",icon:"✅",text:"Accessed: /Legal/Contracts/ActiveCases/ — 8 files"},
      {time:"11:30",type:"warning",icon:"⚠️",text:"USB device connected — SanDisk 128GB"},
      {time:"11:35",type:"warning",icon:"⚠️",text:"14 contract files copied to USB — policy review"},
      {time:"13:00",type:"safe",icon:"✅",text:"Lunch break — idle 55 minutes"},
      {time:"14:22",type:"warning",icon:"⚠️",text:"Mass email forward: 23 case documents to personal Gmail"}
    ]
  },
  4: {
    name:"Karen Williams",initials:"KW",dept:"HR",risk:42,riskLevel:"MEDIUM",
    trend:"+3",trendDir:"up",trustScore:58,
    factors:{dataTransfer:28,afterHours:22,appAnomaly:45,network:51,login:18},
    radarCurrent:[28,22,45,51,35,18],radarBaseline:[25,20,38,45,30,22],
    productivity:{work:55,personal:33,idle:12},topFactor:"Personal web usage",
    timeline:[
      {time:"09:15",type:"safe",icon:"✅",text:"Login — standard session"},
      {time:"10:00",type:"safe",icon:"✅",text:"Accessed: /HR/Employee_Records/ — routine"},
      {time:"11:30",type:"warning",icon:"⚠️",text:"Personal browsing: instagram.com youtube.com — 45 min"},
      {time:"14:00",type:"safe",icon:"✅",text:"HR portal activity — performance reviews"},
      {time:"17:00",type:"safe",icon:"✅",text:"Logout — end of business hours"}
    ]
  },
  5: {
    name:"Miguel Torres",initials:"MT",dept:"Engineering",risk:29,riskLevel:"LOW",
    trend:"-7",trendDir:"down",trustScore:81,
    factors:{dataTransfer:22,afterHours:15,appAnomaly:18,network:31,login:12},
    radarCurrent:[22,15,18,31,25,12],radarBaseline:[25,18,22,35,28,15],
    productivity:{work:74,personal:14,idle:12},topFactor:"Normal activity patterns",
    timeline:[
      {time:"09:00",type:"safe",icon:"✅",text:"Login — standard workstation"},
      {time:"09:15",type:"safe",icon:"✅",text:"IDE opened: VS Code, GitHub Desktop"},
      {time:"11:00",type:"safe",icon:"✅",text:"Git commits: 7 pushes to internal repository"},
      {time:"12:30",type:"idle",icon:"💤",text:"Lunch break — 60 minutes"},
      {time:"13:30",type:"safe",icon:"✅",text:"Code review session — 2 pull requests approved"},
      {time:"17:30",type:"safe",icon:"✅",text:"Logout — within normal hours"}
    ]
  }
};

// ==================== CLOCK ====================
function updateClock() {
  const now = new Date();
  const h = String(now.getUTCHours()).padStart(2,'0');
  const m = String(now.getUTCMinutes()).padStart(2,'0');
  const s = String(now.getUTCSeconds()).padStart(2,'0');
  const el = document.getElementById('live-clock');
  if(el) el.textContent = `${h}:${m}:${s} UTC`;
}
updateClock();
setInterval(updateClock, 1000);

// ==================== TOAST ====================
function showToast(msg, type='info') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(40px)'; t.style.transition='all 0.3s'; setTimeout(()=>t.remove(),300); }, 3000);
}

function formatTime() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
}

// ==================== SIDEBAR NAV ====================
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
    item.classList.add('active');
    const mod = item.getAttribute('data-module');
    if(mod) showModule(mod);
  });
});

function showModule(name) {
  document.querySelectorAll('.module').forEach(m=>m.classList.remove('active'));
  const target = document.getElementById(name+'-module');
  if(target) {
    target.classList.add('active');
    // Re-trigger animations
    target.querySelectorAll('.panel-card').forEach((card,i)=>{
      card.style.animation='none';
      card.style.opacity='0';
      setTimeout(()=>{
        card.style.animation=`fadeInUp 0.5s ease ${i*0.1}s forwards`;
      },10);
    });
  }
  document.getElementById('content-area').scrollTop = 0;

  if(name==='employee') renderEmployeePanel(employeeData[document.getElementById('employee-select').value||1]);
  if(name==='analytics') {
    setTimeout(()=>{
      document.querySelectorAll('.dept-fill').forEach(el=>{
        el.style.width=el.getAttribute('data-width');
      });
    },200);
  }
  if(name==='threat') {
    setTimeout(()=>{ document.getElementById('conf-fill').style.width='94.2%'; },300);
    startTypewriter();
  }
  if(name==='protection') {
    setTimeout(()=>{ document.getElementById('vault-fill').style.width='42.35%'; },400);
  }
}

// ==================== RISK SCORE ANIMATION ====================
let currentScore=0, targetScore=73;
const circumference = 2*Math.PI*80;
function animateRiskScore() {
  const arc = document.getElementById('risk-arc');
  const display = document.getElementById('risk-score-display');
  if(!arc||!display) return;
  const timer = setInterval(()=>{
    if(currentScore < targetScore) currentScore++;
    display.textContent = currentScore;
    const offset = circumference - (currentScore/100)*circumference;
    arc.style.strokeDashoffset = offset;
    let color = currentScore>60 ? '#ff3355' : currentScore>30 ? '#ffaa00' : '#00ff88';
    arc.style.stroke = color;
    if(currentScore>=targetScore) clearInterval(timer);
  },30);
}

// Last updated counter
let lastUpdatedSec = 3;
setInterval(()=>{ lastUpdatedSec++; const el=document.getElementById('last-updated'); if(el) el.textContent=lastUpdatedSec+'s ago'; },1000);

// ==================== WAVEFORM ====================
let waveOffset = 0;
function generateWavePoints(w,h,amp,freq,off,noise) {
  let pts=[];
  for(let x=0;x<=w;x+=4) {
    let y = h/2 + amp*Math.sin((x*freq+off)*Math.PI/180) + noise*(Math.random()-0.5);
    pts.push(x+','+y);
  }
  return pts.join(' ');
}
function animateWaveform() {
  waveOffset += 2;
  const svg = document.getElementById('waveform-svg');
  if(!svg) { requestAnimationFrame(animateWaveform); return; }
  const w = svg.getBoundingClientRect().width || 800;
  const bl = document.getElementById('baseline-wave');
  const cw = document.getElementById('current-wave');
  if(bl) bl.setAttribute('points', generateWavePoints(w,120,15,1.2,waveOffset,3));
  if(cw) cw.setAttribute('points', generateWavePoints(w,120,35,1.5,waveOffset*1.3,8));
  requestAnimationFrame(animateWaveform);
}
requestAnimationFrame(animateWaveform);

// ==================== EMPLOYEE PANEL ====================
function riskColor(v) {
  if(v>80) return 'var(--red)';
  if(v>60) return '#ff6400';
  if(v>40) return 'var(--amber)';
  return 'var(--green)';
}
function trustColor(v) {
  if(v<30) return 'var(--red)';
  if(v<60) return 'var(--amber)';
  return 'var(--green)';
}
function factorColor(v) {
  if(v>70) return 'var(--red)';
  if(v>40) return 'var(--amber)';
  return 'var(--green)';
}

function renderEmployeePanel(emp) {
  // Trust ring
  const ring = document.getElementById('trust-ring');
  const scoreNum = document.getElementById('trust-score-number');
  const trendEl = document.getElementById('trust-trend');
  if(ring&&scoreNum&&trendEl) {
    const c = 2*Math.PI*65;
    const offset = c*(1-emp.trustScore/100);
    ring.style.strokeDasharray = c;
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = trustColor(emp.trustScore);
    scoreNum.textContent = emp.trustScore;
    scoreNum.style.fill = trustColor(emp.trustScore);
    trendEl.textContent = (emp.trendDir==='up'?'↑ ':'↓ ')+emp.trend+' pts';
    trendEl.style.color = emp.trendDir==='up' ? 'var(--red)' : 'var(--green)';
  }

  // Factor bars
  const factorNames = {dataTransfer:'Data Transfer',afterHours:'After-hours',appAnomaly:'App Anomaly',network:'Network',login:'Login Pattern'};
  const fb = document.getElementById('factor-bars');
  if(fb) {
    fb.innerHTML = '';
    Object.keys(emp.factors).forEach(k=>{
      const v = emp.factors[k];
      fb.innerHTML += `<div class="factor-bar">
        <div class="factor-top"><span class="factor-name">${factorNames[k]}</span><span class="factor-pct" style="color:${factorColor(v)}">${v}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:0%;background:${factorColor(v)}" data-w="${v}%"></div></div>
      </div>`;
    });
    setTimeout(()=>{
      fb.querySelectorAll('.bar-fill').forEach(el=>{el.style.width=el.getAttribute('data-w');});
    },100);
  }

  // Timeline
  const tl = document.getElementById('activity-timeline');
  if(tl) {
    tl.innerHTML = '';
    emp.timeline.forEach(e=>{
      tl.innerHTML += `<div class="tl-item ${e.type}">
        <span class="tl-time">${e.time}</span>
        <span class="tl-icon">${e.icon}</span>
        <span class="tl-text">${e.text}</span>
      </div>`;
    });
  }

  // Donut chart
  renderDonut(emp);

  // Dept badge
  const db = document.getElementById('emp-dept-badge');
  if(db) {
    db.innerHTML = `<span class="badge-${emp.riskLevel.toLowerCase()}">${emp.riskLevel}</span>
      <span style="font-size:12px;color:var(--text-dim)">${emp.dept} · Top Factor: ${emp.topFactor}</span>`;
  }

  // Radar
  renderRadar(emp);
}

function renderDonut(emp) {
  const svg = document.getElementById('donut-segments');
  if(!svg) return;
  const segments = [
    {val:emp.productivity.work,color:'var(--blue)',label:'Work'},
    {val:emp.productivity.personal,color:'var(--purple)',label:'Personal'},
    {val:emp.productivity.idle,color:'rgba(255,255,255,0.15)',label:'Idle'}
  ];
  const cx=80,cy=80,r=55,sw=20;
  const c=2*Math.PI*r;
  let offset=0;
  svg.innerHTML='';
  segments.forEach(seg=>{
    const frac=seg.val/100;
    const dash=frac*c;
    const co=c-dash;
    const el=document.createElementNS('http://www.w3.org/2000/svg','circle');
    el.setAttribute('cx',cx);el.setAttribute('cy',cy);el.setAttribute('r',r);
    el.setAttribute('fill','none');el.setAttribute('stroke',seg.color);el.setAttribute('stroke-width',sw);
    el.setAttribute('stroke-dasharray',`${dash} ${c-dash}`);
    el.setAttribute('stroke-dashoffset',-offset*c/100);
    el.setAttribute('transform',`rotate(-90 ${cx} ${cy})`);
    svg.appendChild(el);
    offset+=seg.val;
  });
  document.getElementById('donut-hours').textContent = '8.5h';
  const legend=document.getElementById('donut-legend');
  if(legend) {
    legend.innerHTML='';
    const names=['Work Applications','Personal/Non-work','Idle Time'];
    const colors=['var(--blue)','var(--purple)','rgba(150,150,150,0.6)'];
    [emp.productivity.work,emp.productivity.personal,emp.productivity.idle].forEach((v,i)=>{
      legend.innerHTML+=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <div style="width:12px;height:12px;background:${colors[i]};border-radius:2px;flex-shrink:0"></div>
        <span style="font-size:11px;color:var(--text-secondary);flex:1">${names[i]}</span>
        <span style="font-family:var(--font-mono);font-size:12px;color:var(--cyan)">${v}%</span>
      </div>`;
    });
  }
}

function calculateRadarPoints(values, maxR) {
  return values.map((v,i)=>{
    const angle=(i*60-90)*Math.PI/180;
    const radius=(v/100)*maxR;
    return (radius*Math.cos(angle))+','+(radius*Math.sin(angle));
  }).join(' ');
}

function renderRadar(emp) {
  const grid=document.getElementById('radar-grid');
  const axes=document.getElementById('radar-axes');
  const labels=document.getElementById('radar-labels');
  const baseline=document.getElementById('radar-baseline');
  const current=document.getElementById('radar-current');
  const dots=document.getElementById('radar-dots');
  if(!grid) return;

  const axisLabels=['Data Transfer','App Usage','Login Patterns','Network Access','File Operations','Time Behavior'];
  const maxR=120;

  // Grid hexagons
  grid.innerHTML='';
  for(let lvl=1;lvl<=5;lvl++) {
    const r=lvl*maxR/5;
    const pts=Array.from({length:6},(_,i)=>{
      const a=(i*60-90)*Math.PI/180;
      return (r*Math.cos(a))+','+(r*Math.sin(a));
    }).join(' ');
    const poly=document.createElementNS('http://www.w3.org/2000/svg','polygon');
    poly.setAttribute('points',pts);
    poly.setAttribute('fill','none');
    poly.setAttribute('stroke','rgba(0,212,255,0.1)');
    poly.setAttribute('stroke-width','1');
    grid.appendChild(poly);
  }

  // Axes
  axes.innerHTML='';
  for(let i=0;i<6;i++) {
    const a=(i*60-90)*Math.PI/180;
    const x=maxR*Math.cos(a),y=maxR*Math.sin(a);
    const line=document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',0);line.setAttribute('y1',0);
    line.setAttribute('x2',x);line.setAttribute('y2',y);
    line.setAttribute('stroke','rgba(0,212,255,0.15)');line.setAttribute('stroke-width','1');
    axes.appendChild(line);
  }

  // Labels
  labels.innerHTML='';
  axisLabels.forEach((lbl,i)=>{
    const a=(i*60-90)*Math.PI/180;
    const r=maxR+20;
    const x=r*Math.cos(a),y=r*Math.sin(a);
    const text=document.createElementNS('http://www.w3.org/2000/svg','text');
    text.setAttribute('x',x);text.setAttribute('y',y+3);
    text.setAttribute('text-anchor','middle');
    text.setAttribute('font-family','IBM Plex Mono');
    text.setAttribute('font-size','9');
    text.setAttribute('fill','#3a5570');
    text.textContent=lbl;
    labels.appendChild(text);
  });

  // Polygons
  baseline.setAttribute('points',calculateRadarPoints(emp.radarBaseline,maxR));
  current.setAttribute('points',calculateRadarPoints(emp.radarCurrent,maxR));

  // Dots
  dots.innerHTML='';
  emp.radarCurrent.forEach((v,i)=>{
    const a=(i*60-90)*Math.PI/180;
    const r=(v/100)*maxR;
    const x=r*Math.cos(a),y=r*Math.sin(a);
    const circle=document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('cx',x);circle.setAttribute('cy',y);circle.setAttribute('r',4);
    circle.setAttribute('fill','#ff3355');
    dots.appendChild(circle);
  });
}

// ==================== HEATMAP ====================
const departments=['Finance','HR','Legal','IT','Engineering','Sales','Marketing','Operations','Executive','Compliance'];
const destinations=['Email','Cloud','USB','Print','Internal','Ext API','Browser','Database','Net Share','Remote'];
const hmData=[
  [1,4,4,2,2,3,1,2,1,2],
  [2,1,1,3,2,1,2,3,1,1],
  [3,2,2,3,1,2,2,1,2,1],
  [1,2,1,1,2,2,1,2,1,4],
  [1,2,1,1,3,2,1,3,2,2],
  [2,2,1,1,2,2,3,1,1,1],
  [1,2,0,1,2,1,3,1,1,1],
  [1,1,2,2,2,1,1,2,3,1],
  [1,1,1,1,1,1,1,1,1,2],
  [1,1,0,1,2,1,1,2,1,1]
];
const hmColors=['rgba(10,22,40,1)','rgba(0,60,120,0.4)','rgba(0,100,200,0.6)','rgba(0,180,255,0.75)','rgba(255,51,85,0.85)'];
const hmRisk=['NONE','LOW','MEDIUM','HIGH','CRITICAL'];
const hmTimes=['12min','8min','24min','3min','2min','15min','5min','31min','1hr','45min'];

function buildHeatmap() {
  const grid=document.getElementById('heatmap-grid');
  if(!grid) return;
  grid.innerHTML='';
  // Empty corner
  const corner=document.createElement('div');
  corner.className='hm-header';
  grid.appendChild(corner);
  // Column headers
  destinations.forEach(d=>{
    const h=document.createElement('div');
    h.className='hm-header';
    h.textContent=d;
    grid.appendChild(h);
  });
  // Rows
  departments.forEach((dept,ri)=>{
    const lbl=document.createElement('div');
    lbl.className='hm-row-label';
    lbl.textContent=dept;
    grid.appendChild(lbl);
    destinations.forEach((dest,ci)=>{
      const v=hmData[ri][ci];
      const cell=document.createElement('div');
      cell.className='hm-cell';
      cell.style.background=hmColors[v];
      cell.addEventListener('mouseenter',e=>{
        const tt=document.getElementById('hm-tooltip');
        tt.innerHTML=`<strong style="color:var(--cyan)">${dept} → ${dest}</strong><br><span style="color:var(--text-dim)">Events: </span><span style="color:var(--text-primary)">${v*12+3}</span><br><span style="color:var(--text-dim)">Risk: </span><span style="color:${hmColors[v]}">${hmRisk[v]}</span><br><span style="color:var(--text-dim)">Last: </span><span style="color:var(--text-primary)">${hmTimes[ci]}</span>`;
        tt.style.display='block';
        tt.style.left=(e.clientX+12)+'px';
        tt.style.top=(e.clientY+12)+'px';
      });
      cell.addEventListener('mousemove',e=>{
        const tt=document.getElementById('hm-tooltip');
        tt.style.left=(e.clientX+12)+'px';
        tt.style.top=(e.clientY+12)+'px';
      });
      cell.addEventListener('mouseleave',()=>{
        document.getElementById('hm-tooltip').style.display='none';
      });
      grid.appendChild(cell);
    });
  });
}

// ==================== DEPT BARS ====================
const deptData=[
  {name:'Finance',risk:87},{name:'Legal',risk:71},{name:'IT',risk:64},
  {name:'Sales',risk:51},{name:'HR',risk:42},{name:'Operations',risk:38},
  {name:'Marketing',risk:31},{name:'Engineering',risk:29},{name:'Executive',risk:22},{name:'Compliance',risk:18}
];

function buildDeptBars() {
  const container=document.getElementById('dept-bars');
  if(!container) return;
  container.innerHTML='<div style="position:relative">';
  deptData.forEach(d=>{
    const color = d.risk>80?'var(--red)':d.risk>60?'var(--amber)':'var(--cyan)';
    const gradient = d.risk>80?'linear-gradient(90deg,var(--blue),var(--red))':d.risk>60?'linear-gradient(90deg,var(--blue),var(--amber))':'linear-gradient(90deg,var(--blue),var(--cyan))';
    const glow = d.risk>60?`box-shadow:0 0 8px ${d.risk>80?'rgba(255,51,85,0.4)':'rgba(255,170,0,0.3)'}`:'' ;
    container.innerHTML+=`<div class="dept-bar-row">
      <span class="dept-name">${d.name}</span>
      <div class="dept-track">
        <div class="dept-fill" data-width="${d.risk}%" style="background:${gradient};${glow}"></div>
      </div>
      <span class="dept-val" style="color:${color}">${d.risk}</span>
      ${d.risk>60?'<span style="color:var(--amber);font-size:12px">⚠</span>':'<span style="width:16px"></span>'}
    </div>`;
  });
  setTimeout(()=>{
    container.querySelectorAll('.dept-fill').forEach(el=>el.style.width=el.getAttribute('data-width'));
  },300);
}

// ==================== THREAT FEED ====================
const feedMessages=[
  "File system scan initiated — WS-FIN-0234",
  "Outbound connection blocked — 185.234.218.x",
  "Clipboard pattern matched SSN format — HR-WS-0091",
  "USB write attempt blocked — WS-LEG-0017",
  "Login from new geolocation — Tokyo JP",
  "Mass email forward detected — 847 recipients",
  "DLP policy triggered — file contains credit card data",
  "Admin console access — off-hours 02:34 AM",
  "Suspicious DNS query — malware-c2.ru blocked",
  "Keylogger pattern detected — WS-MKTG-0055",
  "Large file archive created — finance workstation",
  "Screen capture tool launched — HR terminal",
  "VPN connection from blacklisted IP range",
  "Ransomware signature match — quarantine initiated",
  "Privilege escalation attempt — IT workstation",
  "Data copied to personal cloud sync folder",
  "Browser extension accessing clipboard — Chrome",
  "Anomalous print job — 847 pages — off hours",
  "Network scan initiated from internal endpoint",
  "Certificate pinning bypass attempt detected"
];
const severities=['CRITICAL','HIGH','HIGH','MEDIUM','MEDIUM','LOW'];

function initFeed() {
  const feed=document.getElementById('threat-feed');
  if(!feed) return;
  feed.innerHTML='';
  for(let i=0;i<8;i++) prependFeedItem();
}

function prependFeedItem() {
  const feed=document.getElementById('threat-feed');
  if(!feed) return;
  const msg=feedMessages[Math.floor(Math.random()*feedMessages.length)];
  const sev=severities[Math.floor(Math.random()*severities.length)];
  const t=formatTime();
  const sevClass=sev==='CRITICAL'?'badge-critical':sev==='HIGH'?'badge-high':sev==='MEDIUM'?'badge-medium':'badge-low';
  const item=document.createElement('div');
  item.className='feed-item';
  item.innerHTML=`<div class="feed-meta"><span class="feed-time">${t}</span><span class="${sevClass}">${sev}</span></div><div class="feed-text">${msg}</div>`;
  feed.insertBefore(item,feed.firstChild);
  item.classList.add('new-flash');
  setTimeout(()=>item.classList.remove('new-flash'),600);
  while(feed.children.length>15) feed.removeChild(feed.lastChild);
}

setInterval(prependFeedItem, 3000);
initFeed();

// ==================== AI TYPEWRITER ====================
const aiText = `Behavioral sequence matches known data exfiltration pattern.
Deviation from 6-month baseline: +847% on file operations.
Mass access of /Finance/ directory outside normal work pattern.
Upload attempts to 2 external file-sharing services blocked.
Pattern similarity to 3 confirmed insider threat cases: 94.2%
Recommended action: IMMEDIATE DEVICE ISOLATION`;

let typeIdx=0, typeTimer=null;
function startTypewriter() {
  const el=document.getElementById('ai-typewriter');
  if(!el) return;
  el.textContent='';
  typeIdx=0;
  if(typeTimer) clearInterval(typeTimer);
  typeTimer=setInterval(()=>{
    if(typeIdx<aiText.length) { el.textContent+=aiText[typeIdx++]; }
    else clearInterval(typeTimer);
  },18);
}

// ==================== GANTT ====================
function buildGantt() {
  const tracks={
    'gantt-files':[
      {left:2,width:20,color:'rgba(0,212,255,0.4)',label:'Normal'},
      {left:40,width:4,color:'rgba(255,51,85,0.8)',label:'MASS'},
      {left:45,width:25,color:'rgba(0,212,255,0.3)',label:'Resume'}
    ],
    'gantt-network':[
      {left:5,width:30,color:'rgba(0,255,136,0.4)',label:'Safe'},
      {left:42,width:4,color:'rgba(255,51,85,0.9)',label:'BLOCKED'},
      {left:50,width:20,color:'rgba(0,102,255,0.3)',label:'VPN'}
    ],
    'gantt-auth':[
      {left:0,width:5,color:'rgba(0,255,136,0.4)',label:'Login'},
      {left:55,width:3,color:'rgba(255,170,0,0.7)',label:'New IP'}
    ],
    'gantt-usb':[
      {left:40,width:8,color:'rgba(255,51,85,0.7)',label:'USB IN'}
    ]
  };
  Object.keys(tracks).forEach(id=>{
    const track=document.getElementById(id);
    if(!track) return;
    track.style.position='relative';
    track.style.minWidth='200px';
    tracks[id].forEach(b=>{
      const div=document.createElement('div');
      div.className='gantt-block';
      div.style.left=b.left+'%';
      div.style.width=b.width+'%';
      div.style.background=b.color;
      div.style.color='rgba(255,255,255,0.8)';
      div.textContent=b.label;
      div.title=b.label;
      track.appendChild(div);
    });
    // NOW line
    const now=document.createElement('div');
    now.className='gantt-now';
    now.style.right='0';
    now.style.position='absolute';
    now.style.top='0';
    now.style.bottom='0';
    now.style.width='1px';
    now.style.background='var(--red)';
    now.style.borderRight='1px dashed var(--red)';
    track.appendChild(now);
  });
}

// ==================== RESPONSE ACTIONS ====================
const actionConfig = {
  isolate:{loading:'ISOLATING...',icon:'⟳',doneIcon:'✅',doneTitle:'DEVICE ISOLATED',doneSub:'WS-FIN-0234 moved to QUARANTINE-01 VLAN',log:'Device network isolation executed — QUARANTINE-01 VLAN'},
  freeze:{loading:'FREEZING...',icon:'⟳',doneIcon:'❄',doneTitle:'FILE SYSTEM FROZEN',doneSub:'Read-only enforced — 847 files locked',log:'File system frozen — read-only mode enforced'},
  suspend:{loading:'SUSPENDING...',icon:'⟳',doneIcon:'🚫',doneTitle:'ACCOUNT SUSPENDED',doneSub:'jmorrison@company.com disabled. HR notified.',log:'Account jmorrison@company.com suspended — HR notification sent'}
};

const actionsDone = {isolate:false,freeze:false,suspend:false};

function handleAction(type) {
  if(actionsDone[type]) return;
  const btn=document.getElementById('btn-'+type);
  const icon=document.getElementById('icon-'+type);
  const title=document.getElementById('title-'+type);
  const sub=document.getElementById('sub-'+type);
  const cfg=actionConfig[type];
  icon.textContent='⟳';
  icon.style.animation='spin 0.8s linear infinite';
  title.textContent=cfg.loading;
  btn.style.opacity='0.7';
  setTimeout(()=>{
    icon.style.animation='none';
    icon.textContent=cfg.doneIcon;
    title.textContent=cfg.doneTitle;
    title.style.color='var(--green)';
    sub.textContent=cfg.doneSub;
    btn.style.background='rgba(0,255,136,0.1)';
    btn.style.border='1px solid rgba(0,255,136,0.4)';
    btn.style.opacity='1';
    actionsDone[type]=true;
    addLogEntry(cfg.log);
    showToast(cfg.doneTitle,'success');
  },2000);
}

function addLogEntry(msg) {
  const log=document.getElementById('action-log');
  if(!log) return;
  const e=document.createElement('div');
  e.className='log-entry';
  e.innerHTML=`<span>${formatTime()}</span>${msg}`;
  log.appendChild(e);
  log.scrollTop=log.scrollHeight;
}

// ==================== CLIPBOARD PURGE ====================
let purgeSeconds=0;
setInterval(()=>{ purgeSeconds++; const el=document.getElementById('purge-timer'); if(el) el.textContent=purgeSeconds+'s ago'; },1000);

setInterval(()=>{
  purgeSeconds=0;
  const cards=document.querySelectorAll('#clipboard-grid .clip-card:not(.purged)');
  const sensitiveCards=Array.from(cards).filter(c=>!c.classList.contains('purged')&&c.querySelector('.clip-status.sensitive'));
  if(sensitiveCards.length>0) {
    const card=sensitiveCards[0];
    card.classList.add('purged');
    showToast('Sensitive clipboard item auto-purged','warning');
  }
},8000);

// ==================== SHADOW SYNC TIMERS ====================
const syncTimes=[0,2,5,1];
setInterval(()=>{
  syncTimes[0]++; syncTimes[1]++; syncTimes[2]++; syncTimes[3]++;
  if(Math.random()>0.7) { syncTimes[0]=0; }
  if(Math.random()>0.8) { syncTimes[3]=0; }
  ['st1','st2','st3','st4'].forEach((id,i)=>{
    const el=document.getElementById(id);
    if(el) el.textContent=syncTimes[i]+'s ago';
  });
},3000);

// ==================== RISK SCORECARDS ====================
function buildRiskCards() {
  const container=document.getElementById('risk-cards');
  if(!container) return;
  const colors={CRITICAL:'#ff3355',HIGH:'#ff6400',MEDIUM:'#ffaa00',LOW:'#00ff88'};
  Object.values(employeeData).forEach(emp=>{
    const col=colors[emp.riskLevel];
    container.innerHTML+=`<div class="risk-card">
      <div class="risk-card-avatar" style="background:${col}33;border:2px solid ${col}">${emp.initials}</div>
      <div class="risk-card-name">${emp.name}</div>
      <div class="risk-card-dept">${emp.dept}</div>
      <div class="risk-score-big" style="color:${col}">${emp.risk}</div>
      <div style="text-align:center"><span class="badge-${emp.riskLevel.toLowerCase()}">${emp.riskLevel}</span></div>
      <div class="risk-trend" style="color:${emp.trendDir==='up'?'var(--red)':'var(--green)'}">${emp.trendDir==='up'?'↑':'↓'} ${emp.trend} pts</div>
      <div class="risk-factor">${emp.topFactor}</div>
      <hr class="risk-divider">
      <div class="trust-chip">Trust Score: ${emp.trustScore}/100</div>
    </div>`;
  });
}

// ==================== WEEK TABS ====================
function setWeekTab(el,period) {
  document.querySelectorAll('.week-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  // Slightly vary chart appearance based on week
  const noise=period==='this'?0:period==='last'?5:10;
  showToast(`Showing ${period==='this'?'this week':period==='last'?'last week':'last month'} data`,'info');
}

// ==================== SLIDER ====================
function updateSlider(el, badgeId) {
  const badge=document.getElementById(badgeId);
  if(badge) { badge.textContent=el.value; badge.style.color=el.value>75?'var(--red)':el.value>50?'var(--amber)':'var(--cyan)'; }
}

// ==================== MODAL ====================
function closeModal() { document.getElementById('apply-modal').classList.remove('active'); }

// ==================== TOGGLE WARNING ====================
function toggleWarning(cb) {
  if(!cb.checked) showToast('⚠ Warning: Monitoring gap created — coverage reduced','warning');
}

// ==================== EXPORT ====================
function exportAnim(btn,type) {
  const orig=btn.textContent;
  btn.textContent='Generating...';
  btn.style.color='#00d4ff';
  btn.disabled=true;
  
  setTimeout(()=>{ 
    btn.textContent='Done ✓'; 
    btn.style.color='#00ff88'; 
    
    // Generate actual PDF export
    if(type==='PDF') generatePDFExport();
    else if(type==='CSV') generateCSVExport();
    else showToast(`${type} export scheduled`, 'success');
    
    setTimeout(()=>{ 
      btn.textContent=orig; 
      btn.style.color=''; 
      btn.disabled=false;
    }, 2000); 
  }, 2000);
  
  showToast(`Generating ${type} export...`,'info');
}

function generatePDFExport() {
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();
  
  const reportHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>SafeOffice Security Report</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: white;
          color: #333;
          line-height: 1.6;
        }
        .container { 
          max-width: 900px;
          margin: 0 auto;
          padding: 40px;
          background: white;
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #0066ff;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          font-size: 32px;
          color: #0066ff;
          margin-bottom: 5px;
        }
        .header p {
          color: #666;
          font-size: 14px;
        }
        .timestamp {
          color: #999;
          font-size: 12px;
          margin-top: 10px;
        }
        .section {
          margin-bottom: 30px;
          page-break-inside: avoid;
        }
        .section h2 {
          font-size: 18px;
          color: #0066ff;
          margin-bottom: 12px;
          border-left: 4px solid #0066ff;
          padding-left: 10px;
        }
        .metrics {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        .metric-box {
          background: #f5f5f5;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #0066ff;
        }
        .metric-label {
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .metric-value {
          font-size: 24px;
          font-weight: bold;
          color: #0066ff;
        }
        .risk-critical { color: #ff3355; }
        .risk-high { color: #ff6400; }
        .risk-medium { color: #ffaa00; }
        .risk-low { color: #00ff88; }
        .employee-list {
          width: 100%;
          border-collapse: collapse;
        }
        .employee-list th {
          background: #0066ff;
          color: white;
          padding: 10px;
          text-align: left;
          font-weight: 600;
        }
        .employee-list td {
          padding: 12px 10px;
          border-bottom: 1px solid #eee;
        }
        .employee-list tr:nth-child(even) {
          background: #f9f9f9;
        }
        .action-list {
          list-style: none;
          padding: 0;
        }
        .action-list li {
          padding: 8px 0;
          padding-left: 25px;
          position: relative;
        }
        .action-list li:before {
          content: "→";
          position: absolute;
          left: 0;
          color: #0066ff;
          font-weight: bold;
        }
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          color: #999;
          font-size: 12px;
          text-align: center;
        }
        @media print {
          body { margin: 0; padding: 0; }
          .container { padding: 20px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🛡 SAFEOFFICE</h1>
          <p>Security Analysis Report</p>
          <div class="timestamp">Generated on ${dateStr} at ${timeStr}</div>
        </div>

        <div class="section">
          <h2>Executive Summary</h2>
          <div class="metrics">
            <div class="metric-box">
              <div class="metric-label">Org Risk Index</div>
              <div class="metric-value risk-critical">73</div>
            </div>
            <div class="metric-box">
              <div class="metric-label">Active Users</div>
              <div class="metric-value" style="color: #0066ff;">892</div>
            </div>
            <div class="metric-box">
              <div class="metric-label">Secure Endpoints</div>
              <div class="metric-value" style="color: #00ff88;">1,247</div>
            </div>
          </div>
          <div class="metrics">
            <div class="metric-box">
              <div class="metric-label">Stability Status</div>
              <div class="metric-value risk-high">ELEVATED</div>
            </div>
            <div class="metric-box">
              <div class="metric-label">Critical Incidents</div>
              <div class="metric-value risk-critical">7</div>
            </div>
            <div class="metric-box">
              <div class="metric-label">Compliance Rate</div>
              <div class="metric-value" style="color: #00ff88;">94%</div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>High Risk Employees</h2>
          <table class="employee-list">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Risk Score</th>
                <th>Trust Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>James Morrison</td>
                <td>Finance</td>
                <td><span class="risk-critical">87 - CRITICAL</span></td>
                <td>13/100</td>
              </tr>
              <tr>
                <td>Amit Patel</td>
                <td>Legal</td>
                <td><span class="risk-high">71 - HIGH</span></td>
                <td>29/100</td>
              </tr>
              <tr>
                <td>Rachel Chen</td>
                <td>IT</td>
                <td><span class="risk-high">64 - HIGH</span></td>
                <td>36/100</td>
              </tr>
              <tr>
                <td>Karen Williams</td>
                <td>HR</td>
                <td><span class="risk-medium">42 - MEDIUM</span></td>
                <td>58/100</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section">
          <h2>Recommended Actions</h2>
          <ul class="action-list">
            <li>Implement immediate device isolation for critical-risk endpoints</li>
            <li>Conduct enhanced security awareness training for Finance and Legal departments</li>
            <li>Enable multi-factor authentication for all administrative accounts</li>
            <li>Schedule mandatory security briefing with James Morrison (Finance)</li>
            <li>Review and strengthen data access policies for sensitive departments</li>
            <li>Increase monitoring frequency for after-hours access attempts</li>
          </ul>
        </div>

        <div class="section">
          <h2>System Status</h2>
          <div class="metrics">
            <div class="metric-box">
              <div class="metric-label">CPU Load</div>
              <div class="metric-value" style="color: #00ff88;">34%</div>
            </div>
            <div class="metric-box">
              <div class="metric-label">Memory Usage</div>
              <div class="metric-value risk-medium">61%</div>
            </div>
            <div class="metric-box">
              <div class="metric-label">Network Status</div>
              <div class="metric-value" style="color: #0066ff;">2.4 Gbps</div>
            </div>
          </div>
        </div>

        <div class="footer">
          <p>SafeOffice v4.2.1 | Confidential Security Report</p>
          <p>This report contains sensitive security information and should be handled accordingly.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  // Open in new window for printing/saving as PDF
  const printWindow = window.open('', '', 'width=1000,height=800');
  printWindow.document.write(reportHTML);
  printWindow.document.close();
  
  // Auto-open print dialog
  setTimeout(() => {
    printWindow.print();
  }, 500);
  
  showToast('Report opened - Use Print to save as PDF', 'success');
}


function generateCSVExport() {
  const csvData = 'Employee Name,Department,Risk Score,Risk Level,Trust Score\n' +
                  'James Morrison,Finance,87,CRITICAL,13\n' +
                  'Rachel Chen,IT,64,HIGH,36\n' +
                  'Amit Patel,Legal,71,HIGH,29\n' +
                  'Karen Williams,HR,42,MEDIUM,58\n' +
                  'Miguel Torres,Engineering,29,LOW,81\n';
  
  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SafeOffice_Report_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
  showToast('CSV exported successfully', 'success');
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded',()=>{
  animateRiskScore();
  buildHeatmap();
  buildDeptBars();
  buildGantt();
  buildRiskCards();
  renderEmployeePanel(employeeData[1]);

  // Vault fill on load
  setTimeout(()=>{ const vf=document.getElementById('vault-fill'); if(vf) vf.style.width='42.35%'; },500);
  // Confidence fill for threat module
  setTimeout(()=>{ const cf=document.getElementById('conf-fill'); if(cf) cf.style.width='94.2%'; },500);

  // Start typewriter if threat module visible
  startTypewriter();

  // Gauge needle animation
  setTimeout(()=>{
    const needle=document.getElementById('gauge-needle');
    if(needle) needle.setAttribute('transform','rotate(20 120 120)');
  },500);

  // Init dept bars
  setTimeout(()=>{
    document.querySelectorAll('.dept-fill').forEach(el=>{
      if(el.getAttribute('data-width')) el.style.width=el.getAttribute('data-width');
    });
  },600);

  console.log('%c SafeOffice v4.2.1 loaded successfully ', 'background:#00d4ff;color:#020810;font-weight:bold;padding:4px 8px;border-radius:4px');
});