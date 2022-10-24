import LinkButton from "../components/LinkButton";

function Credits() {
    return (
        <div className="landing page bg">
            <div className="credits">
            <div>
                CRIADO POR<br/>GABRIEL SCHALDACH MORGADO
            </div>
            <div>
                IMAGENS<br/>NASA IMAGE AND VIDEO LIBRARY
            </div>
            <div>
                BACKGROUND<br/>STACK FINDOVER
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