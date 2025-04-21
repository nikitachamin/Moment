import MealItem from "./MealItem";

function MealsList({tombs}) {
   
   return ( <div className="list">
        {tombs.map(tomb => (
            <MealItem key={tomb.article} {...tomb}/>
        ))}
    </div>);
}

export default MealsList;