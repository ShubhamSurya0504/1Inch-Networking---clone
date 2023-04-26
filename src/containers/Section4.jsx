import { Container, Grid, Stack, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { section4Content } from "../utils/content";
import Title from "../components/Title";
import OutlinedButton from "../components/OutlinedButton";

const { top, bottom } = section4Content;
const Section4 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [tabValue, setTabValue] = useState(0);
  return (
    <Container sx={{ mt: { xs: 10, md: 15, lg:20 } }}>
      {/* top */}
      <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* left */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>{top.title}</Title>
            <Typography variant="body2" color="text.secondary" pb={2}>
              {top.subtitle}
            </Typography>
            <OutlinedButton fit={!isSmallScreen} fullWidth={isSmallScreen}>Swap</OutlinedButton>
          </Stack>
        </Grid>

        {/* right */}
        <Grid item xs={12} md={6}>
          <img
            src={top.image}
            alt=""
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>
      </Grid>

      {/* bottom */}

      <Grid
        container
        spacing={10}
        flexWrap="wrap"
        alignItems="center"
        sx={{ mt: { xs: 10, md: 20 } }}
      >
        {/* left */}
        <Grid item xs={12} md={6}>
          <img
            src={bottom.TABS[tabValue].image}
            alt=""
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>

        {/* right */}

        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>{bottom.title}</Title>
            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              varient="scrollable"
              scrollButtons="auto"
            >
              {bottom.TABS.map(({ name }) => (
                <Tab label={name} key={name} sx={{minWidth:60,px:1, '&.Mui-selected':{color: 'text.primary'}}}/>
              ))}
            </Tabs>
            <Typography variant="body2" color="text.secondary" sx={{minHeight:70}}>
              {bottom.TABS[tabValue].subtitle}
            </Typography>
            <OutlinedButton fit={!isSmallScreen} fullWidth={isSmallScreen}>Learn more</OutlinedButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section4;
