const posts = [
    {
        title: 'Terra',
        image: '/earth.png',
        radius: 6371,
        description: 'A Terra é o terceiro planeta mais próximo do Sol, e o quinto maior dos oito planetas do sistema solar. Também é chamada como mundo ou planeta azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu um bilhão de anos depois.',
        slug: 'terra'
    },
    {
        title: 'Júpiter',
        image: '/jupiter.png',
        radius: 69911,
        description: 'Júpiter é o maior planeta do sistema solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto.',
        slug: 'jupiter'
    },
    {
        title: 'Sol',
        image: '/sun.png',
        radius: 696340,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'sol'
    },
    {
        title: 'Sirius A',
        image: '/sirius.png',
        radius: 1193805,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'sirius_a'
    },
    {
        title: 'Sagittarius A*',
        image: '/sagittarius_a.png',
        radius: 44000000,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'sagittarius_a'
    },
    {
        title: 'Betelgeuse',
        image: '/betelgeuse.png',
        radius: 617653580,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'betelgeuse'
    },
    {
        title: 'UY Scuti',
        image: '/uy_scuti.png',
        radius: 1189348720,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        slug: 'uy_scuti'
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
            let nextPost = {title: 'UY Scuti', radius: 1189348720, image:'/uy_scuti.png', slug: 'uy_scuti'}
            if(index){previousPost = allPosts[index-1]}
            if(index!==allPosts.length-1){nextPost = allPosts[index+1]}
            post = {p, previous: previousPost, next: nextPost}
            return
        }
    })
    return post
}