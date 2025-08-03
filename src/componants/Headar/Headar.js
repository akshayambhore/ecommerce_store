import "./Headar.css";

function Headar({opencart , onadd}) {
 
  return (
    
      <div className="head">
        <div>My E-Comarce Store</div>
        <div>
            <button className ="Add_Product" onClick={onadd}>Add Product</button>
            <button className="cart" onClick={opencart}>cart</button>
            <button className="login" >login</button>
        </div>
        
        </div>
  );
}
export default Headar;
