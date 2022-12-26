import React from 'react'
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import node from '../img/node.png';
import estilos from '../sass/conocimientos.module.scss';
import Card from './Card';

function Conocimientos() {
  return (
    <div className={estilos.cuerpoConocimientos} >
      <div className={estilos.contTitle} >
        <h1 className={estilos.title} >CONOCIMIENTOS EN:</h1>
      </div>
      <div className={estilos.contCards} >
        <Card imagen={html} name={'HTML'} cantidad={[true, true, true, true, false]} />
        <Card imagen={css} name={'CSS'} cantidad={[true, true, true, true, false]} />
        <Card imagen={js} name={'JAVASCRIPT'} cantidad={[true, true, true, false, false]} />
        <Card imagen={react} name={'REACT'} cantidad={[true, true, true, false, false]} />
        <Card imagen={node} name={'NODE JS'} cantidad={[true, true, false, false, false]} />
      </div>
    </div>
  )
}

export default Conocimientos