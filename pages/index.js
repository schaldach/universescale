import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='landing page'>
      <div className='title'>
        A ESCALA DO UNIVERSO
        <div className='subtitle'>POR GABRIEL MORGADO</div>
      </div>
      <div className='landingbuttons'>
        <Link href='/first'>
          <div className='linkbutton'>
            COMEÇAR
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>  
          </div>
        </Link>
        <Link href='/credits'>
          <div className='linkbutton'>
            CRÉDITOS
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>  
          </div>
        </Link>
      </div>
    </div>
  )
}
