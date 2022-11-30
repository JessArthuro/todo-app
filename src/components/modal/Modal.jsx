import ReactDOM from "react-dom";
import "./modal.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal_background">
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
