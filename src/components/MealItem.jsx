import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function MealItem(props) {
  const { name } = useParams();
  const { size, price, img, article } = props;
  const createWhatsAppLink = () => {
   const message = `Добрый день! Меня интересует товар с артиклем - ${article}`;
   return `https://wa.me/${+79109725858}?text=${encodeURIComponent(message)}`;
};
  return (
    <div className="card  blue-grey lighten-3">
      <div
        className="card-image"
        style={{ maxHeight: "262px", maxWidth: "262px" }}
      >
        <img src={`${process.env.PUBLIC_URL}/img/${name}/${img}.webp`} alt={img} className="zoom-image"/>
      </div>
      <div className="card-content">
        {price? <span className="card-title"><strong >Стоимость:</strong> от {price} р.</span>  : (<span className="card-title">Стоимость индивидуальная</span> )}
        {size?  <span className="card-title"><strong>Размеры:</strong> {size} см</span> : (<span className="card-title">Напишите для расчета</span> )}
        {article && <span className="card-title"><strong>Артикул: </strong>{article}</span>}
      </div>
      <div className="card-action">
                <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whats-app"
                >
                    Написать в WhatsApp
                </a>
            </div>
    </div>
  );
}

export default MealItem;
