import LinkButton from "../components/LinkButton";
import background from '../public/background.jpg'

function Credits() {
    return (
        <div className="landing page bg" style={{backgroundImage: `url(${background.src})`}}>
            <div className="credits">
            <div>
                CRIADO POR<br/>GABRIEL SCHALDACH MORGADO
            </div>
            <div>
                IMAGENS<br/>NASA IMAGE AND VIDEO LIBRARY<br/>HUBBLE TELESCOPE<br/>EVENT HORIZON TELESCOPE
            </div>
            <div>
                BACKGROUND<br/>STACK FINDOVER<br/>LUBO MINAR<br/>NASA
            </div>
            <div>
                DESCRIÇÕES ADAPTADAS<br/>WIKIPEDIA
            </div>
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

export default Credits;