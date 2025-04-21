import { useState } from "react";
import MealItem from "./MealItem";

function MealsList({ tombs }) {
    const BATCH_SIZE = 10; // сколько показываем за одну загрузку

    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

    // Показать только текущую порцию карточек
    const visibleTombs = tombs.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + BATCH_SIZE);
    };

    return (<>
        <div className="list">
            {visibleTombs.map(tomb => (
                <MealItem key={tomb.article} {...tomb} />
            ))}
         
        </div>
           {visibleCount < tombs.length && (
            <button className="btn red" onClick={handleLoadMore} style={{display: "block", margin: "20px auto"}}>
                Загрузить еще
            </button>
        )}
        </>
    );
}

export default MealsList;