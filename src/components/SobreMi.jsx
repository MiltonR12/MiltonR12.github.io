import estilos from '../sass/sobreMi.module.scss';
import Conocimientos from './conocimientos';

function SobreMi() {
  return (
    <div className={estilos.cuerpoSobreMi} id='sobremi' >
      <div className={estilos.personal} >
        <h2>Sobre Mi</h2>
        <p className={estilos.textPersonal} >
          Soy actualmente estudiante de la carrera de informatica en la Universidad Mayor de San Andres, 
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est expedita nesciunt harum fugit at enim? Qui architecto dicta nam quam quia delectus perspiciatis iste, debitis saepe. Nisi sit aut odio.
        </p>
      </div>
      <div>
        <Conocimientos />
      </div>
    </div>
  )
}

export default SobreMi