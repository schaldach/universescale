const posts = [
    {
        title: 'Terra',
        image: '/earth.png',
        conceptualImage: false,
        radius: 0.000000000673,
        description: 'A Terra é o terceiro planeta mais próximo do Sol, e o quinto maior dos oito planetas do sistema solar. Também é chamada como mundo ou planeta azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu um bilhão de anos depois.',
        slug: 'terra'
    },
    {
        title: 'Júpiter',
        image: '/jupiter.png',
        conceptualImage: false,
        radius: 0.00000000738,
        description: 'Júpiter é o maior planeta do sistema solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto.',
        slug: 'jupiter'
    },
    {
        title: 'Sol',
        image: '/sun.png',
        conceptualImage: false,
        radius: 0.0000000736,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'sol'
    },
    {
        title: 'Sirius A',
        image: '/sirius.png',
        conceptualImage: false,
        radius: 0.000000126,
        description: 'Sírio, também chamada de Sirius ou alpha Canis Majoris é a estrela mais brilhante do céu noturno visível a olho nu. Localizada na constelação do Cão Maior, pode ser vista a partir de qualquer ponto na Terra, e é uma das estrelas mais próximas do nosso planeta. ',
        slug: 'sirius_a'
    },
    {
        title: 'Sagittarius A*',
        image: '/sagittarius_a.png',
        conceptualImage: false,
        radius: 0.00000232,
        description: 'Sagittarius A* é uma fonte de rádio astronômica brilhante localizada no centro da Via Láctea, perto da fronteira das constelações de Sagitário e Escorpião. Acredita-se que Sagitário A* seja a localização de um buraco negro supermassivo, como aqueles que geralmente estão nos centros da maioria das galáxias espirais e elípticas. O buraco negro explodiu quase 3,5 milhões de anos atrás, devido a uma grande nuvem de hidrogênio caindo no disco de material rodopiando perto do buraco negro central.',
        slug: 'sagittarius_a'
    },
    {
        title: 'Betelgeuse',
        image: '/betelgeuse.png',
        conceptualImage: true,
        radius: 0.0000652,
        description: 'Alpha Orionis, conhecida como Betelgeuse, é uma estrela de brilho variável sendo a 10ª ou 12ª estrela mais brilhante das que podem ser vistas da Terra. É também a segunda estrela mais brilhante na constelação de Orion. Ela é a maior fonte no comprimento de onda infravermelho presente no céu.',
        slug: 'betelgeuse'
    },
    {
        title: 'UY Scuti',
        image: '/uy_scuti.png',
        conceptualImage: true,
        radius: 0.000125,
        description: 'UY Scuti é uma estrela supergigante vermelha. Possui um volume de quase 5 bilhões de vezes o do Sol. Está a aproximadamente 5.100 anos-luz da Terra. Se colocada no centro do Sistema Solar, sua fotosfera pelo menos envolveria a órbita de Júpiter.',
        slug: 'uy_scuti'
    },
    {
        title: 'Messier-87',
        image: '/m87.png',
        conceptualImage: false,
        radius: 0.002,
        description: 'Este é um buraco negro gigante, ou supermassivo, localizado no centro da galáxia Messier 87 (M87), na constelação de Virgem, a 55 milhões de anos-luz da Terra.Este buraco negro é três milhões de vezes maior que o nosso planeta, e tem uma massa de 6,5 bilhões de vezes a do sol.',
        slug: 'messier_87'
    },
    {
        title: 'TON 618',
        image: '/ton618.png',
        conceptualImage: true,
        radius: 0.0206,
        description: 'TON 618 é um quasar muito distante e extremamente luminoso localizado próximo ao Pólo Norte Galáctico na constelação de Canes Venatici. TON 618 é atualmente o buraco negro mais massivo já encontrado, com uma massa de 66 bilhões de massas solares.',
        slug: 'ton_618'
    },
    {
        title: 'Nebulosa Olho de Gato',
        image: '/cateye.png',
        conceptualImage: false,
        radius: 0.2,
        description: 'NGC 6543 ou Nebulosa do Olho de gato é uma nebulosa planetária na constelação do Dragão. Estruturalmente é uma das nebulosas mais complexas conhecidas tendo-se observado em imagens de alta resolução do Telescópio Espacial Hubble mostrando jorros de material e numerosas estruturas em forma de arco.',
        slug: 'nebulosa_olho_de_gato'
    },
    {
        title: 'Nebulosa do Anel',
        image: '/ring.png',
        conceptualImage: false,
        radius: 1.3,
        description: 'A Nebulosa do Anel fica a 2.300 anos-luz da Terra, na constelação de Lira. Está entre os mais notáveis exemplos de nebulosa planetária. Foi descoberta por Antoine Darquier de Pellepoix em 1779. Esse nome é porque seus gases parecem um anel ou as pétalas de uma rosa cósmica.',
        slug: 'nebulosa_anel'
    },
    {
        title: 'Pilares da Criação',
        image: '/pillars_of_creation.png',
        conceptualImage: false,
        radius: 7.5,
        description: 'Os pilares da criação são aglomerados de poeira e gás com tamanho interestelar na nebulosa da Águia, situado a cerca de 6.500-7.000 anos-luz da Terra. No nome, "pilares" é sugestivo ao formato do lugar, e a parte "Criação" originou-se devido ao local ser um enorme berço de estrelas. Sua primeira imagem, datada em 1 de abril de 1995, foi tirada pelo telescópio espacial Hubble.',
        slug: 'pilares_da_criacao'
    },
    {
        title: 'Nebulosa de Órion',
        image: '/orion.png',
        conceptualImage: false,
        radius: 12,
        description: 'A nebulosa de Órion ou nebulosa de Orião é uma nebulosa difusa que se encontra entre 1500 e 1800 anos-luz do Sistema Solar, e situada a sul do Cinto de Órion. Foi descoberta por Nicolas-Claude Fabri de Peiresc em 1610.',
        slug: 'nebulosa_orion'
    },
    {
        title: 'Omega Centauri',
        image: '/omega_centauri.png',
        conceptualImage: false,
        radius: 86,
        description: 'Omega Centauri ou NGC 5139 é um aglomerado globular situado na constelação de Centaurus. Foi descoberto por Edmond Halley em 1677. Este aglomerado orbita nossa galáxia, a Via Láctea, sendo o maior e mais brilhante dos aglomerados globulares que a orbitam. É um dos poucos que pode ser visto a olho nu.',
        slug: 'omega_centauri'
    },
    {
        title: 'Pequena Nuvem de Magalhães',
        image: '/magalhaes.png',
        conceptualImage: false,
        radius: 3500,
        description: 'A Pequena Nuvem de Magalhães (NGC 292), é uma galáxia anã próxima a Via Láctea. A uma distância de aproximadamente 200.000 anos luz, a NGC 292 está entre os vizinhos intergalácticos mais próximos da Via Láctea e é um dos objetos mais distantes que podem ser visíveis a olho nu.',
        slug: 'nuvem_de_magalhaes'
    },
    {
        title: 'Via Láctea',
        image: '/via_lactea.png',
        conceptualImage: false,
        radius: 52850,
        description: 'A Via Láctea é uma galáxia espiral, da qual o Sistema Solar faz parte. Vista da Terra, aparece como uma faixa brilhante e difusa que circunda toda a esfera celeste. Sua visibilidade é severamente comprometida pela poluição luminosa. Com poucas exceções, todos os objetos visíveis a olho nu pertencem a esta galáxia.',
        slug: 'via_lactea'
    },
    {
        title: 'Andrômeda',
        image: '/andromeda.png',
        conceptualImage: false,
        radius: 110000,
        description: 'A galáxia de Andrômeda é uma galáxia espiral localizada a cerca de 2,54 milhões de anos-luz de distância da Terra, na direção da constelação de Andrômeda. É a galáxia espiral mais próxima da Via Láctea e seu nome é derivado da constelação onde está situada, que, por sua vez, tem o nome derivado da princesa mitológica Andrômeda.',
        slug: 'andromeda'
    },
    {
        title: 'Hércules A',
        image: '/hercules_a.png',
        conceptualImage: false,
        radius: 1000000,
        description: 'Os jatos de luz são produzidos pelo buraco negro supermassivo em seu centro, onde se encontra a galáxia Hércules A. Se vista sob a luz visível, a galáxia parece completamente normal. Mas quando visualizada em ondas de rádio, vemos os maravilhosos jatos de plasma que atravessam mais de um milhão de anos-luz.',
        slug: 'hercules_a'
    },
    {
        title: 'Grupo Local',
        image: '/local_group.png',
        conceptualImage: true,
        radius: 5000000,
        description: 'O Grupo Local é o grupo composto por mais de 54 galáxias que inclui nossa Galáxia, a Via Láctea, sendo a maioria delas galáxias anãs, com o centro gravitacional localizado entre a Via Láctea e a Galáxia de Andrômeda. As galáxias do Grupo Local cobrem uns 10 milhões de anos-luz de diâmetro e tem uma aparência binária.',
        slug: 'grupo_local'
    },
    {
        title: 'Super Aglomerado Local',
        image: '/virgo.png',
        conceptualImage: true,
        radius: 110000000,
        description: 'O Superaglomerado de Virgem, chamado também de Super Aglomerado local, é um superaglomerado de galáxias. Nele está contido o Grupo Local de Galáxias com nossa galáxia, a Via Láctea. Possui a forma de um disco plano, com um diâmetro de 200 milhões de anos-luz.',
        slug: 'aglomerado_local'
    },
    {
        title: 'Laniakea',
        image: '/laniakea.png',
        conceptualImage: true,
        radius: 250000000,
        description: 'Laniakea é um superaglomerado de galáxias que contém a Via Láctea e outras galáxias vizinhas, como Andrômeda. O superaglomerado de Laniakea abrange 100 mil galáxias ao longo de 520 milhões de anos-luz. No centro do superaglomerado há um ponto gravitacional central denominado Grande Atrator – que atrai grande parte das galáxias do superaglomerado.',
        slug: 'laniakea'
    },
    {
        title: 'Grande Muralha Sloan',
        image: '/sloan.png',
        conceptualImage: true,
        radius: 775000000,
        description: 'A Grande Muralha Sloan é a terceira maior estrutura conhecida no universo. Trata-se de um gigantesco conjunto de galáxias descoberto em 2003 por J. Richard Gott III e Mario Jurić e colaboradores da Universidade Princeton. A estrutura mede 1,37 bilhão de anos-luz de extensão e está localizada a aproximadamente um bilhão de anos-luz da Terra.',
        slug: 'muralha_sloan'
    },
    {
        title: 'Universo Observável',
        image: '/universe.png',
        conceptualImage: true,
        radius: 46500000000,
        description: 'O universo observável é uma região em forma esférica do Universo que compreende toda a matéria que pode ser observada da Terra ou de seus telescópios espaciais e sondas exploratórias na atualidade, porque a radiação eletromagnética desses objetos teve tempo de chegar ao Sistema Solar e à Terra desde o início da expansão cosmológica. A estimativa é que hajam 2 trilhões de galáxias no universo observável.',
        slug: 'universo_observavel'
    }
]

export function getAllPosts(){
    return posts
}

export function getSlugs(){
    let slugs = []
    posts.map(p => {slugs.push(`/${p.slug}`)})
    return slugs
}

export function getPost(slug){
    let post = null
    let allPosts = getAllPosts()
    allPosts.map((p, index) => {
        if(p.slug === slug){
            let previousPost = {title:'Lua', radius:0.000000000183, image: '/moon.png', slug:''}
            let nextPost = {title: '', radius: 46500000000000, image:'/universe.png', slug: 'final'}
            if(index){previousPost = allPosts[index-1]}
            if(index!==allPosts.length-1){nextPost = allPosts[index+1]}
            post = {p, previous: previousPost, next: nextPost}
            return
        }
    })
    return post
}