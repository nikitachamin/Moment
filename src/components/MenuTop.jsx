import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/menu.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MenuTop({ className, toggleMenuOpen }) {
  const history = useHistory();

  const goToCatalog = () => {
    // Передадим state
    history.push("/", { scrollToCategories: true });
  };

  return (
    <div className={className}>
      <ul className="menu-top-links">
        <li className="menu-top-li" onClick={toggleMenuOpen}>
          <Link to="/" className="menu-top-link">
          <span> <img src={`${process.env.PUBLIC_URL}/img/icons/cemetery.png`} alt="cemetery" /></span> НА ГЛАВНУЮ
          </Link>
        </li>
        <li className="menu-top-li" onClick={toggleMenuOpen}>
          <a className="menu-top-link" onClick={goToCatalog}>
          <span> <img src={`${process.env.PUBLIC_URL}/img/icons/shopping.png`} alt="shopping" /></span> КАТАЛОГ
          </a>
        </li>
        <li className="menu-top-li" onClick={toggleMenuOpen}>
          <Link to="/installation" className="menu-top-link">
          <span> <img src={`${process.env.PUBLIC_URL}/img/icons/hammer.png`} alt="hammer" /></span> УСТАНОВКА
          </Link>
        </li>
        <li className="menu-top-li" onClick={toggleMenuOpen}>
          <Link to="/delivery" className="menu-top-link">
          <span> <img src={`${process.env.PUBLIC_URL}/img/icons/delivery.png`} alt="delivery" /></span> ДОСТАВКА
          </Link>
        </li>
        <li className="menu-top-li" onClick={toggleMenuOpen}>
          <Link to="/guarantee" className="menu-top-link">
          <span> <img src={`${process.env.PUBLIC_URL}/img/icons/document.png`} alt="document" /></span> ГАРАНТИЯ
          </Link>
        </li>
        <li className="menu-top-li" onClick={toggleMenuOpen}>
          <Link to="/payment" className="menu-top-link">
          <span> <img src={`${process.env.PUBLIC_URL}/img/icons/payment.png`} alt="payment" /></span> ОПЛАТА
          </Link>
        </li>

        <li className="menu-top-li" onClick={toggleMenuOpen}>
          <Link to="/contact" className="menu-top-link">
          <span> <img src={`${process.env.PUBLIC_URL}/img/icons/contact.png`} alt="contact" /></span>  КОНТАКТЫ
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuTop;
