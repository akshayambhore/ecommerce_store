import Headar from './componants/Headar/Headar';
import Products from './componants/Products/Products';
import { useState } from 'react';
import Cart from './componants/cart/cart';
function App() {
  const [show_cart , setShow_cart] = useState(false);
  function opencart() 
  {
    setShow_cart(true);
  }
  function closecart()
  {
    setShow_cart(false);
  }
  return (
    <div className="App">
      <Headar opencart={opencart}/>
      <Products/>
      <Cart show_cart ={show_cart}  closecart={closecart}/>
    </div>
  );
}

export default App;
