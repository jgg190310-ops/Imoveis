/* ======================================================================
   Planta 3D — Pousada Vício D'Água
   Representação ilustrativa da área, montada a partir das fotos.
   As geometrias são mescladas por material: a cena inteira sai em
   poucas chamadas de desenho, pra rodar liso no celular.
   ====================================================================== */

const palco = document.getElementById('palco3d');
const carregando = document.getElementById('carregando3d');
const dica = document.getElementById('dica3d');

function falhou(msg){
  if(carregando){ carregando.textContent = msg; carregando.classList.remove('some'); }
  if(dica) dica.style.display = 'none';
}

let THREE, BGU;
try {
  THREE = await import('./three.module.js');
  BGU   = await import('./BufferGeometryUtils.js');
} catch (e) {
  try {
    THREE = await import('https://unpkg.com/three@0.160.0/build/three.module.js');
    BGU   = await import('https://unpkg.com/three@0.160.0/examples/jsm/utils/BufferGeometryUtils.js');
  } catch (e2) { falhou('Não foi possível carregar o modelo 3D.'); }
}

if (THREE && BGU) {

/* ---------------------------------------------------------- cena ---- */
const cena = new THREE.Scene();
cena.background = new THREE.Color(0x1b4a5e);
cena.fog = new THREE.FogExp2(0x1b4a5e, 0.0062);

const camera = new THREE.PerspectiveCamera(42, 1, 0.5, 400);
const render = new THREE.WebGLRenderer({antialias:true, powerPreference:'high-performance'});
render.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
render.shadowMap.enabled = true;
render.shadowMap.type = THREE.PCFShadowMap;
palco.appendChild(render.domElement);

/* --------------------------------------------------------- luzes ---- */
/* poucas luzes de proposito: cada uma pesa no shader de todo material */
cena.add(new THREE.HemisphereLight(0xa8cfe4, 0x3a6b4a, 1.05));

const lua = new THREE.DirectionalLight(0xd6e8f5, 1.0);
lua.position.set(26, 34, 18);
lua.castShadow = true;
lua.shadow.mapSize.set(1024, 1024);
lua.shadow.camera.near = 1; lua.shadow.camera.far = 110;
lua.shadow.camera.left = -34; lua.shadow.camera.right = 34;
lua.shadow.camera.top = 34; lua.shadow.camera.bottom = -34;
lua.shadow.bias = -0.0012;
cena.add(lua);

const contraluz = new THREE.DirectionalLight(0x6fa8bd, 0.42);
contraluz.position.set(-22, 16, -16);
cena.add(contraluz);

/* ---------------------------------------------------- materiais ---- */
const L = (cor, op={}) => new THREE.MeshLambertMaterial(Object.assign({color:cor}, op));
const B = (cor) => new THREE.MeshBasicMaterial({color:cor});
const mat = {
  grama:    L(0x6b9e5c),  gramaEsc: L(0x5c8c50),  terra:   L(0x6b5842),
  deck:     L(0xa87a4a),  deckRipa: L(0x8e6239),  deckClaro:L(0xbb8d59),
  piso:     L(0xb9ad9a),  pedra:    L(0xcfc3ad),
  parede:   L(0xf4efe4),  paredeS:  L(0xdcd5c6),
  ripado:   L(0xa9763f),  ripadoEsc:L(0x8a5d2f),
  telha:    L(0x9c5540),  telhaEsc: L(0x7e4232),
  madeira:  L(0x8f6336),  madEsc:   L(0x6d4a28),
  metal:    L(0x8d96a0),  metalEsc: L(0x4b555e),
  escuro:   L(0x2d3a42),  preto:    L(0x1a2228),  granito: L(0x2b3238),
  folha:    L(0x3f7a3a),  folhaCl:  L(0x589c4c),  folhaRub:L(0xa5405a),
  tronco:   L(0x6d523a),  lona:     L(0xcfc6b4),  toalha:  L(0xe8e2d4),
  pele:     L(0xd6a881),
  carroA:   L(0xf0f0ee),  carroB:   L(0x6d7781),
  roupa1:   L(0xcf6b5a),  roupa2:   L(0xe8e2d4),  roupa3: L(0x4f7fa8), roupa4: L(0x3f4a55),
  cadeira:  L(0xdcd5c6),  tampo:    L(0xe9e3d6),
  dourado:  L(0xc9a227),  guitarra: L(0xb5651d),
  vidro:    new THREE.MeshLambertMaterial({color:0xa8ccd4, transparent:true, opacity:0.34}),
  vidroInt: B(0xffd9a0),
  luzQuente:B(0xffc877),
  luzFria:  B(0xcfeeff),
  luzAgua:  B(0x5fd8f5),
};
// garrafas coloridas do bar
const garrafas = [0x2e6b3a,0x8c3a2a,0xc9a227,0x2b4f7a,0x6b2f52,0xd4b483,0x3f7f6f].map(L);

/* ------------------------------------- acumulador: 1 mesh por material */
const lotes = new Map();         // material -> [geometrias]
const semSombra = new Set([mat.vidroInt, mat.luzQuente, mat.luzFria, mat.luzAgua]);
const _m4 = new THREE.Matrix4();
const _e  = new THREE.Euler();
const _q  = new THREE.Quaternion();
const _v  = new THREE.Vector3();
const _s  = new THREE.Vector3(1,1,1);

function por(m, geo, x, y, z, rx, ry, rz, sx, sy, sz){
  _e.set(rx||0, ry||0, rz||0);
  _q.setFromEuler(_e);
  _v.set(x||0, y||0, z||0);
  _s.set(sx===undefined?1:sx, sy===undefined?1:sy, sz===undefined?1:sz);
  _m4.compose(_v, _q, _s);
  geo.applyMatrix4(_m4);
  if(!lotes.has(m)) lotes.set(m, []);
  lotes.get(m).push(geo);
}
const cx  = (l,a,p,m,x,y,z,rx,ry,rz) => por(m, new THREE.BoxGeometry(l,a,p), x,y,z, rx,ry,rz);
const cil = (r1,r2,h,m,x,y,z,seg,rx,ry,rz) => por(m, new THREE.CylinderGeometry(r1,r2,h,seg||12), x,y,z, rx,ry,rz);
const esf = (r,m,x,y,z,sx,sy,sz,rx,ry,rz,sg) => por(m, new THREE.SphereGeometry(r, sg||8, (sg?Math.round(sg*0.7):6)), x,y,z, rx,ry,rz, sx,sy,sz);
const cone= (r,h,m,x,y,z,seg,rx,ry,rz) => por(m, new THREE.ConeGeometry(r,h,seg||10), x,y,z, rx,ry,rz);
const circ= (r,m,x,y,z,sx,sy,seg) => por(m, new THREE.CircleGeometry(r, seg||24), x,y,z, -Math.PI/2,0,0, sx||1, sy||1, 1);

function finalizar(){
  let meshes = 0, tri = 0;
  for(const [m, gs] of lotes){
    if(!gs.length) continue;
    const g = gs.length === 1 ? gs[0] : BGU.mergeGeometries(gs, false);
    if(!g) continue;
    const mesh = new THREE.Mesh(g, m);
    if(semSombra.has(m)){ mesh.castShadow = false; mesh.receiveShadow = false; }
    else { mesh.castShadow = true; mesh.receiveShadow = true; }
    cena.add(mesh);
    meshes++; tri += g.attributes.position.count/3;
  }
  lotes.clear();
  return {meshes, tri:Math.round(tri)};
}

/* ========================================================== TERRENO == */
cx(52, 1, 38, mat.grama, 0, -0.5, 0);
for(let i=0;i<20;i++){
  circ(1.6 + (i%5)*0.55, mat.gramaEsc, ((i*7.3)%46)-23, 0.012, ((i*11.7)%32)-16, 1, 1, 10);
}

/* ===================================================== DECK (ripas) == */
function deckRipado(lx, lz, cxx, czz, mA, mB, passo){
  passo = passo || 0.62;
  const n = Math.round(lz/passo);
  for(let i=0;i<n;i++){
    cx(lx, 0.16, passo*0.9, i%2 ? mA : mB, cxx, 0.09, czz - lz/2 + passo/2 + i*passo);
  }
  cx(lx+0.1, 0.2, 0.12, mat.madEsc, cxx, 0.02, czz - lz/2);
  cx(lx+0.1, 0.2, 0.12, mat.madEsc, cxx, 0.02, czz + lz/2);
}
deckRipado(23, 15, -1, 6.5, mat.deck, mat.deckRipa);
for(let i=0;i<22;i++){
  const tons = [mat.deck, mat.deckClaro, mat.deckRipa, mat.madeira];
  cx(2.6, 0.14, 0.52, tons[i%4], -11.5, 0.08, 14.4 - i*0.6);
}

/* ================================================ SOBRADO DAS SUÍTES = */
const PZ0 = -1.5;
cx(20, 3.5, 8, mat.parede, 0, 1.75, PZ0);
cx(20.2, 3.3, 8.1, mat.ripado, 0, 5.3, PZ0);
for(let i=0;i<32;i++) cx(0.1, 3.2, 0.1, mat.ripadoEsc, -9.9 + i*0.64, 5.3, PZ0 + 4.07);
cx(20.6, 0.35, 8.4, mat.paredeS, 0, 3.6, PZ0);

/* telhado com telhas */
(function(){
  const larg = 21.4, incl = 0.40, prof = 5.2, n = 9;
  for(const lado of [1,-1]){
    for(let i=0;i<n;i++){
      const t = (i+0.5)/n;
      cx(larg, 0.14, prof/n*1.08, i%2 ? mat.telha : mat.telhaEsc,
         0, 7.45 - prof*t*Math.sin(incl), PZ0 + lado*prof*t*Math.cos(incl), lado*incl);
    }
    cx(larg+0.6, 0.18, 0.5, mat.telhaEsc,
       0, 7.45 - prof*Math.sin(incl) - 0.1, PZ0 + lado*(prof*Math.cos(incl)+0.2), lado*incl);
  }
  cx(larg+0.4, 0.26, 0.5, mat.telhaEsc, 0, 7.6, PZ0);
  for(const lx of [-larg/2+0.1, larg/2-0.1]){
    cil(2.0, 2.0, 0.22, mat.paredeS, lx, 6.55, PZ0, 3, 0, Math.PI/2, Math.PI/2);
  }
})();

/* janelas, portas */
function janela(x, y, z, l, a){
  cx(l+0.16, a+0.16, 0.1, mat.paredeS, x, y, z+0.01);
  cx(l, a, 0.07, mat.vidro, x, y, z+0.07);
  cx(l*0.46, a*0.92, 0.04, mat.vidroInt, x - l*0.26, y, z+0.04);
  cx(0.05, a, 0.09, mat.paredeS, x, y, z+0.08);
}
for(let i=0;i<6;i++) janela(-8.3 + i*3.32, 5.25, PZ0 + 4.1, 2.2, 2.3);
for(let i=0;i<6;i++){
  const x = -8.3 + i*3.32;
  if(i===2 || i===4){
    cx(1.5, 2.6, 0.12, mat.madeira, x, 1.4, PZ0 + 4.06);
    cx(1.3, 2.4, 0.04, mat.madEsc,  x, 1.4, PZ0 + 4.13);
    cil(0.05,0.05,0.26, mat.metal, x+0.52, 1.35, PZ0+4.2, 8, Math.PI/2);
  } else janela(x, 1.75, PZ0 + 4.06, 2.0, 2.0);
}

/* varanda superior */
cx(20.4, 0.22, 2.6, mat.piso, 0, 3.78, PZ0 + 5.3);
for(let i=0;i<13;i++){
  cx(1.44, 1.05, 0.05, mat.vidro, -9.4 + i*1.56, 4.42, PZ0 + 6.55);
  cil(0.045,0.045,1.1, mat.metal, -9.4 + i*1.56 - 0.78, 4.42, PZ0 + 6.55, 6);
}
cx(20.4, 0.08, 0.12, mat.metal, 0, 4.98, PZ0 + 6.55);

/* varanda térrea */
for(let i=0;i<7;i++) cx(0.26, 3.5, 0.26, mat.parede, -9 + i*3, 1.75, PZ0 + 6.4);
cx(20.4, 0.26, 2.9, mat.paredeS, 0, 3.6, PZ0 + 5.5);

/* luminárias sob o beiral */
for(let i=0;i<8;i++) cil(0.1,0.1,0.14, mat.luzQuente, -8.8 + i*2.5, 3.42, PZ0 + 6.3, 8);

/* escada externa */
for(let i=0;i<9;i++) cx(2.4, 0.16, 0.42, mat.piso, -11.6, 0.42 + i*0.4, PZ0 + 2.4 + i*0.42);
for(let i=0;i<6;i++) cil(0.05,0.05,1.0, mat.metal, -10.5, 1.1 + i*0.62, PZ0 + 3.0 + i*0.64, 6);

/* ============================================== PISCINA (detalhada) == */
const PX = -3.2, PZ = 7.4;
por(mat.pedra, new THREE.RingGeometry(0.9, 1.06, 48), PX, 0.26, PZ, -Math.PI/2, 0, 0, 5.0, 3.1, 1);
por(L(0x12647f, {side:THREE.DoubleSide}), new THREE.CylinderGeometry(1, 0.9, 1.5, 48, 1, true),
    PX, -0.55, PZ, 0,0,0, 4.42, 1, 2.72);
circ(1, L(0x0f5570), PX, -1.28, PZ, 4.0, 2.45, 48);
for(let i=0;i<3;i++) cx(1.9, 0.12, 0.44, mat.pedra, PX + 3.3, -0.1 - i*0.3, PZ + 0.6 + i*0.34);
cil(0.05,0.05,1.3, mat.metal, PX+2.6, 0.55, PZ+1.5, 6);
cil(0.05,0.05,1.3, mat.metal, PX+3.9, 0.55, PZ+1.5, 6);
for(const dx of [-2.4, 0, 2.4]) cil(0.17,0.17,0.08, mat.luzAgua, PX+dx, 0.24, PZ, 10, Math.PI/2);

/* espreguiçadeiras */
function espreguicadeira(x, z, ry){
  const c = Math.cos(ry), s = Math.sin(ry);
  const P = (dx,dz) => [x + dx*c - dz*s, z + dx*s + dz*c];
  let p = P(0,0);        cx(0.78, 0.1, 2.0, mat.toalha, p[0], 0.6, p[1], 0, ry);
  p = P(0,-0.86);        cx(0.78, 0.1, 0.85, mat.toalha, p[0], 0.81, p[1], -0.62, ry);
  for(const [dx,dz] of [[-0.32,0.82],[0.32,0.82],[-0.32,-0.72],[0.32,-0.72]]){
    p = P(dx,dz);        cil(0.045,0.045,0.4, mat.metal, p[0], 0.38, p[1], 6);
  }
}
espreguicadeira(-8.6, 6.0, 0.25);
espreguicadeira(-8.6, 8.4, 0.25);
espreguicadeira(2.4, 10.6, -2.9);

/* ======================================================= BAR COBERTO = */
const BX = 15.5, BZ = 5.2;
deckRipado(8, 7, BX, BZ, mat.madeira, mat.madEsc, 0.58);
cx(7.4, 3.1, 0.25, mat.ripado, BX, 1.55, BZ - 3.3);
cx(0.25, 3.1, 6.6, mat.ripado, BX + 3.6, 1.55, BZ);
for(let i=0;i<4;i++) cx(0.2, 3.1, 0.2, mat.madEsc, BX - 3.6, 1.55, BZ - 3 + i*2);
for(let i=0;i<7;i++) cx(7.8, 0.12, 1.02, i%2 ? mat.telha : mat.telhaEsc, BX, 3.4 - i*0.12, BZ - 3.1 + i*1.03, -0.17);
cx(6.4, 0.14, 0.75, mat.granito, BX - 0.3, 1.18, BZ + 2.5);
cx(6.0, 1.05, 0.6,  mat.madeira, BX - 0.3, 0.6,  BZ + 2.5);
cx(0.75, 0.14, 3.4, mat.granito, BX + 3.0, 1.18, BZ + 0.9);
cx(0.6, 1.05, 3.2,  mat.madeira, BX + 3.0, 0.6,  BZ + 0.9);
cx(6.2, 0.1, 0.5, mat.madEsc, BX, 2.25, BZ - 3.0);
for(let i=0;i<16;i++){
  const h = 0.4 + (i%4)*0.06;
  cil(0.07,0.085,h, garrafas[i % garrafas.length], BX - 2.9 + i*0.39, 2.3 + h/2, BZ - 3.0, 7);
}
cx(3.2, 0.06, 0.5, mat.metal, BX - 0.3, 2.62, BZ + 2.0);
for(let i=0;i<10;i++){
  const tx = BX - 1.7 + i*0.36;
  cil(0.012,0.012,0.22, mat.metal, tx, 2.48, BZ + 2.0, 5);
  cone(0.11, 0.2, mat.vidro, tx, 2.3, BZ + 2.0, 8);
}
for(let i=0;i<5;i++){
  cil(0.21,0.19,0.82, mat.madeira, BX - 2.4 + i*1.15, 0.45, BZ + 3.5, 9);
  cil(0.26,0.26,0.07, mat.madEsc,  BX - 2.4 + i*1.15, 0.9,  BZ + 3.5, 9);
}
for(let i=0;i<3;i++){
  const px = BX - 1.8 + i*1.8;
  cil(0.012,0.012,0.6, mat.metalEsc, px, 2.75, BZ + 2.4, 5);
  cone(0.2, 0.26, mat.luzQuente, px, 2.36, BZ + 2.4, 10);
}

/* ========================================= PALCO DA MÚSICA AO VIVO === */
const SX = -17.5, SZ = 2.5;
cx(7.2, 0.75, 4.6, mat.madEsc, SX, 0.38, SZ);
for(let i=0;i<12;i++) cx(7.2, 0.1, 0.33, i%2?mat.deck:mat.deckRipa, SX, 0.79, SZ-2.1+i*0.38);
for(const dx of [-3.1, 3.1]){
  cx(0.85, 1.9, 0.75, mat.preto, SX+dx, 1.7, SZ);
  cil(0.26,0.26,0.07, mat.escuro, SX+dx, 2.1, SZ+0.4, 10, Math.PI/2);
  cil(0.17,0.17,0.06, mat.escuro, SX+dx, 1.5, SZ+0.4, 10, Math.PI/2);
}
cil(0.62,0.62,0.56, mat.metalEsc, SX+0.3, 1.05, SZ-0.3, 14, Math.PI/2);
cil(0.3,0.3,0.34, mat.metalEsc, SX-0.5, 1.5, SZ-0.9, 10);
cil(0.26,0.26,0.3, mat.metalEsc, SX+0.3, 1.52, SZ-1.0, 10);
for(const [dx,dz,h] of [[-1.1,0.1,1.5],[1.2,0.0,1.6]]){
  cil(0.03,0.03,h, mat.metal, SX+dx, 0.75+h/2, SZ+dz, 5);
  cil(0.34,0.34,0.02, mat.dourado, SX+dx, 0.78+h, SZ+dz, 14, 0, 0, 0.12);
}
cil(0.035,0.035,1.5, mat.metalEsc, SX-2.2, 1.5, SZ+1.2, 5);
cil(0.07,0.07,0.17, mat.escuro, SX-2.2, 2.3, SZ+1.2, 7);
cil(0.3,0.3,0.04, mat.metalEsc, SX-2.2, 0.78, SZ+1.2, 10);
cx(0.36, 1.15, 0.1, mat.guitarra, SX+2.3, 1.35, SZ+1.4, 0, 0, 0.3);

/* ====================================== ESTACIONAMENTO COBERTO ======= */
const EX = -15.5, EZ = 13.5;
cx(10, 0.14, 6.4, mat.piso, EX, 0.07, EZ);
for(const [px,pz] of [[EX-4.6,EZ-2.9],[EX-4.6,EZ+2.9],[EX+4.6,EZ-2.9],[EX+4.6,EZ+2.9]])
  cil(0.09,0.09,3.1, mat.metal, px, 1.55, pz, 7);
for(let i=0;i<5;i++) cx(10.4, 0.1, 1.32, mat.lona, EX, 3.12 - i*0.07, EZ - 2.6 + i*1.32, 0.055);

function carro(x, z, m, ry){
  const c = Math.cos(ry||0), s = Math.sin(ry||0);
  const P = (dx,dz) => [x + dx*c - dz*s, z + dx*s + dz*c];
  let p = P(0,0);
  cx(2.05, 0.62, 4.3, m, p[0], 0.90, p[1], 0, ry);
  cx(2.0, 0.3, 4.0,  m, p[0], 0.59, p[1], 0, ry);
  p = P(0,-0.28); cx(1.84, 0.56, 2.1, m, p[0], 1.47, p[1], 0, ry);
  cx(1.88, 0.42, 2.14, mat.escuro, p[0], 1.44, p[1], 0, ry);
  for(const [rx,rz] of [[-1.0,1.42],[1.0,1.42],[-1.0,-1.42],[1.0,-1.42]]){
    p = P(rx,rz);
    cil(0.38,0.38,0.26, mat.preto, p[0], 0.52, p[1], 12, 0, 0, Math.PI/2);
    cil(0.2,0.2,0.28, mat.metal,  p[0], 0.52, p[1], 10, 0, 0, Math.PI/2);
  }
  for(const dx of [-0.64, 0.64]){
    p = P(dx, 2.14); cx(0.42,0.16,0.08, mat.luzFria, p[0], 0.96, p[1], 0, ry);
  }
}
carro(EX-2.6, EZ, mat.carroA, 0.02);
carro(EX+1.4, EZ, mat.carroB, -0.03);

/* ================================================= MESAS E CADEIRAS == */
function cadeira(x, z, ry){
  const c = Math.cos(ry), s = Math.sin(ry);
  const P = (dx,dz) => [x + dx*c - dz*s, z + dx*s + dz*c];
  let p = P(0,0);     cx(0.46,0.07,0.46, mat.cadeira, p[0], 0.46, p[1], 0, ry);
  p = P(0,-0.2);      cx(0.46,0.5,0.06,  mat.cadeira, p[0], 0.72, p[1], 0, ry);
  for(const [dx,dz] of [[-0.19,0.19],[0.19,0.19],[-0.19,-0.19],[0.19,-0.19]]){
    p = P(dx,dz);     cil(0.03,0.03,0.46, mat.cadeira, p[0], 0.23, p[1], 5);
  }
}
function mesa(x, z, comSol){
  cil(0.07,0.09,0.76, mat.metal, x, 0.38, z, 9);
  cil(0.42,0.42,0.3,  mat.metal, x, 0.03, z, 10);
  cil(0.8,0.8,0.08,   mat.tampo, x, 0.79, z, 18);
  for(let i=0;i<4;i++){
    const a = (i/4)*Math.PI*2 + 0.6;
    cadeira(x+Math.cos(a)*1.32, z+Math.sin(a)*1.32, -a + Math.PI/2);
  }
  if(comSol){
    cil(0.05,0.05,2.5, mat.madEsc, x, 1.3, z, 7);
    cone(1.5, 0.52, mat.lona, x, 2.62, z, 10);
    for(let i=0;i<8;i++){
      const a = (i/8)*Math.PI*2;
      cx(1.5,0.03,0.03, mat.madEsc, x+Math.cos(a)*0.72, 2.42, z+Math.sin(a)*0.72, 0, -a, -0.16);
    }
    cil(0.05,0.05,0.2, mat.madEsc, x, 2.9, z, 7);
  }
}
mesa(7.5, 10.5, true);
mesa(3.0, 13.2, true);
mesa(10.5, 13.4, true);
mesa(-9.5, 12.0, false);
mesa(8.5, 1.8, false);

/* ================================================= PESSOAS (escala) == */
function pessoa(x, z, m){
  por(m, new THREE.CapsuleGeometry(0.2, 0.62, 3, 8), x, 1.08, z);
  esf(0.17, mat.pele, x, 1.61, z, 1,1,1, 0,0,0, 10);
  for(const dx of [-0.11, 0.11]) por(mat.escuro, new THREE.CapsuleGeometry(0.075, 0.44, 3, 6), x+dx, 0.49, z);
}
pessoa(13.2, 8.3, mat.roupa1);
pessoa(12.4, 8.9, mat.roupa2);
pessoa(-1.2, 11.9, mat.roupa3);
pessoa(-16.0, 4.6, mat.roupa4);

/* ======================================================= VEGETAÇÃO === */
function palmeira(x, z, alt){
  cil(0.2, 0.36, alt, mat.tronco, x, alt/2, z, 9);
  for(let i=0;i<5;i++) cil(0.37 - i*0.02, 0.37 - i*0.02, 0.1, mat.tronco, x, alt*0.15 + i*(alt*0.14), z, 9);
  for(let i=0;i<9;i++){
    const a = (i/9)*Math.PI*2;
    esf(1.75, i%2?mat.folha:mat.folhaCl, x+Math.cos(a)*1.45, alt+0.2, z+Math.sin(a)*1.45,
        1, 0.1, 0.38, 0, a, -0.42 - (i%3)*0.12, 9);
  }
  cil(0.12,0.12,0.5, mat.folhaCl, x, alt+0.38, z, 6);
}
palmeira(-22, 10, 6.0);  palmeira(21, 12, 5.2);
palmeira(-23, -4, 6.6);  palmeira(22.5, -3, 5.6);
palmeira(20.5, 16.5, 4.6); palmeira(-21, 16, 5.0);

function cordyline(x, z, e){
  e = e || 1;
  cil(0.07,0.09,0.75*e, mat.tronco, x, 0.37*e, z, 6);
  for(let i=0;i<8;i++){
    const a = (i/8)*Math.PI*2;
    esf(0.52*e, i%3===0?mat.folha:mat.folhaRub, x+Math.cos(a)*0.34*e, (0.78+(i%3)*0.17)*e, z+Math.sin(a)*0.34*e,
        1, 0.14, 0.3, 0, a, -0.95, 7);
  }
}
for(const [x,z,e] of [[-6.5,14.5,1.1],[-4.6,15.2,0.9],[5.5,15.0,1.0],[9,14.6,1.2],
                      [-20,6,1.0],[19,9,1.1],[2,-6.2,1.0],[-12,-6,0.9],[11,-6.4,1.0]]) cordyline(x,z,e);

for(let i=0;i<18;i++){
  const x = ((i*13.7)%44)-22, z = ((i*9.1)%30)-15;
  if(Math.abs(x) < 13 && z > -6 && z < 13) continue;
  const r = 0.5 + (i%4)*0.13;
  esf(r, i%2?mat.folha:mat.folhaCl, x, r*0.8, z, 1, 0.82, 1, 0,0,0, 8);
}
for(let i=0;i<16;i++){
  cx(1.2, 0.26, 1.2, mat.terra, -9 + i*1.3, 0.12, 15.6);
  esf(0.42, i%2?mat.folha:mat.folhaCl, -9 + i*1.3, 0.42, 15.6, 1, 0.75, 1, 0,0,0, 7);
}

/* ========================================================== MURO ===== */
cx(52, 2.2, 0.4, mat.paredeS, 0, 1.1, 19);
cx(0.4, 2.2, 38, mat.paredeS, -26, 1.1, 0);
cx(0.4, 2.2, 38, mat.paredeS, 26, 1.1, 0);
cx(52, 0.16, 0.56, mat.pedra, 0, 2.26, 19);
cx(0.56, 0.16, 38, mat.pedra, -26, 2.26, 0);
cx(0.56, 0.16, 38, mat.pedra, 26, 2.26, 0);
cx(5.4, 2.4, 0.2, mat.metalEsc, 3.6, 1.2, 19);
for(let i=0;i<11;i++) cx(0.1, 2.1, 0.26, mat.metal, 1.2 + i*0.48, 1.2, 19);
cil(0.14,0.14,3.0, mat.paredeS, 0.8, 1.5, 19, 9);
cil(0.14,0.14,3.0, mat.paredeS, 6.4, 1.5, 19, 9);
cil(0.16,0.16,0.2, mat.luzQuente, 0.8, 3.05, 19, 9);
cil(0.16,0.16,0.2, mat.luzQuente, 6.4, 3.05, 19, 9);

/* ================================================ POSTES DE JARDIM == */
function poste(x, z){
  cil(0.07,0.09,2.5, mat.metalEsc, x, 1.25, z, 7);
  cone(0.26, 0.26, mat.metalEsc, x, 2.58, z, 9);
  cil(0.14,0.14,0.1, mat.luzQuente, x, 2.42, z, 9);
}
poste(-12.5, 10.5); poste(6.5, 15.5); poste(-20, 2); poste(19.5, 15); poste(12, -4);

/* -------- tudo o que e estatico vira poucos meshes -------- */
const stats = finalizar();

/* -------- o que precisa se mexer fica separado -------- */
const agua = new THREE.Mesh(new THREE.CircleGeometry(1, 48),
  new THREE.MeshLambertMaterial({color:0x2fa3c9, emissive:0x10506b, emissiveIntensity:0.9}));
agua.rotation.x = -Math.PI/2;
agua.scale.set(4.4, 2.7, 1);
agua.position.set(PX, 0.22, PZ);
cena.add(agua);

/* 5 luzes pontuais, so onde muda a leitura da cena */
function P(cor, i, d, x, y, z){
  const l = new THREE.PointLight(cor, i, d); l.position.set(x,y,z); cena.add(l); return l;
}
const luzPiscina = P(0x4fd0f0, 1.7, 17, PX, 1.0, PZ);
const luzBar     = P(0xe8a860, 1.1, 15, BX, 2.5, BZ + 1);
const luzPalco1  = P(0x9b6bd8, 1.1, 14, SX-1.8, 2.6, SZ+1);
const luzPalco2  = P(0x4fa8d8, 1.0, 14, SX+1.8, 2.6, SZ+1);
const luzVaranda = P(0xffc083, 0.9, 18, 0, 3.4, PZ0 + 6.0);

/* =============================== estrelas ============================ */
(function(){
  const g = new THREE.BufferGeometry(), pos = [];
  for(let i=0;i<300;i++){
    const r = 130 + (i%9)*11, th = (i*2.39996), ph = ((i*0.0137)%0.42) + 0.06;
    pos.push(Math.sin(ph)*Math.cos(th)*r, Math.cos(ph)*r, Math.sin(ph)*Math.sin(th)*r);
  }
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  cena.add(new THREE.Points(g, new THREE.PointsMaterial({color:0xcfe4f2, size:0.9, sizeAttenuation:true, transparent:true, opacity:0.7})));
})();

/* ================================================== CÂMERA / ÓRBITA == */
const vistas = {
  geral:   {raio: 38, theta: Math.PI*0.5,  phi: 0.95, alvo: new THREE.Vector3(0, 2.2, 4.5)},
  piscina: {raio: 19, theta: Math.PI*0.60, phi: 1.14, alvo: new THREE.Vector3(PX, 0.8, PZ+1.5)},
  suites:  {raio: 25, theta: Math.PI*0.47, phi: 1.00, alvo: new THREE.Vector3(0, 4.0, PZ0+3)},
  alto:    {raio: 44, theta: Math.PI*0.5,  phi: 0.24, alvo: new THREE.Vector3(0, 0, 4.5)},
};
let raio = vistas.geral.raio, theta = vistas.geral.theta, phi = vistas.geral.phi;
let alvo = vistas.geral.alvo.clone();
let destino = null;

function posicionar(){
  camera.position.set(
    alvo.x + raio*Math.sin(phi)*Math.cos(theta),
    alvo.y + raio*Math.cos(phi),
    alvo.z + raio*Math.sin(phi)*Math.sin(theta)
  );
  camera.lookAt(alvo);
}
function irPara(nome){
  const v = vistas[nome]; if(!v) return;
  // leva theta pelo caminho curto
  let alvoTheta = v.theta;
  while(alvoTheta - theta > Math.PI) alvoTheta -= Math.PI*2;
  while(theta - alvoTheta > Math.PI) alvoTheta += Math.PI*2;
  destino = {raio:v.raio, theta:alvoTheta, phi:v.phi, alvo:v.alvo.clone()};
}

let arrastando = false, px0 = 0, py0 = 0, giroAuto = true;
palco.addEventListener('pointerdown', e => {
  arrastando = true; giroAuto = false; px0 = e.clientX; py0 = e.clientY; destino = null;
  palco.setPointerCapture(e.pointerId);
  if(dica) dica.classList.add('some');
});
palco.addEventListener('pointermove', e => {
  if(!arrastando) return;
  theta -= (e.clientX - px0) * 0.006;
  phi = Math.max(0.1, Math.min(1.46, phi - (e.clientY - py0) * 0.005));
  px0 = e.clientX; py0 = e.clientY;
});
function soltar(e){ arrastando = false; try{ palco.releasePointerCapture(e.pointerId); }catch(err){} }
palco.addEventListener('pointerup', soltar);
palco.addEventListener('pointercancel', soltar);
palco.addEventListener('pointerleave', () => { arrastando = false; });
palco.addEventListener('wheel', e => {
  e.preventDefault(); destino = null;
  raio = Math.max(11, Math.min(80, raio + e.deltaY*0.045));
  if(dica) dica.classList.add('some');
}, {passive:false});
let dist0 = null;
palco.addEventListener('touchstart', e => {
  if(e.touches.length === 2){
    dist0 = Math.hypot(e.touches[0].clientX-e.touches[1].clientX, e.touches[0].clientY-e.touches[1].clientY);
    destino = null;
  }
}, {passive:true});
palco.addEventListener('touchmove', e => {
  if(e.touches.length === 2 && dist0){
    const d = Math.hypot(e.touches[0].clientX-e.touches[1].clientX, e.touches[0].clientY-e.touches[1].clientY);
    raio = Math.max(11, Math.min(80, raio - (d-dist0)*0.09));
    dist0 = d;
  }
}, {passive:true});
palco.addEventListener('touchend', () => { dist0 = null; }, {passive:true});

document.querySelectorAll('.btn3d').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.btn3d').forEach(o => o.classList.remove('ativo'));
    b.classList.add('ativo');
    irPara(b.getAttribute('data-vista'));
    giroAuto = false;
    if(dica) dica.classList.add('some');
  });
});

function medir(){
  const w = palco.clientWidth, h = palco.clientHeight;
  if(!w || !h) return;
  render.setSize(w, h, false);
  camera.aspect = w/h; camera.updateProjectionMatrix();
}
window.addEventListener('resize', medir, {passive:true});
medir();

let visivel = true;
if('IntersectionObserver' in window){
  new IntersectionObserver(es => { visivel = es[0].isIntersecting; }, {threshold:0.01}).observe(palco);
}

/* a sombra e estatica: calcula uma vez e congela (ganha muito fps) */
render.shadowMap.autoUpdate = false;
render.shadowMap.needsUpdate = true;

let t = 0;
function laco(){
  requestAnimationFrame(laco);
  if(!visivel) return;
  if(destino){
    raio  += (destino.raio  - raio) *0.075;
    theta += (destino.theta - theta)*0.075;
    phi   += (destino.phi   - phi)  *0.075;
    alvo.lerp(destino.alvo, 0.075);
    if(Math.abs(destino.raio-raio) < 0.12 && Math.abs(destino.phi-phi) < 0.004) destino = null;
  } else if(giroAuto && !arrastando){
    theta += 0.0012;
  }
  t += 0.016;
  agua.position.y = 0.22 + Math.sin(t*1.4)*0.01;
  const p = Math.sin(t*1.9)*0.25;
  luzPiscina.intensity = 1.7 + p;
  luzPalco1.intensity = 1.1 + Math.sin(t*3.1)*0.4;
  luzPalco2.intensity = 1.0 + Math.sin(t*3.1 + 2.1)*0.4;
  luzBar.intensity = 1.1 + Math.sin(t*0.9)*0.07;
  posicionar();
  render.render(cena, camera);
}
posicionar(); render.render(cena, camera); laco();

window.__planta = {stats, vistas, get raio(){return raio;}, get destino(){return destino;}};
if(carregando) carregando.classList.add('some');
setTimeout(() => { if(dica) dica.classList.add('some'); }, 7000);

}
