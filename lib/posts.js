const posts = [
    {
        title: 'TERRA',
        slug: 'terra'
    }
]

export function getAllPosts(){
    return posts
}

export function getSlugs(){
    let slugs = []
    posts.map(p => {slugs.push(`/blog/${p.slug}`)})
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