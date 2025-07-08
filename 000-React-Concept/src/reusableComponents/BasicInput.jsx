import React from "react";

const BasicInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  isError,
  color,
  size,
  ...props
}) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        value={value}
        className={`input ${color} ${size} ${isError && "is-danger"}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        //   style={{
        //     borderColor: isError ? "red" : color,
        //     width: size === "small" ? "50%" : "100%",
        //     padding: size === "small" ? "5px" : "10px",
        //   }}
        {...props}
      />
    </div>
  );
};

export default BasicInput;
