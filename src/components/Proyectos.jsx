import estilos from '../sass/proyectos.module.scss';
import CardProyecto from './CardProyecto';
import calculadora from '../img/calculadora.jpeg';
import tresenlinea from '../img/tresenlinea.jpeg';
import conversor from '../img/conversor.jpeg';

function Proyectos() {
  return (
    <div className={estilos.cuerpoProyectos} id='proyectos' >
      <div className={estilos.contTitle} >
        <h1>Proyectos</h1>
      </div>
      <div className={estilos.contCard} >
        <div className={estilos.card} >
          <CardProyecto
            animacion={'zoom-in'} imagen={calculadora} name={'CALCULADORA'} direccion={true} >
            React <br />
            Css <br />
            Html <br />
          </CardProyecto>
        </div>
        <div className={estilos.card} >
          <CardProyecto animacion={'zoom-in-up'} imagen={tresenlinea} name={'TRES EN RAYA'} >
            React <br />
            Redux <br />
            Css <br />
            Html <br />
          </CardProyecto>
        </div>
        <div className={estilos.card} >
          <CardProyecto animacion={'zoom-in'} imagen={conversor} name={'CONVERSOR'} direccion={true} >
            React <br />
            Redux <br />
            Css <br />
            Html <br />
          </CardProyecto>
        </div>
      </div>
    </div>
  )
}

export default Proyectos