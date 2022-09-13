const FormRowFile = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  required,
  hide,
  id,
}) => {
  return (
    <div className="form-row">
      {!hide && (
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
      )}

      <input
        id={id}
        type="file"
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        required={required}
        accept="image/x-png, image/jpeg, image/jpg"
        multiple="multiple"
        style={hide && { display: "none" }}
      />
    </div>
  );
};
export default FormRowFile;
