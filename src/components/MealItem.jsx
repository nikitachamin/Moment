import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function MealItem(props) {
  const { name } = useParams();
  const { size, price, img, article } = props;
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ maxHeight: "262px", maxWidth: "262px" }}
      >
        <img src={`${process.env.PUBLIC_URL}/img/${name}/${img}.webp`} alt={img} />
      </div>
      <div className="card-content">
        {price && <span className="card-title">Стоимость: от {price} р.</span>}
        {size && <span className="card-title">Размеры: {size} см</span>}
        {article && <span className="card-title">Артикул: {article}</span>}
      </div>
      {/* <div className="card-action">
          <Link to={`/meal/${idMeal}`} className="btn">Смотреть блюдо</Link>
       </div> */}
    </div>
  );
}

export default MealItem;
