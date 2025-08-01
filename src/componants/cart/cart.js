import Modal from "../modal/Modal";
function cart({show_cart ,closecart})
{
    return(
        <Modal show_cart ={show_cart}  onClose={closecart}> welcome</Modal>
    )
}
 export default cart;