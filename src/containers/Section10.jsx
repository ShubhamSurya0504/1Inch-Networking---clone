import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import { section10Content } from "../utils/content";
const { SOCIALS } = section10Content;
const Section10 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: { xs: 10, md: 15, lg: 20 } }}>
      <Title
        variant={{ xs: "h3", md: "h2" }}
        sx={{ textAlign: "center", mb: { xs: 2, md: 6 } }}
      >
        Join us
      </Title>
      <Grid container spacing={3} justifyContent="center" sx={{px:{xs:0, md:5,lg:8}}}>
        {SOCIALS.map(({ name, image }) => (
          <Grid
            item
            key={name}
            xs={6}
            md={3}
            sx={(theme) => ({
              cursor: "pointer",
              "&:hover": {
                "& img": {
                  transform:"scale(1.2)",
                  transition:"transform .3s"
                },
                "& p": {
                  color: "text.primary",
                  transition:"all .3s ease-in"
                },
              },
            })}
          >
            <Stack alignItems="center">
              <img
                src={image}
                alt=""
                style={{ width: "120px", objectFit: "contain" }}
              />
              <Typography variant="body2" color="text.secondary">
                {name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section10;
