import Image from 'next/image'
import LinkButton from '../components/LinkButton';
import {getSlugs, getPost} from '../lib/posts'
import {useState, useEffect} from 'react'
import background from '../public/background2.jpg'

function Astro({postData}) {
    const [shrinkAnimation, startAnimation] = useState(false)
    const smallSize = postData.previous.radius/postData.p.radius
    const shrinkSize = postData.p.radius/postData.next.radius
    useEffect(() => startAnimation(false), [postData])

    return (
        <div className='page bg' style={{backgroundImage: `url(${background.src})`}}>
        <div className={shrinkAnimation?'astro darkpage':'astro'}>
            <div className='imgbackground big' style={{right:shrinkAnimation?'340px':'0px', transform:shrinkAnimation?`scale(${shrinkSize})`:'', transition: shrinkAnimation?'all 0.45s linear':'', bottom:shrinkAnimation?'10px':'0px'}}>
                <Image src={postData.p.image} layout='fixed' width='500px' height='500px'/>
            </div>
            <div className='imgbackground small'>
                <div>
                    <Image src={postData.previous.image} layout='fixed' width={`${Math.ceil(500*smallSize)}px`} height={`${Math.ceil(500*smallSize)}px`}/>
                    <div>{postData.previous.title.toUpperCase()} PARA ESCALA</div>
                </div>
            </div>
            <div className='astrotitle'>{postData.p.title.toUpperCase()}</div>
            <div className='astrodescription'>{postData.p.description.toUpperCase()}</div>
            <LinkButton href={`/${postData.previous.slug}`} name='VOLTAR' right={false} extraStyles='left astrobutton'/>
            <LinkButton startAnimation={startAnimation} href={`/${postData.next.slug}`} name='AMPLIAR' right={true} extraStyles='right astrobutton'/>
        </div>
        <div className="star-field">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
        </div>
        </div>
    );
}

export function getStaticPaths(){
    const paths = getSlugs()
    return {
        paths,
        fallback: false
    }
}

export function getStaticProps({params}){
    const postData = getPost(params.slug)
    return {
        props: {
            postData
        }
    }
}

export default Astro;