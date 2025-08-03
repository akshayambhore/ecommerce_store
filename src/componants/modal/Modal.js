import "./modal.css";
function Modal({show , onClose ,children})
{
    if (show === false) {
        return null;
    }
    return (
          <div class="backdrop" onClick={onClose}>
            <div class ="modal" onClick={(event) => (event.stopPropagation())}> {children} </div>
           
          </div>);
}

export default Modal;