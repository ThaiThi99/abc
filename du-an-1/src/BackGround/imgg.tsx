import React from "react";
import "../cssne/header.css";

interface OptionProps {
  value: string;
  label: string;
  imageUrl: string;
}

const CustomOption: React.FC<OptionProps> = ({ value, label, imageUrl }) => (
  <div className="custom-option">
    <img src={imageUrl} alt={label} className="option-image" />
    <span className="option-label">{label}</span>
  </div>
);

export default CustomOption;
