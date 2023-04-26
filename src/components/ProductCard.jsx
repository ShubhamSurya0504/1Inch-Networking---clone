import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Title from "./Title";
import OutlinedButton from "./OutlinedButton";

const ProductCard = ({ image, title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        p: 4,
        borderRadius: "30px",
        [theme.breakpoints.up("sm")]: {
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "30px",
            border: "1px solid transparent",
            background:
              "linear-gradient(120deg,#5f5f61,transparent) border-box",
            WebkitMask:
              "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exlude",
          },
        },
      }}
    >
      <Stack sx={{ height: "100%" }} spacing={2}>
        <Title variant={{ xs: "h4", md: "h3" }}>{title}</Title>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
        <img
          src={image}
          alt=""
          style={{
            height: "280px",
            width: "100%",
            objectFit: "contain",
            flex: 1,
          }}
        />
        <OutlinedButton fit>Learn more</OutlinedButton>
      </Stack>
    </Box>
  );
};

export default ProductCard;
