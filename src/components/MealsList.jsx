import { useState } from "react";

import React, { Suspense } from "react";
import Preloader from "./Preloader";

const MealItem = React.lazy(() => import('./MealItem'));

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
                <Suspense fallback={<Preloader />}>
                <MealItem key={tomb.article} {...tomb} />
                </Suspense>
            ))}
         
        </div>
           {visibleCount < tombs.length && (
            <button className="btn blue-grey darken-4" onClick={handleLoadMore} style={{display: "block", margin: "20px auto"}}>
                Загрузить еще
            </button>
        )}
        </>
    );
}

export default MealsList;