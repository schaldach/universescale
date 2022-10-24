import React from 'react'
import background from '../public/background.jpg'
import LinkButton from '../components/LinkButton'

export default function Home() {
  return (
    <div className='landing page bg' style={{backgroundImage: `url(${background.src})`}}>
      <div className='title'>
        A ESCALA DO UNIVERSO
        <div className='subtitle'>POR GABRIEL MORGADO</div>
      </div>
      <div className='landingbuttons'>
        <LinkButton href='/terra' name='COMEÇAR' right={true}/>
        <LinkButton href='/credits' name='CRÉDITOS' right={true}/>
      </div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </div>
  )
}
