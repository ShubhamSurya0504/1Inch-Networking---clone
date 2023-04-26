import { Container, Stack, Typography , Box, useTheme, useMediaQuery} from "@mui/material";
import React from "react";
import Title from "../components/Title";
import { section8Content } from "../utils/content";
import OutlinedButton from "../components/OutlinedButton";

const { title, subtitle, caption, ShieldImage } = section8Content;
const Section8 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="md" sx={{ mt: { xs: 10, md: 15, lg: 20 }, textAlign:"center" }}>
      
        <Stack alignItems="center">
          <Title variant={{ xs: "h4", md: "h2" }} sx={{mb:4}}>{title}</Title>
          <Typography variant="body2" color="text.secondary" sx={{mb:{xs:5, md:8}}}>
            {subtitle}
          </Typography>
          <Box sx={{px:{xs:2,md:5,lg:7}}}>
          <img src={ShieldImage} alt="" style={{ width: "100%", objectFit:"contain"}} />
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{mt:{xs:5, md:8}}}>
            {caption}
          </Typography>
          <OutlinedButton fit={!isSmallScreen} fullWidth={isSmallScreen} sx={{mt:4}}>Learn more</OutlinedButton>
        </Stack>
      
    </Container>
  );
};

export default Section8;
