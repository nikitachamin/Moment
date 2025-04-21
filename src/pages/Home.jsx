import { useEffect, useRef, useState } from "react";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Main from "../components/Main";
import Menu from "../components/Menu";
import { productsData } from "../data";


function Home() {
    const [catalog, setCatalog] = useState([]);
    const categoryListRef = useRef(null); // Создаем реф для CategoryList

    useEffect(() => {
        setCatalog(productsData[0].categories);
    }, []);

    useEffect(() => {
        // Прокручиваем к CategoryList, когда данные загружаются
        if (catalog.length && categoryListRef.current) {
            categoryListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [catalog]); // Запускаем эффект, когда catalog обновляется
    
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