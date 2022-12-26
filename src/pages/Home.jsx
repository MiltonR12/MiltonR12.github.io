import React from 'react'
import Navegacion from '../components/Navegacion'
import Portada from '../components/Portada'
import Proyectos from '../components/Proyectos'
import SobreMi from '../components/sobreMi'
import Contacto from '../components/Contacto';

function Home() {
  return (
    <>
      <Navegacion />
      <Portada />
      <Proyectos />
      <SobreMi />
      <Contacto />
    </>
  )
}

export default Home