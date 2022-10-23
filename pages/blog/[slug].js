import Image from 'next/image'
import earth from '../../public/earth.jpg'
import moon from '../../public/moon.jpg'
import LinkButton from '../../components/LinkButton';
import {getSlugs, getPost} from '../../lib/posts'

function Astro({postData}) {
    return (
        <div className='page'>
        <div className="astro">
            <div className='imgbackground big'>
                <Image src={earth} layout='fixed' width='500px' height='500px'/>
            </div>
            <div className='imgbackground small'>
                <div>
                    <Image src={moon} layout='fixed' width='183px' height='183px'/>
                    <div>LUA PARA ESCALA</div>
                </div>
            </div>
            <div className='astrotitle'>{postData.title}</div>
            <div className='astrodescription'>A TERRA É O TERCEIRO PLANETA MAIS PRÓXIMO DO SOL, E O QUINTO MAIOR DOS OITO PLANETAS DO SISTEMA SOLAR. TAMBÉM É CHAMADA COMO MUNDO OU PLANETA AZUL. LAR DE MILHÕES DE ESPÉCIES DE SERES VIVOS, INCLUINDO OS HUMANOS, A TERRA É O ÚNICO CORPO CELESTE ONDE É CONHECIDA A EXISTÊNCIA DE VIDA. O PLANETA FORMOU-SE HÁ 4,56 BILHÕES DE ANOS, E A VIDA SURGIU UM BILHÃO DE ANOS DEPOIS.</div>
            <LinkButton href='/' name='VOLTAR' right={false} extraStyles='left astrobutton'/>
            <LinkButton href='/second' name='AMPLIAR' right={true} extraStyles='right astrobutton'/>
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