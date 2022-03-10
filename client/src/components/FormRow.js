const FormRow = ({
  placeholder,
  type,
  name,
  handleChange,
  labelText,
  value,
}) => {
  return (
    <div className="form-row">
      <label
        style={{ whiteSpace: "nowrap", float: "left", marginLeft: "-1px" }}
        htmlFor="name"
        className="form-label"
      >
        {labelText || name}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
