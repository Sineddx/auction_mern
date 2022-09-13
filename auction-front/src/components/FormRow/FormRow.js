import { forwardRef } from "react";


const FormRow = (
  { type, name, value, handleChange, labelText, textarea, cssName },
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
        />
      ) : (
        <textarea
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className="form-input"
        ></textarea>
      )}
    </div>
  );
};
export default forwardRef(FormRow);
