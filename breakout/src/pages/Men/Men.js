import "./Men.css";
import CreateCard from '../../components/Card/Card';
import newProducts from "./newProducts";
import clothing from "./clothing";
import MainBody from '../../components/MainBody/MainBody';

function checkType(productType) {
  if (productType === "new-drip") {
    return newProducts;
  } else if (productType === "clothing") {
    return clothing;
  }
}

function Men(props) {

  return (
    <div className="men">
      <MainBody gender = "men" />
      <CreateCard products = {checkType(props.productType)} /> 
    </div>
  );

}

export default Men;