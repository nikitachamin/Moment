import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../components/Preloader";
import MealsList from "../components/MealsList";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { productsData } from "../data";
import Menu from "../components/Menu";


function Category() {
    const {name} = useParams();
    const [tombs, setTombs] = useState([])
    const {goBack} = useHistory();


    useEffect(() => {
      const filteredCategories = productsData[0].categories.filter(category => category.type === name);
      const products = filteredCategories.flatMap(category => category.products);
      setTombs(products);
  }, [name]);
    
    
    return (
        <div className="list-container" style={{ display: "flex" }}>
          <Menu />
          <div className="category-list" style={{ paddingLeft: "15px" }}>
         <button className="btn red" onClick={goBack} style={{ marginBottom: "20px" }}>Назад</button>
        {!tombs.length ? <Preloader /> : <MealsList tombs={tombs} />}
        </div>
        </div>
      );
}

export default Category;