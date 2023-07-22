import React, { ChangeEvent } from "react";

/* next ui */
import { Input } from "@nextui-org/react";

interface NormalInputProps {
  label: string;
  value: string;
  name: string;
  disabled?: boolean;
  type?: "password" | "text";
  size?: "sm" | "md" | "lg" | "xl";
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
  size = "md",
  disabled = false,
}: NormalInputProps) => {
  const styles = {
    input: {
      width: "100%",
    },
  };

  return (
    <Input
      labelPlaceholder={label}
      value={value}
      name={name}
      disabled={disabled}
      type={type}
      size={size}
      onChange={(event) => handleInputChange(event)}
      style={styles.input}
    />
  );
};

export { NormalInput };
