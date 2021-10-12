import React from "react";
import '../App.css';

export const Card = ({
  link,
  text_1,
  text_2,
  text_3,
  text_4,
  style_1,
  style_2,
  style_3,
  style_4,
}) => {
  return (
    <div className="card">
      <div>
        <img src={link} alt="" />
      </div>
      <div className={style_1}>{text_1}</div>
      <div className={style_2}>{text_2}</div>
      <div className={style_3}>{text_3}</div>
      <div className={style_4}>{text_4}</div>
    </div>
  );
};
