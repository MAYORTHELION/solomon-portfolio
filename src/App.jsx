import{useState,useEffect,useRef}from"react";
const N=["About","Projects","Skills","Experience","Certifications","Contact"];
const P=[{name:"AegisID-AI",d:"Autonomous AI-powered Identity Threat Detection and Response platform featuring a 9-agent pipeline for real-time threat detection, risk scoring, human approval workflows, automated containment, and compliance documentation.",t:["Python","Claude AI","Multi-Agent","ITDR","Automation"],c:"from-blue-500 to-cyan-500",g:"https://github.com/MAYORTHELION/AegisID-AI"},{name:"PhishGuard",d:"7-layer phishing email detection system analyzing .eml files across SPF/DKIM/DMARC, VirusTotal URL intelligence, WHOIS domain age, typosquatting, AbuseIPDB IP reputation, and Claude AI threat assessment. Scores 0 to 100 and generates PDF reports.",t:["Python","Flask","SQLite","VirusTotal","Claude AI"],c:"from-green-400 to-emerald-500",g:"https://github.com/MAYORTHELION/PhishGuard"},{name:"Owleye-AI",d:"Autonomous SOC Intelligence Platform featuring a 7-agent phishing and threat detection system designed to simulate and augment Tier 1 and Tier 2 SOC analyst workflows through AI-driven event correlation and automated investigation.",t:["Python","Claude AI","7-Agent Pipeline","SOC Automation"],c:"from-blue-400 to-indigo-500",g:"https://github.com/MAYORTHELION/Owleye-AI"},{name:"SentinelAI",d:"AI-powered SOC analyst tool providing real-time threat detection, VirusTotal enrichment, and automated email alerting built with Python and Claude AI to accelerate threat triage and reduce analyst manual workload.",t:["Python","Claude AI","VirusTotal","Real-time Detection"],c:"from-green-500 to-teal-400",g:"https://github.com/MAYORTHELION/SentinelAI"}];
const S=[{h:"SIEM & Monitoring",i:["Splunk","Microsoft Sentinel","Elastic/ELK","QRadar"]},{h:"AI & Automation",i:["Claude AI","Multi-Agent Systems","Python","PowerShell"]},{h:"Cloud Security",i:["Azure","AWS","GCP","Zero Trust"]},{h:"Incident Response",i:["Threat Hunting","MITRE ATT&CK","Forensics","IR Lifecycle"]},{h:"GRC & Compliance",i:["NIST 800-53","RMF","FISMA","POA&M"]},{h:"Vulnerability Mgmt",i:["Nessus/ACAS","Qualys","SCAP","DISA STIGs"]}];
const E=[{r:"SOC Analyst",co:"LSAG INC",p:"09/2022 to Present",d:"Security monitoring, threat detection, incident response, and SIEM administration across enterprise environments."},{r:"Intelligence & Base Defense",co:"U.S. Army Reserve",p:"08/2024 to Present",d:"BDOC operations, force protection, 24x7 threat monitoring, and intelligence analysis in deployed OCONUS environments in Jordan and Kuwait."}];
const C=[{n:"CompTIA CySA+",c:"#00ff41"},{n:"CompTIA Security+ CE",c:"#0080ff"},{n:"CompTIA Network+",c:"#00ff41"},{n:"ITIL Foundation",c:"#0080ff"},{n:"Cisco Ethical Hacker",c:"#00ff41"},{n:"CASP+ In Progress",c:"#ffaa00"}];

function MatrixRain(){
const canvasRef=useRef(null);
useEffect(()=>{
const canvas=canvasRef.current;
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const cols=Math.floor(canvas.width/20);
const drops=Array(cols).fill(1);
const chars="01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ";
const draw=()=>{
ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);
drops.forEach((y,i)=>{
const char=chars[Math.floor(Math.random()*chars.length)];
const x=i*20;
if(Math.random()>0.5){ctx.fillStyle="#00ff41";ctx.font="15px monospace";}
else{ctx.fillStyle="#0080ff";ctx.font="12px monospace";}
ctx.fillText(char,x,y*20);
if(y*20>canvas.height&&Math.random()>0.975)drops[i]=0;
drops[i]++;
});
};
const interval=setInterval(draw,50);
const resize=()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;};
window.addEventListener("resize",resize);
return()=>{clearInterval(interval);window.removeEventListener("resize",resize);};
},[]);
return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0"/>;
}

function ScanLine(){
const[pos,setPos]=useState(0);
useEffect(()=>{
const t=setInterval(()=>setPos(p=>(p+1)%100),20);
return()=>clearInterval(t);
},[]);
return <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden"><div style={{top:pos+"%",background:"linear-gradient(transparent,rgba(0,255,65,0.1),transparent)",height:"3px"}} className="absolute w-full transition-none"/></div>;
}

function CircuitLines(){
return(
<svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-10" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
<path d="M10 10 L40 10 L40 40 L70 40" stroke="#00ff41" strokeWidth="0.5" fill="none"/>
<path d="M60 10 L60 60 L90 60" stroke="#0080ff" strokeWidth="0.5" fill="none"/>
<path d="M10 70 L30 70 L30 90" stroke="#00ff41" strokeWidth="0.5" fill="none"/>
<circle cx="40" cy="10" r="2" fill="#00ff41"/>
<circle cx="60" cy="60" r="2" fill="#0080ff"/>
<circle cx="30" cy="70" r="2" fill="#00ff41"/>
<circle cx="40" cy="40" r="1.5" fill="#0080ff"/>
</pattern>
</defs>
<rect width="100%" height="100%" fill="url(#circuit)"/>
</svg>
);
}

export default function App(){
const[m,setM]=useState(false);
const[t,setT]=useState("");
const[glitch,setGlitch]=useState(false);
const f="Cybersecurity Professional & AI Security Engineer";
useEffect(()=>{
let i=0;
const x=setInterval(()=>{if(i<f.length){setT(f.slice(0,i+1));i++;}else clearInterval(x);},60);
return()=>clearInterval(x);
},[]);
useEffect(()=>{
const g=setInterval(()=>{setGlitch(true);setTimeout(()=>setGlitch(false),150)},4000);
return()=>clearInterval(g);
},[]);

return(
<div className="min-h-screen text-gray-100 font-mono relative" style={{background:"#000a00"}}>
<MatrixRain/>
<CircuitLines/>
<ScanLine/>

<nav className="fixed top-0 w-full z-50 border-b border-green-500/30" style={{background:"rgba(0,10,0,0.9)",backdropFilter:"blur(10px)"}}>
<div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
<span style={{color:"#00ff41"}} className="font-bold text-lg">OMAKUN://CYBER_OPS</span>
</div>
<div className="hidden md:flex gap-6">
{N.map(l=><a key={l} href={"#"+l.toLowerCase()} style={{color:"#00ff41"}} className="hover:text-white text-xs uppercase tracking-widest transition-colors">[{l}]</a>)}
</div>
<div style={{color:"#0080ff"}} className="text-xs hidden md:block">CLEARANCE: SECRET</div>
<button style={{color:"#00ff41"}} className="md:hidden" onClick={()=>setM(!m)}>MENU</button>
</div>
{m&&<div style={{background:"rgba(0,10,0,0.95)"}} className="md:hidden px-4 pb-4 flex flex-col gap-3 border-b border-green-500/30">
{N.map(l=><a key={l} href={"#"+l.toLowerCase()} style={{color:"#00ff41"}} className="text-xs uppercase" onClick={()=>setM(false)}>[{l}]</a>)}
</div>}
</nav>

<section id="about" className="min-h-screen flex items-center justify-center pt-24 px-4 relative z-20">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="text-xs mb-4 flex items-center gap-2" style={{color:"#00ff41"}}>
<span className="animate-pulse">█</span>
<span>SYSTEM ONLINE // THREAT LEVEL: DEFENDED</span>
</div>
<h1 style={{color:"#00ff41",textShadow:"0 0 20px #00ff41,0 0 40px #00ff41"}} className={`text-4xl md:text-6xl font-bold mb-2 ${glitch?"opacity-80":""}`}>
SOLOMON<br/>OMAKUN
</h1>
<div style={{color:"#0080ff",textShadow:"0 0 10px #0080ff"}} className="text-lg mb-6 h-8">
{t}<span className="animate-pulse">_</span>
</div>
<div className="space-y-2 text-xs mb-8" style={{color:"#00ff41"}}>
<div className="flex items-center gap-2"><span style={{color:"#0080ff"}}>&gt;&gt;</span> U.S. ARMY RESERVE // DEPLOYED: JORDAN & KUWAIT</div>
<div className="flex items-center gap-2"><span style={{color:"#0080ff"}}>&gt;&gt;</span> CLEARANCE: ACTIVE SECRET // TS ELIGIBLE</div>
<div className="flex items-center gap-2"><span style={{color:"#0080ff"}}>&gt;&gt;</span> AI PLATFORMS BUILT: 4 // THREATS NEUTRALIZED: ONGOING</div>
<div className="flex items-center gap-2"><span style={{color:"#0080ff"}}>&gt;&gt;</span> CERTIFICATIONS: CySA+ // Security+ // Network+ // ITIL</div>
</div>
<div className="flex flex-wrap gap-3">
<a href="#projects" style={{background:"#00ff41",color:"#000a00"}} className="px-5 py-2 font-bold text-xs rounded hover:opacity-80 transition-all">[VIEW_AI_PROJECTS]</a>
<a href="#contact" style={{border:"1px solid #00ff41",color:"#00ff41"}} className="px-5 py-2 text-xs rounded hover:bg-green-500/10 transition-all">[INITIATE_CONTACT]</a>
<a href="https://github.com/MAYORTHELION" target="_blank" rel="noopener noreferrer" style={{border:"1px solid #0080ff",color:"#0080ff"}} className="px-5 py-2 text-xs rounded hover:bg-blue-500/10 transition-all">[GITHUB_ACCESS]</a>
</div>
</div>
<div className="flex justify-center">
<div className="relative">
<div className="absolute inset-0 rounded-full animate-ping" style={{background:"rgba(0,255,65,0.1)",animationDuration:"3s"}}/>
<div className="absolute inset-0 rounded-full animate-pulse" style={{boxShadow:"0 0 40px #00ff41,0 0 80px #00ff41",animationDuration:"2s"}}/>
<div className="relative rounded-full overflow-hidden" style={{width:"280px",height:"280px",border:"3px solid #00ff41",boxShadow:"0 0 30px #00ff41,inset 0 0 30px rgba(0,255,65,0.1)"}}>
<img src="/solomon.jpg" alt="Solomon Omakun" className="w-full h-full object-cover"/>
<div className="absolute inset-0" style={{background:"linear-gradient(180deg,transparent 60%,rgba(0,255,65,0.3))",animation:"scan 3s linear infinite"}}/>
</div>
<div className="absolute -top-2 -right-2 text-xs px-2 py-1 rounded" style={{background:"#00ff41",color:"#000a00",fontWeight:"bold"}}>VERIFIED</div>
<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap" style={{color:"#00ff41"}}>ID: OMAKUN_SOLOMON // CLEARED</div>
</div>
</div>
</div>
</div>
</section>

<section id="projects" className="py-20 px-4 relative z-20">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<div className="text-xs mb-2" style={{color:"#0080ff"}}>[CLASSIFIED_PROJECTS // ACCESS_GRANTED]</div>
<h2 className="text-3xl font-bold" style={{color:"#00ff41",textShadow:"0 0 20px #00ff41"}}>AI CYBERSECURITY PLATFORMS</h2>
<div className="text-xs mt-2" style={{color:"#0080ff"}}>4 INDEPENDENTLY ENGINEERED // OPERATIONAL STATUS: ACTIVE</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
{P.map(p=>(
<div key={p.name} className="rounded-lg p-6 transition-all hover:scale-105" style={{background:"rgba(0,20,0,0.8)",border:"1px solid #00ff41",boxShadow:"0 0 20px rgba(0,255,65,0.1)",backdropFilter:"blur(10px)"}}>
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full animate-pulse" style={{background:"#00ff41"}}/>
<h3 className={"text-lg font-bold bg-gradient-to-r "+p.c+" bg-clip-text text-transparent"}>{p.name}</h3>
<div className="ml-auto text-xs px-2 py-0.5 rounded" style={{background:"rgba(0,255,65,0.1)",color:"#00ff41",border:"1px solid #00ff41"}}>ACTIVE</div>
</div>
<p className="text-xs leading-relaxed mb-4" style={{color:"#88cc88"}}>{p.d}</p>
<div className="flex flex-wrap gap-2 mb-4">
{p.t.map(x=><span key={x} className="px-2 py-0.5 text-xs rounded" style={{background:"rgba(0,128,255,0.1)",color:"#0080ff",border:"1px solid #0080ff"}}>{x}</span>)}
</div>
<a href={p.g} target="_blank" rel="noopener noreferrer" className="text-xs font-bold hover:opacity-70 transition-all" style={{color:"#00ff41"}}>[ACCESS_REPOSITORY] &gt;&gt;</a>
</div>
))}
</div>
</div>
</section>

<section id="skills" className="py-20 px-4 relative z-20">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<div className="text-xs mb-2" style={{color:"#0080ff"}}>[CAPABILITY_MATRIX // LOADING...]</div>
<h2 className="text-3xl font-bold" style={{color:"#00ff41",textShadow:"0 0 20px #00ff41"}}>TECHNICAL ARSENAL</h2>
</div>
<div className="grid md:grid-cols-3 gap-4">
{S.map(s=>(
<div key={s.h} className="rounded-lg p-5" style={{background:"rgba(0,20,0,0.8)",border:"1px solid rgba(0,255,65,0.3)",boxShadow:"0 0 15px rgba(0,255,65,0.05)"}}>
<div className="text-xs font-bold mb-4 flex items-center gap-2" style={{color:"#0080ff"}}>
<span style={{color:"#00ff41"}}>&gt;</span>{s.h.toUpperCase()}
</div>
<div className="flex flex-wrap gap-2">
{s.i.map(x=><span key={x} className="px-2 py-1 text-xs rounded" style={{background:"rgba(0,255,65,0.05)",color:"#00ff41",border:"1px solid rgba(0,255,65,0.3)"}}>{x}</span>)}
</div>
</div>
))}
</div>
</div>
</section>

<section id="experience" className="py-20 px-4 relative z-20">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<div className="text-xs mb-2" style={{color:"#0080ff"}}>[OPERATIONAL_HISTORY // DECLASSIFIED]</div>
<h2 className="text-3xl font-bold" style={{color:"#00ff41",textShadow:"0 0 20px #00ff41"}}>MISSION HISTORY</h2>
</div>
<div className="space-y-4">
{E.map((e,i)=>(
<div key={i} className="rounded-lg p-6" style={{background:"rgba(0,20,0,0.8)",border:"1px solid rgba(0,255,65,0.3)",boxShadow:"0 0 15px rgba(0,255,65,0.05)"}}>
<div className="flex flex-wrap justify-between items-start gap-2 mb-3">
<div>
<h3 className="font-bold" style={{color:"#00ff41"}}>{e.r}</h3>
<p className="text-xs" style={{color:"#0080ff"}}>{e.co}</p>
</div>
<span className="text-xs px-3 py-1 rounded" style={{background:"rgba(0,128,255,0.1)",color:"#0080ff",border:"1px solid #0080ff"}}>{e.p}</span>
</div>
<p className="text-xs leading-relaxed" style={{color:"#88cc88"}}>{e.d}</p>
</div>
))}
</div>
</div>
</section>

<section id="certifications" className="py-20 px-4 relative z-20">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<div className="text-xs mb-2" style={{color:"#0080ff"}}>[CREDENTIALS // VERIFIED]</div>
<h2 className="text-3xl font-bold" style={{color:"#00ff41",textShadow:"0 0 20px #00ff41"}}>CERTIFICATIONS</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
{C.map(c=>(
<div key={c.n} className="rounded-lg p-4 text-center" style={{background:"rgba(0,20,0,0.8)",border:"1px solid rgba(0,255,65,0.3)",boxShadow:"0 0 10px rgba(0,255,65,0.05)"}}>
<div className="w-3 h-3 rounded-full mx-auto mb-3 animate-pulse" style={{background:c.c,boxShadow:"0 0 10px "+c.c}}/>
<p className="text-xs font-bold" style={{color:c.c}}>{c.n}</p>
</div>
))}
</div>
<div className="mt-6 p-4 rounded-lg text-center" style={{background:"rgba(0,128,255,0.05)",border:"1px solid #0080ff"}}>
<p className="text-xs" style={{color:"#0080ff"}}>[MISSION_OBJECTIVE] Pursuing CASP+/SecurityX // DoD 8140 IAM Level II // ETA: ACTIVE</p>
</div>
</div>
</section>

<section id="contact" className="py-20 px-4 relative z-20">
<div className="max-w-2xl mx-auto text-center">
<div className="text-xs mb-2" style={{color:"#0080ff"}}>[SECURE_CHANNEL // ENCRYPTED]</div>
<h2 className="text-3xl font-bold mb-6" style={{color:"#00ff41",textShadow:"0 0 20px #00ff41"}}>INITIATE CONTACT</h2>
<p className="text-xs mb-8" style={{color:"#88cc88"}}>Open to cybersecurity opportunities, AI security consulting, and collaboration on security automation projects. Active Secret Clearance available.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
<a href="mailto:omeizaomakun1@gmail.com" style={{background:"#00ff41",color:"#000a00"}} className="px-6 py-3 font-bold text-xs rounded hover:opacity-80 transition-all">[SEND_ENCRYPTED_MESSAGE]</a>
<a href="https://www.linkedin.com/in/solomon-omakun-959575106/" target="_blank" rel="noopener noreferrer" style={{border:"1px solid #00ff41",color:"#00ff41"}} className="px-6 py-3 text-xs rounded hover:bg-green-500/10 transition-all">[LINKEDIN_CHANNEL]</a>
<a href="https://github.com/MAYORTHELION" target="_blank" rel="noopener noreferrer" style={{border:"1px solid #0080ff",color:"#0080ff"}} className="px-6 py-3 text-xs rounded hover:bg-blue-500/10 transition-all">[GITHUB_REPOSITORY]</a>
</div>
<div className="p-4 rounded-lg" style={{background:"rgba(0,20,0,0.8)",border:"1px solid rgba(0,255,65,0.3)"}}>
<p className="text-xs" style={{color:"#00ff41"}}>STATUS: ACTIVE // CLEARANCE: SECRET // LOCATION: CLASSIFIED // AVAILABLE: IMMEDIATE</p>
</div>
</div>
</section>

<footer className="py-6 px-4 relative z-20 text-center" style={{borderTop:"1px solid rgba(0,255,65,0.2)"}}>
<p className="text-xs" style={{color:"rgba(0,255,65,0.4)"}}>OMAKUN_SOLOMON // CYBER_OPS // BUILT_WITH: REACT + TAILWIND + AI // ALL_SYSTEMS_OPERATIONAL</p>
</footer>

<style>{`
@keyframes scan{0%{transform:translateY(-100%)}100%{transform:translateY(100%)}}
`}</style>
</div>
);
}