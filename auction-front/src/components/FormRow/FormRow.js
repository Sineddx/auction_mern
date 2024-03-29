import { forwardRef } from "react";

const FormRow = (
  { type, name, value, handleChange, labelText, textarea, cssName, min },
  ref
) => {
    if(!min){
        min = null;
    }
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label label-edit">
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
          min={min}
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
