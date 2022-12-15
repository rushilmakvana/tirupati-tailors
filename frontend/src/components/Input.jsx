import React, { useImperativeHandle } from "react";
import "../css/loginform.css";
const Input = React.forwardRef((props, ref) => {
  // useImperativeHandle(ref, () => {
  //   // focus: ref.current.focus();
  // });
  return (
    <div className="form-input">
      <span>{props.label}*</span>
      <input
        ref={ref}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
