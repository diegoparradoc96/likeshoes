import React, { ChangeEvent } from "react";

/* next ui */
import { Input } from "@nextui-org/react";

interface NormalInputProps {
  label: string;
  value: string;
  name: string;
  disabled?: boolean;
  type?: "password" | "text";
  handleInputChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

const NormalInput = ({
  label,
  value,
  name,
  handleInputChange,
  type = "text",
  disabled = false,
}: NormalInputProps) => {
  return (
    <Input
      labelPlaceholder={label}
      value={value}
      name={name}
      disabled={disabled}
      type={type}
      onChange={(event) => handleInputChange(event)}
    />
  );
};

export { NormalInput };
