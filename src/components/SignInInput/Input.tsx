import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { Label } from "./InputStyled";

interface ComponentProps {
  label: string;
  input: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  className?: string;
}

const GenericInput: React.FC<ComponentProps> = ({
  label,
  input,
  className,
}) => {
  return (
    <Label htmlFor={input.id} className={className}>
      {label}
      <input className="form-input" {...input} />
    </Label>
  );
};

GenericInput.defaultProps = {
  className: "",
};

export default GenericInput;
