import Image from 'next/image'
import LinkButton from '../components/LinkButton';
import {getSlugs, getPost} from '../lib/posts'

function Astro({postData}) {
    return (
        <div className='page'>
        <div className="astro">
            <div className='imgbackground big'>
                <Image src={postData.bigImage} layout='fixed' width='500px' height='500px'/>
            </div>
            <div className='imgbackground small'>
                <div>
                    <Image src={postData.smallImage} layout='fixed' width={`${Math.ceil(500*postData.smallradius/postData.bigradius)}px`} height={`${Math.ceil(500*postData.smallradius/postData.bigradius)}px`}/>
                    <div>{postData.smallertitle.toUpperCase()} PARA ESCALA</div>
                </div>
            </div>
            <div className='astrotitle'>{postData.title.toUpperCase()}</div>
            <div className='astrodescription'>{postData.description.toUpperCase()}</div>
            <LinkButton href={`/${postData.previousSlug}`} name='VOLTAR' right={false} extraStyles='left astrobutton'/>
            <LinkButton href={`/${postData.nextSlug}`} name='AMPLIAR' right={true} extraStyles='right astrobutton'/>
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