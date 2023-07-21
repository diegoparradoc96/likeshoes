import React from "react";

/* next ui */
import { Button } from "@nextui-org/react";

/* types */
interface NormalButtonProps {
  value: string;
  toggleNormalButton?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const NormalButton = ({
  value = "lorem ipsum",
  toggleNormalButton,
  backgroundColor = "#fff",
  textColor = "black",
}: NormalButtonProps) => {
  const styles = {
    button: {
      backgroundColor: backgroundColor,
      color: textColor,
    },
  };

  return (
    <Button onClick={toggleNormalButton} style={styles.button}>
      {value}
    </Button>
  );
};

export { NormalButton };
