/* Apartamento Alphaview · Barueri · maquete 3D ILUSTRATIVA (sem planta oficial), montada a partir das fotos.
   Coordenadas em metros: x para a direita, z para baixo (sacada no fim), y para cima. */
(function(){
function boot(){
const T = THREE, $ = id => document.getElementById(id);
const canvas = $('c3d'); if (!canvas || !window.THREE) return;
const isTouch = matchMedia('(pointer:coarse)').matches || navigator.maxTouchPoints > 0;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- renderer ----------
const renderer = new T.WebGLRenderer({canvas, antialias:true, powerPreference:'high-performance'});
const maxDPR = Math.min(window.devicePixelRatio||1, 2); let dpr = Math.min(maxDPR, isTouch?1.5:2); renderer.setPixelRatio(dpr);
renderer.outputEncoding = T.sRGBEncoding; renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = T.PCFSoftShadowMap; renderer.shadowMap.autoUpdate = false; // nada se move: a sombra é calculada só quando a luz muda
const scene = new T.Scene();
const camera = new T.PerspectiveCamera(38, 1, .5, 400);
let seed = 4286; const rnd = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const C8 = v => Math.max(0, Math.min(255, v|0));
const lin = hex => new T.Color(hex).convertSRGBToLinear();
const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());

// ---------- texturas desenhadas (madeiras, pedra, tecidos) ----------
function tex(draw, size, srgb){ size=size||512; const c=document.createElement('canvas'); c.width=c.height=size; const g=c.getContext('2d'); draw(g,size); const t=new T.CanvasTexture(c); t.wrapS=t.wrapT=T.RepeatWrapping; if (srgb!==false) t.encoding=T.sRGBEncoding; t.anisotropy=aniso; return t; }
function noise(g,s,a,n){ for (let i=0;i<(n||s*12);i++){ g.fillStyle = rnd()<.5 ? 'rgba(0,0,0,'+a+')' : 'rgba(255,255,255,'+a+')'; g.fillRect(rnd()*s, rnd()*s, 1+rnd()*2, 1+rnd()*2); } }
function grain(g,x,y,w,h,alpha,n){ for (let k=0;k<n;k++){ const yy=y+rnd()*h; g.strokeStyle='rgba(40,14,4,'+(rnd()*alpha)+')'; g.lineWidth=.6+rnd()*1.2; g.beginPath(); g.moveTo(x,yy); for (let xx=x; xx<=x+w; xx+=w/6) g.lineTo(xx, yy+(rnd()-.5)*2.4); g.stroke(); } }
// assoalho de ipê: tábuas largas, avermelhadas, com o veio aparente (como nas fotos)
const tIpe = tex((g,s)=>{ g.fillStyle='#3a160a'; g.fillRect(0,0,s,s); const n=6, w=s/n;
  for (let i=0;i<n;i++){ let y=-rnd()*s; while (y<s){ const L=s*(.5+rnd()*.7), tone=rnd(); const r=118+tone*38, gg=88+tone*30, b=62+tone*22;
      g.save(); g.translate(i*w+w/2, y+L/2); g.rotate(Math.PI/2); const gr=g.createLinearGradient(-L/2,0,L/2,0); gr.addColorStop(0,'rgb('+C8(r-12)+','+C8(gg-8)+','+C8(b-4)+')'); gr.addColorStop(.5,'rgb('+C8(r+8)+','+C8(gg+6)+','+C8(b+3)+')'); gr.addColorStop(1,'rgb('+C8(r-16)+','+C8(gg-10)+','+C8(b-6)+')'); g.fillStyle=gr; g.fillRect(-L/2,-w/2+1.5,L,w-3);
      grain(g,-L/2,-w/2,L,w,.32,26); g.restore(); g.fillStyle='rgba(30,10,2,.7)'; g.fillRect(i*w+1.5, y, w-3, 2); y+=L; } }
  noise(g,s,.03); }, 1024);
// tacos dos quartos: blocos curtos em fiada corrida, tom mais escuro
const tTaco = tex((g,s)=>{ g.fillStyle='#2a0f06'; g.fillRect(0,0,s,s); const rows=16, rh=s/rows, L=s/4;
  for (let r=0;r<rows;r++){ const off=(r%2)*L/2 + (r%4>1?L/4:0); for (let c=-1;c<5;c++){ const x=c*L+off, tone=rnd(); g.fillStyle='rgb('+C8(108+tone*58)+','+C8(42+tone*26)+','+C8(22+tone*12)+')'; g.fillRect(x+1.5, r*rh+1.5, L-3, rh-3); grain(g,x+1.5,r*rh+1.5,L-3,rh-3,.3,5); } }
  noise(g,s,.03); }, 1024);
// porcelanato claro de cozinha e banheiros
const tPorc = tex((g,s)=>{ g.fillStyle='#b9b0a3'; g.fillRect(0,0,s,s); for (let i=0;i<2;i++) for (let j=0;j<2;j++){ const v=(rnd()-.5)*8; g.fillStyle='rgb('+C8(218+v)+','+C8(211+v)+','+C8(199+v)+')'; g.fillRect(i*s/2+2, j*s/2+2, s/2-4, s/2-4); } noise(g,s,.025,s*30); }, 512);
const tOak = tex((g,s)=>{ g.fillStyle='#c4925c'; g.fillRect(0,0,s,s); for (let k=0;k<90;k++){ const y=rnd()*s; g.strokeStyle='rgba(110,60,24,'+(rnd()*.22)+')'; g.lineWidth=1+rnd()*2; g.beginPath(); g.moveTo(0,y); g.bezierCurveTo(s*.3,y+(rnd()-.5)*10,s*.7,y+(rnd()-.5)*10,s,y); g.stroke(); } noise(g,s,.03); }, 512);
const tLinen = tex((g,s)=>{ g.fillStyle='#ddd3c3'; g.fillRect(0,0,s,s); for (let i=0;i<s;i+=3){ g.fillStyle='rgba(120,100,80,.05)'; g.fillRect(i,0,1,s); g.fillRect(0,i,s,1); } noise(g,s,.04); }, 256);
const tJute = tex((g,s)=>{ g.fillStyle='#c9b48c'; g.fillRect(0,0,s,s); for (let y=0;y<s;y+=8) for (let x=0;x<s;x+=8){ g.fillStyle=((x+y)/8)%2?'rgba(90,64,30,.18)':'rgba(255,240,210,.12)'; g.fillRect(x,y,8,8); } noise(g,s,.05); }, 256);
const tCane = tex((g,s)=>{ g.fillStyle='#d9bb86'; g.fillRect(0,0,s,s); const n=16, d=s/n; g.fillStyle='#3d2a18'; for (let i=0;i<n;i++) for (let j=0;j<n;j++){ g.beginPath(); g.arc(i*d+d/2, j*d+d/2, d*.28, 0, 7); g.fill(); } g.strokeStyle='rgba(120,80,40,.4)'; g.lineWidth=1.2; for (let i=0;i<=n;i++){ g.beginPath(); g.moveTo(i*d,0); g.lineTo(i*d+s,s); g.stroke(); g.beginPath(); g.moveTo(i*d,0); g.lineTo(i*d-s,s); g.stroke(); } }, 256);
const tStone = tex((g,s)=>{ g.fillStyle='#d5cdbf'; g.fillRect(0,0,s,s); for (let i=0;i<5000;i++){ const v=rnd(); g.fillStyle = v<.35 ? 'rgba(90,80,70,.5)' : v<.7 ? 'rgba(255,255,250,.6)' : 'rgba(160,130,100,.4)'; g.fillRect(rnd()*s,rnd()*s,1+rnd()*2,1+rnd()*2); } }, 512);
const tPlaster = tex((g,s)=>{ g.fillStyle='#efe9df'; g.fillRect(0,0,s,s); noise(g,s,.018,s*20); }, 256);
const tFacade = tex((g,s)=>{ g.fillStyle='#cfc6b6'; g.fillRect(0,0,s,s); noise(g,s,.05,s*20); }, 256);
const tBuild = tex((g,s)=>{ g.fillStyle='#b9b2a6'; g.fillRect(0,0,s,s); const cols=6, rows=8; for (let i=0;i<cols;i++) for (let j=0;j<rows;j++){ const lit=rnd(); g.fillStyle = lit<.15 ? '#4b5a66' : lit<.3 ? '#6f7d86' : '#58646d'; g.fillRect(i*s/cols+s/cols*.2, j*s/rows+s/rows*.25, s/cols*.6, s/rows*.5); } noise(g,s,.04); }, 512);
const tGrass = tex((g,s)=>{ g.fillStyle='#55753a'; g.fillRect(0,0,s,s); for (let i=0;i<6000;i++){ g.fillStyle=rnd()<.5?'rgba(30,60,20,.35)':'rgba(140,170,80,.3)'; g.fillRect(rnd()*s,rnd()*s,2,3); } }, 512);
const tAsph = tex((g,s)=>{ g.fillStyle='#5b5a57'; g.fillRect(0,0,s,s); noise(g,s,.08,s*30); }, 256);
// folha de costela-de-adão, recortada em alfa
const tMonst = (function(){ const S=256, c=document.createElement('canvas'); c.width=c.height=S; const g=c.getContext('2d');
  g.fillStyle='#2f5a2c'; g.beginPath(); g.moveTo(S/2,S*.98); g.bezierCurveTo(S*1.02,S*.75,S*.98,S*.1,S/2,S*.04); g.bezierCurveTo(S*.02,S*.1,-S*.02,S*.75,S/2,S*.98); g.fill();
  g.globalCompositeOperation='destination-out'; for (let k=0;k<7;k++){ const y=S*(.2+k*.1); for (const d of [-1,1]){ g.beginPath(); g.moveTo(S/2+d*S*.1,y); g.lineTo(S/2+d*S*.6,y-S*.06); g.lineTo(S/2+d*S*.6,y-S*.02); g.closePath(); g.fill(); g.beginPath(); g.ellipse(S/2+d*S*.2,y+S*.03,S*.025,S*.012,0,0,7); g.fill(); } }
  g.globalCompositeOperation='source-atop'; const gr=g.createLinearGradient(0,0,S,0); gr.addColorStop(0,'#24481f'); gr.addColorStop(.5,'#4f8a3e'); gr.addColorStop(1,'#24481f'); g.fillStyle=gr; g.fillRect(0,0,S,S); g.strokeStyle='rgba(170,210,130,.6)'; g.lineWidth=3; g.beginPath(); g.moveTo(S/2,S); g.lineTo(S/2,S*.06); g.stroke();
  const t=new T.CanvasTexture(c); t.encoding=T.sRGBEncoding; return t; })();

function alphaTex(w,h,f){ const c=document.createElement('canvas'); c.width=w; c.height=h; const g=c.getContext('2d'); const img=g.createImageData(w,h);
  for (let y=0;y<h;y++) for (let x=0;x<w;x++){ const i=(y*w+x)*4; img.data[i]=img.data[i+1]=img.data[i+2]=0; img.data[i+3]=Math.max(0,Math.min(255,f(x/(w-1),y/(h-1))*255))|0; }
  g.putImageData(img,0,0); const t=new T.CanvasTexture(c); t.wrapS=T.RepeatWrapping; t.wrapT=T.ClampToEdgeWrapping; return t; }
const tAO = alphaTex(4,64,(x,y)=>Math.pow(1-y,2.2));
const tBlob = alphaTex(64,64,(x,y)=>{ const dx=(x-.5)*2, dy=(y-.5)*2, r=Math.sqrt(dx*dx+dy*dy); return Math.max(0,1-r)*Math.max(0,1-r)*.9; });

// ---------- materiais ----------
const glowMats=[];
function M(o){ const m=new T.MeshStandardMaterial({color:o.color?lin(o.color):new T.Color(1,1,1), map:o.map||null, roughness:o.r!==undefined?o.r:.8, metalness:o.m||0, transparent:!!o.tr, opacity:o.op!==undefined?o.op:1, side:o.side||T.FrontSide});
  if (o.em){ m.emissive=lin(o.em); m.emissiveIntensity=o.ei||1; glowMats.push({m,base:o.ei||1}); } if (o.tr) m.depthWrite=false; m.userData.tile=o.tile||1; if (o.alpha){ m.alphaTest=.5; m.transparent=false; } return m; }
const mat = {
  ipe:M({map:tIpe,tile:1.3,r:.32}), taco:M({map:tTaco,tile:1.1,r:.36}), porc:M({map:tPorc,tile:1.8,r:.22}),
  wall:M({map:tPlaster,tile:2,r:.9,color:'#f3eee6'}), cap:M({color:'#3a2f27',r:.7}), plinth:M({color:'#e6ded2',r:.85}), facade:M({map:tFacade,tile:3,r:.95}), slab:M({color:'#bdb5a8',r:.9}), ceil:M({color:'#f4f0e8',r:.95}),
  white:M({color:'#f3f1ec',r:.5}), frame:M({color:'#eceae4',r:.35,m:.2}), glass:M({color:'#dfeef2',r:.04,m:.1,tr:1,op:.18}), sill:M({map:tStone,tile:1,r:.3}),
  door:M({color:'#f2f0ea',r:.45}), oak:M({map:tOak,tile:1.2,r:.55}), oakD:M({map:tOak,tile:1.2,r:.5,color:'#b07a4a'}), cane:M({map:tCane,tile:.35,r:.75}),
  linen:M({map:tLinen,tile:.6,r:.95}), cushion:M({map:tLinen,tile:.5,r:.95,color:'#efe6d6'}), brownP:M({color:'#7b4a2e',r:.95}), terra:M({color:'#b0603a',r:.95}),
  leather:M({color:'#9b5b2f',r:.48}), jute:M({map:tJute,tile:.8,r:1}), rugW:M({map:tJute,tile:.6,r:1,color:'#efe7d8'}), black:M({color:'#121212',r:.35,m:.2}),
  tv:M({color:'#0b0d10',r:.15,m:.3}), stone:M({map:tStone,tile:.9,r:.28}), steel:M({color:'#c2c5c8',r:.28,m:.85}), porcW:M({color:'#f7f6f2',r:.18}),
  mirror:M({color:'#cfd9dc',r:.03,m:.95}), pot:M({color:'#e9e1d4',r:.7}), terracottaPot:M({color:'#b9703f',r:.85}), leaf:M({map:tMonst,alpha:1,side:T.DoubleSide,r:.6}),
  trunk:M({color:'#6b5444',r:.95}), foliage:M({color:'#4b7a3a',r:.85}), grass:M({map:tGrass,tile:4,r:1}), asph:M({map:tAsph,tile:6,r:.95}), build:M({map:tBuild,tile:9,r:.85}),
  curtain:new T.MeshStandardMaterial({map:tLinen,color:lin('#f4efe6'),roughness:1,transparent:true,opacity:.82,side:T.DoubleSide,depthWrite:false}),
  plafon:M({color:'#ffffff',em:'#fff1d6',ei:.2,r:.4}), ao:new T.MeshBasicMaterial({map:tAO,color:0x2a1c12,side:T.DoubleSide,transparent:true,opacity:.42,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2}), blob:new T.MeshBasicMaterial({map:tBlob,color:0x2a1c12,transparent:true,opacity:.55,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-3}), lampShade:M({color:'#f3e6cf',em:'#ffc98a',ei:.15,r:.9})
};
mat.curtain.userData.tile=.8; mat.ao.userData.tile=1; mat.blob.userData.tile=1;
mat.glass.envMapIntensity=1.4; mat.mirror.envMapIntensity=1.5; mat.steel.envMapIntensity=1.2; mat.ipe.envMapIntensity=.55; mat.taco.envMapIntensity=.5; mat.porc.envMapIntensity=.5; mat.stone.envMapIntensity=.6;

// ---------- geometria ----------
const walls2D=[]; // pedaços de parede que bloqueiam o caminho (para andar)
function worldUV(geo,w,h,d,s){ const uv=geo.attributes.uv, dims=[[d,h],[d,h],[w,d],[w,d],[w,h],[w,h]]; for (let f=0;f<6;f++) for (let i=0;i<4;i++){ const k=f*4+i; uv.setXY(k, uv.getX(k)*dims[f][0]/s, uv.getY(k)*dims[f][1]/s); } uv.needsUpdate=true; }
function B(x0,x1,y0,y1,z0,z1,m,o){ o=o||{}; if (x0>x1) [x0,x1]=[x1,x0]; if (y0>y1) [y0,y1]=[y1,y0]; if (z0>z1) [z0,z1]=[z1,z0]; const w=x1-x0, h=y1-y0, d=z1-z0;
  const geo=(o.round && T.RoundedBoxGeometry) ? new T.RoundedBoxGeometry(w,h,d,2,Math.min(o.round,Math.min(w,h,d)/2-.002)) : new T.BoxGeometry(w,h,d);
  if (m.map && !o.round) worldUV(geo,w,h,d,m.userData.tile||1);
  const mesh=new T.Mesh(geo,m); mesh.position.set((x0+x1)/2,(y0+y1)/2,(z0+z1)/2); mesh.castShadow=o.cast!==false && !m.transparent; mesh.receiveShadow=true; (o.parent||scene).add(mesh); if (o.col) walls2D.push({x0,x1,z0,z1}); return mesh; }
function cyl(x,y,z,rt,rb,h,m,seg,parent){ const mesh=new T.Mesh(new T.CylinderGeometry(rt,rb,h,seg||20),m); mesh.position.set(x,y+h/2,z); mesh.castShadow=mesh.receiveShadow=true; (parent||scene).add(mesh); return mesh; }
function floorRect(x0,x1,z0,z1,m,y){ const g=new T.PlaneGeometry(x1-x0,z1-z0); const uv=g.attributes.uv, s=m.userData.tile||1; for (let i=0;i<uv.count;i++) uv.setXY(i, (uv.getX(i)*(x1-x0)+x0)/s, (uv.getY(i)*(z1-z0)+z0)/s); const mesh=new T.Mesh(g,m); mesh.rotation.x=-Math.PI/2; mesh.position.set((x0+x1)/2,y||0,(z0+z1)/2); mesh.receiveShadow=true; scene.add(mesh); return mesh; }
const group=(x,y,z,ry)=>{ const g=new T.Group(); g.position.set(x,y,z); g.rotation.y=ry||0; scene.add(g); return g; };
const H=2.5;
// parede ao longo de x (axis 'x', c = z) ou de z (axis 'z', c = x), com vãos de porta e janela
function wall(axis,c,s0,s1,t,ops,o){ o=o||{}; ops=(ops||[]).slice().sort((a,b)=>a.a-b.a); const c0=c-t/2, c1=c+t/2, m=o.m||mat.wall;
  const P=(p0,p1,q0,q1,col)=>{ const r = axis==='x' ? B(p0,p1,q0,q1,c0,c1,m,{col}) : B(c0,c1,q0,q1,p0,p1,m,{col}); if (q1>=H-1e-6){ if (axis==='x') B(p0,p1,H,H+.015,c0-.004,c1+.004,mat.cap,{cast:false}); else B(c0-.004,c1+.004,H,H+.015,p0,p1,mat.cap,{cast:false}); } return r; };
  let cur=s0; for (const p of ops){ if (p.a>cur) P(cur,p.a,0,H,true); const bot=p.bot||0, top=p.top||2.1; if (bot>0) P(p.a,p.b,0,bot,true); if (top<H) P(p.a,p.b,top,H,false);
    if (p.win) win(axis,c,t,p.a,p.b,bot,top,o.out); if (p.door) door(axis,c,t,p.a,p.b,p.door,p.hinge); cur=p.b; }
  if (cur<s1) P(cur,s1,0,H,true); }
function win(axis,c,t,a,b,y0,y1,out){ const f=.05; const P=(p0,p1,q0,q1,w0,w1,m,o)=> axis==='x' ? B(p0,p1,q0,q1,w0,w1,m,o) : B(w0,w1,q0,q1,p0,p1,m,o);
  P(a,b,y0,y1,c-.01,c+.01,mat.glass,{cast:false}); P(a,b,y0,y0+f,c-t/2,c+t/2,mat.frame); P(a,b,y1-f,y1,c-t/2,c+t/2,mat.frame); P(a,a+f,y0,y1,c-t/2,c+t/2,mat.frame); P(b-f,b,y0,y1,c-t/2,c+t/2,mat.frame); const m=(a+b)/2; P(m-.02,m+.02,y0,y1,c-.04,c+.04,mat.frame);
  const sd = out||1; P(a-.04,b+.04,y0-.03,y0,c-t/2-.03*(sd<0?1:0)-.06*(sd<0?1:0),c+t/2+.06*(sd>0?1:0),mat.sill); }
function door(axis,c,t,a,b,dir,hinge){ const w=b-a-.04; const g=new T.Group(); const leaf=new T.Mesh(new T.BoxGeometry(w,2.08,.04),mat.door); leaf.position.set(w/2,1.04,0); leaf.castShadow=true; g.add(leaf);
  const knob=new T.Mesh(new T.BoxGeometry(.12,.02,.02),mat.steel); knob.position.set(w-.08,1.02,.04); g.add(knob);
  const hx = hinge==='b' ? b-.02 : a+.02; if (axis==='x'){ g.position.set(hx,0,c); g.rotation.y = (hinge==='b'?Math.PI:0) + dir*Math.PI*.42; } else { g.position.set(c,0,hx); g.rotation.y = -Math.PI/2 + (hinge==='b'?Math.PI:0) + dir*Math.PI*.42; }
  scene.add(g); const P=(p0,p1,q0,q1)=> axis==='x' ? B(p0,p1,q0,q1,c-t/2-.01,c+t/2+.01,mat.frame) : B(c-t/2-.01,c+t/2+.01,q0,q1,p0,p1,mat.frame); P(a,a+.04,0,2.12); P(b-.04,b,0,2.12); P(a,b,2.08,2.14); }
function curtain(axis,c,a,b,y1,off){ const w=b-a+.3, h=y1, seg=40; const g=new T.PlaneGeometry(w,h,seg,1); const p=g.attributes.position; for (let i=0;i<p.count;i++){ const x=p.getX(i); p.setZ(i, Math.sin(x*22)*.035); } g.computeVertexNormals();
  for (const side of [0,1]){ const part=new T.Mesh(g,mat.curtain); part.scale.x=.36; const sx = side ? b+.12-w*.18 : a-.12+w*.18; if (axis==='x'){ part.position.set(sx,h/2,c+off); } else { part.position.set(c+off,h/2,sx); part.rotation.y=Math.PI/2; } part.castShadow=false; part.receiveShadow=true; scene.add(part); } }

// ---------- móveis ----------
function sofa(x,z,len,ry){ const g=group(x,0,z,ry), o={parent:g}, ro={parent:g,round:.08}, L=len/2, D=.48;
  B(-L,L,.1,.42,-D,D,mat.linen,ro); B(-L,L,.42,.9,-D,-D+.22,mat.linen,ro); B(-L-.14,-L+.02,.1,.66,-D,D,mat.linen,ro); B(L-.02,L+.14,.1,.66,-D,D,mat.linen,ro);
  for (let i=0;i<3;i++){ const a=-L+len*i/3+.02, b=-L+len*(i+1)/3-.02; B(a,b,.42,.56,-D+.2,D-.02,mat.cushion,{parent:g,round:.06}); B(a+.05,b-.05,.56,.92,-D+.06,-D+.3,mat.cushion,{parent:g,round:.08}); }
  for (const [px,m] of [[-L+.35,mat.brownP],[-L+.75,mat.brownP],[L-.4,mat.brownP]]){ const p=B(px-.2,px+.2,.58,.98,-D+.25,-D+.4,m,{parent:g,round:.07}); p.rotation.z=(rnd()-.5)*.3; }
  for (const sx of [-L+.05,L-.05]) for (const sz of [-D+.06,D-.06]) B(sx-.03,sx+.03,0,.1,sz-.03,sz+.03,mat.oakD,o); return g; }
function armchair(x,z,ry){ const g=group(x,0,z,ry), o={parent:g};
  for (const sx of [-.34,.34]){ B(sx-.03,sx+.03,0,.62,-.36,.36,mat.oakD,o); B(sx-.04,sx+.04,.55,.6,-.36,.32,mat.oakD,o); }
  B(-.32,.32,.3,.44,-.32,.32,mat.leather,{parent:g,round:.06}); const back=B(-.3,.3,.42,.98,-.34,-.2,mat.leather,{parent:g,round:.06}); back.rotation.x=-.2; return g; }
function chair(x,z,ry,cane){ const g=group(x,0,z,ry), o={parent:g}; for (const [a,b] of [[-.2,-.2],[.17,-.2],[-.2,.17],[.17,.17]]) B(a,a+.035,0,.46,b,b+.035,mat.oak,o);
  B(-.21,.21,.44,.5,-.21,.21,cane?mat.cushion:mat.leather,{parent:g,round:.02}); B(-.21,-.18,.46,.9,-.22,-.19,mat.oak,o); B(.18,.21,.46,.9,-.22,-.19,mat.oak,o); B(-.18,.18,.6,.88,-.215,-.2,cane?mat.cane:mat.oak,o); return g; }
function table(x,z,w,d,h,ry){ const g=group(x,0,z,ry), o={parent:g}; B(-w/2,w/2,h-.04,h,-d/2,d/2,mat.oak,o); for (const sx of [-w/2+.06,w/2-.1]) for (const sz of [-d/2+.06,d/2-.1]) B(sx,sx+.045,0,h-.04,sz,sz+.045,mat.oak,o); return g; }
function bed(x,z,w,l,ry,single){ const g=group(x,0,z,ry), o={parent:g}, W=w/2, L=l/2;
  B(-W,W,.12,.34,-L,L,mat.oak,o); for (const sx of [-W+.03,W-.06]) for (const sz of [-L+.03,L-.06]) B(sx,sx+.04,0,.12,sz,sz+.04,mat.oak,o);
  B(-W+.02,W-.02,.34,.56,-L+.02,L-.02,mat.cushion,{parent:g,round:.06}); B(-W-.02,W+.02,.5,.6,-L+.55,L+.02,mat.white,{parent:g,round:.04});
  B(-W-.03,W+.03,.56,.62,L-.75,L-.25,mat.terra,{parent:g,round:.02});
  if (single){ B(-W,W,.12,.95,-L-.05,-L,mat.oak,o); } else { B(-W-.06,W+.06,.12,1.25,-L-.07,-L,mat.oak,o); B(-W+.04,W-.04,.5,1.18,-L-.01,-L+.01,mat.cane,o); }
  const np = w>1.2 ? [-W/2,W/2] : [0]; for (const px of np){ const p=B(px-.32,px+.32,.56,.84,-L+.06,-L+.3,mat.white,{parent:g,round:.08}); p.rotation.x=-.22; }
  return g; }
function nightstand(x,z,ry){ const g=group(x,0,z,ry), o={parent:g}; B(-.22,.22,.08,.55,-.2,.2,mat.oak,o); B(-.2,.2,0,.08,-.18,.18,mat.oakD,o);
  const base=cyl(0,.55,0,.07,.09,.22,mat.pot,16,g); const shade=new T.Mesh(new T.CylinderGeometry(.11,.15,.18,20,1,true),mat.lampShade); shade.position.set(0,.86,0); g.add(shade); return g; }
function plant(x,z,s,kind){ const g=group(x,0,z,rnd()*6); cyl(0,0,0,.2*s,.15*s,.38*s,kind?mat.terracottaPot:mat.pot,20,g);
  const n=kind?14:9; for (let i=0;i<n;i++){ const leaf=new T.Mesh(new T.PlaneGeometry(.55*s,.6*s),mat.leaf); const a=i/n*Math.PI*2+rnd()*.4, r=.08*s, h=(.55+rnd()*.7)*s;
    const hh=(.35+rnd()*.45)*s, rr=(.18+rnd()*.22)*s; leaf.position.set(Math.cos(a)*rr, .38*s+hh, Math.sin(a)*rr); leaf.rotation.order='YXZ'; leaf.rotation.y=-a+Math.PI/2; leaf.rotation.x=-1.0-rnd()*.5; leaf.castShadow=true; g.add(leaf);
    const st=new T.Mesh(new T.CylinderGeometry(.008,.01,hh,4),mat.foliage); st.position.set(Math.cos(a)*rr*.45,.38*s+hh/2,Math.sin(a)*rr*.45); st.rotation.z=(rnd()-.5)*.4; g.add(st); } return g; }
function plafon(x,z,w){ const m=B(x-w/2,x+w/2,H-.06,H-.01,z-w/2,z+w/2,mat.plafon,{cast:false}); m.userData.ceil=true; return m; }

function aoStrip(x0,x1,z0,z1,dir,w){ // faixa escura no chão junto à parede, esmaecendo para fora
  let A,Bp,o; if (dir==='-z'){ A=[x0,z0]; Bp=[x1,z0]; o=[0,-w]; } else if (dir==='+z'){ A=[x0,z1]; Bp=[x1,z1]; o=[0,w]; } else if (dir==='-x'){ A=[x0,z0]; Bp=[x0,z1]; o=[-w,0]; } else { A=[x1,z0]; Bp=[x1,z1]; o=[w,0]; }
  const y=.004, P=[A[0],y,A[1], Bp[0],y,Bp[1], Bp[0]+o[0],y,Bp[1]+o[1], A[0],y,A[1], Bp[0]+o[0],y,Bp[1]+o[1], A[0]+o[0],y,A[1]+o[1]], U=[0,1, 1,1, 1,0, 0,1, 1,0, 0,0];
  const g=new T.BufferGeometry(); g.setAttribute('position',new T.Float32BufferAttribute(P,3)); g.setAttribute('uv',new T.Float32BufferAttribute(U,2)); g.setAttribute('normal',new T.Float32BufferAttribute([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0],3));
  const m=new T.Mesh(g,mat.ao); m.castShadow=m.receiveShadow=false; m.renderOrder=1; scene.add(m); }
function shade(x,z,w,d,ry,op){ const m=new T.Mesh(new T.PlaneGeometry(w,d),mat.blob); m.rotation.x=-Math.PI/2; m.rotation.z=-(ry||0); m.position.set(x,.006,z); m.castShadow=m.receiveShadow=false; m.renderOrder=2; scene.add(m); }
function contactShadows(){ for (const w of walls2D){ const lx=w.x1-w.x0, lz=w.z1-w.z0; if (lx>=lz){ aoStrip(w.x0,w.x1,w.z0,w.z1,'-z',.34); aoStrip(w.x0,w.x1,w.z0,w.z1,'+z',.34); } else { aoStrip(w.x0,w.x1,w.z0,w.z1,'-x',.34); aoStrip(w.x0,w.x1,w.z0,w.z1,'+x',.34); } }
  for (const [x,z,w,d,ry] of [[3.65,5.5,1.2,2.6,0],[1.5,4.0,1.8,1.3,0],[1.2,1.45,2.2,1.8,0],[8.4,1.5,2.2,1.0,0],[6.1,4.6,.7,1.6,0],[8.6,4.4,.7,2.4,0],[2.35,7.7,1.3,.9,0]]) shade(x,z,w,d,ry); }

// ---------- a planta ----------
function build(){
  B(-.45,9.45,-.56,-.015,-.45,8.6,mat.plinth,{cast:false});
  // pisos: vinílico amadeirado nas áreas secas, porcelanato nas molhadas
  floorRect(.2,3.3,.2,3.2,mat.ipe); floorRect(6.1,8.9,.2,3.2,mat.ipe); floorRect(3.3,6.1,2.0,3.2,mat.ipe); floorRect(.2,5.8,3.2,6.8,mat.ipe);
  floorRect(3.3,6.1,.2,2.0,mat.porc); floorRect(5.8,8.9,3.2,6.8,mat.porc); floorRect(.6,4.1,6.9,8.3,mat.porc);
  B(.5,4.2,-.2,-.015,6.95,8.4,mat.plinth,{cast:false});
  const T0=.2;
  wall('x',.1,0,9.1,T0,[{a:.9,b:2.4,bot:.95,top:2.2,win:1},{a:3.7,b:4.3,bot:1.4,top:2.05,win:1},{a:5.1,b:5.7,bot:1.4,top:2.05,win:1},{a:6.8,b:8.3,bot:.95,top:2.2,win:1}],{out:-1});
  wall('z',.1,.2,6.8,T0,[],{out:-1});
  wall('z',9.0,.2,6.8,T0,[{a:3.8,b:5.0,bot:1.0,top:2.15,win:1},{a:5.9,b:6.6,bot:1.2,top:2.15,win:1}],{out:1});
  wall('x',6.9,0,9.1,T0,[{a:.8,b:3.9,bot:0,top:2.3,win:1}],{out:1});
  // sacada envidraçada
  B(.6,4.1,0,1.9,8.27,8.3,mat.glass,{cast:false}); B(.6,.63,0,1.9,6.95,8.3,mat.glass,{cast:false}); B(4.07,4.1,0,1.9,6.95,8.3,mat.glass,{cast:false}); B(.6,4.1,1.0,1.04,8.24,8.33,mat.steel);
  const t=.12;
  wall('z',3.3,.2,3.2,t,[{a:1.15,b:1.8,door:1},{a:2.35,b:3.05,door:-1}]);
  wall('z',4.7,.2,2.0,t,[]);
  wall('z',6.1,.2,3.2,t,[{a:2.35,b:3.05,door:1}]);
  wall('x',2.0,3.3,6.1,t,[{a:5.1,b:5.75,door:-1}]);
  wall('x',3.2,.2,3.3,t,[]); wall('x',3.2,6.1,8.9,t,[]);
  wall('x',5.6,5.8,8.9,t,[{a:6.2,b:6.9,door:1}]); wall('z',5.8,5.6,6.8,t,[]);
  const ceil=B(.1,9.0,H,H+.08,.1,6.9,mat.ceil,{cast:false}); ceil.userData.keep=true; ceilObjs.push(ceil);
  for (const [x,z,w] of [[2.6,5.3,.5],[1.5,3.95,.4],[7.3,4.4,.4],[1.7,1.5,.45],[7.5,1.6,.4],[4.7,2.6,.25],[4.0,1.0,.25],[5.4,1.0,.25],[7.3,6.2,.25]]){ const p=plafon(x,z,w); p.userData.keep=true; ceilObjs.push(p); }
  // sala de estar
  sofa(3.65,5.5,2.2,-Math.PI/2); B(.9,3.0,0,.012,4.75,6.3,mat.jute,{cast:false});
  (function(){ const g=new T.Mesh(new T.CylinderGeometry(.45,.45,.04,36),mat.oak); g.position.set(2.1,.4,5.5); g.castShadow=g.receiveShadow=true; scene.add(g); cyl(2.1,0,5.5,.07,.1,.38,mat.oakD,16); })();
  B(.22,.62,.12,.6,4.7,6.4,mat.oakD); B(.22,.26,.95,1.75,4.95,6.15,mat.tv); plant(.55,6.5,1.0,1); plant(5.45,6.45,1.0,0);
  curtain('x',6.68,.8,3.9,2.45,-.12);
  // jantar com espelho
  table(1.5,4.0,1.4,.9,.76,0); for (const dx of [-.38,.38]){ chair(1.5+dx,3.45,0,true); chair(1.5+dx,4.55,Math.PI,true); }
  B(.2,.23,.35,2.25,3.3,4.6,mat.mirror);
  // cozinha americana: granito preto e armários brancos
  B(8.35,8.9,0,.86,3.3,5.5,mat.white); B(8.32,8.9,.86,.9,3.3,5.5,mat.black); B(8.45,8.8,.88,.91,4.15,4.65,mat.steel); cyl(8.85,.9,4.4,.015,.015,.32,mat.steel,8);
  B(8.55,8.9,1.6,2.35,3.3,3.75,mat.white); B(8.55,8.9,1.6,2.35,5.05,5.5,mat.black);
  B(7.55,8.25,0,1.85,3.3,3.95,mat.steel);
  B(5.86,6.36,0,.92,3.9,5.3,mat.white); B(5.82,6.42,.92,.96,3.86,5.34,mat.black);
  for (const z of [4.2,4.9]) { cyl(5.55,0,z,.15,.15,.04,mat.black,16).position.y=.7; cyl(5.55,0,z,.02,.02,.7,mat.steel,8); }
  // área de serviço
  B(8.4,8.9,0,.85,5.75,6.2,mat.porcW); B(8.3,8.9,0,.85,6.25,6.72,mat.white);
  // suíte: cama de casal, roupeiro espelhado e escrivaninha escura
  bed(1.2,1.45,1.6,2.0,Math.PI/2); nightstand(.45,.42,Math.PI/2); nightstand(.45,2.48,Math.PI/2); B(.8,2.9,0,.012,.5,2.4,mat.rugW,{cast:false});
  B(.35,2.65,0,2.35,2.62,3.13,mat.oakD); B(.37,2.63,.05,2.3,2.6,2.61,mat.mirror,{cast:false});
  B(2.55,3.22,.72,.77,.25,1.05,mat.black); B(2.6,3.2,0,.72,.3,.75,mat.black); chair(2.6,.75,Math.PI/2);
  curtain('x',.24,.9,2.4,2.45,.12);
  // quarto 2: beliche com cama auxiliar e escrivaninha
  bed(8.4,1.5,.9,2.0,-Math.PI/2,true); B(7.95,8.88,1.35,1.42,.5,2.5,mat.white); B(7.95,8.88,1.42,1.62,.52,2.48,mat.cushion,{round:.05});
  B(6.2,6.75,.72,.77,.35,1.9,mat.white); chair(6.95,1.1,-Math.PI/2); B(7.0,8.88,0,2.35,2.65,3.13,mat.white);
  curtain('x',.24,6.8,8.3,2.45,.12);
  // banheiro da suíte
  B(4.15,4.64,0,.82,.3,1.05,mat.white); B(4.12,4.64,.82,.86,.28,1.07,mat.stone); B(4.62,4.64,1.2,2.05,.3,1.05,mat.mirror);
  (function(x,z,ry){ const g=group(x,0,z,ry), o={parent:g}; B(-.18,.18,.2,.42,-.26,.26,mat.porcW,{parent:g,round:.08}); B(-.2,.2,.2,.8,.26,.32,mat.porcW,o); })(3.65,.6,0);
  B(3.36,4.1,0,.04,1.25,1.94,mat.porc,{cast:false}); B(4.1,4.12,0,2.0,1.25,1.94,mat.glass,{cast:false}); cyl(3.7,1.95,1.6,.1,.1,.02,mat.steel,16);
  // banheiro social: bancada de mármore e espelho
  B(5.6,6.04,0,.82,.3,1.1,mat.white); B(5.58,6.04,.82,.86,.28,1.12,mat.stone); B(6.02,6.04,1.15,2.05,.3,1.1,mat.mirror);
  (function(x,z,ry){ const g=group(x,0,z,ry), o={parent:g}; B(-.18,.18,.2,.42,-.26,.26,mat.porcW,{parent:g,round:.08}); B(-.2,.2,.2,.8,.26,.32,mat.porcW,o); })(5.0,.6,0);
  B(4.76,5.5,0,.04,1.25,1.94,mat.porc,{cast:false}); B(5.5,5.52,0,2.0,1.25,1.94,mat.glass,{cast:false});
  // sacada
  table(2.35,7.7,.7,.7,.74,0); chair(1.85,7.7,Math.PI/2,true); chair(2.85,7.7,-Math.PI/2,true); plant(.85,8.0,.8,1); plant(3.85,8.0,.7,0);
  contactShadows();
  const shadowCatch=new T.Mesh(new T.PlaneGeometry(80,80),new T.ShadowMaterial({opacity:.16})); shadowCatch.rotation.x=-Math.PI/2; shadowCatch.position.set(4.5,-.55,4.2); shadowCatch.receiveShadow=true; shadowCatch.userData.keep=true; scene.add(shadowCatch);
}
const ceilObjs=[];

// ---------- juntar a geometria estática (menos chamadas de desenho no celular) ----------
function mergeStatic(){ scene.updateMatrixWorld(true); const groups=new Map(), kill=[];
  scene.traverse(o=>{ if (!o.isMesh || o.userData.keep) return; const m=o.material; const key=m.uuid+'|'+(o.castShadow?1:0); let g=groups.get(key); if (!g){ g={m,cast:o.castShadow,list:[]}; groups.set(key,g); } g.list.push(o); kill.push(o); });
  const v=new T.Vector3(), nm=new T.Matrix3();
  for (const g of groups.values()){ const parts=[]; let n=0; for (const o of g.list){ let geo=o.geometry; if (geo.index) geo=geo.toNonIndexed(); parts.push([geo,o.matrixWorld]); n+=geo.attributes.position.count; }
    const P=new Float32Array(n*3), N=new Float32Array(n*3), U=new Float32Array(n*2); let off=0;
    for (const [geo,mw] of parts){ const p=geo.attributes.position, nr=geo.attributes.normal, uv=geo.attributes.uv; nm.getNormalMatrix(mw);
      for (let i=0;i<p.count;i++){ const k=off+i; v.fromBufferAttribute(p,i).applyMatrix4(mw); P[k*3]=v.x; P[k*3+1]=v.y; P[k*3+2]=v.z; if (nr){ v.fromBufferAttribute(nr,i).applyMatrix3(nm).normalize(); N[k*3]=v.x; N[k*3+1]=v.y; N[k*3+2]=v.z; } if (uv){ U[k*2]=uv.getX(i); U[k*2+1]=uv.getY(i); } } off+=p.count; }
    const geo=new T.BufferGeometry(); geo.setAttribute('position',new T.BufferAttribute(P,3)); geo.setAttribute('normal',new T.BufferAttribute(N,3)); geo.setAttribute('uv',new T.BufferAttribute(U,2)); geo.computeBoundingSphere();
    const mesh=new T.Mesh(geo,g.m); mesh.castShadow=g.cast; mesh.receiveShadow=true; mesh.matrixAutoUpdate=false; scene.add(mesh); }
  for (const o of kill) if (o.parent) o.parent.remove(o);
  const empty=[]; scene.traverse(o=>{ if (o.isGroup && !o.children.length) empty.push(o); }); for (const o of empty) if (o.parent) o.parent.remove(o); }

// ---------- luz: o sol nasce no leste (topo da planta) ----------
// luz de estúdio: céu suave, uma luz principal vinda do leste (topo da planta) e reflexos de um ambiente neutro
const hemi=new T.HemisphereLight(lin('#fff6ea'),lin('#b8a48c'),.35); scene.add(hemi);
const sun=new T.DirectionalLight(0xffffff,2); sun.castShadow=true; sun.shadow.mapSize.set(isTouch?2048:4096,isTouch?2048:4096); const sc=sun.shadow.camera; sc.left=-10; sc.right=10; sc.top=10; sc.bottom=-10; sc.near=1; sc.far=80; sun.shadow.bias=-.00025; sun.shadow.normalBias=.025; scene.add(sun); scene.add(sun.target); sun.target.position.set(4.5,0,4.2);
const lamps=[]; for (const [x,z,i,d] of [[2.6,5.3,1.4,6],[1.5,3.95,1.1,4.5],[7.3,4.4,1.1,4.5],[1.7,1.5,1.0,4.5],[7.5,1.6,.9,4.5],[4.7,2.6,.6,3],[4.0,1.0,.5,2.5],[5.4,1.0,.5,2.5],[7.3,6.2,.5,2.5],[.45,.42,.45,2.4],[.45,2.48,.45,2.4]]){ const l=new T.PointLight(lin('#ffc98e'),0,d,2); l.position.set(x,(x<1&&z<4)||x>8.6?.95:H-.3,z); scene.add(l); lamps.push({l,base:i}); }
const skyU={top:{value:new T.Color()},bot:{value:new T.Color()},sunDir:{value:new T.Vector3(0,1,0)},sunCol:{value:new T.Color(0,0,0)}};
const sky=new T.Mesh(new T.SphereGeometry(300,32,16),new T.ShaderMaterial({uniforms:skyU,side:T.BackSide,depthWrite:false,depthTest:false,fog:false,
  vertexShader:'varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader:'uniform vec3 top; uniform vec3 bot; varying vec3 vP; void main(){ vec3 d=normalize(vP); float h=clamp(d.y*.5+.5,0.0,1.0); gl_FragColor=vec4(mix(bot,top,smoothstep(.15,.9,h)),1.0); }'}));
sky.renderOrder=-1; sky.userData.keep=true; scene.add(sky);
const pmrem=new T.PMREMGenerator(renderer); let roomEnv=null; try{ if (T.RoomEnvironment) roomEnv=pmrem.fromScene(new T.RoomEnvironment(),.04).texture; }catch(_){ roomEnv=null; }
const envScene=new T.Scene(); const envBall=new T.Mesh(new T.SphereGeometry(10,24,12),new T.MeshBasicMaterial({side:T.BackSide,vertexColors:true}));
envBall.geometry.setAttribute('color',new T.Float32BufferAttribute(new Float32Array(envBall.geometry.attributes.position.count*3),3)); envScene.add(envBall); let envRT=null;
function updateEnv(top,bot){ if (!night && roomEnv){ scene.environment=roomEnv; return; } const P=envBall.geometry.attributes.position, Cc=envBall.geometry.attributes.color, tl=top.clone().convertSRGBToLinear(), bl=bot.clone().convertSRGBToLinear(), c=new T.Color();
  for (let i=0;i<P.count;i++){ const h=Math.max(0,P.getY(i)/10); c.copy(bl).lerp(tl,Math.pow(h,.55)); if (P.getY(i)<0) c.copy(bl).multiplyScalar(.45); Cc.setXYZ(i,c.r,c.g,c.b); } Cc.needsUpdate=true; const old=envRT; envRT=pmrem.fromScene(envScene,.04); scene.environment=envRT.texture; if (old) old.dispose(); }
for (const k in mat){ const m=mat[k]; if (m && m.isMeshStandardMaterial) m.envMapIntensity=Math.min(m.envMapIntensity,.35); }
mat.wall.envMapIntensity=.3; mat.ipe.envMapIntensity=.35; mat.taco.envMapIntensity=.3; mat.porc.envMapIntensity=.4; mat.glass.envMapIntensity=.9; mat.mirror.envMapIntensity=1; mat.steel.envMapIntensity=.8; mat.ipe.roughness=.45; mat.ipe.color.copy(lin('#efe7dc')); mat.taco.roughness=.5;
const sunDir=new T.Vector3(); let hour=9, night=0, lampF=0;
function sunAt(){ return sunDir.set(-.42,.84,-.6).normalize(); }
function setHour(h){ hour=h; night = (h>=18||h<6) ? 1 : 0;
  const top=new T.Color(night?'#211c17':'#f2eee8'), bot=new T.Color(night?'#0e0b09':'#d9d1c6');
  sun.position.copy(sun.target.position).addScaledVector(night?new T.Vector3(.5,.8,.35).normalize():sunAt(),40);
  sun.color.copy(lin(night?'#8fa4d8':'#fff1dc')); sun.intensity=night?.12:2.4; hemi.intensity=night?.05:.3; baseExp=night?1.2:.8;
  skyU.top.value.copy(top); skyU.bot.value.copy(bot); envDirty=true; envTop=top; envBot=bot; renderer.shadowMap.needsUpdate=true; }
let envDirty=true, envTop=null, envBot=null, envT=0, baseExp=1, expF=1;

// ---------- ambientes ----------
const ROOMS=[
  {id:'sala',   no:'01', n:'Sala e jantar',   l:[2.5,4.9],  eye:[4.9,3.5], look:[1.0,1.2,6.2], photo:'img/sala.jpg',     t:'Sala integrada ao jantar com parede 3D, espelho, sanca com LED e piso vinílico térmico.'},
  {id:'sacada', no:'02', n:'Sacada',          l:[2.35,7.6], eye:[2.3,6.3], look:[2.3,1.2,9.5], photo:'img/sacada.jpg',   t:'Envidraçada, com vista pra Alphaville, pra portaria e pro interior do condomínio.'},
  {id:'cozinha',no:'03', n:'Cozinha',         l:[7.3,4.4],  eye:[6.6,6.3], look:[8.6,1.1,3.6], photo:'img/cozinha.jpg',  t:'Cozinha americana com granito preto, planejados e área de serviço integrada.'},
  {id:'suite',  no:'04', n:'Suíte',           l:[1.7,1.5],  eye:[2.9,2.8], look:[.4,1.0,.8],   photo:'img/suite.jpg',    t:'Roupeiro espelhado, escrivaninha planejada, nichos e banheiro privativo com chuveiro a gás.'},
  {id:'quarto', no:'05', n:'Quarto 2',        l:[7.5,1.6],  eye:[6.5,2.8], look:[8.6,1.0,.8],  photo:'img/quarto.jpg',   t:'Beliche planejado com cama auxiliar, escrivaninha e armário.'},
  {id:'banho',  no:'06', n:'Banheiros',       l:[4.7,1.0],  eye:[5.4,1.8], look:[5.8,1.1,.5],  photo:'img/banheiro.jpg', t:'Dois banheiros com bancada de mármore e chuveiro a gás.'}];
const zoneOf=(x,z)=>{ if (z>6.85) return 'sacada'; if (z<2.0){ if (x<3.3) return 'suite'; if (x<6.1) return 'banho'; return 'quarto'; } if (z<3.2){ if (x<3.3) return 'suite'; if (x>6.1) return 'quarto'; return 'corr'; } if (x<5.8) return 'sala'; return 'cozinha'; };

// ---------- câmera: maquete (órbita) e dentro (olhar em volta) ----------
const tgt=new T.Vector3(4.5,0,4.2), home=tgt.clone(), goalT=tgt.clone(); let goalR=22, sel=null, goalPhi=null, homePhi=.6; const orb={theta:-.42, phi:.6, r:22};
let mode='doll', camAnim=null, eye=new T.Vector3(), yaw=0, pitch=0, walkTo=null, idle=0, walked=false;
function dollPose(){ const s=Math.sin(orb.phi); return new T.Vector3(tgt.x+orb.r*s*Math.sin(orb.theta), orb.r*Math.cos(orb.phi), tgt.z+orb.r*s*Math.cos(orb.theta)); }
const eul=new T.Euler(0,0,0,'YXZ'); const q=(y,p)=>{ eul.set(p,y,0,'YXZ'); return new T.Quaternion().setFromEuler(eul); };
function anim(p1,q1,dur,done){ camAnim={p0:camera.position.clone(),q0:camera.quaternion.clone(),p1,q1,t:0,dur,done}; }
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
function fitDoll(){ const a=innerAspect(); goalR = orb.r = a<.8 ? 25 : a<1.2 ? 21 : 18.5; orb.phi = homePhi = a<.8 ? .52 : .66; }
let homeR=22;
function focus(id){ const r=ROOMS.find(x=>x.id===id); if (!r){ reset(); return; } sel=id; idle=0; goalT.set(r.l[0],0,r.l[1]); goalR=Math.max(8,homeR*.5); goalPhi=.4; emit('room',r); }
function reset(){ sel=null; goalT.copy(home); goalR=homeR; goalPhi=homePhi; emit('room',null); }
function innerAspect(){ const r=canvas.getBoundingClientRect(); return r.width/Math.max(1,r.height); }
function enterRoom(id){ const r=ROOMS.find(x=>x.id===id); if (!r) return; idle=0; walkTo=null; walked=false; cur=id; const p=new T.Vector3(r.eye[0],1.55,r.eye[1]); const lk=new T.Vector3(...r.look).sub(p); yaw=Math.atan2(-lk.x,-lk.z); pitch=Math.atan2(lk.y,Math.hypot(lk.x,lk.z));
  const wasDoll = mode==='doll'; mode='inside'; for (const c of ceilObjs) c.visible=true; eye.copy(p);
  if (wasDoll){ // desce primeiro até a altura do teto, depois entra
    anim(new T.Vector3(p.x,8,p.z+.01), q(yaw,-1.2), .9, ()=>{ anim(p, q(yaw,pitch), 1.1); }); } else anim(p,q(yaw,pitch),1.2);
  emit('room',r); emit('mode','inside'); }
function toDoll(){ mode='doll'; walkTo=null; const p=dollPose(); const o=new T.Object3D(); o.position.copy(p); o.lookAt(tgt); anim(p,o.quaternion.clone(),1.4,()=>{ for (const c of ceilObjs) c.visible=false; }); setTimeout(()=>{ for (const c of ceilObjs) c.visible=false; },350); emit('mode','doll'); emit('room',null); }
const listeners={}; function emit(e,d){ (listeners[e]||[]).forEach(f=>f(d)); }

// ---------- toque ----------
const ptrs=new Map(); let pinch=0;
canvas.addEventListener('pointerdown',e=>{ ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY,t:performance.now(),m:0}); try{ canvas.setPointerCapture(e.pointerId); }catch(_){} idle=0; if (ptrs.size===2){ const [a,b]=[...ptrs.values()]; pinch=Math.hypot(a.x-b.x,a.y-b.y); } });
canvas.addEventListener('pointermove',e=>{ const p=ptrs.get(e.pointerId); if (!p) return; const dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY; p.m=Math.max(p.m,Math.hypot(e.clientX-p.x0,e.clientY-p.y0)); if (camAnim) return;
  if (ptrs.size>=2){ const [a,b]=[...ptrs.values()]; const d=Math.hypot(a.x-b.x,a.y-b.y); if (mode==='doll' && pinch>0) orb.r=Math.max(10,Math.min(45,orb.r*pinch/d)); pinch=d; return; }
  if (mode==='doll'){ orb.theta-=dx*.0065; orb.phi=Math.max(.25,Math.min(1.3,orb.phi-dy*.0045)); goalPhi=null; }
  else { const k=isTouch?.006:.0045; yaw+=dx*k; pitch=Math.max(-1.2,Math.min(1.0,pitch+dy*k)); } });
function up(e){ const p=ptrs.get(e.pointerId); ptrs.delete(e.pointerId); if (ptrs.size<2) pinch=0; if (p && e.type==='pointerup' && p.m<8 && performance.now()-p.t<450) tapAt(e.clientX,e.clientY); }
canvas.addEventListener('pointerup',up); canvas.addEventListener('pointercancel',up);
canvas.addEventListener('wheel',e=>{ if (mode!=='doll') return; e.preventDefault(); orb.r=Math.max(10,Math.min(45,orb.r*(1+e.deltaY*.0012))); idle=0; },{passive:false});
const rc=new T.Raycaster(), ndc=new T.Vector2();
function floorHit(cx,cy){ const r=canvas.getBoundingClientRect(); ndc.set((cx-r.left)/r.width*2-1, -((cy-r.top)/r.height)*2+1); rc.setFromCamera(ndc,camera); const o=rc.ray.origin, d=rc.ray.direction; if (d.y>=-.01) return null; const t=-o.y/d.y; const x=o.x+d.x*t, z=o.z+d.z*t; if (x<.25||x>8.95||z<.25||z>8.25||(z>6.85&&(x<.6||x>4.1))) return null; return new T.Vector3(x,0,z); }
const blockedAt=(x,z)=>walls2D.some(w=>x>w.x0-.22&&x<w.x1+.22&&z>w.z0-.22&&z<w.z1+.22);
function tapAt(cx,cy){ const f=floorHit(cx,cy); if (!f){ if (mode==='doll') reset(); return; } if (mode==='doll'){ const id=zoneOf(f.x,f.z); if (id) focus(id); else reset(); return; } walkTo=f; }

// ---------- etiquetas da maquete ----------
const labelBox=$('labels3d'); const labelEls=ROOMS.map(r=>{ const b=document.createElement('button'); b.className='lab lg press'; b.innerHTML='<b>'+r.no+'</b>'+r.n; b.onclick=()=>focus(r.id); b.dataset.id=r.id; labelBox.appendChild(b); return {b,v:new T.Vector3(r.l[0],.9,r.l[1])}; });
let rectC=null; function updateLabels(){ const r=rectC||(rectC=canvas.getBoundingClientRect()); const show=mode==='doll' && !camAnim; if (labelBox._show!==show){ labelBox._show=show; labelBox.style.opacity=show?1:0; } labelBox.style.pointerEvents='none'; labelBox.classList.toggle('off',!show); if (!show) return;
  for (const L of labelEls){ const on=L.b.dataset.id===sel; if (L.on!==on){ L.on=on; L.b.classList.toggle('on',on); L.w=0; } if (!L.w){ L.w=L.b.offsetWidth; L.h=L.b.offsetHeight; } const p=pv.copy(L.v).project(camera); const vis=p.z<1&&Math.abs(p.x)<1.1&&Math.abs(p.y)<1.1; if (L.vis!==vis){ L.vis=vis; L.b.style.display=vis?'':'none'; } if (vis) L.b.style.transform='translate3d('+((p.x*.5+.5)*r.width-L.w/2).toFixed(1)+'px,'+((-p.y*.5+.5)*r.height-L.h/2).toFixed(1)+'px,0)'; } }
const pv=new T.Vector3(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(()=>labelEls.forEach(L=>{ L.w=0; }));

// ---------- laço ----------
let running=true, last=performance.now(), cur=null, paused=false;
function resize(){ rectC=null; const r=canvas.getBoundingClientRect(); if (r.width<2||r.height<2) return; renderer.setSize(r.width,r.height,false); camera.aspect=r.width/Math.max(1,r.height); camera.fov = camera.aspect<.8 ? 44 : 32; if (mode==='inside') camera.fov = camera.aspect<.8 ? 74 : 62; camera.updateProjectionMatrix(); }
addEventListener('resize',()=>{ resize(); const a=innerAspect(); homeR = a<.8 ? 25 : a<1.2 ? 21 : 18.5; if (!sel) goalR=homeR; });
let loopOn=false; function kick(){ if (!loopOn){ loopOn=true; last=performance.now(); requestAnimationFrame(frame); } }
const io=new IntersectionObserver(es=>{ running=es[es.length-1].isIntersecting; if (running){ resize(); kick(); } },{threshold:0}); io.observe(canvas);
let perfN=0, perfT=0, perfDone=false;
function frame(now){ if (!running || document.hidden){ loopOn=false; return; } requestAnimationFrame(frame); if (paused){ last=now; return; } const dt=Math.min(.05,(now-last)/1000); last=now; idle+=dt;
  if (camAnim){ camAnim.t+=dt/camAnim.dur; const e=ease(Math.min(1,camAnim.t)); camera.position.lerpVectors(camAnim.p0,camAnim.p1,e); camera.quaternion.copy(camAnim.q0).slerp(camAnim.q1,e); if (camAnim.t>=1){ const d=camAnim.done; camAnim=null; if (d) d(); } }
  else if (mode==='doll'){ if (idle>5 && !reduce && !sel) orb.theta+=dt*.04; const k=Math.min(1,dt*2.6); tgt.lerp(goalT,k); orb.r+=(goalR-orb.r)*k; if (goalPhi!==null) orb.phi+=(goalPhi-orb.phi)*k; camera.position.copy(dollPose()); camera.lookAt(tgt); }
  else { if (walkTo){ const dx=walkTo.x-eye.x, dz=walkTo.z-eye.z, d=Math.hypot(dx,dz); if (d<.08) walkTo=null; else { const st=Math.min(d,dt*1.6); const nx=eye.x+dx/d*st, nz=eye.z+dz/d*st; if (blockedAt(nx,nz)) walkTo=null; else { eye.x=nx; eye.z=nz; walked=true; } } }
    camera.position.copy(eye); camera.quaternion.copy(q(yaw,pitch)); const z=zoneOf(eye.x,eye.z); if (walked && z!==cur && z!=='corr'){ cur=z; emit('room',ROOMS.find(r=>r.id===z)); } }
  const fovT = mode==='inside' ? (camera.aspect<.8?74:62) : (camera.aspect<.8?44:32); if (Math.abs(camera.fov-fovT)>.05){ camera.fov+=(fovT-camera.fov)*Math.min(1,dt*3); camera.updateProjectionMatrix(); }
  expF+=((mode==='inside'?.78:1)-expF)*Math.min(1,dt*2.5); renderer.toneMappingExposure=baseExp*expF;
  lampF+=(night-lampF)*Math.min(1,dt*3); for (const L of lamps) L.l.intensity=L.base*lampF*1.6; for (const g of glowMats) g.m.emissiveIntensity=g.base+lampF*1.8;
  envT-=dt; if (envDirty && envT<=0 && envTop){ updateEnv(envTop,envBot); envDirty=false; envT=.25; }
  sky.position.copy(camera.position); updateLabels(); renderer.render(scene,camera);
  if (!perfDone){ perfN++; perfT+=dt; if (perfN>=90){ const ms=perfT/perfN*1000; if (ms>26 && dpr>1){ dpr=Math.max(1,dpr-.35); renderer.setPixelRatio(dpr); resize(); perfN=perfT=0; } else perfDone=true; } } }

// ---------- montar ----------
build(); mergeStatic(); for (const c of ceilObjs) c.visible=false; setHour(9); updateEnv(envTop,envBot); envDirty=false; fitDoll(); homeR=goalR; resize();
camera.position.copy(dollPose()); camera.lookAt(tgt); renderer.shadowMap.needsUpdate=true;
window.Lux3D={ zoom:(k)=>{ idle=0; goalR=Math.max(9,Math.min(48,goalR*k)); goalPhi=goalPhi; }, focus, reset, enterRoom, toDoll, setHour, get mode(){ return mode; }, get hour(){ return hour; }, rooms:ROOMS, on:(e,f)=>{ (listeners[e]=listeners[e]||[]).push(f); }, sunAt,
  _debug:{renderer,scene,camera,orb,frame:()=>renderer.render(scene,camera), settle:()=>{ if (camAnim){ camAnim.t=.999; } }, pause:v=>{ paused=v; }, get running(){ return running; }, get paused(){ return paused; }, step:(n)=>{ for (let i=0;i<(n||1);i++){ paused=false; frame(performance.now()+16*(i+1)); } paused=true; }, get anim(){ return camAnim; }} };
kick(); document.addEventListener('visibilitychange',()=>{ if (!document.hidden && running) kick(); }); emit('ready'); window.dispatchEvent(new Event('lux3d-ready'));
}
let booted=false; window.Lux3DBoot=()=>{ if (booted) return; booted=true; boot(); };
})();
