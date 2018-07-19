import React from "react";
import { Tag } from "antd";

const TypeButton = ({ typeName }) => {
  const localStyle = {
    backgroundColor: typeColors[typeName],
  };
  return (
    <Tag color={typeColors[typeName]}>{typeName}</Tag>
  );
/*
  return (
    <div style={{...styles.typeButton, ...localStyle}}>
      {typeName}
    </div>
  );
  */
}

const styles = {
  typeButton: {
    width: 70, 
    height: 30,
  }
}

const typeColors = {
  "normal": "#aa9",
  "fire": "#f42",
  "water": "#39f",
  "electric": "#fc3",
  "grass": "#7c5",
  "ice": "#6cf",
  "fighting": "#b54",
  "poison": "#a59",
  "ground": "#db5",
  "flying": "#89f",
  "psychic": "#f59",
  "bug": "#ab2",
  "rock": "#ba6",
  "ghost": "#66b",
  "dragon": "#76e",
  "dark": "#754",
  "steel": "#aab",
  "fairy": "#e9e",
}

export default TypeButton;