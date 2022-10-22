import React from 'react'
import Link from 'next/link'
import LinkButton from '../components/LinkButton'

export default function Home() {
  return (
    <div className='landing page'>
      <div className='title'>
        A ESCALA DO UNIVERSO
        <div className='subtitle'>POR GABRIEL MORGADO</div>
      </div>
      <div className='landingbuttons'>
        <LinkButton href='/first' name='COMEÇAR' right={true}/>
        <LinkButton href='/credits' name='CRÉDITOS' right={true}/>
      </div>
    </div>
  )
}
