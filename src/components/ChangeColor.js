import "./ChangeColor.css";
import { changeColor } from "store/actions";
import { selectColorOfCakes } from "store/cake/selectors";
import { useDispatch, useSelector } from "react-redux";

const ChangeColor = () => {
  const color = useSelector(selectColorOfCakes);
  const dispatch = useDispatch();

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div
      className="color-content"
      onClick={() => dispatch(changeColor(randomColor()))}
    >
      <div className="total-numbers">{color}</div>
    </div>
  );
};

export default ChangeColor;
