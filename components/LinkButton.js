import Link from 'next/link'
import Router from 'next/router'

function LinkButton({href, name, right, extraStyles}) {
    return (
        <Link href={href}>
            <div className={'linkbutton '+extraStyles} style={{flexDirection:right?'row':'row-reverse'}}>
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
        </Link>
    );
}

export default LinkButton;