const FormRowFile = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  required,
  hide,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        required={required}
        accept="image/x-png, image/jpeg, image/jpg"
        multiple="multiple"
      />
    </div>
  );
};
export default FormRowFile;
