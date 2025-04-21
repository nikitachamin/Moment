import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { name, description, image, type} =
    props;

    
  return (
    <div className="card" style={{ maxWidth:"262px"}}>
      <div className="card-image" >
        <img src={image} /> 
      </div>
      <div className="card-content">
      <span className="card-title">{name}</span>
        {/* <p>{description.slice(0, 60)}...</p> */}
      </div>
     <div className="card-action">
        <Link to={`/category/${type}`} className="btn red">Смотреть категории </Link>
     </div>
    </div>
  );
}

export default CategoryItem;
