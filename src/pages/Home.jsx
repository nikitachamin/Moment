import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import Preloader from "../components/Preloader";

import Main from "../components/Main";
import Menu from "../components/Menu";
import { productsData } from "../data";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
const CategoryList = lazy(() => import("../components/CategoryList"));


function Home() {
    const [catalog, setCatalog] = useState([]);
    const location = useLocation();
    const categoryListRef = useRef();

    useEffect(() => {
        setCatalog(productsData[0].categories);
    }, []);

    useEffect(() => {
        if (location.state && location.state.scrollToCategories) {
          setTimeout(() => {
            categoryListRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 0);
        }
      }, [location.state]);
    
    return ( 
       <div className="wrapper">
       <Menu />
       <div style={{padding :'15px'}} >
       <Suspense fallback={<Preloader />}>
            <Main/> 
        </Suspense>
     

       {!catalog.length? <Preloader /> : (
        <div ref={categoryListRef} >
         <Suspense fallback={<Preloader />}>
          <CategoryList catalog={catalog} />
        </Suspense>
        </div>
       )}
       </div>
       
       </div>
     );
}

export default Home;