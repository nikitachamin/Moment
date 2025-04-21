import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return ( 
     
    <nav className="menu-nav">
    {/* Кнопка-бургер */}
    <button className="menu-burger red" onClick={handleToggle} aria-label="Открыть меню">
      {/* SVG «бургер», можно вставить любой свой иконкой */}
      <svg height="32" width="32" viewBox="0 0 32 32">
        <rect y="6" width="32" height="4" rx="2" fill="#000" />
        <rect y="14" width="32" height="4" rx="2" fill="#000" />
        <rect y="22" width="32" height="4" rx="2" fill="#000" />
      </svg>
    </button>
    <section
      className={`menu-left${isOpen ? " open" : ""}`}
    >
      <ul className="menu-left-links">
      <li className="menu-li">
          <Link to="/" className="menu-link">
            НА ГЛАВНУЮ
          </Link>
        </li>
        {/* <li className="menu-li">
          <Link to={`/category/straight`} className="menu-link">
            ПРЯМЫЕ{" "}
          </Link>
        </li>
        <li className="menu-li">
          <Link to={`/category/curly`} className="menu-link">
            ФИГУРНЫЕ{" "}
          </Link>
        </li> */}
        <li className="menu-li">
          <Link to="/installation" className="menu-link">
            УСТАНОВКА
          </Link>
        </li>
        <li className="menu-li">
          <Link to="/delivery" className="menu-link">
            ДОСТАВКА
          </Link>
        </li>
        <li className="menu-li">
          <Link to="/guarantee" className="menu-link">
           ГАРАНТИЯ
          </Link>
        </li>
        <li className="menu-li">
          <Link to="/payment" className="menu-link">
           ОПЛАТА
          </Link>
        </li>
      
        <li className="menu-li">
          <Link to="/contact" className="menu-link">
            КОНТАКТЫ
          </Link>
        </li>
      </ul>
    </section>
    </nav>
  );
}

export default Menu;
