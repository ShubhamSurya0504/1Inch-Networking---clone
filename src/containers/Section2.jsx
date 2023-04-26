import React from "react";
import { section2Content } from "../utils/content";
import { Container, Box, Grid, Stack, Typography } from "@mui/material";
import CountUp from "react-countup";
import Title from '../components/Title'

const { items } = section2Content;
const CustomCounts = ({
  before = "",
  after = "",
  counter,
  subtitle,
  decimals = false,
}) => (
  <Stack spacing={{xs:1,md:2}} alignItems="center">
    <CountUp prefix={before} suffix={after} end={counter} decimals={decimals}>
      {({countUpRef})=>(
        <Title variant={{xs:'h4',md:'h2'}} sx={{ fontWeight: 400 }}><span ref={countUpRef} /></Title>
      )}
    </CountUp>
    <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
  </Stack>
);

const Section2 = () => {
  return (
    <Container>
      <Box
        sx={(theme) => ({
          position: "relative",
          py: 5,
          mt: {md:7},
          bgcolor: "background.default",
          borderRadius: "50px",
          [theme.breakpoints.up("sm")]: {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              border: "2px solid transparent",
              borderRadius: "50px",
              background: "linear-gradient(180deg,grey,transparent) border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exlude",
            },
          },
        })}
      >
        <Grid container spacing={3} justifyContent="space-between">
          {items.map((item) => (
            <Grid item key={item.subtitle} md={3} xs={6}>
              <CustomCounts {...item}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Section2;
