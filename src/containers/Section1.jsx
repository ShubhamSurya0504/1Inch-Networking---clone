import {
  Box,
  Button,
  Container,
  Hidden,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { section1Content } from "../utils/content";
import LaunchButton from "../components/LaunchButton";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import useMeasure from "react-use-measure";
import Title from "../components/Title";


const {
  MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  title,
  subtitle,
} = section1Content;

const CustomBtn = ({ children , ...props}) => (
  <Button
    variant="outlined"
    sx={{
      // justifyContent: "flex-start",
      borderRadius: 4,
      borderColor: "text.primary",
      color: "text.primary",
      height: 58,
      px: 3,
    }}
    {...props}
  >
    {children}
  </Button>
);

const Section1 = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [ref, { height }] = useMeasure();
  return (
    <Box sx={{ width: "100%" }}>
      {/*main background */}
      <Box
        sx={{
          position: "fixed",
          zIndex: "-10",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <img src={MainBG} alt="" style={{ width: "100%" }} />
      </Box>

      {/* background element */}
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          width: "100%",
          zIndex: -1,
        }}
      >
        <img src={MainBG} alt="" style={{ width: "100%", opacity: 0 }} />
        {/* star */}
        <img
          src={ShootingStarImage}
          alt=""
          style={{
            position: "absolute",
            top: "30px",
            right: "15%",
            width: "500px",
          }}
        />
        {/* trees */}
        <Hidden mdDown>
          <img
            src={TreesImage}
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              right: 0,
              bottom: "2%",
              left: 0,
            }}
          />
        </Hidden>

        {/* cliff */}
        <img
          src={CliffImage}
          alt=""
          style={{
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            backgroundSize: "cover",
          }}
        />
        {/* horse */}
        <img
          src={HorseImage}
          alt=""
          style={{
            position: "absolute",
            height: "38%",
            right: "14%",
            bottom: "45%",
            transform: "rotate(7deg)",
          }}
        />
        <Box
          sx={{
            bgcolor: "background.default",
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            height: "1000px",
            top: `calc(${height}px - 2%)`,
          }}
        ></Box>
      </Box>
      {/* content */}
      <Container
        sx={{
          height: "80vh",
          mt:8,
          [theme.breakpoints.up("md")] : {mt:10}
        }}
      >
        <Stack
          sx={{
            height: "100%",
          }}
          justifyContent="center"
        >
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1 }}
          >
            {title}
          </Title>

          <Title
            variant={{ xs: "h4", sm: "h3", md: "h2" }}
            sx={{ fontWeight: 500, letterSpacing: "0.05em", mb: 5 }}
          >
            {subtitle}
          </Title>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={3}
          >
            <LaunchButton
              fullWidth={isSmallScreen}
              sx={{
                height: 58,
                px: 3,
              }}
            />
            <CustomBtn fullWidth={isSmallScreen}>
              <AppleIcon
                sx={{
                  fontSize: 36,
                  ml: -1,
                }}
              />
              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="caption" sx={{ lineHeight: 1 }}>
                  Download on the
                </Typography>
                <Typography variant="h5">App Store</Typography>
              </Stack>
            </CustomBtn >  
            <CustomBtn fullWidth={isSmallScreen}>
              <ShopIcon
                sx={{
                  fontSize: 36,
                }}
              />
              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="caption" sx={{ lineHeight: 1 }}>
                  Get it on
                </Typography>
                <Typography variant="h5">Google Play</Typography>
              </Stack>
            </CustomBtn>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section1;
