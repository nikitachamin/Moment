import CategoryItem from "./CategoryItem";
import Preloader from "./Preloader";



function CategoryList({catalog = []}) {
 

    if (!catalog.length) {
        return <Preloader />;
    }

    return (
        <div className="list">
            {catalog.map((el) => (
                <CategoryItem key={el.id} {...el} />
            ))}
        </div>
    );

}

export default CategoryList;