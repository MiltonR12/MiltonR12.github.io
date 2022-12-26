import estilos from '../sass/portada.module.scss';
import cara from '../img/foto.png';

function Portada() {
  return (
    <div className={estilos.cuerpoPortada} >
      <div className={estilos.contPresentacion} >
        <h1>Yo soy <span>Milton Aguilar</span></h1>
        <h3>Desarrolador Web</h3>
        <button className={estilos.boton} >
          <span className={estilos.text} >Contactar</span>
        </button>
      </div>
      <div className={estilos.photo} >
        <img src={'https://www.seekpng.com/png/full/938-9380100_for-rostros-de-hombre-png.png'} alt="" className={estilos.imgFoto} />
      </div>
    </div>
  )
}

export default Portada