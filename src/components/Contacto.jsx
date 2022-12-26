import estilos from '../sass/contacto.module.scss';
import Formulario from './Formulario'

function Contacto() {
  return (
    <footer className={estilos.cuerpoContacto} id='contacto' >
      <h1>FORMULARIO DE CONTACTO</h1>
      <Formulario />
    </footer>
  )
}

export default Contacto