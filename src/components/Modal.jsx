import cssStyle from "../css/Modal.module.css";
import { useNavigate } from "react-router-dom";

export default function Modal({ setModal }) {
  let navigate = useNavigate();
  return (
    <div className={cssStyle.modal}>
      <div className={cssStyle.inner}>
        <p>상품들록됨</p>
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          계속 쇼핑하기
        </button>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          장바구니 확인하기
        </button>
      </div>
    </div>
  );
}
