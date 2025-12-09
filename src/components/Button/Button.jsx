import classes from "./Button.module.css";

export default function Button({ className = "", children, buttonClick, isActive, ...props}) {
  return (
    <button {...props} className={`${classes.button} ${isActive ? classes.active : ""} ${className}`} onClick={buttonClick}>
      {children}
    </button>
  );
}
