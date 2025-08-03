import Headar from './componants/Headar/Headar';
import Products from './componants/Products/Products';
import {useState } from 'react';
import Cart from './componants/cart/cart';
import Addproduct from './componants/AddProduct/Addproduct';
import initial_products from "./componants/Products/product";
function App() {
  const [products , setproducts] = useState(initial_products)
  const [Show_Add_Product,set_Add_Product]=useState(false)
  const [show_cart , setShow_cart] = useState(false);
  function opencart() { setShow_cart(true); }
  function closecart() { setShow_cart(false); }
  const [ cart_item, setcart_item ] = useState([]);
  function handaleAddToCart(productid,productname, productimage) 
  {

    const product_index = cart_item.findIndex((item) => 
      item.id === productid
    );
    if (product_index === -1) {
      let item = { id: productid, name: productname, image: productimage, quantity: 1 };
      setcart_item((prevItems) => (

        [...prevItems, item]
      ))
    }
    else
      {
        let updatedcart_item =[...cart_item];
        updatedcart_item[product_index].quantity+=1;

      }

  }
  function handal_inc(product_id)
  {
     const product_index = cart_item.findIndex((item) => 
      item.id === product_id
    );
    let updatedcart_item=[...cart_item]
    updatedcart_item[product_index].quantity+=1;
    setcart_item(updatedcart_item);

  }
  function handal_dec(product_id)
  {
    const product_index =cart_item.findIndex((item)=>item.id===product_id);
   
    if(cart_item[product_index].quantity===1)
      {
         let updatedcart_item=cart_item.filter((item)=>item.id!==product_id);
         setcart_item(updatedcart_item)
      }
      else
      {
        let updatedcart_item=[...cart_item];
        updatedcart_item[product_index].quantity-=1;
        setcart_item(updatedcart_item)
      }
  }

  function handaladdproduct(proname)
  {
    const product ={id:products.length+1,name:proname,image:"default_product.png"}
    setproducts((state)=>[...state, product]);
    closeproduct();

  }
  function addproduct() { set_Add_Product(true); 
    
  }
  function closeproduct() { set_Add_Product(false); }

  return (
    <div className="App">
      <Headar opencart={opencart} onadd={addproduct}/>
      <Products products ={products} onAddToCart={handaleAddToCart }  />
      <Cart show_cart ={show_cart}  closecart={closecart} cart_item={cart_item} on_inc={handal_inc} on_dec={handal_dec}/>
      <Addproduct show_add={Show_Add_Product} onclose={closeproduct} onAddp={handaladdproduct}/>
    </div>
  );
}

export default App;


