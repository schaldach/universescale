const posts = [
    {
        title: 'Terra',
        smallertitle: 'Lua',
        bigImage: '/../public/earth.png',
        smallImage: '/../public/moon.png',
        radius: 6371,
        smallradius: 1737,
        bigradius: 69911,
        description: 'A Terra é o terceiro planeta mais próximo do Sol, e o quinto maior dos oito planetas do sistema solar. Também é chamada como mundo ou planeta azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu um bilhão de anos depois.',
        previousSlug: '/',
        nextSlug: 'jupiter',
        slug: 'terra'
    },
    {
        title: 'Júpiter',
        smallertitle: 'Terra',
        bigImage: '/../public/jupiter.png',
        smallImage: '/../public/earth.png',
        radius: 69911,
        smallradius: 6371,
        bigradius: 696340,
        description: 'Júpiter é o maior planeta do sistema solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto.',
        previousSlug:'terra',
        nextSlug: 'sol',
        slug: 'jupiter'
    },
    {
        title: 'Sol',
        smallertitle: 'Júpiter',
        bigImage: '/../public/sun.png',
        smallImage: '/../public/jupiter.png',
        radius: 696340,
        smallradius: 69911,
        bigradius: 696340,
        description: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. Responsável por 99,86% da massa do Sistema Solar, o Sol possui uma massa 332 900 vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o do nosso planeta.',
        previousSlug:'jupiter',
        nextSlug: 'sol',
        slug: 'sol'
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
    getAllPosts().map(p => {
        if(p.slug === slug){
            post = p
            return
        }
    })
    return post
}