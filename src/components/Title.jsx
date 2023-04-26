import React from "react";
import { Typography } from "@mui/material";

const Title = ({ variant = "h6", sx = {}, children, ...props }) => {
  const _component =
    typeof variant !== "object"
      ? variant
      : variant.xl ||
        variant.lg ||
        variant.md ||
        variant.sm ||
        variant.xs ||
        "h6";

  const _variantStyle =
    typeof variant !== "object"
      ? variant
      : {
          xs: variant.xs,
          sm: variant.sm || variant.xs,
          md: variant.md || variant.sm || variant.xs,
          lg: variant.lg || variant.md || variant.sm || variant.xs,
          xl:
            variant.xl || variant.lg || variant.md || variant.sm || variant.xs,
        };
  return (
    <Typography
      variant=""
      sx={{
        ...sx,
        typography: typeof _variantStyle === "object" && _variantStyle,
        fontWeight : `${sx.fontWeight || 600 }!important`}}
      {...props}
      component={_component}
    >
      {children}
    </Typography>
  );
};

export default Title;
