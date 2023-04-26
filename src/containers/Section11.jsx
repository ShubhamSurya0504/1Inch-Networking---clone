import { Box, Container, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import { Section11Content } from "../utils/content";
import OutlinedButton from "../components/OutlinedButton";

const { title, ITEMS } = Section11Content;

const Section11 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 4, md: 8 } }}>
        {title}
      </Title>
      <Grid container spacing={3} rowSpacing={8} sx={{ position: "relative" }}>
        {ITEMS.map(({ link, image }) => (
          <Grid item xs={6} md={4} lg={2} key={link}>
            <Box
              sx={{ cursor: "pointer", "&:hover": { filter: "contrast(40%)" } }}
            >
              <img
                src={image}
                alt=""
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        ))}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            height: 80,
            background: "linear-gradient(180deg,#06070a85,#06070a)",
          }}
        />
      </Grid>
      <OutlinedButton fit={!isSmallScreen} fullWidth={isSmallScreen} sx={{ mt: { xs: 4, md: 8 } }}>
        Explore ecosystem
      </OutlinedButton>
    </Container>
  );
};

export default Section11;
