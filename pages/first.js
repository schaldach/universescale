import Image from 'next/image'
import earth from '../public/earth.jpg'

function Test() {
    return (
        <div className='page'>
        <div className="astro">
            <div className='imgwrapper'>
                <Image src={earth} layout='fill' objectFit='contain'/>
            </div>
            <div className='astrotitle'>TERRA</div>
            <div className='astrodescription'>A TERRA É O TERCEIRO PLANETA MAIS PRÓXIMO DO SOL, O MAIS DENSO E O QUINTO MAIOR DOS OITO PLANETAS DO SISTEMA SOLAR. É POR VEZES DESIGNADA COMO MUNDO OU PLANETA AZUL. LAR DE MILHÕES DE ESPÉCIES DE SERES VIVOS, INCLUINDO OS HUMANOS, A TERRA É O ÚNICO CORPO CELESTE ONDE É CONHECIDA A EXISTÊNCIA DE VIDA. O PLANETA FORMOU-SE HÁ 4,56 BILHÕES DE ANOS, E A VIDA SURGIU NA SUA SUPERFÍCIE UM BILHÃO DE ANOS DEPOIS.</div>
        </div>
        </div>
    );
}

export default Test;