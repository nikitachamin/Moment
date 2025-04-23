import { useEffect, useRef, useState } from "react";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Main from "../components/Main";
import Menu from "../components/Menu";
import { productsData } from "../data";
import { useLocation } from "react-router-dom/cjs/react-router-dom";


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
       <Main/>

       {!catalog.length? <Preloader /> : (
        <div ref={categoryListRef}>
        <CategoryList catalog={catalog} />
        </div>
       )}
       </div>
       
       </div>
     );
}

export default Home;