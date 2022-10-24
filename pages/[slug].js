import Image from 'next/image'
import LinkButton from '../components/LinkButton';
import {getSlugs, getPost} from '../lib/posts'
import {useState, useEffect} from 'react'
import background from '../public/background2.jpg'

function Astro({postData}) {
    const [shrinkAnimation, startAnimation] = useState(false)
    const smallSize = postData.smallradius/postData.radius
    const shrinkSize = postData.radius/postData.bigradius
    useEffect(() => startAnimation(false), [postData])

    return (
        <div className='page bg' style={{backgroundImage: `url(${background.src})`}}>
        <div className={shrinkAnimation?'astro darkpage':'astro'}>
            <div className='imgbackground big' style={{right:shrinkAnimation?'340px':'0px', transform:shrinkAnimation?`scale(${shrinkSize})`:'', transition: shrinkAnimation?'all 1s linear':'', bottom:shrinkAnimation?'10px':'0px'}}>
                <Image src={postData.bigImage} layout='fixed' width='500px' height='500px'/>
            </div>
            <div className='imgbackground small'>
                <div>
                    <Image src={postData.smallImage} layout='fixed' width={`${Math.ceil(500*smallSize)}px`} height={`${Math.ceil(500*smallSize)}px`}/>
                    <div>{postData.smallertitle.toUpperCase()} PARA ESCALA</div>
                </div>
            </div>
            <div className='astrotitle'>{postData.title.toUpperCase()}</div>
            <div className='astrodescription'>{postData.description.toUpperCase()}</div>
            <LinkButton href={`/${postData.previousSlug}`} name='VOLTAR' right={false} extraStyles='left astrobutton'/>
            <LinkButton startAnimation={startAnimation} href={`/${postData.nextSlug}`} name='AMPLIAR' right={true} extraStyles='right astrobutton'/>
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