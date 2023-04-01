import "../features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faCakeCandles,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { TextField, IconButton } from "@mui/material";
import ChangeColor from "components/ChangeColor";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectNumberOfPresents,
  selectColorOfPresents,
} from "store/present/selectors";
import { selectNumberOfCakes } from "store/cake/selectors";
import { addPresent, removePresent, setPresent } from "store/present/slice";

const PresentPage = () => {
  const navigate = useNavigate();
  const cake = useSelector(selectNumberOfCakes);
  const present = useSelector(selectNumberOfPresents);
  const color = useSelector(selectColorOfPresents);
  const dispatch = useDispatch();

  const [newPresent, setNewPresent] = useState(present);

  useEffect(() => {
    console.log("present", present);
    setNewPresent(present);
  }, [present]);

  return (
    <div className="page-container">
      <FontAwesomeIcon
        icon={faGift}
        style={{ fontSize: 100 + 25 * (present - 1), color }}
      />
      <div className="content-controller">
        <IconButton onClick={() => dispatch(removePresent())}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 25 }} />
        </IconButton>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={newPresent}
          onChange={(event) => setNewPresent(event.target.value)}
          className="content-input"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              dispatch(setPresent(newPresent));
            }
          }}
        />
        <IconButton onClick={() => dispatch(addPresent())}>
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 25 }} />
        </IconButton>
      </div>
      <div className="other-content" onClick={() => navigate("/cake")}>
        <div className="total-numbers">{cake}</div>
        <FontAwesomeIcon icon={faCakeCandles} style={{ fontSize: 35 }} />
      </div>
      <ChangeColor />
    </div>
  );
};

export default PresentPage;
