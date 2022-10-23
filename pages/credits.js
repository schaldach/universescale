import LinkButton from "../components/LinkButton";

function Credits() {
    return (
        <div className="landing page">
            <div>
                CRIADO POR<br/>GABRIEL SCHALDACH MORGADO
            </div>
            <div>
                IMAGENS<br/>NASA IMAGE AND VIDEO LIBRARY
            </div>
            <LinkButton href='/' name='VOLTAR' right={false}/>
        </div>
    );
}

export default Credits;