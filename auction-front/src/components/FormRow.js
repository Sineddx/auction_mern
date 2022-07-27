import { forwardRef } from "react";

const FormRow = (
  { type, name, value, handleChange, labelText, required, textarea, cssName },
  ref
) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      {!textarea ? (
        <input
          ref={ref}
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className={`form-input ${cssName}`}
          required={required}
        />
      ) : (
        <textarea
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className="form-input"
          required={required}
        ></textarea>
      )}
    </div>
  );
};
export default forwardRef(FormRow);
