import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { name, description, image, type} =
    props;

    
  return (
    <div className="card  blue-grey lighten-3" style={{ maxWidth:"262px"}}>
      <div className="card-image" >
      
          <Link to={`/category/${type}`}><img src={image} className="zoom-image"  loading="lazy" alt={`${name} фото`}/></Link> 
      </div>
      {/* <div className="card-content">
      <span className="card-title"></span>
        <p>{description.slice(0, 60)}...</p>
      </div> */}
     <div className="card-action">
        <Link to={`/category/${type}`} className="btn blue-grey darken-4">{name}</Link>
     </div>
    </div>
  );
}

export default CategoryItem;
