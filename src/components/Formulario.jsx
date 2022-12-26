import estilos from '../sass/formulario.module.scss';

function Formulario() {
  return (
    <form className={estilos.cuerpoForm} >
      <div className={estilos.contenedor} >
        <div className={estilos.seccion} >
          <label >Nombre: </label>
          <input type="text" className={estilos.cuadro} required />
        </div>
        <div className={estilos.seccion} >
          <label >Correo: </label>
          <input type="email" className={estilos.cuadro} required />
        </div>
        <div className={estilos.seccion} >
          <label>Mensaje</label>
          <textarea></textarea>
        </div>
        <div className={estilos.seccion} >
          <button className={estilos.btnEnviar} >Enviar</button>
        </div>
      </div>
    </form>
  )
}

export default Formulario