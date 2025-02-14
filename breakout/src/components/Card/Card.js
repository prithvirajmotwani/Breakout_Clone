
import "./Card.css";
import { NavLink } from "react-router-dom";
function Card(props) {
    return (
         <NavLink className="product-card" to = {`/products/${props.id}`}>

            <div className="product-new">New</div>
            <img src={props.link} alt="Product-Image" className="product-image" /> 
            <div className="product-sizes">
                <button>30</button>
                <button>32</button>
                <button>34</button>
                <button>36</button>
            </div>
            <div className="product-info">
                <h3>{props.info}</h3>
                <p>{props.price}</p>
            </div>
        </NavLink>

    );
}

function CreateCard(props) {
    let products = props.products;
    return (
        <div className="product-grid">
            {products.map((product) => (
                <Card key={product.id} id = {product.id} info={product.info} price={product.price} link={product.link} /> 
            ))}
        </div>
    );
}

export default CreateCard;
