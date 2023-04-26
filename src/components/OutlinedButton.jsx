import { Button, useTheme } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const OutlinedButton = ({ sx = {}, children, fit, ...props }) => {


  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: "text.primary",
        color: "text.primary",
        width:fit ? 'fit-content': "100%",
        ...sx,
      }}
      {...props}
    >
      {children}
      <KeyboardArrowRightIcon fontSize="small" sx={{ ml: 0.5 }} />
    </Button>
  );
};

export default OutlinedButton;
