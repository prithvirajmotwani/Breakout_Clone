import "./ItemDetail.css";
import MainBody from '../../components/MainBody/MainBody';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { useParams } from "react-router-dom";
import menNewProducts from "../Men/newProducts";
import menClothing from "../Men/clothing";
import womenNewProducts from "../Women/newProducts";
import womenClothing from "../Women/clothing";
import boysNewProducts from "../Boys/newProducts";
import boysClothing from "../Boys/clothing";
import girlsNewProducts from "../Girls/newProducts";
import girlsClothing from "../Girls/clothing";


const combinedItems =[...menNewProducts, ...menClothing, ...womenNewProducts, ...womenClothing, ...boysNewProducts, ...boysClothing, ...girlsNewProducts, ...girlsClothing]; 
function ItemDetail() {
    const { id } = useParams(); 
    
    const product = combinedItems.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>; 
    }

    const { info, price, link } = product;

    return(
        <div className="itemDetail">
            <MainBody gender="men"/>
            <ProductDetail productInfo={info} productPrice={price} productLink={link} />
        </div>
    );
}

export default ItemDetail;
