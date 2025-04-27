import React,{ useEffect, useState , Suspense } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../components/Preloader";

import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { productsData } from "../data";
import Menu from "../components/Menu";



const MealsList = React.lazy(() => import('../components/MealsList'));

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
         <button className="btn blue-grey darken-3" onClick={goBack} style={{ marginBottom: "20px" }}>Назад</button>
        <Suspense fallback={Preloader}>
        <MealsList tombs={tombs}/>
        </Suspense>
        </div>
        </div>
      );
}

export default Category;