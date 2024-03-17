import { Input } from "@nextui-org/react";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";

function PasswordInput({
  isVisible,
  toggleVisibility,
  label,
  variant,
  isRequired,
  name,
  onChange,
  value,
  type,
}) {
  return (
    <Input
      label={label}
      variant={variant}
      isRequired={isRequired}
      name={name}
      onChange={onChange}
      value={value}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <BsEyeFill className="text-medium  text-default-400 pointer-events-none" />
          ) : (
            <BsEyeSlash className="text-medium text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={type}
    />
  );
}

export default PasswordInput;
