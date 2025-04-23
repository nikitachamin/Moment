import { Link } from "react-router-dom";
import "../styles/main.scss"

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Main() {
  const history = useHistory();

  const goToCatalog = () => {
    // Передадим state
    history.push('/', { scrollToCategories: true });
  };
  return (
    <div className="Main-wrapper">
       <div className="main-top">
       <div className="main">
        <h1 className="main-title">
          ПАМЯТНИКИ И МЕМОРИАЛЬНЫЕ КОМПЛЕКСЫ ВСЕХ ВИДОВ
        </h1>
        <p className="main-text">
            доставка и установка по городу и области
        </p>
        <div className="list-wrapper ">
        <ul className="main-list-left">
          <li> <span class="material-symbols-outlined main-icon">sell</span>Низкие цены</li>
          <li><span class="material-symbols-outlined main-icon">currency_ruble</span>Скидки</li>
        </ul>
        <ul className="main-list-right">
        <li> <span class="material-symbols-outlined main-icon">credit_card</span> Рассрочка</li>
        <li><span class="material-symbols-outlined main-icon">local_florist</span>Благоустройство</li>
        </ul>
        </div>
        <button
        className="btn rounded blue-grey darken-4"
        onClick={goToCatalog}
      >
        КАТАЛОГ
      </button>
      
        <a className="btn rounded blue-grey darken-4">
        <Link to={`/about`} style={{textDecoration: "none", color: "white"}}>
        НАШИ РАБОТЫ</Link></a>
      </div>
      <img className="main_logo" src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
       </div>
       <div className="main-bottom">
        <div className="bottom-item">
        <span class="material-symbols-outlined main-bottom-logo">docs</span>
        <p className="main-bottom-text">Работаем честно по договору</p>
        </div>
        <div className="bottom-item">
        <span class="material-symbols-outlined main-bottom-logo">timer</span>
        <p className="main-bottom-text">Фиксированные сроки и цена</p>
        </div>
        <div className="bottom-item">
        <span class="material-symbols-outlined main-bottom-logo">payments</span>
        <p className="main-bottom-text">Оплата по факту, нет скрытых платежей</p>
        </div>
        <div className="bottom-item">
        <span class="material-symbols-outlined main-bottom-logo">transition_dissolve</span>
        <p className="main-bottom-text">Широкий выбор фактур и расцветок камня</p>
        </div>
        <div className="bottom-item">
        <span class="material-symbols-outlined main-bottom-logo md-60">chess</span>
        <p className="main-bottom-text">Опытные профессионалы и мастера своего дела</p>
        </div>
       </div>
    </div>
  );
}

export default Main;
