import estilos from '../sass/navegacion.module.scss';

function Navegacion() {
  return (
    <header className={estilos.cuerpo} >
      <div className={estilos.contNavegacion} >
        <nav className={estilos.contMenu} >
          <ul className={estilos.menu} >
            <li className={estilos.item} ><a href="#">Inicio</a></li>
            <li className={estilos.item} ><a href="#proyectos">Proyectos</a></li>
            <li className={estilos.item} ><a href="#sobremi">Sobre Mi</a></li>
            <li className={estilos.item} ><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navegacion