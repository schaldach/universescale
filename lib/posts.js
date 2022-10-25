const posts = [
    {
        title: 'Terra',
        image: '/earth.png',
        conceptualImage: false,
        radius: 6.371,
        description: 'A Terra é o terceiro planeta mais próximo do Sol, e o quinto maior dos oito planetas do sistema solar. Também é chamada como mundo ou planeta azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu um bilhão de anos depois.',
        slug: 'terra'
    },
    {
        title: 'Júpiter',
        image: '/jupiter.png',
        conceptualImage: false,
        radius: 69.911,
        description: 'Júpiter é o maior planeta do sistema solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto.',
        slug: 'jupiter'
    },
    {
        title: 'Sol',
        image: '/sun.png',
        conceptualImage: false,
        radius: 696.340,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'sol'
    },
    {
        title: 'Sirius A',
        image: '/sirius.png',
        conceptualImage: false,
        radius: 1193.805,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'sirius_a'
    },
    {
        title: 'Sagittarius A*',
        image: '/sagittarius_a.png',
        conceptualImage: false,
        radius: 22000.000,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'sagittarius_a'
    },
    {
        title: 'Betelgeuse',
        image: '/betelgeuse.png',
        conceptualImage: false,
        radius: 617653.580,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'betelgeuse'
    },
    {
        title: 'UY Scuti',
        image: '/uy_scuti.png',
        conceptualImage: false,
        radius: 1189348.720,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'uy_scuti'
    },
    {
        title: 'Messier-87',
        image: '/m87.png',
        conceptualImage: false,
        radius: 19000000.000,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'messier_87'
    },
    {
        title: 'TON 618',
        image: '/ton618.png',
        conceptualImage: true,
        radius: 195000000.000,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'ton_618'
    },
    {
        title: 'Nebulosa Olho de Gato',
        image: '/cateye.png',
        conceptualImage: false,
        radius: 1892146094.516,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'nebulosa_olho_de_gato'
    },
    {
        title: 'Nebulosa do Anel',
        image: '/ring.png',
        conceptualImage: false,
        radius: 12298949614.354,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'nebulosa_anel'
    },
    {
        title: 'Pilares da Criação',
        image: '/pillars_of_creation.png',
        conceptualImage: false,
        radius: 70955478544.350,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'pilares_da_criacao'
    },
    {
        title: 'Nebulosa de Órion',
        image: '/orion.png',
        conceptualImage: false,
        radius: 113528765670.961,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'nebulosa_orion'
    },
    {
        title: 'Omega Centauri',
        image: '/omega_centauri.png',
        conceptualImage: false,
        radius: 813622820641.884,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'omega_centauri'
    },
    {
        title: 'Pequena Nuvem de Magalhães',
        image: '/magalhaes.png',
        conceptualImage: false,
        radius: 33112556654030.148,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'nuvem_de_magalhaes'
    },
    {
        title: 'Via Láctea',
        image: '/via_lactea.png',
        conceptualImage: false,
        radius: 499999605475855.300,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'via_lactea'
    },
    {
        title: 'Andrômeda',
        image: '/andromeda.png',
        conceptualImage: false,
        radius: 1040680351983804.800,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'andromeda'
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
            let previousPost = {title:'Lua', radius:1737, image: '/moon.png', slug:''}
            let nextPost = {title: 'Nebulosa Olho de Gato', radius: 1892146094516, image:'/cateye.png', slug: 'olho_de_gato'}
            if(index){previousPost = allPosts[index-1]}
            if(index!==allPosts.length-1){nextPost = allPosts[index+1]}
            post = {p, previous: previousPost, next: nextPost}
            return
        }
    })
    return post
}