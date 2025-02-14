import "./Girls.css";
import MainBody from '../../components/MainBody/MainBody';
import CreateCard from '../../components/Card/Card';
import newProducts from "./newProducts";
import clothing from "./clothing";

function checkType(productType) {
    if (productType === "new-drip") {
      return newProducts;
    } else if (productType === "clothing") {
      return clothing;
    }
  }
  
function Girls(props) {
  return (
    <div className = "girls"> 
      <MainBody gender = "girls" />
      <CreateCard products = {checkType(props.productType)}/>
    </div>
  )
}

export default Girls;