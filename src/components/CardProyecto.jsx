import estilos from '../sass/cardProyecto.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CardProyecto({ imagen, name, children, animacion, direccion }) {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className={estilos.caja} data-aos={animacion} >
      <h1 className={direccion ? estilos.nameIzquiera : estilos.nameDerecha} > {name} </h1>
      <div className={estilos.contInfo} >
        <img src={imagen} alt='proyecto' width={300} height={400} className={estilos.imgProyecto} />
        <div className={estilos.contText} >
          <h2>Tecnologias Usadas:</h2>
          <p className={estilos.usados} >
            {children}
          </p>
          <a href='https://miltonr12.github.io/calculadora/' className={estilos.contBtn} >
            <button className={estilos.btn} >
              <span>
                Ver Mas
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardProyecto