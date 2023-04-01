import "../features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faGift,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { TextField, IconButton } from "@mui/material";
import ChangeColor from "components/ChangeColor";
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectNumberOfCakes, selectColorOfCakes } from "store/cake/selectors";
import { selectNumberOfPresents } from "store/present/selectors";
import { addCake, removeCake, setCake } from "store/cake/slice";

const CakePage = () => {
  const navigate = useNavigate();
  const cake = useSelector(selectNumberOfCakes);
  const present = useSelector(selectNumberOfPresents);
  const color = useSelector(selectColorOfCakes);
  const dispatch = useDispatch();

  const [newCake, setNewCake] = useState(cake);

  useEffect(() => {
    console.log("cake", cake);
    setNewCake(cake);
  }, [cake]);

  const squareWidth = useMemo(() => {
    return Math.max(490 * 0.8 ** Math.max(cake - 1, 0), 80);
  }, [cake]);

  const calculateContainerWidth = useMemo(() => {
    let totalRow = cake;
    let width = (cake / totalRow) * squareWidth;
    let height = totalRow * squareWidth;

    while (width < height || height > 500) {
      totalRow -= 1;
      width = Math.floor(cake / totalRow) * squareWidth;
      height = totalRow * squareWidth;
    }

    return width;
  }, [cake]);

  const [hovering, setHovering] = useState(null);

  const handleMouseOver = (index) => {
    setHovering(index);
  };

  const handleMouseOut = () => {
    setHovering(null);
  };

  return (
    <div className="page-container">
      <div
        className="content-wrapper"
        style={{ width: calculateContainerWidth }}
      >
        {[...Array(cake)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faCakeCandles}
            style={{
              fontSize: Math.max(490 * 0.8 ** Math.max(cake - 1, 0), 80),
              color,
            }}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            spin={index === hovering}
          />
        ))}
      </div>
      <div className="content-controller">
        <IconButton onClick={() => dispatch(removeCake())}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 25 }} />
        </IconButton>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={newCake}
          onChange={(event) => setNewCake(event.target.value)}
          className="content-input"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              dispatch(setCake(newCake));
            }
          }}
        />
        <IconButton onClick={() => dispatch(addCake())}>
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 25 }} />
        </IconButton>
      </div>
      <div className="other-content" onClick={() => navigate("/present")}>
        <div className="total-numbers">{present}</div>
        <FontAwesomeIcon icon={faGift} style={{ fontSize: 35 }} />
      </div>
      <ChangeColor />
    </div>
  );
};

export default CakePage;
