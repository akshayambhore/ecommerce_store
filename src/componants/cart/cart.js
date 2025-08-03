import Modal from "../modal/Modal";
function cart({show_cart ,closecart , cart_item , on_inc , on_dec}) 
{
    return(
        <div>
            <Modal show={show_cart} onClose={closecart} cart_item={cart_item}>
                <div className="cart-container">
                    {
                        
                        cart_item.length>0
                        ?cart_item.map((item) => {
                            return <div className="cartitem" key={item.id}>

                                <img src={require(`../Products/images/${item.image}`)} alt={item.name} />
                                <div>{item.name}</div>
                                <div>Qty:{item.quantity}</div>
                                <div>
                                    <button onClick={()=>on_dec(item.id)}>-</button>
                                    <button onClick={()=>on_inc(item.id)}>+</button>

                                </div>
                            </div>
                        })
                        :<div>Cart is Empty </div>
                    }

                </div>
                <div> <button onClick={closecart}>close</button></div>
                <div>
                    
                    {cart_item.length>0?(<button>ChekeOut</button>):null}
                </div>

            </Modal>

        </div>
    )
}
 export default cart;