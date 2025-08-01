import "./Headar.css";

function Headar({opencart}) {
 
  return (
    
      <div className="head">
        <div>My E-Comarce Store</div>
        <div>
            <button className="cart" onClick={opencart}>cart</button>
            <button className="login" >login</button>
        </div>
        
        </div>
  );
}
export default Headar;
