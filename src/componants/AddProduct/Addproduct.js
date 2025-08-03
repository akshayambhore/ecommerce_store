
import Modal from "../modal/Modal";
import { useRef } from "react";

function Addproduct({show_add,onclose,onAddp})
{
    const nameRef = useRef();
    function handaladdproduct(event)
    {
        event.preventDefault();
        const nameval = nameRef.current.value;

        
        nameval!=="" && onAddp(nameval);

        nameRef.current.value = "";

    }
    return(
        <Modal show={show_add} onClose={onclose}>
            <div>
                
            
            <form onSubmit={handaladdproduct}>
                <div>
                    <label htmlFor ="AddProduct">Enter Product Name </label>
                    <input ref={nameRef} id='AddProduct' type="text"/>
                </div>
                <button type="submit">
                   Add Product
                </button>
            </form>
            </div>
            
        </Modal>
        );
}
export default Addproduct;