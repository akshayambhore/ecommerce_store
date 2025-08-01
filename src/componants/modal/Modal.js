import "./modal.css";
function Modal({show_cart , onClose  ,children})
{
    if (show_cart === false) {
        return null;
    }
    return (
          <div class="backdrop" onClick={onClose}>
            <div class ="modal" onClick={(event) => (event.stopPropagation())}> {children} </div>
          </div>);
}

export default Modal;