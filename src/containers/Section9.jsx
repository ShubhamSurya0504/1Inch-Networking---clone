import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { section9Content } from "../utils/content";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";

const { title, ITEMS } = section9Content;

const Section9 = () => {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container sx={{ mt: { xs: 10, md: 15, lg: 20 } }} >
      <Title variant={{ sx: "h3", md: "h2" }} sx={{ mb: { xs: 5, md: 8 } }}>{title}</Title>
      <Grid container spacing={3}>
        {ITEMS.map((item) => (
          <Grid item key={item.title} xs={12} md={6}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section9;
