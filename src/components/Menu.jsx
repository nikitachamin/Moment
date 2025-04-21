import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {


  return ( 
     

    <nav
      className="menu-left"
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
    </nav>
  
  );
}

export default Menu;
