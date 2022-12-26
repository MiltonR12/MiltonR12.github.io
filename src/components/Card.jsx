import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import estilos from '../sass/card.module.scss';

function Card({ imagen, name, cantidad }) {
  return (
    <div className={estilos.card} >
      <h1 className={estilos.title} > {name} </h1>
      <img src={imagen} alt="" width={100} className={estilos.imagen} />
      <div className={estilos.stars} >
        {
          cantidad.map((item, index) => (
            <AiFillStar key={index} className={item ? estilos.bien : estilos.mal} />
          ))
        }
      </div>
    </div>
  )
}

export default Card