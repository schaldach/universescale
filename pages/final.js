import background from '../public/background2.jpg'
import LinkButton from '../components/LinkButton';

function FinalPage() {
    return (
        <div className="ending page bg" style={{backgroundImage: `url(${background.src})`}}>
            <div className='title'>
                AFINAL, SOMOS INSIGNIFICANTES?
                <div className='subtitle'>SE APENAS O NOSSO PLANETA JÁ SE MOSTRA IMENSO PARA QUALQUER PESSOA CONHECÊ-LO TOTALMENTE, EM UMA VISÃO MAIOR, NÃO SOMOS NADA MAIS QUE PEQUENOS GRÃOS DE AREIA NA IMENSIDÃO DO UNIVERSO. ISTO NOS TORNA INSIGNIFICANTES EM UM SENTIDO CÓSMICO, MAS TAMBÉM PODE TER UM OUTRO SIGNIFICADO: SE TEMOS UMA VIDA TÃO BREVE, PORQUE NÃO APROVEITÁ-LA AO MÁXIMO? TALVEZ O NOSSO PROPÓSITO NÃO ESTEJA EM MUDAR O CURSO DO UNIVERSO, OU EM CONQUISTAR PODER E SER ETERNIZADO NA HISTÓRIA, MAS SIM APROVEITAR AS PEQUENAS COISAS DO DIA-A-DIA E PROCURAR SER A MELHOR PESSOA QUE PODEMOS SER. OUÇA A SUA MÚSICA FAVORITA, JOGUE O SEU JOGO FAVORITO, CHAME OS SEUS AMIGOS, CONHEÇA NOVAS PESSOAS, CHAME AQUELA PESSOA PARA UM ENCONTRO. AFINAL, SOMOS A ÚNICA FAÍSCA DE VIDA &#40;CONHECIDA&#41; EM TODO O UNIVERSO, E VOCÊ CERTAMENTE NÃO IRIA QUERER DESPERDIÇÁ-LA.</div>
            </div>
            <LinkButton href='/' name='VOLTAR' right={false}/>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
        </div>
    );
}

export default FinalPage;