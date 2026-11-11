/* Wesley Escarpas · portal de temporada */
const WA='5537999872057';
const IMG={"14":[["c14-0.webp",1383,867],["c14-1.webp",646,490],["c14-2.webp",644,490],["c14-3.webp",644,490],["c14-4.webp",646,490],["c14-5.webp",644,490],["c14-6.webp",644,490],["c14-7.webp",644,490]],"22":[["c22-0.webp",646,490],["c22-1.webp",644,488],["c22-2.webp",644,490],["c22-3.webp",644,490],["c22-4.webp",638,490],["c22-5.webp",644,490]],"13":[["c13-0.webp",1383,867],["c13-1.webp",644,435],["c13-2.webp",644,435],["c13-3.webp",646,435],["c13-4.webp",644,435]],"58":[["c58-0.webp",808,663],["c58-1.webp",808,513],["c58-2.webp",809,547],["c58-3.webp",808,612],["c58-4.webp",809,612],["c58-5.webp",808,663]],"30":[["c30-0.webp",808,541],["c30-1.webp",809,527],["c30-2.webp",808,449],["c30-3.webp",808,452],["c30-4.webp",809,449]],"21":[["c21-0.webp",1411,886],["c21-1.webp",809,612],["c21-2.webp",808,612],["c21-3.webp",808,612],["c21-4.webp",809,612],["c21-5.webp",808,612]],"12":[["c12-0.webp",809,612],["c12-1.webp",808,612]],"16":[["c16-0.webp",644,1159],["c16-1.webp",644,1159],["c16-2.webp",646,1159],["c16-3.webp",644,1159],["c16-4.webp",644,1159],["c16-5.webp",646,1159],["c16-6.webp",644,1159],["c16-7.webp",644,1159],["c16-8.webp",646,1159]],
"88":[["c88-0.webp",855,648],["c88-1.webp",857,648],["c88-2.webp",855,648]],"50":[["c50-0.webp",1200,806],["c50-1.webp",1200,806],["c50-2.webp",1200,675],["c50-3.webp",1200,675]],"ps":[["cps-0.webp",1200,858],["cps-1.webp",614,833],["cps-2.webp",616,833],["cps-3.webp",823,1109],["cps-4.webp",616,833],["cps-5.webp",823,1109],["cps-6.webp",823,625],["cps-7.webp",616,833],["cps-8.webp",1200,906]]};
const REG=['Escarpas do Lago','Pontal Escarpas','Dique','Ponta do Sol'];
const TAGS={vista:['Vista pro lago','view'],marina:['Marina / píer','pier'],aquecida:['Piscina aquecida','pool'],infinita:['Borda infinita','pool'],hidro:['Hidro / spa','hidro'],sauna:['Sauna','flame'],acessivel:['Acessível','access']};
const L=(o)=>Object.assign({tipo:'Casa',regiao:'Escarpas do Lago',destaque:false,su:null,qt:null,h:null,wa:WA},o);
const IMOVEIS=[
L({id:'14',nome:'Casa Escarpas 14',badge:'Pé no lago',destaque:true,h:20,tags:['vista','hidro','marina'],
 sub:'A única de Escarpas com acesso às margens do lago e flutuante privativo para pesca.',
 spec:[['Hóspedes','até 20'],['Garagem','6 carros'],['Piscina','com cascata'],['Destaque','flutuante privativo']],
 hl:[['pier','Flutuante privativo','Píer para pesca e lago pronto para stand up e caiaque.'],['hidro','Hidro de frente pro lago','Para ver o pôr do sol de dentro da água.'],['flame','Sala com lareira','Para as noites frias de Capitólio.']],
 fotos:['Piscina com cascata e varanda de frente para o lago','Hidromassagem de frente para o lago','Sinuca com vista para o lago','A casa e o gramado','Sala de TV','Sala de estar integrada','Área gourmet','Suíte'],
 amen:['Acesso às margens do lago','Flutuante privativo p/ pesca','Hidromassagem de frente pro lago','Piscina com cascata','Sala com lareira','Sinuca','Píer para pesca','Churrasqueira','Stand up e caiaque no lago','Pula-pula p/ crianças','Wi-Fi','Garagem coberta p/ 6 carros'],
 desc:'Casa de alto padrão em Escarpas do Lago, um bairro tranquilo de Capitólio-MG, localizada às margens de um lago natural. Todo o acesso até a casa é asfaltado.\n\nCapacidade para até 20 pessoas (18 em camas e 2 em colchões). Ideal para famílias.\n\nÚnica casa em Escarpas do Lago com acesso às margens do lago, pronta para atividades a remo, como stand up e canoagem, e com flutuante privativo para pesca.\n\nSala com lareira, Wi-Fi, churrasqueira, piscina com cascata, hidromassagem de frente para o lago, sinuca, píer para pesca, lago para stand up ou caiaque e pula-pula para as crianças. Garagem coberta para 6 carros.'}),
L({id:'88',nome:'Casa 88 de Marina',regiao:'Pontal Escarpas',badge:'Casa de marina',destaque:true,su:8,tags:['marina','hidro','sauna'],
 sub:'Oito suítes, deck para lancha e dois heliportos, no Pontal de Escarpas.',
 spec:[['Suítes','8'],['Banheiros','14'],['Lazer','piscina e sauna'],['Destaque','deck p/ lancha']],
 hl:[['pier','Deck para lancha','Saia de barco direto da casa para o lago.'],['hidro','Suíte presidencial','Com jacuzzi.'],['badge','Dois heliportos','Para quem chega pelo ar.']],
 fotos:['Fachada','Sala de jantar com pé-direito duplo','Sala de estar com vista'],
 amen:['8 suítes','Suíte presidencial com jacuzzi','14 banheiros','Piscina','Sauna','Deck para lancha','2 heliportos','Sala de TV','Sala de jogos','Sala de jantar','Churrasqueira com fogão a lenha','Cozinha'],
 desc:'Casa de marina no Pontal Escarpas.\n\n8 suítes, sendo 1 presidencial com jacuzzi, e 14 banheiros no total.\n\nSala de TV, sala de jogos, sala de jantar, sala com sofás, cozinha e área de churrasqueira com fogão a lenha.\n\nSauna, piscina, deck para lancha e 2 heliportos.'}),
L({id:'22',nome:'Casa Escarpas 22',badge:'Semi-marina',qt:6,su:4,h:16,tags:['vista','aquecida','hidro','sauna','marina'],
 sub:'Seis quartos com varanda e vista para o Lago de Furnas, piscina aquecida e salão de jogos.',
 spec:[['Quartos','6'],['Camas','16'],['Piscina','aquecida c/ jatos'],['Destaque','salão de jogos']],
 hl:[['pool','Piscina aquecida','Com jatos de hidromassagem, no deck de madeira.'],['view','Varanda em todos os quartos','Todos com vista para o Lago de Furnas.'],['ball','Salão de jogos','Sinuca, totó e mini quadra de basquete.']],
 fotos:['Piscina no deck, com o lago ao fundo','Vista aérea da casa','Deck com espreguiçadeiras','Sinuca com vista para o lago','Sala integrada com pé-direito alto','Sala de TV'],
 amen:['Vista para o Lago de Furnas','Piscina aquecida c/ jatos','Banheira de hidro na suíte master','Sauna','Lareira','Varandão com redes','Salão de jogos','Mini quadra de basquete','Sinuca e totó','Cervejeira','Churrasqueira','Cozinha c/ lava-louças','Wi-Fi','Ar na suíte principal'],
 desc:'Casa em Escarpas do Lago, Capitólio-MG. Semi-marina, com 6 quartos e vista deslumbrante para o Lago de Furnas.\n\n1 suíte master com banheira de hidromassagem e vista deslumbrante, 3 suítes e 2 semi-suítes, todas com varanda e vista para o lago. Total de 16 camas.\n\nPiscina aquecida com jatos de hidromassagem, sauna, lareira, varandão com redes, área de churrasqueira, salão de jogos, mini quadra de basquete, sinuca, totó, cervejeira, deck de madeira, utensílios para churrasco e freezer.\n\nCozinha completa com fogão, geladeira, máquina de lavar louças, panelas, talheres, pratos, copos e xícaras. Internet Wi-Fi. Ar-condicionado na suíte principal.'}),
L({id:'58',nome:'Casa Escarpas 58',badge:'Borda infinita',destaque:true,su:9,h:20,tags:['vista','aquecida','infinita','hidro','sauna'],
 sub:'Nove suítes, spa para até 12 pessoas e piscina aquecida com vista para a lagoa.',
 spec:[['Suítes','9'],['Hóspedes','até 20'],['Piscina','borda infinita'],['Destaque','spa p/ 12']],
 hl:[['hidro','Spa para 12 pessoas','Iluminado à noite, ao lado da piscina.'],['pool','Duas piscinas','Uma de borda infinita e uma aquecida.'],['snow','Ar em todas as suítes','E ventilador de teto.']],
 fotos:['Spa iluminado à noite','Fachada','Fachada principal','Mesa com vista para a piscina e a lagoa','Área gourmet','Cozinha'],
 amen:['Piscina com borda infinita','Piscina aquecida','Spa para até 12 pessoas','Sauna','Vista para a lagoa de Escarpas','Ar e ventilador em todas as suítes','Churrasqueira','Cervejeira','Sala de TV','Wi-Fi'],
 desc:'Casa dentro do condomínio Escarpas do Lago, em Capitólio-MG.\n\n9 suítes, todas com ar-condicionado e ventilador de teto, com 4 camas de solteiro e 7 camas de casal, que acomodam até 20 pessoas.\n\nÁrea de lazer com piscina de borda infinita, piscina aquecida, mesa, cadeiras, espreguiçadeiras e vista para a lagoa de Escarpas. Sauna, churrasqueira, spa para até 12 pessoas e cervejeira.\n\nCozinha com micro-ondas, geladeira, freezer, fogão e utensílios domésticos. Sala de TV com sofá confortável, TV por assinatura e Wi-Fi.'}),
L({id:'ps',img:'ps',nome:'Casa Ponta do Sol',regiao:'Ponta do Sol',badge:'Pôr do sol no lago',destaque:true,su:5,h:15,tags:['vista'],
 sub:'Vista privilegiada para o Mar de Minas, a 4 km do centro de Capitólio.',
 spec:[['Suítes','5'],['Hóspedes','até 15'],['Centro','a 4 km'],['Destaque','vista p/ represa']],
 hl:[['view','Vista para o Mar de Minas','Amanheceres e entardeceres de frente para a Represa de Furnas.'],['ball','Mini campo de futebol','Para a criançada e para o racha da turma.'],['grill','Área gourmet','Churrasqueira, cervejeira e lavabo.']],
 fotos:['Piscina ao pôr do sol','Vista do alto para o lago','Piscina e as serras','Área gourmet','Cozinha e jantar com vista','Suíte com vista','Sala de TV','Fachada','Cozinha'],
 amen:['Vista para a Represa de Furnas','5 suítes com ar','Piscina','Área gourmet com churrasqueira','Cervejeira','Lavabo','Mini campo de futebol','Sala com Smart TV','Cozinha completa','Wi-Fi','Garagem'],
 desc:'Casa de temporada em Capitólio, com conforto, lazer e uma vista incrível para o Mar de Minas.\n\nCasa ampla, confortável e completa, com linda vista para a Represa de Furnas. Fica no bairro Ponta do Sol, a apenas 4 km do centro de Capitólio, com tranquilidade e fácil acesso aos principais atrativos da cidade.\n\nAcomoda até 15 pessoas: 5 suítes, todas com ar-condicionado, cada uma com 1 cama de casal e 1 de solteiro.\n\nCozinha completa, Wi-Fi em toda a propriedade, sala de estar com Smart TV, área gourmet com churrasqueira, cervejeira e lavabo, piscina, mini campinho de futebol e garagem.\n\nO grande diferencial é a vista privilegiada para a Represa de Furnas, com amanheceres e entardeceres inesquecíveis.'}),
L({id:'050',img:'50',nome:'Rancho de Marina Dique 050',tipo:'Rancho',regiao:'Dique',badge:'Na marina',qt:7,su:4,h:20,tags:['marina','vista'],
 sub:'Rancho na marina do condomínio do Dique, com píer próprio e piscina com cascata.',
 spec:[['Quartos','7 (4 suítes)'],['Hóspedes','até 20'],['Piscina','com cascata'],['Destaque','píer próprio']],
 hl:[['pier','Na marina, com píer','O lago começa no quintal.'],['snow','Ar em todos os quartos','4 suítes e 3 quartos.'],['grill','Área gourmet','Com 2 lavabos e cozinha completa.']],
 fotos:['Piscina com vista para o lago','Piscina com cascata','Vista aérea da casa','A marina do Dique, vista do alto'],
 amen:['Na marina, com píer','Piscina','Ar-condicionado em todos os quartos','Área gourmet','Cozinha completa','Sala com TV','2 lavabos','Lavanderia','Wi-Fi','Estacionamento'],
 desc:'Casa de aluguel de temporada no condomínio do Dique, em Capitólio. Fica na marina e tem 1 píer.\n\n4 suítes com 1 cama de casal e 1 de solteiro cada, 1 quarto de casal com 1 cama de casal e 1 de solteiro e 2 quartos com 2 camas de solteiro cada, todos com ar-condicionado.\n\n1 banheiro social, sala com TV, cozinha completa, área gourmet, 2 lavabos, piscina, lavanderia, estacionamento descoberto e Wi-Fi. Acomoda 20 pessoas.'}),
L({id:'12',nome:'Casa Escarpas 12',badge:'Super luxo',su:6,h:15,tags:['vista','infinita'],
 sub:'Casa nova, com piscina de borda infinita, TV de 70” e uma vista linda.',
 spec:[['Suítes','6'],['Hóspedes','até 15'],['Piscina','borda infinita'],['Destaque','casa nova']],
 hl:[['pool','Borda infinita','A piscina se mistura com a vista.'],['badge','Casa nova, super luxo','Camas queen em todas as suítes.'],['tv','TV de 70”','Na sala ampla, com Wi-Fi.']],
 fotos:['Piscina de borda infinita com vista','Área gourmet de frente para a vista'],
 amen:['Casa nova, super luxo','Piscina com borda infinita','6 suítes com ar','Camas queen','Sala ampla com TV de 70”','Cozinha completa','Cervejeira e churrasqueira','Filtro elétrico','Wi-Fi','Garagem coberta'],
 desc:'Casa nova, super luxo, com 6 suítes, todas com ar-condicionado, camas de casal tamanho queen e camas de solteiro. Acomoda no máximo 15 pessoas.\n\nCozinha completa com todos os utensílios domésticos, filtro elétrico, geladeira, cervejeira e churrasqueira. Sala ampla com TV de 70 polegadas e internet Wi-Fi.\n\nÁrea de lazer com piscina de borda infinita, mesa grande, 6 cadeiras e 3 espreguiçadeiras. Vista linda e garagem coberta.'}),
L({id:'21',nome:'Casa Escarpas 21',badge:'Vista total',su:5,tags:['vista','sauna'],
 sub:'Vista total para o Lago de Furnas e sauna com acesso direto à piscina.',
 spec:[['Suítes','5'],['Lote','2.000 m²'],['Lazer','sauna + piscina'],['Destaque','vista total']],
 hl:[['view','Vista total','Para o Lago de Furnas, da piscina e da mesa.'],['flame','Sauna na piscina','Com acesso direto à água.'],['car','Lote de 2.000 m²','Com 1.000 m² livres para os carros.']],
 fotos:['Piscina com vista total para o lago','Piscina e área de lazer','Fachada','Jantar com vista para a piscina e o lago','Cozinha integrada','Sala de TV'],
 amen:['Vista total para o Lago de Furnas','Sauna com acesso à piscina','Piscina','Churrasqueira','5 suítes com ar','Cozinha completa','Sala com TV','Lote de 2.000 m²','Portão com interfone'],
 desc:'Linda casa em Escarpas do Lago, com vista total para o Lago de Furnas.\n\nÁrea de lazer completa: sauna com acesso direto à piscina, piscina, mesa e churrasqueira. Cozinha completa com geladeira, fogão e demais utensílios domésticos. Sala com sofá e TV. 5 suítes com ar-condicionado.\n\nCasa construída em um lote de 2.000 m², com 1.000 m² livres para os carros. Portão fechado com interfone.'}),
L({id:'13',nome:'Casa Escarpas 13',badge:'Vista pro lago',su:5,h:18,tags:['vista','hidro','sauna'],
 sub:'Alto padrão, com suíte master com hidromassagem, sauna e chopeira.',
 spec:[['Suítes','5'],['Hóspedes','18'],['Hidro','aquecida'],['Destaque','chopeira']],
 hl:[['hidro','Hidro aquecida','E suíte master com hidromassagem.'],['view','Vista para o lago','Da varanda gourmet.'],['beer','Chopeira','Junto da churrasqueira.']],
 fotos:['Fachada e piscina','Varanda gourmet com vista','Área gourmet','Bancada com vista para o lago','Cozinha e sala de jantar'],
 amen:['Vista para o lago','Suíte master com hidromassagem','Hidromassagem aquecida','Piscina','Sauna','Churrasqueira','Chopeira','Ar-condicionado'],
 desc:'Casa de alto padrão no balneário mais charmoso do Brasil, Escarpas do Lago, em Capitólio-MG, disponível para aluguel de temporada. Linda vista para o lago.\n\n5 suítes, sendo a suíte master com hidromassagem, e camas para 18 pessoas. Ar-condicionado, piscina, churrasqueira, sauna, hidromassagem aquecida, chopeira e muito mais.'}),
L({id:'30',nome:'Casa Escarpas 30',badge:'Alto padrão',su:7,h:18,tags:['hidro','sauna'],
 sub:'Sete suítes com ar-condicionado, hidromassagem e um amplo espaço gourmet.',
 spec:[['Suítes','7'],['Hóspedes','18'],['Lazer','hidro e sauna'],['Destaque','gourmet amplo']],
 hl:[['grill','Espaço gourmet amplo','Integrado à piscina.'],['hidro','Hidromassagem','Ao lado da mesa externa.'],['snow','7 suítes com ar','Para o grupo todo.']],
 fotos:['Piscina','Hidromassagem e mesa externa','Vista aérea com jardim','Espaço gourmet integrado à piscina','Cozinha gourmet'],
 amen:['7 suítes com ar','Piscina','Hidromassagem','Sauna','Amplo espaço gourmet','Churrasqueira','Sala de TV','Cozinha completa'],
 desc:'Casa de alto padrão em Escarpas do Lago com 7 suítes, todas com ar-condicionado. Acomoda 18 pessoas.\n\nSala de TV, cozinha completa, churrasqueira, hidromassagem, piscina, sauna e amplo espaço gourmet.'}),
L({id:'16',nome:'Casa Escarpas 16',badge:'Acessível',su:6,h:18,tags:['sauna','acessivel'],
 sub:'Seis suítes, uma delas com acessibilidade, e cozinha ampla com ilha.',
 spec:[['Suítes','6'],['Hóspedes','18'],['Lazer','piscina e sauna'],['Destaque','suíte acessível']],
 hl:[['access','Suíte acessível','Pensada para pessoas com acessibilidade.'],['home','Cozinha com ilha','Ampla e totalmente equipada.'],['grill','Churrasqueira integrada','Com bancada e pia gourmet.']],
 fotos:['Piscina com vista','Fachada','Sala de TV','Sala integrada','Cozinha','Cozinha com ilha','Sala de estar','Banheiro','Suíte'],
 amen:['Suíte com acessibilidade','6 suítes com ar','Cozinha ampla com ilha','Sala de jantar p/ 10 pessoas','Sala de TV','Churrasqueira gourmet integrada','Piscina','Sauna','Lavanderia c/ tanque automático','Dois lavabos','Wi-Fi','Garagem coberta p/ 2 carros'],
 desc:'A casa conta com 6 suítes, todas com ar-condicionado, acomodando 18 pessoas, e suíte para pessoas com acessibilidade.\n\nAmpla sala de TV com Wi-Fi e sala de jantar para 10 pessoas. Cozinha ampla, totalmente equipada e com ilha, armários grandes, geladeira, cervejeira e demais utensílios. Lavanderia com tanque automático.\n\nIntegrada à cozinha, churrasqueira com bancada e pia gourmet. Na área externa, piscina, sauna, mesa e espreguiçadeiras, além de dois lavabos. Garagem coberta para até 2 carros.'})
];
IMOVEIS.forEach((c,i)=>{c.ord=i;c.img=c.img||c.id;c.pics=IMG[c.img].map(x=>x[0]);c.ref='WE-'+c.id.toUpperCase()});
const byId=id=>IMOVEIS.find(c=>c.id===id);
const PLANOS=[{id:'anuncio',nome:'Anúncio',preco:'Sob consulta',feat:['Página própria com galeria de fotos','Aparece na busca, nos filtros e no mapa','Contato do hóspede direto no seu WhatsApp','Link do anúncio para compartilhar']},
{id:'destaque',nome:'Anúncio Destaque',preco:'Sob consulta',hot:true,feat:['Tudo do plano Anúncio','Selo “Destaque” e topo da lista','Aparece na página inicial','Divulgação no Instagram @wesleyescarpas']}];
const ICO={
wa:'<path d="M3.5 20.5l1.2-4.1A8.6 8.6 0 1 1 8 19.5z"/><path d="M9.1 8.3c.2-.4.5-.5.9-.5l.7 1.6c.1.3 0 .5-.2.7l-.5.5a6.7 6.7 0 0 0 2.9 2.9l.5-.5c.2-.2.4-.3.7-.2l1.6.7c0 .4-.1.7-.5.9-.9.5-2 .4-3-.1a8.4 8.4 0 0 1-3.7-3.7c-.5-1-.6-2.1-.1-3z" fill="currentColor" stroke="none"/>',
ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r=".9" fill="currentColor"/>',
heart:'<path d="M12 20.5s-7.5-4.4-9.2-9.3C1.6 7.6 4 4.5 7.3 4.5c2 0 3.6 1.1 4.7 2.7 1.1-1.6 2.7-2.7 4.7-2.7 3.3 0 5.7 3.1 4.5 6.7C19.5 16.1 12 20.5 12 20.5z"/>',
search:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3"/>',
star:'<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>',
grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
map:'<path d="M9 4.5 3.5 6.8v12.7L9 17.2l6 2.3 5.5-2.3V4.5L15 6.8z"/><path d="M9 4.5v12.7M15 6.8v12.7"/>',
upload:'<path d="M12 16V4M7.5 8.5 12 4l4.5 4.5"/><path d="M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15"/>',
users:'<circle cx="9" cy="8" r="3.3"/><path d="M2.8 19.5a6.2 6.2 0 0 1 12.4 0"/><path d="M15.5 5a3.2 3.2 0 0 1 0 6.2M17.5 13.6a6 6 0 0 1 3.7 5.9"/>',
pool:'<path d="M2 18c1.7 0 1.7-1.4 3.3-1.4S7 18 8.7 18s1.7-1.4 3.3-1.4 1.7 1.4 3.3 1.4 1.7-1.4 3.4-1.4S20.3 18 22 18M8 15V6a2 2 0 0 1 4 0M14 15V6a2 2 0 0 1 4 0M8 9.5h6M8 13h6"/>',
flame:'<path d="M12 3c.6 3 5 5.2 5 10a5 5 0 0 1-10 0c0-2.4 1.3-3.9 2.4-5 .1 1.9 1 3 2.1 3.2C11.2 8.5 10.8 5.6 12 3z"/>',
hidro:'<circle cx="7" cy="9" r="2.2"/><circle cx="13.5" cy="5.5" r="1.5"/><circle cx="16.5" cy="11" r="2.6"/><path d="M2 19c1.7 0 1.7-1.4 3.3-1.4S7 19 8.7 19s1.7-1.4 3.3-1.4 1.7 1.4 3.3 1.4 1.7-1.4 3.4-1.4S20.3 19 22 19"/>',
wifi:'<path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="19.2" r=".9" fill="currentColor"/>',
snow:'<path d="M12 2v20M3.3 7l17.4 10M20.7 7 3.3 17M9 4l3 2 3-2M9 20l3-2 3 2"/>',
grill:'<path d="M3.5 10h17a8.5 7 0 0 1-17 0zM8 17l-2 4.5M16 17l2 4.5M12 17v4.5M9 2.5c0 1.6 1.5 1.6 1.5 3.2M13.5 2.5c0 1.6 1.5 1.6 1.5 3.2"/>',
view:'<path d="M2 19l6.5-10 4 6 3-4L22 19zM2 22h20"/><circle cx="17.5" cy="5.5" r="2"/>',
car:'<path d="M3 13l2.2-5.5A2 2 0 0 1 7 6.2h10a2 2 0 0 1 1.8 1.3L21 13v5H3zM3 13h18M6.5 18v2.2M17.5 18v2.2"/>',
beer:'<path d="M5 6h11v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM16 9h2.5A1.5 1.5 0 0 1 20 10.5v5a1.5 1.5 0 0 1-1.5 1.5H16M8.5 10v7M12.5 10v7"/>',
ball:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M12 10.6v2.8"/>',
pier:'<path d="M3 11h18M5 11v8M19 11v8M12 11v8M2 21c1.7 0 1.7-1.2 3.3-1.2S7 21 8.7 21s1.7-1.2 3.3-1.2 1.7 1.2 3.3 1.2 1.7-1.2 3.4-1.2S20.3 21 22 21"/>',
tv:'<rect x="2.5" y="5" width="19" height="12.5" rx="1.5"/><path d="M8 21h8M12 17.5V21"/>',
bed:'<path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="6.8" cy="11.5" r="1.7"/>',
access:'<circle cx="13" cy="4" r="1.8"/><path d="M12.5 7v5.5h5l2 5.5M12.5 9.8h4.5M10 9.6a5.8 5.8 0 1 0 7.2 7.6"/>',
home:'<path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5M10 20v-5.5h4V20"/>',
check:'<path d="M5 12.5l4.2 4.2L19 7"/>',
boat:'<path d="M2.5 15h19l-2.6 4.4a2 2 0 0 1-1.7 1H6.8a2 2 0 0 1-1.7-1zM6 15V9.5h8.5L17.5 15M9 9.5V5.5h3v4"/>',
pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
badge:'<path d="M12 2.5l2.6 2 3.2-.3.9 3.1 2.6 1.9-1.1 3 1.1 3-2.6 1.9-.9 3.1-3.2-.3-2.6 2-2.6-2-3.2.3-.9-3.1-2.6-1.9 1.1-3-1.1-3 2.6-1.9.9-3.1 3.2.3z"/><path d="M8.5 12l2.4 2.4 4.6-4.8"/>',
cam:'<path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.6l1.6-2.5h6.6L16.9 7h2.6A1.5 1.5 0 0 1 21 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z"/><circle cx="12" cy="13" r="3.7"/>',
share:'<path d="M12 15V3M7.5 7.5 12 3l4.5 4.5M5 12v7.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V12"/>'};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const svg=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO[n]||ICO.check}</svg>`;
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
function icoFor(a){const t=a.toLowerCase();
 if(/flutuante|píer|deck para lancha|marina/.test(t))return'pier';if(/hidro|banheira|jacuzzi|^spa/.test(t))return'hidro';if(/sauna|lareira/.test(t))return'flame';if(/piscina|borda/.test(t))return'pool';
 if(/wi-fi/.test(t))return'wifi';if(/ar-cond|com ar|ventilador|\bar\b/.test(t))return'snow';if(/churras|gourmet/.test(t))return'grill';if(/cerve|chope/.test(t))return'beer';
 if(/sinuca|jogos|totó|quadra|pula|campo/.test(t))return'ball';if(/garagem|lote|portão|estacionamento/.test(t))return'car';if(/\btv\b/.test(t))return'tv';if(/acessib/.test(t))return'access';
 if(/heliporto|luxo|nova/.test(t))return'badge';if(/vista|lago|lagoa|margens|stand|represa/.test(t))return'view';if(/suíte|camas|quarto|banheiro/.test(t))return'bed';return'home'}
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const S={ini:'',fim:'',hosp:'',ex:new Set()};
const fmtD=v=>v?v.split('-').reverse().join('/'):'';
const wa=(m,n=WA)=>`https://api.whatsapp.com/send?phone=${n}&text=${encodeURIComponent(m)}`;
function tripLine(){const p=[];if(S.ini)p.push('Chegada: '+fmtD(S.ini));if(S.fim)p.push('Saída: '+fmtD(S.fim));if(S.hosp)p.push(S.hosp+' pessoas');return p.join(' | ')}
function msgFor(c){let m=`Olá, Wesley! Vi no site o imóvel ${c.nome} (Ref. ${c.ref}).`;const t=tripLine();if(t)m+='\n'+t;if(S.ex.size)m+='\nTambém quero: '+[...S.ex].join(', ')+'.';return m+'\nEstá disponível? Pode me passar os valores?'}
function msgList(ids,intro){let m=`Olá, Wesley! ${intro}\n`+ids.map(id=>{const c=byId(id);return `• ${c.nome} (Ref. ${c.ref})`}).join('\n');const t=tripLine();if(t)m+='\n'+t;return m+'\nQuais estão disponíveis? Pode me passar os valores?'}
const specLine=c=>{const a=[];if(c.qt)a.push(c.qt+' quartos');else if(c.su)a.push(c.su+' suítes');if(c.h)a.push('até '+c.h+' pessoas');return a};

/* básicos */
function icons(r=document){$$('[data-ic]',r).forEach(e=>e.outerHTML=svg(e.dataset.ic))}
function waLinks(r=document){$$('[data-wa]',r).forEach(a=>{a.href=wa(a.dataset.wa);a.target='_blank';a.rel='noopener'})}
$('#yr').textContent=new Date().getFullYear();
$('#tN').textContent=IMOVEIS.length+' imóveis';
const regOpts=(any='Todas as regiões')=>`<option value="">${any}</option>`+REG.map(r=>`<option>${r}</option>`).join('');
const hOpts='<option value="0">Qualquer</option>'+[8,12,15,18,20].map(n=>`<option value="${n}">${n}+ pessoas</option>`).join('');
$('#hReg').innerHTML=regOpts('Toda a região');$('#fReg').innerHTML=regOpts();$('#hH').innerHTML=hOpts;$('#fH').innerHTML=hOpts;
$('#aReg').innerHTML=REG.map(r=>`<option>${r}</option>`).join('')+'<option>Outra (Capitólio e região)</option>';
$('#fRegs').innerHTML=REG.map(r=>`<a data-reg="${r}">${r}</a>`).join('');
$('#fTags').innerHTML=Object.entries(TAGS).map(([k,[t,ic]])=>`<button type="button" data-t="${k}">${svg(ic)}${t}</button>`).join('');
const today=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);

/* hero slideshow */
const HS=[['ps',0],['21',0],['50',0],['14',0]];
$('#slides').innerHTML=HS.map(([id,k],i)=>{const c=byId(id==='50'?'050':id),x=IMG[c.img][k];return `<div class="slide${i?'':' on'}"><img src="${x[0]}" alt="${esc(c.nome)}: ${esc(c.fotos[k])}" ${i?'loading="lazy"':'fetchpriority="high"'}></div>`}).join('');
$('#hdots').innerHTML=HS.map((_,i)=>`<button type="button" aria-label="Foto ${i+1}"${i?'':' class="on"'}><i></i></button>`).join('');
let hsI=0,hsT=null;
function hsGo(n){const sl=$$('.slide'),dt=$$('#hdots button');hsI=(n+HS.length)%HS.length;sl.forEach((s,k)=>s.classList.toggle('on',k===hsI));dt.forEach((d,k)=>{d.classList.remove('on');if(k===hsI){void d.offsetWidth;d.classList.add('on')}});
 const id=HS[hsI][0]==='50'?'050':HS[hsI][0],c=byId(id);$('#hcapR').textContent=c.regiao;$('#hcapN').textContent=c.nome;$('#hcapA').dataset.id=id;
 clearTimeout(hsT);if(!RM)hsT=setTimeout(()=>hsGo(hsI+1),6500)}
$$('#hdots button').forEach((b,k)=>b.onclick=()=>hsGo(k));
$('#hcapA').onclick=e=>{e.preventDefault();openDetail(e.currentTarget.dataset.id)};
hsGo(0);

/* filtros */
const F={reg:'',h:0,su:0,tags:new Set(),sort:'dest',view:'grid'};
const QC=[['marina','Na marina'],['aquecida','Piscina aquecida'],['infinita','Borda infinita'],['h18','Grupos de 18+'],['vista','Vista pro lago']];
$('#qchips').innerHTML=QC.map(([k,t])=>`<button type="button" data-q="${k}">${t}</button>`).join('');
$$('#qchips button').forEach(b=>b.onclick=()=>{const q=b.dataset.q;if(q==='h18')F.h=18;else F.tags.add(q);syncF();render();goList()});
const CATS=[['marina','Na marina','c50-3.webp','píer e lancha'],['vista','Vista pro lago','c22-0.webp','o lago na janela'],['aquecida','Piscina aquecida','c58-0.webp','água quentinha'],['infinita','Borda infinita','c12-0.webp','a vista sem fim'],['hidro','Hidro & spa','c14-1.webp','relaxar de verdade'],['h18','Grupos 18+','c30-0.webp','a turma toda junta']];
$('#cats').innerHTML=CATS.map(([k,t,img,s])=>{const n=k==='h18'?IMOVEIS.filter(c=>c.h>=18).length:IMOVEIS.filter(c=>c.tags.includes(k)).length;return `<button class="cat" type="button" data-c="${k}"><img src="${img}" alt="" loading="lazy"><span><b>${t}</b><small>${n} imóveis · ${s}</small></span></button>`}).join('');
$$('.cat').forEach(b=>b.onclick=()=>{const k=b.dataset.c;F.tags.clear();F.h=0;if(k==='h18')F.h=18;else F.tags.add(k);syncF();render();goList()});
function goList(){document.getElementById('imoveis').scrollIntoView({behavior:RM?'auto':'smooth'})}
function syncF(){$('#fReg').value=F.reg;$('#hReg').value=F.reg;$('#fH').value=String(F.h);$('#hH').value=String(F.h);$('#fSu').value=String(F.su);$('#fSort').value=F.sort;
 $$('#fTags button').forEach(b=>b.classList.toggle('on',F.tags.has(b.dataset.t)));$$('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===F.view));$('#lst').classList.toggle('mapon',F.view==='map')}
function filtered(){let L=IMOVEIS.filter(c=>(!F.reg||c.regiao===F.reg)&&(!F.h||c.h==null||c.h>=F.h)&&(!F.su||c.su==null||Math.max(c.su||0,c.qt||0)>=F.su)&&[...F.tags].every(t=>c.tags.includes(t)));
 if(F.sort==='su')L.sort((a,b)=>(b.su||0)-(a.su||0));else if(F.sort==='h')L.sort((a,b)=>(b.h||0)-(a.h||0));else L.sort((a,b)=>(b.destaque-a.destaque)||a.ord-b.ord);return L}
function render(){const L=filtered(),g=$('#grid');g.innerHTML=L.map((c,i)=>cardHTML(c,{big:i===0&&F.sort==='dest'&&!F.tags.size&&!F.reg&&!F.h&&!F.su})).join('');bindCards(g);
 $('#fCount').textContent=L.length;$('#empty').style.display=L.length?'none':'block';
 const act=F.reg||F.h||F.su||F.tags.size;$('#fClr').style.display=act?'':'none';$('#fDates').textContent=(S.ini&&S.fim)?`· ${fmtD(S.ini)} a ${fmtD(S.fim)}`:''}
function clearF(){F.reg='';F.h=0;F.su=0;F.tags.clear();syncF();render()}
$('#fReg').onchange=e=>{F.reg=e.target.value;syncF();render()};$('#fH').onchange=e=>{F.h=+e.target.value;syncF();render()};$('#fSu').onchange=e=>{F.su=+e.target.value;render()};$('#fSort').onchange=e=>{F.sort=e.target.value;render()};
$$('#fTags button').forEach(b=>b.onclick=()=>{const t=b.dataset.t;F.tags.has(t)?F.tags.delete(t):F.tags.add(t);syncF();render()});
$('#fClr').onclick=clearF;$('#eClr').onclick=clearF;
$$('.vt button').forEach(b=>b.onclick=()=>{F.view=b.dataset.v;syncF()});
$$('[data-view=map]').forEach(a=>a.addEventListener('click',()=>{F.view='map';syncF()}));
$$('[data-reg]').forEach(a=>a.onclick=()=>{F.reg=a.dataset.reg;syncF();render();goList()});
$('#hGo').onclick=()=>{F.reg=$('#hReg').value;F.h=+$('#hH').value;S.hosp=F.h?String(F.h):S.hosp;syncF();render();goList()};

/* cards */
function cardHTML(c,o={}){const pics=(c.pics||[]).slice(0,6),fav=FAV.has(c.id),cmp=CMP.includes(c.id),sp=specLine(c);
 const ph=pics.length?`<div class="pc-tr">${pics.map((p,k)=>`<img src="${esc(p)}" alt="${esc(c.nome)}${c.fotos&&c.fotos[k]?': '+esc(c.fotos[k]):''}" loading="lazy" decoding="async">`).join('')}</div>${pics.length>1?`<button class="pc-ar l" type="button" aria-label="Foto anterior">‹</button><button class="pc-ar r" type="button" aria-label="Próxima foto">›</button><div class="pc-dots">${pics.map((_,k)=>`<i${k?'':' class="on"'}></i>`).join('')}</div>`:''}`:'<div class="ph0">Suas fotos aparecem aqui</div>';
 return `<article class="pc${o.big?' big':''}" data-id="${esc(c.id)}"${o.preview?'':' tabindex="0" role="link" aria-label="Ver '+esc(c.nome)+'"'}>
<div class="pc-ph">${ph}<div class="pc-bd">${c.destaque?'<span class="d">Destaque</span>':''}${c.badge?`<span>${esc(c.badge)}</span>`:''}</div>${o.preview?'':`<button class="heart${fav?' on':''}" type="button" aria-label="Salvar nos favoritos" aria-pressed="${fav}">${svg('heart')}</button>`}</div>
<div class="pc-b"><div class="pc-k"><span>${svg('pin')}${esc(c.regiao)}</span><span>${esc(c.tipo)} · Ref. ${esc(c.ref)}</span></div><h3>${esc(c.nome)}</h3><p class="s">${esc(c.sub)}</p>
<div class="pc-am">${c.tags.slice(0,4).map(t=>TAGS[t]?`<span>${svg(TAGS[t][1])}${TAGS[t][0]}</span>`:'').join('')}</div>
<div class="pc-sp"><span>${svg('bed')}${c.qt?c.qt+' quartos':(c.su?c.su+' suítes':'Suítes: consulte')}</span><span>${svg('users')}${c.h?'até '+c.h:'Consulte'}</span></div>
<div class="pc-pr"><div>Diária<b>Consulte</b></div><div>Fim de semana<b>Consulte</b></div></div>
${o.preview?'':`<div class="pc-ft"><label class="cmpck"><input type="checkbox"${cmp?' checked':''}> Comparar</label><span class="pc-go">Ver imóvel →</span></div>`}</div></article>`}
function bindCards(root){$$('.pc',root).forEach(el=>{const id=el.dataset.id,tr=$('.pc-tr',el),dots=$$('.pc-dots i',el);
 if(tr){let raf=0;tr.addEventListener('scroll',()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{const k=Math.round(tr.scrollLeft/tr.clientWidth);dots.forEach((d,j)=>d.classList.toggle('on',j===k))})},{passive:true});
  $$('.pc-ar',el).forEach(b=>b.onclick=e=>{e.stopPropagation();tr.scrollBy({left:(b.classList.contains('l')?-1:1)*tr.clientWidth,behavior:'smooth'})})}
 const h=$('.heart',el);if(h)h.onclick=e=>{e.stopPropagation();toggleFav(id)};
 const ck=$('.cmpck',el);if(ck){ck.onclick=e=>e.stopPropagation();$('input',ck).onchange=e=>{toggleCmp(id,e.target.checked)}}
 if(!el.querySelector('.ph0')&&el.closest('.wprev'))return;
 el.addEventListener('click',()=>openDetail(id));el.addEventListener('keydown',e=>{if(e.key==='Enter')openDetail(id)})})}

/* favoritos */
const FAV=new Set(store.get('we_fav',[]).filter(byId));
function toggleFav(id){FAV.has(id)?FAV.delete(id):FAV.add(id);store.set('we_fav',[...FAV]);favUI();toast(FAV.has(id)?'Salvo nos favoritos':'Removido dos favoritos')}
function favUI(){const n=FAV.size;$('#favN').textContent=n;$('#favN').classList.toggle('on',n>0);$('#favN2').textContent=n?'('+n+')':'';
 $$('.pc').forEach(el=>{const h=$('.heart',el);if(h){const on=FAV.has(el.dataset.id);h.classList.toggle('on',on);h.setAttribute('aria-pressed',on)}});
 const d=$('#dFav');if(d&&DV.cur){d.classList.toggle('on',FAV.has(DV.cur.id));$('span',d).textContent=FAV.has(DV.cur.id)?'Salvo':'Salvar'}}
function showFav(){const ids=[...FAV];openM(ids.length?`<h3>Seus <em>favoritos</em></h3><p>${ids.length} imóve${ids.length>1?'is':'l'} salvo${ids.length>1?'s':''} neste aparelho.</p><div class="flist">${ids.map(id=>{const c=byId(id);return `<div class="fitem" data-id="${id}"><img src="${c.pics[0]}" alt=""><div><b>${esc(c.nome)}</b><small>${esc(c.regiao)} · ${specLine(c).join(' · ')||'Consulte'}</small></div><button type="button" aria-label="Remover">✕</button></div>`}).join('')}</div><div class="row2">${ids.length>1?`<button class="btn ink" id="favCmp" type="button">Comparar ${Math.min(3,ids.length)}</button>`:''}<a class="btn wa" href="${wa(msgList(ids,'Separei estes imóveis no site:'))}" target="_blank" rel="noopener">${svg('wa')}Enviar lista ao Wesley</a></div>`:`<h3>Nenhum <em>favorito</em> ainda</h3><p>Toque no coração dos imóveis para salvar aqui e mandar a lista de uma vez no WhatsApp.</p><button class="btn ink" type="button" data-cl>Ver imóveis</button>`);
 $$('.fitem').forEach(f=>{f.onclick=()=>{closeM();openDetail(f.dataset.id)};$('button',f).onclick=e=>{e.stopPropagation();toggleFav(f.dataset.id);showFav()}});
 const fc=$('#favCmp');if(fc)fc.onclick=()=>{CMP.length=0;ids.slice(0,3).forEach(i=>CMP.push(i));cmpUI();showCmp()};
 $$('#mdlB [data-cl]').forEach(b=>b.onclick=()=>{closeM();goList()})}
$('#favBtn').onclick=showFav;$('#favBtn2').onclick=showFav;

/* comparar */
const CMP=[];
function toggleCmp(id,on){const i=CMP.indexOf(id);if(on&&i<0){if(CMP.length>=3){toast('Compare até 3 imóveis');cmpUI();return}CMP.push(id)}else if(!on&&i>=0)CMP.splice(i,1);cmpUI()}
function cmpUI(){$$('.pc').forEach(el=>{const c=$('.cmpck input',el);if(c)c.checked=CMP.includes(el.dataset.id)});
 $('#ctTh').innerHTML=CMP.map(id=>`<img src="${byId(id).pics[0]}" alt="">`).join('');$('#ctN').textContent=CMP.length+(CMP.length>1?' selecionados':' selecionado');$('#ctGo').disabled=CMP.length<2;$('#ctray').classList.toggle('on',CMP.length>0)}
function showCmp(){const cs=CMP.map(byId),y='<span class="y">✓</span>',n='<span class="n">–</span>';
 const rows=[['Região',c=>esc(c.regiao)],['Tipo',c=>esc(c.tipo)],['Quartos / suítes',c=>c.qt?`${c.qt} (${c.su} suítes)`:(c.su||n)],['Hóspedes',c=>c.h?'até '+c.h:'Consulte'],...Object.entries(TAGS).map(([k,[t]])=>[t,c=>c.tags.includes(k)?y:n]),['Destaque',c=>esc(c.spec[3][1])],['Diária',()=>'Consulte']];
 openM(`<h3>Comparando <em>${cs.length} imóveis</em></h3><p>Toque na foto para abrir o imóvel.</p><div class="ctab"><table><thead><tr><th></th>${cs.map(c=>`<th data-id="${c.id}"><img src="${c.pics[0]}" alt="">${esc(c.nome)}</th>`).join('')}</tr></thead><tbody>${rows.map(([k,f])=>`<tr><th>${k}</th>${cs.map(c=>`<td>${f(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="row2" style="margin-top:20px"><a class="btn wa" href="${wa(msgList(CMP,'Estou comparando estes imóveis no site:'))}" target="_blank" rel="noopener">${svg('wa')}Perguntar sobre os ${cs.length}</a></div>`);
 $$('.ctab thead th[data-id]').forEach(t=>t.onclick=()=>{closeM();openDetail(t.dataset.id)})}
$('#ctGo').onclick=showCmp;$('#ctX').onclick=()=>{CMP.length=0;cmpUI()};

/* modal genérico */
const MD=$('#mdl');
function openM(h){$('#mdlB').innerHTML=h;MD.classList.add('on');document.body.style.overflow='hidden';$$('[data-cl]',MD).forEach(b=>{if(!b.onclick)b.onclick=closeM})}
function closeM(){MD.classList.remove('on');if(!DV.el.classList.contains('on'))document.body.style.overflow=''}
$$('[data-cl]',MD).forEach(b=>b.onclick=closeM);

/* página do imóvel */
const DV={el:$('#dv'),cur:null,pushed:false,y:0};
function openDetail(id,fromHash){const c=byId(id);if(!c)return;if(!fromHash){DV.pushed=true;location.hash='imovel/'+id;return}
 if(!DV.el.classList.contains('on'))DV.y=scrollY;DV.cur=c;renderDetail(c);DV.el.classList.add('on');DV.el.setAttribute('aria-hidden','false');DV.el.scrollTop=0;document.body.style.overflow='hidden';document.body.classList.add('dopen');
 document.title=c.nome+' · Wesley Escarpas'}
function hideDetail(){if(!DV.el.classList.contains('on'))return;DV.el.classList.remove('on');DV.el.setAttribute('aria-hidden','true');document.body.style.overflow='';document.body.classList.remove('dopen');DV.cur=null;document.title='Wesley Escarpas · Aluguel de temporada em Escarpas do Lago e Capitólio';
 const y=DV.y;requestAnimationFrame(()=>scrollTo(0,y));setTimeout(()=>scrollTo(0,y),60)}
function closeDetail(){if(DV.pushed){DV.pushed=false;history.back()}else{history.replaceState(null,'',location.pathname+location.search);hideDetail()}}
function route(){const m=location.hash.match(/^#imovel\/([\w-]+)/);if(m&&byId(m[1]))openDetail(m[1],true);else hideDetail()}
addEventListener('hashchange',route);
$('#dBack').onclick=closeDetail;
$('#dFav').onclick=()=>DV.cur&&toggleFav(DV.cur.id);
$('#dShare').onclick=async()=>{const c=DV.cur;if(!c)return;const url=location.href.split('#')[0]+'#imovel/'+c.id;try{if(navigator.share){await navigator.share({title:c.nome+' · Wesley Escarpas',text:c.sub,url});return}await navigator.clipboard.writeText(url);toast('Link do imóvel copiado')}catch(e){}};
function renderDetail(c){const f=IMG[c.img],n=f.length,mos=f.slice(0,5);
 const sims=IMOVEIS.filter(x=>x.id!==c.id).map(x=>[x,x.tags.filter(t=>c.tags.includes(t)).length+(x.regiao===c.regiao?1:0)]).sort((a,b)=>b[1]-a[1]).slice(0,3).map(x=>x[0]);
 $('#dTt').textContent=c.nome;
 $('#dBody').innerHTML=`<p class="crumb"><a data-go="list">Imóveis</a> › <a data-go="reg">${esc(c.regiao)}</a> › ${esc(c.nome)}</p>
<div class="dh"><div><p class="eyebrow" style="margin-bottom:10px">${esc(c.badge)}</p><h1 id="dName">${esc(c.nome.replace(/(\S+)$/,'<em>$1</em>')).replace(/&lt;em&gt;|&lt;\/em&gt;/g,m=>m==='&lt;em&gt;'?'<em>':'</em>')}</h1>
<div class="meta"><span>${svg('pin')}${esc(c.regiao)}, Capitólio-MG</span><span>${svg('home')}${esc(c.tipo)} · Ref. ${esc(c.ref)}</span><span>${svg('cam')}${n} fotos reais</span></div></div></div>
<div class="mos n${Math.min(mos.length,5)}">${mos.map((x,k)=>`<button type="button" data-k="${k}" aria-label="Abrir foto ${k+1}"><img src="${x[0]}" alt="${esc(c.nome)}: ${esc(c.fotos[k]||'')}" ${k?'loading="lazy"':''}></button>`).join('')}${n>1?`<button class="all" type="button" data-k="0">${svg('grid')}Ver as ${n} fotos</button>`:''}</div>
<div class="dgrid"><div>
 <p class="lead" style="font:italic 400 clamp(19px,1.6vw,23px)/1.45 var(--disp);color:var(--ink);max-width:none;margin-bottom:22px">${esc(c.sub)}</p>
 <div class="dspec">${c.spec.map(([k,v])=>`<div><small>${k}</small><b>${esc(v)}</b></div>`).join('')}</div>
 <div class="dsec"><div class="hl3">${c.hl.map(([ic,t,s])=>`<div>${svg(ic)}<div><b>${esc(t)}</b><small>${esc(s)}</small></div></div>`).join('')}</div></div>
 <div class="dsec"><h3>O que o imóvel oferece</h3><ul class="amen">${c.amen.map(a=>`<li>${svg(icoFor(a))}<span>${esc(a)}</span></li>`).join('')}</ul></div>
 <div class="dsec"><h3>Descrição do anúncio</h3><p class="desc">${esc(c.desc)}</p></div>
 <div class="dsec"><h3>Quem atende</h3><div class="host"><svg class="lg"><use href="#we"/></svg><div style="flex:1"><b>Wesley Escarpas</b><small>Corretor de imóveis · CRECI-MG 61.552</small><small><span class="st">★★★★★</span> 5,0 no Google · 59 avaliações</small></div><a class="btn line sm" href="https://www.instagram.com/wesleyescarpas/" target="_blank" rel="noopener">${svg('ig')}Instagram</a></div></div>
 <div class="dsec" style="border:0"><h3>Onde fica</h3><p class="desc">${esc(c.regiao)}, em Capitólio-MG, às margens do Lago de Furnas. O endereço exato é enviado na confirmação da reserva.</p></div>
</div>
<aside class="book" aria-label="Consultar este imóvel"><div class="pr"><div>Diária<b>Consulte</b></div><div>Fim de semana<b>Consulte</b></div></div>
 <div class="fg"><label class="fld"><span>Chegada</span><input type="date" data-k="ini" min="${today}"></label><label class="fld"><span>Saída</span><input type="date" data-k="fim" min="${today}"></label><label class="fld full"><span>Hóspedes</span><input type="number" data-k="hosp" min="1" max="60" placeholder="${c.h?'Até '+c.h+' pessoas':'Quantas pessoas?'}" inputmode="numeric"></label></div>
 <div class="exs">${['lancha','veículo 4x4','cozinheiro'].map(x=>`<button type="button" data-x="${x}">+ ${x==='veículo 4x4'?'4x4':x[0].toUpperCase()+x.slice(1)}</button>`).join('')}</div>
 <div class="bub" id="dBub"></div>
 <a class="btn wa" id="dGo" target="_blank" rel="noopener">${svg('wa')}Consultar no WhatsApp</a>
 <p class="ok">Atendimento de segunda a sexta, das 9h às 20h.</p></aside></div>
<div class="sim"><p class="eyebrow">Veja também</p><h2 style="font-size:clamp(30px,3.4vw,48px)">Imóveis <em>parecidos</em></h2><div class="grid">${sims.map(x=>cardHTML(x)).join('')}</div></div>`;
 bindCards($('#dBody .sim'));
 $$('#dBody .mos [data-k]').forEach(b=>b.onclick=()=>openLB(c,+b.dataset.k));
 $('[data-go=list]',DV.el).onclick=closeDetail;$('[data-go=reg]',DV.el).onclick=()=>{F.reg=c.regiao;syncF();render();closeDetail();setTimeout(goList,120)};
 bindTrip(DV.el);favUI();syncTrip()}
function bindTrip(r){$$('[data-k]',r).forEach(i=>i.addEventListener('input',()=>{S[i.dataset.k]=i.value;if(S.fim&&S.ini&&S.fim<S.ini)S.fim='';syncTrip()}));
 $$('[data-x]',r).forEach(b=>b.onclick=()=>{S.ex.has(b.dataset.x)?S.ex.delete(b.dataset.x):S.ex.add(b.dataset.x);syncTrip()})}
function syncTrip(){$$('input[data-k]').forEach(i=>{if(i.value!==S[i.dataset.k])i.value=S[i.dataset.k]});$$('input[data-k=fim]').forEach(i=>i.min=S.ini||today);$$('input[data-k=ini]').forEach(i=>i.min=today);
 $$('[data-x]').forEach(b=>b.classList.toggle('on',S.ex.has(b.dataset.x)));
 if(DV.cur){const m=msgFor(DV.cur),u=wa(m,DV.cur.wa);$('#dBub').innerHTML=esc(m)+'<small>prévia da mensagem ✓✓</small>';$('#dGo').href=u;$('#dBarGo').href=u}
 $('#fDates').textContent=(S.ini&&S.fim)?`· ${fmtD(S.ini)} a ${fmtD(S.fim)}`:''}
bindTrip($('#search'));

/* lightbox */
const LB={el:$('#lb'),c:null,i:0};
function openLB(c,i){LB.c=c;const f=IMG[c.img];$('#lbT').textContent=c.nome;
 $('#lbTr').innerHTML=f.map((x,k)=>`<figure><img src="${x[0]}" alt="${esc(c.fotos[k]||'')}" ${Math.abs(k-i)>1?'loading="lazy"':''}><figcaption>${esc(c.fotos[k]||'')}</figcaption></figure>`).join('');
 $('#lbTh').innerHTML=f.map((x,k)=>`<button type="button" aria-label="Foto ${k+1}"><img src="${x[0]}" alt="" loading="lazy"></button>`).join('');
 $$('#lbTh button').forEach((b,k)=>b.onclick=()=>lbGo(k));
 const t=$('#lbTr');t.style.transition='none';lbGo(i);void t.offsetWidth;t.style.transition='';LB.el.classList.add('on');$('#lbX').focus({preventScroll:true})}
function lbGo(n){const f=IMG[LB.c.img];LB.i=(n+f.length)%f.length;$('#lbTr').style.transform=`translate3d(${-LB.i*100}%,0,0)`;$('#lbC').textContent=`${LB.i+1} / ${f.length}`;$$('#lbTh button').forEach((b,k)=>{b.classList.toggle('on',k===LB.i);if(k===LB.i)b.scrollIntoView({block:'nearest',inline:'center'})})}
function closeLB(){LB.el.classList.remove('on')}
$('#lbX').onclick=closeLB;$('#lbP').onclick=()=>lbGo(LB.i-1);$('#lbN').onclick=()=>lbGo(LB.i+1);
(()=>{let x0=null,y0=0;const s=$('#lbS');s.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});s.addEventListener('touchend',e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))lbGo(LB.i+(dx<0?1:-1));x0=null})})();
addEventListener('keydown',e=>{if(LB.el.classList.contains('on')){if(e.key==='Escape')closeLB();if(e.key==='ArrowRight')lbGo(LB.i+1);if(e.key==='ArrowLeft')lbGo(LB.i-1);return}
 if(e.key==='Escape'){if(MD.classList.contains('on'))closeM();else if(DV.el.classList.contains('on'))closeDetail()}});

/* anuncie: planos + cadastro */
$('#plans').innerHTML=PLANOS.map(p=>`<article class="plan${p.hot?' hot':''}">${p.hot?'<span class="tag">Mais visto</span>':''}<h3>${p.nome}</h3><p class="pv">Plano mensal<b>${p.preco}</b></p><ul>${p.feat.map(f=>`<li>${svg('check')}${f}</li>`).join('')}</ul><button class="btn${p.hot?'':' line w'}" type="button" data-plan="${p.id}">Quero este plano</button></article>`).join('');
$('#aPlan').innerHTML=PLANOS.map((p,i)=>`<label><input type="radio" name="plano" value="${p.id}"${i?'':' checked'}><span>${p.nome}<small>${p.preco}</small></span></label>`).join('');
const AM=[['Piscina','pool',''],['Piscina aquecida','pool','aquecida'],['Borda infinita','pool','infinita'],['Vista pro lago','view','vista'],['Na marina / píer','pier','marina'],['Hidromassagem / spa','hidro','hidro'],['Sauna','flame','sauna'],['Churrasqueira','grill',''],['Área gourmet','grill',''],['Ar-condicionado','snow',''],['Wi-Fi','wifi',''],['Sinuca / jogos','ball',''],['Garagem','car',''],['Acessível','access','acessivel']];
$('#aAm').innerHTML=AM.map(([t,ic],i)=>`<label><input type="checkbox" value="${i}"><span>${svg(ic)}${t}</span></label>`).join('');
const W={step:0,files:[],cover:0};
function wGo(n){W.step=Math.max(0,Math.min(3,n));$$('.wp').forEach(p=>p.classList.toggle('on',+p.dataset.p===W.step));$$('#wsteps button').forEach((b,k)=>{b.classList.toggle('on',k===W.step);b.classList.toggle('done',k<W.step)});
 $('#wBack').style.visibility=W.step?'visible':'hidden';$('#wNext').style.display=W.step<3?'':'none';$('#wSend').style.display=W.step===3?'':'none';wUpd()}
$$('#wsteps button').forEach((b,k)=>b.onclick=()=>wGo(k));$('#wNext').onclick=()=>wGo(W.step+1);$('#wBack').onclick=()=>wGo(W.step-1);
$$('[data-plan]').forEach(b=>b.onclick=()=>{$(`#aPlan input[value=${b.dataset.plan}]`).checked=true;wGo(0);wUpd();document.getElementById('wiz').scrollIntoView({behavior:RM?'auto':'smooth',block:'start'})});
function wData(){const am=$$('#aAm input:checked').map(i=>AM[+i.value]);const nome=$('#aNome').value.trim();
 return {id:'novo',nome:nome||'Nome do seu imóvel',regiao:$('#aReg').value.replace(/^Outra.*/,'Capitólio e região'),tipo:$('#aTipo').value,su:+$('#aSu').value||null,h:+$('#aH').value||null,
  sub:$('#aSub').value.trim()||'A frase de destaque do seu imóvel aparece aqui.',tags:am.map(a=>a[2]).filter(Boolean),am:am.map(a=>a[0]),badge:$('#aPlan input:checked')?.value==='destaque'?'Destaque':'',destaque:false,ref:'NOVO',
  pics:W.files.length?[W.files[W.cover],...W.files.filter((_,k)=>k!==W.cover)].map(f=>f.url):[],plano:PLANOS.find(p=>p.id===$('#aPlan input:checked')?.value)}}
function wUpd(){const d=wData();if(d.badge){d.destaque=true;d.badge=''}
 $('#aPrev').innerHTML=cardHTML(d,{preview:true});const pv=$('#aPrev .pc');bindCards($('#aPrev'));
 let m=`Olá, Wesley! Quero anunciar meu imóvel no site.\n\n*Imóvel:* ${$('#aNome').value.trim()||'(sem nome)'}\n*Tipo:* ${d.tipo} · *Região:* ${d.regiao}\n*Suítes:* ${d.su||'-'} · *Hóspedes:* ${d.h||'-'}`;
 if($('#aSub').value.trim())m+=`\n*Destaque:* ${d.sub}`;if(d.am.length)m+=`\n*Comodidades:* ${d.am.join(', ')}`;if($('#aDesc').value.trim())m+=`\n*Descrição:* ${$('#aDesc').value.trim()}`;
 m+=`\n*Plano:* ${d.plano?d.plano.nome:'-'}\n\n*Proprietário:* ${$('#aPNome').value.trim()||'-'} · ${$('#aPWa').value.trim()||'-'}`;if(W.files.length)m+=`\n\nVou enviar ${W.files.length} foto${W.files.length>1?'s':''} em seguida.`;
 $('#wSend').href=wa(m)}
$$('#wiz input,#wiz select,#wiz textarea').forEach(i=>{if(i.type!=='file')i.addEventListener('input',wUpd);i.addEventListener('change',wUpd)});
function addFiles(list){[...list].filter(f=>f.type.startsWith('image/')).slice(0,20-W.files.length).forEach(f=>W.files.push({f,url:URL.createObjectURL(f)}));thumbs();wUpd()}
function thumbs(){$('#aThumbs').innerHTML=W.files.map((x,k)=>`<div data-k="${k}"${k===W.cover?' class="cv"':''}><img src="${x.url}" alt="Foto ${k+1}">${k===W.cover?'<em>Capa</em>':''}<button type="button" aria-label="Remover foto">✕</button></div>`).join('');
 $$('#aThumbs div').forEach(d=>{const k=+d.dataset.k;d.onclick=()=>{W.cover=k;thumbs();wUpd()};$('button',d).onclick=e=>{e.stopPropagation();URL.revokeObjectURL(W.files[k].url);W.files.splice(k,1);if(W.cover>=W.files.length)W.cover=0;thumbs();wUpd()}})}
$('#aFile').onchange=e=>{addFiles(e.target.files);e.target.value=''};
const dp=$('#drop');['dragenter','dragover'].forEach(ev=>dp.addEventListener(ev,e=>{e.preventDefault();dp.classList.add('ov')}));['dragleave','drop'].forEach(ev=>dp.addEventListener(ev,e=>{e.preventDefault();dp.classList.remove('ov')}));dp.addEventListener('drop',e=>addFiles(e.dataTransfer.files));
$('#wSend').addEventListener('click',()=>{wUpd();if(W.files.length)setTimeout(()=>toast('Agora é só mandar as fotos na conversa'),400)});

/* como funciona */
$$('.tabs2 button').forEach(b=>b.onclick=()=>{$$('.tabs2 button').forEach(x=>x.classList.toggle('on',x===b));$$('.steps').forEach(s=>s.classList.toggle('on',s.id==='st-'+b.dataset.s))});

function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('on'),2200)}

/* revelar + parallax + nav */
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -5% 0px'}):null;
$$('.up,.xcard').forEach(e=>io?io.observe(e):e.classList.add('in'));
const nav=$('#nav'),dock=$('#dock'),fab=$('#fab'),hero=$('.hero'),slides=$('#slides'),hin=$('.hin'),PX=$$('[data-sp]');
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),ease=t=>1-Math.pow(1-t,3);
function frame(){const y=scrollY,H=innerHeight,hh=hero.offsetHeight;nav.classList.toggle('light',y>hh-90);const sh=y>hh*.6;dock.classList.toggle('on',sh);fab.classList.toggle('on',sh);
 if(RM)return;requestAnimationFrame(frame);if(DV.el.classList.contains('on'))return;
 if(y<hh*1.1){slides.style.transform=`translate3d(0,${y*.35}px,0)`;hin.style.transform=`translate3d(0,${y*.12}px,0)`;hin.style.opacity=1-clamp((y/hh-.25)*1.6,0,1)}
 for(const e of PX){const b=e.parentElement.getBoundingClientRect();if(b.bottom<-80||b.top>H+80)continue;e.style.transform=`translate3d(0,${(b.top+b.height/2-H/2)*-(+e.dataset.sp)}px,0)`}}
if(RM)addEventListener('scroll',frame,{passive:true});frame();

/* fogos */
(()=>{const c=$('#fw');let g,w,h,on=false,P=[],R=[],last=0;const cols=['#C9A877','#FFE2A8','#F3ECE2','#FF9C7A','#FFD27A','#BFD8E8','#F6C1D0'];
 function rs(){w=c.clientWidth;h=c.clientHeight;const d=Math.min(devicePixelRatio||1,2);c.width=w*d;c.height=h*d;g=c.getContext('2d');g.setTransform(d,0,0,d,0,0)}
 const hz=()=>h*.78;
 function launch(){R.push({x:w*(.12+Math.random()*.76),y:hz(),vx:(Math.random()-.5)*1.3,vy:-Math.sqrt(.14*h*(.34+Math.random()*.3)),col:cols[Math.random()*cols.length|0]})}
 function burst(r){const n=80+Math.random()*50|0,ring=Math.random()<.3;for(let i=0;i<n;i++){const a=Math.random()*6.283,s=ring?3.4:Math.random()*3.6+.6;P.push({x:r.x,y:r.y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,d:.007+Math.random()*.009,col:Math.random()<.18?'#fff':r.col})}}
 function dot(x,y,rad,col,a){const H2=hz();g.globalAlpha=a;g.fillStyle=col;if(y<H2){g.beginPath();g.arc(x,y,rad,0,6.283);g.fill();g.globalAlpha=a*.2;g.fillRect(x-rad,2*H2-y,rad*2,rad*3)}}
 function loop(t){if(!on)return;requestAnimationFrame(loop);g.globalCompositeOperation='destination-out';g.globalAlpha=1;g.fillStyle='rgba(0,0,0,.2)';g.fillRect(0,0,w,h);g.globalCompositeOperation='lighter';
  if(t-last>(RM?2400:650)){last=t;launch();if(Math.random()<.35)launch()}
  R=R.filter(r=>{r.x+=r.vx;r.y+=r.vy;r.vy+=.07;dot(r.x,r.y,1.8,'#FFE9B0',.95);if(r.vy>-1){burst(r);return false}return true});
  P=P.filter(p=>{p.x+=p.vx;p.y+=p.vy;p.vx*=.982;p.vy=p.vy*.982+.035;p.l-=p.d;if(p.l<=0)return false;dot(p.x,p.y,1.5,p.col,p.l);return true});g.globalAlpha=1}
 new IntersectionObserver(es=>{const was=on;on=es[0].isIntersecting;if(on&&!was){rs();requestAnimationFrame(loop)}}).observe(c);addEventListener('resize',()=>{if(on)rs()});
})();
(()=>{const T=new Date('2027-01-01T00:00:00-03:00').getTime(),d=$('#cdD'),hh=$('#cdH'),mm=$('#cdM'),ss=$('#cdS');function u(){let s=Math.max(0,(T-Date.now())/1e3|0);d.textContent=s/86400|0;s%=86400;hh.textContent=String(s/3600|0).padStart(2,'0');s%=3600;mm.textContent=String(s/60|0).padStart(2,'0');ss.textContent=String(s%60).padStart(2,'0')}u();setInterval(u,1000)})();

/* ============ MAPA 3D ============ */
const V3={};
function fallback3D(){$('#three').innerHTML='<img src="aerea.webp" alt="Vista aérea de Escarpas do Lago" style="width:100%;height:100%;object-fit:cover">';const l=$('#load3d');l&&l.remove();$('#gate').remove();$('#mood').style.display='none';$('#vreset').style.display='none'}
function init3D(){
 const viewer=$('#viewer'),host=$('#three'),lab=$('#labels');
 if(!window.THREE||!THREE.OrbitControls)return fallback3D();
 let R;try{R=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});if(!R.getContext())throw 0}catch(e){return fallback3D()}
 R.setPixelRatio(Math.min(devicePixelRatio||1,1.75));R.outputEncoding=THREE.sRGBEncoding;R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=1.08;
 R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;host.appendChild(R.domElement);
 const C=h=>new THREE.Color(h).convertSRGBToLinear();
 const Mt=(h,o={})=>new THREE.MeshStandardMaterial(Object.assign({color:C(h),roughness:.85,metalness:0},o));
 const scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(36,1,1,700);
 const W=120,D=92,SX=150,SZ=115;
 let seed=11;const rnd=()=>(seed=seed*16807%2147483647)/2147483647;
 const hash=(x,z)=>{const s=Math.sin(x*127.1+z*311.7)*43758.5453;return s-Math.floor(s)};
 function vn(x,z){const xi=Math.floor(x),zi=Math.floor(z),xf=x-xi,zf=z-zi,u=xf*xf*(3-2*xf),v=zf*zf*(3-2*zf),a=hash(xi,zi),b=hash(xi+1,zi),c=hash(xi,zi+1),d=hash(xi+1,zi+1);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v}
 const fbm=(x,z)=>vn(x,z)*.55+vn(x*2.03,z*2.03)*.3+vn(x*4.1,z*4.1)*.15;
 const sm=(a,b,t)=>{t=Math.min(1,Math.max(0,(t-a)/(b-a)));return t*t*(3-2*t)};
 const BL=[[-36,-10,21],[-20,-28,15],[2,-33,17],[26,-35,14],[-50,14,15],[-31,27,12],[51,-21,10],[33,9,6.5],[37.5,14.5,5.5]];
 function wf(x,z){let s=-9;for(const[a,b,r]of BL){const v=1-Math.hypot(x-a,z-b)/r;if(v>s)s=v}return s+(fbm(x*.08+3,z*.08+7)-.5)*.32}
 function Hh(x,z){const s=wf(x,z);if(s>0)return .28-s*7.5;const l=-s;let h=.28+Math.min(l,.9)*1.5;h+=Math.pow(fbm(x*.045+11,z*.045+5),1.6)*7.5*sm(.3,1.1,l);
  const e=Math.max(Math.abs(x)/(W/2),Math.abs(z)/(D/2));h+=sm(.74,1,e)*7*fbm(x*.07,z*.07)*sm(.15,.6,l);return h}
 /* terreno */
 const tg=new THREE.PlaneGeometry(W,D,SX,SZ);tg.rotateX(-Math.PI/2);const tp=tg.attributes.position,tc=new Float32Array(tp.count*3);
 const cS=C('#d6c096'),cW=C('#a48c66'),cG=C('#7f9c4e'),cY=C('#a9a45d'),cK=C('#5f7d3d'),cR=C('#b4683c'),cP=C('#8e8471'),tmp=new THREE.Color();
 for(let i=0;i<tp.count;i++){const x=tp.getX(i),z=tp.getZ(i),h=Hh(x,z);tp.setY(i,h);
  if(h<.08)tmp.copy(cW);else if(h<.6)tmp.copy(cS).lerp(cG,sm(.3,.6,h));else{tmp.copy(cG).lerp(cY,fbm(x*.12+40,z*.12));if(fbm(x*.2+90,z*.2+20)>.7)tmp.lerp(cR,.75);if(h>3.2)tmp.lerp(cK,sm(3.2,6,h));if(h>7)tmp.lerp(cP,sm(7,10,h))}
  tc[i*3]=tmp.r;tc[i*3+1]=tmp.g;tc[i*3+2]=tmp.b}
 tg.setAttribute('color',new THREE.BufferAttribute(tc,3));tg.computeVertexNormals();
 const terrain=new THREE.Mesh(tg,new THREE.MeshStandardMaterial({vertexColors:true,flatShading:true,roughness:.95}));terrain.receiveShadow=true;scene.add(terrain);
 /* saia do diorama */
 (()=>{const P=[];for(let i=0;i<=SX;i++)P.push([-W/2+W*i/SX,-D/2]);for(let j=1;j<=SZ;j++)P.push([W/2,-D/2+D*j/SZ]);for(let i=SX-1;i>=0;i--)P.push([-W/2+W*i/SX,D/2]);for(let j=SZ-1;j>=0;j--)P.push([-W/2,-D/2+D*j/SZ]);
  const v=[],c=[],bot=-6,cw=C('#3c86b8'),cs=C('#8a5c3c'),cb=C('#2e2018');
  for(let k=0;k<P.length-1;k++){const[a,b]=P[k],[e,f]=P[k+1],h1=Hh(a,b),h2=Hh(e,f),t1=Math.max(h1,.05),t2=Math.max(h2,.05),c1=h1<0?cw:cs,c2=h2<0?cw:cs;
   v.push(a,t1,b,a,bot,b,e,t2,f,e,t2,f,a,bot,b,e,bot,f);c.push(c1.r,c1.g,c1.b,cb.r,cb.g,cb.b,c2.r,c2.g,c2.b,c2.r,c2.g,c2.b,cb.r,cb.g,cb.b,cb.r,cb.g,cb.b)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(v,3));g.setAttribute('color',new THREE.Float32BufferAttribute(c,3));g.computeVertexNormals();
  scene.add(new THREE.Mesh(g,new THREE.MeshStandardMaterial({vertexColors:true,side:THREE.DoubleSide,roughness:1})))})();
 /* sombra da base */
 (()=>{const cv=document.createElement('canvas');cv.width=cv.height=256;const x=cv.getContext('2d'),gr=x.createRadialGradient(128,128,20,128,128,128);gr.addColorStop(0,'rgba(0,0,0,.45)');gr.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=gr;x.fillRect(0,0,256,256);
  const m=new THREE.Mesh(new THREE.PlaneGeometry(W*1.5,D*1.5),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(cv),transparent:true,depthWrite:false}));m.rotation.x=-Math.PI/2;m.position.y=-6.4;scene.add(m)})();
 /* água */
 const wg=new THREE.PlaneGeometry(W,D,84,64);wg.rotateX(-Math.PI/2);const wp=wg.attributes.position,wb=Float32Array.from(wp.array);
 const wm=new THREE.MeshStandardMaterial({color:C('#2f7db5'),roughness:.18,metalness:.3,transparent:true,opacity:.9,flatShading:true});
 const water=new THREE.Mesh(wg,wm);water.receiveShadow=true;scene.add(water);
 function waves(t){for(let i=0;i<wp.count;i++){const x=wb[i*3],z=wb[i*3+2];wp.array[i*3+1]=Math.sin(x*.35+t*1.1)*.07+Math.cos(z*.42+t*.9)*.07}wp.needsUpdate=true}
 waves(0);
 /* posições das casas */
 const N=IMOVEIS.length,CASAS=IMOVEIS;const cand=[];for(let x=-30;x<=54;x+=1.5)for(let z=-16;z<=40;z+=1.5){const s=wf(x,z);if(s>-.24&&s<-.07){const h=Hh(x,z);if(h<2.4&&Math.abs(Hh(x+1.2,z)-Hh(x-1.2,z))<.7&&Math.abs(Hh(x,z+1.2)-Hh(x,z-1.2))<.7)cand.push([x,z,h])}}
 for(let i=cand.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[cand[i],cand[j]]=[cand[j],cand[i]]}
 const picks=[];for(let md=13;picks.length<N&&md>4;md-=1.5)for(const p of cand){if(picks.length>=N)break;if(picks.every(q=>Math.hypot(p[0]-q[0],p[1]-q[1])>md))picks.push(p)}
 picks.sort((a,b)=>a[0]-b[0]);
 const gold=C('#C9A877');
 const houses=picks.map((p,i)=>{const g=new THREE.Group(),white=Mt('#f4f0e9',{roughness:.7}),wood=Mt('#8b5a36'),dark=Mt('#34302c',{roughness:.6}),deck=Mt('#b07a4f');
  const glass=new THREE.MeshStandardMaterial({color:C('#9cc1d4'),roughness:.08,metalness:.55,emissive:C('#ffbf70'),emissiveIntensity:0});
  const pool=new THREE.MeshStandardMaterial({color:C('#44c2e8'),roughness:.12,metalness:.1,emissive:C('#1fb1e6'),emissiveIntensity:.15});
  const box=(w,h,d,m,x,y,z)=>{const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;g.add(o);return o};
  const v=i%3;box(4.6,.3,4,Mt('#d9d1c4'),0,.15,0);
  box(3.3,1.3,2.2,white,-.4,.95,-.6);box(v===1?3:2.6,1.1,2,white,v===2?-.6:.35,2.15,-.7);
  box(3.6,.14,2.5,dark,-.4,1.67,-.6);box(v===1?3.3:2.9,.14,2.3,dark,v===2?-.6:.35,2.77,-.7);
  box(.08,1,1.6,wood,v===2?-2.05:1.68,2.15,-.7);
  const g1=box(2.7,.9,.06,glass,-.4,.95,.52),g2=box(2.1,.8,.06,glass,v===2?-.6:.35,2.15,.32);
  box(2.6,.12,1.3,deck,-.4,.32,1.35);const pl=box(1.8,.08,.9,pool,-.5,.4,1.35);
  const ring=new THREE.Mesh(new THREE.RingGeometry(3.3,3.6,48),new THREE.MeshBasicMaterial({color:gold,transparent:true,opacity:.0,side:THREE.DoubleSide,depthWrite:false}));ring.rotation.x=-Math.PI/2;ring.position.y=.34;g.add(ring);
  const gx=wf(p[0]+1,p[1])-wf(p[0]-1,p[1]),gz=wf(p[0],p[1]+1)-wf(p[0],p[1]-1);g.rotation.y=Math.atan2(gx,gz);
  g.position.set(p[0],p[2]-.05,p[1]);g.scale.setScalar(1.25);g.userData={i,glass:[g1,g2],pool:pl,ring};g.traverse(o=>o.userData.hi=i);scene.add(g);return g});
 /* vizinhança */
 const nb=[];for(let x=-34;x<=58;x+=3.1)for(let z=-22;z<=44;z+=3.1){const px=x+(rnd()-.5)*2.2,pz=z+(rnd()-.5)*2.2,s=wf(px,pz);if(s>-.1||s<-1.7)continue;const h=Hh(px,pz);if(h>3.6)continue;if(picks.some(p=>Math.hypot(p[0]-px,p[1]-pz)<5.4))continue;if(rnd()<.3)continue;nb.push([px,pz,h])}
 const bodyI=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),Mt('#ffffff',{roughness:.8}),nb.length),roofI=new THREE.InstancedMesh(new THREE.ConeGeometry(.74,.6,4).rotateY(Math.PI/4),Mt('#ffffff',{roughness:.9,flatShading:true}),nb.length);
 const dm=new THREE.Object3D(),wallC=['#f2ede4','#ebe2d3','#f6f3ee','#e4d6c2'].map(C),roofC=['#b85f39','#c4703f','#a5553a','#cf8650','#7c7975','#9a4a33'].map(C);let poolsN=[];
 nb.forEach((p,k)=>{const w=1.5+rnd()*.9,d=1.2+rnd()*.7,hh=.85+rnd()*.5,ry=rnd()*Math.PI;dm.position.set(p[0],p[2]+hh/2-.05,p[1]);dm.rotation.set(0,ry,0);dm.scale.set(w,hh,d);dm.updateMatrix();bodyI.setMatrixAt(k,dm.matrix);bodyI.setColorAt(k,wallC[k%4]);
  dm.position.y=p[2]+hh+.26;dm.rotation.set(0,ry,0);dm.scale.set(w*1.02,1,d*1.02);dm.updateMatrix();roofI.setMatrixAt(k,dm.matrix);roofI.setColorAt(k,roofC[Math.floor(rnd()*6)]);if(rnd()<.22)poolsN.push([p[0]+Math.cos(ry)*1.6,p[2]+.06,p[1]-Math.sin(ry)*1.6,ry])});
 bodyI.castShadow=bodyI.receiveShadow=roofI.castShadow=true;scene.add(bodyI,roofI);
 const poolI=new THREE.InstancedMesh(new THREE.BoxGeometry(1,.1,.55),new THREE.MeshStandardMaterial({color:C('#4cc6ea'),roughness:.15,emissive:C('#1fb1e6'),emissiveIntensity:.12}),Math.max(1,poolsN.length));
 poolsN.forEach((p,k)=>{dm.position.set(p[0],p[1],p[2]);dm.rotation.set(0,p[3],0);dm.scale.set(1,1,1);dm.updateMatrix();poolI.setMatrixAt(k,dm.matrix)});scene.add(poolI);
 /* árvores */
 const trees=[];for(let k=0;k<1400&&trees.length<380;k++){const x=(rnd()-.5)*W*.97,z=(rnd()-.5)*D*.97,s=wf(x,z);if(s>-.08)continue;if(picks.some(p=>Math.hypot(p[0]-x,p[1]-z)<3.6))continue;if(nb.some(p=>Math.abs(p[0]-x)<1.2&&Math.abs(p[1]-z)<1.2))continue;trees.push([x,z,Hh(x,z)])}
 const trI=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),Mt('#ffffff',{flatShading:true,roughness:.9}),trees.length),trC=['#4f7a35','#5f8a3c','#3f6a30','#6f9442','#557f3a'].map(C);
 trees.forEach((t,k)=>{const sc=.42+rnd()*.6;dm.position.set(t[0],t[2]+sc*.8,t[1]);dm.rotation.set(rnd(),rnd(),rnd());dm.scale.set(sc,sc*1.15,sc);dm.updateMatrix();trI.setMatrixAt(k,dm.matrix);trI.setColorAt(k,trC[k%5])});
 trI.castShadow=true;trI.receiveShadow=true;scene.add(trI);
 /* lanchas */
 const boats=[];for(const[a,b,r]of BL.slice(0,6)){if(boats.length>=3)break;const rr=r*.45;let ok=true;for(let k=0;k<24;k++){const t=k/24*6.283;if(wf(a+Math.cos(t)*rr,b+Math.sin(t)*rr)<.14){ok=false;break}}if(!ok)continue;
  const g=new THREE.Group(),hull=new THREE.Mesh(new THREE.BoxGeometry(1.7,.34,.62),Mt('#f7f6f1',{roughness:.4}));hull.position.y=.12;hull.castShadow=true;g.add(hull);
  const cab=new THREE.Mesh(new THREE.BoxGeometry(.6,.28,.46),Mt('#283540',{roughness:.3,metalness:.3}));cab.position.set(-.1,.42,0);g.add(cab);
  const wk=new THREE.Mesh(new THREE.PlaneGeometry(3.6,.8),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.35,depthWrite:false}));wk.rotation.x=-Math.PI/2;wk.position.set(-2.4,.04,0);g.add(wk);
  g.userData={a,b,r:rr,s:(.12+rnd()*.08)*(boats.length%2?-1:1),t:rnd()*6.28};scene.add(g);boats.push(g)}
 /* nuvens */
 const clouds=[];for(let k=0;k<4;k++){const g=new THREE.Group(),m=new THREE.MeshStandardMaterial({color:C('#ffffff'),flatShading:true,roughness:1,transparent:true,opacity:.85});
  for(let j=0;j<5;j++){const s=1+rnd()*1.1,o=new THREE.Mesh(new THREE.IcosahedronGeometry(s,0),m);o.position.set((j-2)*1.3+rnd()*.6,rnd()*.7,rnd()*1.4-.7);o.scale.y=.6;o.castShadow=true;g.add(o)}
  g.position.set((rnd()-.5)*W*.8,30+rnd()*6,(rnd()-.5)*D*.7);g.userData.v=.6+rnd()*.6;scene.add(g);clouds.push(g)}
 /* luzes e clima */
 const hemi=new THREE.HemisphereLight(0xffffff,0x000000,.85);scene.add(hemi);
 const sun=new THREE.DirectionalLight(0xffffff,1.7);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-75,right:75,top:62,bottom:-62,near:10,far:280});sun.shadow.bias=-.0006;sun.shadow.normalBias=.03;scene.add(sun);
 const MO={dia:{sky:'#e8f1ff',gr:'#6e5c40',hi:.85,sun:'#fff1dc',si:1.75,pos:[55,85,40],wat:'#2f7db5',glow:0},sunset:{sky:'#ffbf96',gr:'#2c2238',hi:.5,sun:'#ff9450',si:1.55,pos:[-80,24,-48],wat:'#3e5d8e',glow:1.5}};
 const cur={sky:C(MO.dia.sky),gr:C(MO.dia.gr),hi:.85,sun:C(MO.dia.sun),si:1.75,pos:new THREE.Vector3(...MO.dia.pos),wat:C(MO.dia.wat),glow:0};let tgt=MO.dia;
 function applyMood(k){const T=tgt,cs=[['sky',T.sky],['gr',T.gr],['sun',T.sun],['wat',T.wat]];cs.forEach(([n,h])=>cur[n].lerp(C(h),k));cur.hi+=(T.hi-cur.hi)*k;cur.si+=(T.si-cur.si)*k;cur.glow+=(T.glow-cur.glow)*k;cur.pos.lerp(new THREE.Vector3(...T.pos),k);
  hemi.color.copy(cur.sky);hemi.groundColor.copy(cur.gr);hemi.intensity=cur.hi;sun.color.copy(cur.sun);sun.intensity=cur.si;sun.position.copy(cur.pos);wm.color.copy(cur.wat);
  houses.forEach(hs=>{hs.userData.glass.forEach(g=>g.material.emissiveIntensity=cur.glow);hs.userData.pool.material.emissiveIntensity=.15+cur.glow*.5})}
 applyMood(1);
 $$('#mood button').forEach(b=>b.onclick=()=>{tgt=MO[b.dataset.m];$$('#mood button').forEach(x=>x.classList.toggle('on',x===b));viewer.classList.toggle('sunset',b.dataset.m==='sunset');kick()});
 /* câmera e controles */
 const ctl=new THREE.OrbitControls(cam,R.domElement);ctl.enableDamping=true;ctl.dampingFactor=.07;ctl.minDistance=18;ctl.maxDistance=260;ctl.maxPolarAngle=1.22;ctl.enablePan=false;ctl.autoRotate=!RM;ctl.autoRotateSpeed=.4;ctl.enabled=false;
 const HOME={t:new THREE.Vector3(2,0,3),c:null};
 function homeCam(){const asp=host.clientWidth/Math.max(1,host.clientHeight),k=asp<1?1.55:asp<1.4?1.22:1;return new THREE.Vector3(66*k,74*k,90*k).add(HOME.t)}
 cam.position.copy(homeCam());ctl.target.copy(HOME.t);
 let anim=null;function fly(t,c){anim={ft:ctl.target.clone(),fc:cam.position.clone(),tt:t,tc:c,t0:performance.now(),d:1200};kick()}
 /* rótulos */
 const pins=houses.map((h,i)=>{const b=document.createElement('button');b.className='pin';b.type='button';b.innerHTML=`<b>${CASAS[i].id.toUpperCase()}</b><span>${CASAS[i].badge}</span>`;b.onclick=()=>select(i);lab.appendChild(b);return b});
 const chips=[];
 let sel=-1;const ri=$('#rinfo');
 function select(i){sel=i;const c=CASAS[i],h=houses[i];ctl.autoRotate=false;
  pins.forEach((p,k)=>p.classList.toggle('on',k===i));chips.forEach((p,k)=>p.classList.toggle('on',k===i));houses.forEach((hs,k)=>hs.userData.ring.material.opacity=k===i?.95:0);
  $('#rimg').src=c.pics[0];$('#rimg').alt=c.nome;$('#rbadge').textContent=c.badge;$('#rname').textContent=c.nome;$('#rdesc').textContent=c.regiao+' · '+(specLine(c).join(' · ')||'consulte');
  $('#rwa').href=wa(msgFor(c));ri.classList.add('on');
  const p=h.position.clone(),dir=cam.position.clone().sub(ctl.target).setY(0).normalize();const mob=host.clientWidth<700;
  fly(p.clone().add(new THREE.Vector3(0,0,mob?4:0)),p.clone().add(dir.multiplyScalar(mob?40:36)).add(new THREE.Vector3(0,mob?34:27,0)))}
 $('#rclose').onclick=()=>{ri.classList.remove('on');pins.forEach(p=>p.classList.remove('on'));chips.forEach(p=>p.classList.remove('on'));houses.forEach(hs=>hs.userData.ring.material.opacity=0);sel=-1;kick()};
 $('#rprev').onclick=()=>select((Math.max(sel,0)+houses.length-1)%houses.length);$('#rnext').onclick=()=>select((sel+1)%houses.length);
 $('#ropen').onclick=()=>sel>=0&&openDetail(CASAS[sel].id);
 $('#vreset').onclick=()=>{$('#rclose').onclick();fly(HOME.t.clone(),homeCam());ctl.autoRotate=!RM};
 $('#gatebtn').onclick=()=>{viewer.classList.add('live');ctl.enabled=true;ctl.autoRotate=false;kick()};
 $('#vexit').onclick=()=>{viewer.classList.remove('live');ctl.enabled=false};
 /* clique nas casas */
 const ray=new THREE.Raycaster(),mv=new THREE.Vector2();let down=null;
 R.domElement.addEventListener('pointerdown',e=>{down=[e.clientX,e.clientY]});
 R.domElement.addEventListener('pointerup',e=>{if(!down)return;if(Math.hypot(e.clientX-down[0],e.clientY-down[1])<6){const r=R.domElement.getBoundingClientRect();mv.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(mv,cam);const hit=ray.intersectObjects(houses,true)[0];if(hit&&hit.object.userData.hi!=null)select(hit.object.userData.hi)}down=null});
 ctl.addEventListener('start',()=>{ctl.autoRotate=false});
 /* render */
 let vis=false,running=false,idle=0;const v3=new THREE.Vector3(),clock=new THREE.Clock();
 function size(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;R.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();kick()}
 new ResizeObserver(size).observe(host);size();
 function kick(){idle=0;if(vis&&!running){running=true;requestAnimationFrame(tick)}}
 function tick(){if(!vis){running=false;return}requestAnimationFrame(tick);const dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;
  if(anim){const k=ease(Math.min(1,(performance.now()-anim.t0)/anim.d));ctl.target.lerpVectors(anim.ft,anim.tt,k);cam.position.lerpVectors(anim.fc,anim.tc,k);if(k>=1)anim=null}
  ctl.update();if(!RM)waves(t);applyMood(Math.min(1,dt*2.2));
  boats.forEach(b=>{const u=b.userData;u.t+=u.s*dt;const x=u.a+Math.cos(u.t)*u.r,z=u.b+Math.sin(u.t)*u.r,dx=-Math.sin(u.t)*u.s,dz=Math.cos(u.t)*u.s;b.position.set(x,.02+Math.sin(t*3+u.t)*.04,z);b.rotation.y=-Math.atan2(dz,dx)});
  clouds.forEach(c=>{c.position.x+=c.userData.v*dt;if(c.position.x>W*.7)c.position.x=-W*.7});
  if(sel>=0){const r=houses[sel].userData.ring;r.scale.setScalar(1+Math.sin(t*3)*.06)}
  R.render(scene,cam);
  const w=host.clientWidth,h=host.clientHeight;houses.forEach((hs,i)=>{v3.copy(hs.position);v3.y+=5.4;v3.project(cam);const p=pins[i];if(v3.z>1){p.style.display='none';return}p.style.display='';p.style.transform=`translate3d(${(v3.x*.5+.5)*w-18}px,${(-v3.y*.5+.5)*h-52}px,0)`})}
 new IntersectionObserver(es=>{vis=es[0].isIntersecting;if(vis)kick()},{rootMargin:'100px'}).observe(viewer);
 const l=$("#load3d");l&&l.remove();Object.assign(V3,{ok:true,R,scene,cam,ctl,houses,get vis(){return vis},get running(){return running}});
}
(()=>{const v=$('#viewer');const o=new IntersectionObserver(es=>{if(es[0].isIntersecting){o.disconnect();try{init3D()}catch(e){console.error(e);fallback3D()}}},{rootMargin:'700px'});o.observe(v)})();



/* início */
icons();waLinks();syncF();render();favUI();cmpUI();wGo(0);syncTrip();route();
