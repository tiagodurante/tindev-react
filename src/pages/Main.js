import React, { useEffect } from "react";
import "./Main.css";

import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";

export default function Main({ match }) {
  useEffect(() => {}, []);

  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt=""
          />
          <footer>
            <strong>Felipe Dechamps</strong>
            <p>Programador e cantor</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt=""
          />
          <footer>
            <strong>Felipe Dechamps</strong>
            <p>Programador e cantor</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt=""
          />
          <footer>
            <strong>Felipe Dechamps</strong>
            <p>Programador e cantor</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt=""
          />
          <footer>
            <strong>Felipe Dechamps</strong>
            <p>Programador e cantor</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
