import Router from 'next/router'

function LinkButton({href, name, right, extraStyles, startAnimation}) {
    async function onShrink(){
        startAnimation(true)
        await new Promise(r => setTimeout(r, 500))
        Router.push(href)
    }

    return (
        <div onClick={() => startAnimation?onShrink():Router.push(href)} className={'linkbutton '+extraStyles} style={{flexDirection:right?'row':'row-reverse'}}>
            {name}
            {right?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
            }
        </div>
    );
}

export default LinkButton;