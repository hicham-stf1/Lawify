const FormRow = ({
  placeholder,
  type,
  name,
  handleChange,
  labelText,
  value,
  style,
}) => {
  return (
    <div className="form-row">
      <label
        style={{ whiteSpace: "nowrap", float: "left", marginLeft: "-1px" }}
        htmlFor="name"
        className="form-label"
      >
        {labelText}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        style={style}
      />
    </div>
  );
};

export default FormRow;
