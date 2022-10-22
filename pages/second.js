import Image from 'next/image'
import earth from '../public/earth.jpg'
import jupiter from '../public/jupiter.jpg'
import LinkButton from '../components/LinkButton';

function Test2() {
    return (
        <div className='page'>
        <div className="astro">
            <div className='imgbackground big'>
                <Image src={jupiter} layout='fixed' width='500px' height='500px'/>
            </div>
            <div className='imgbackground small'>
                <div>
                    <Image src={earth} layout='fixed' width='45px' height='45px'/>
                    <div>TERRA PARA ESCALA</div>
                </div>
            </div>
            <div className='astrotitle'>JUPITER</div>
            <div className='astrodescription'>JÚPITER É O MAIOR PLANETA DO SISTEMA SOLAR, TANTO EM DIÂMETRO QUANTO EM MASSA, E É O QUINTO MAIS PRÓXIMO DO SOL. POSSUI MENOS DE UM MILÉSIMO DA MASSA SOLAR, CONTUDO TEM 2,5 VEZES A MASSA DE TODOS OS OUTROS PLANETAS EM CONJUNTO.</div>
            <LinkButton href='/first' name='VOLTAR' right={false} extraStyles='left astrobutton'/>
            <LinkButton href='/' name='AMPLIAR' right={true} extraStyles='right astrobutton'/>
        </div>
        </div>
    );
}

export default Test2;