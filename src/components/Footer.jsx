import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { footerContent } from "../utils/content";
import Title from "./Title";
import { Subtitles } from "@mui/icons-material";
import OutlinedButton from "./OutlinedButton";

const {
  subscribe,
  protocols,
  governance,
  support,
  developers,
  copyright,
  socials,
} = footerContent;

const LinkSection = ({ title, links }) => (
  <Stack spacing={2}>
    <Title variant={{ xs: "h6", md: "h5" }}>{title}</Title>
    {links.map(({ title }) => (
      <Typography
        key={title}
        variant="body2"
        color="text.secondary"
        sx={{
          cursor: "pointer",
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        {title}
      </Typography>
    ))}
  </Stack>
);
const Footer = () => {
  return (
    <Box sx={{ mt: { xs: 10, md: 15, lg: 20 } }}>
      <Divider sx={{ mb: 8 }} />
      <Container>
        <Grid container spacing={8} flexWrap="wrap-reverse">
          {/* Links */}
          <Grid item xs={12} md={6} lg={7} xl={8}>
            <Grid container spacing={2}>
              {/* Protocols */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...protocols} />
              </Grid>

              {/* Governance */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...governance} />
              </Grid>

              {/* Support */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...support} />
              </Grid>

              {/* Developers */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...developers} />
              </Grid>
            </Grid>
          </Grid>
          {/* social */}
          <Grid item xs={12} md={6} lg={5} xl={4}>
            <Stack>
              <Title variant={{ xs: "h6", md: "h5" }} sx={{ mb: 1 }}>
                {subscribe.title}
              </Title>
              <Typography variant="body2" color="text.secondary">
                {subscribe.subtitle}
              </Typography>
              <OutlinedButton sx={{ height: 60, my: 3 }}>
                Subscribe
              </OutlinedButton>
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                spacing={1}
                justifyContent="space-between"
              >
                {socials.map((item, i) => (
                  <IconButton key={i}>
                    <item.icon />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          sx={{pb:6}}
        >
          <Typography color="text.secondary" variant="body2">{copyright.left}</Typography>
          <Typography color="text.secondary" variant="body2">{copyright.center}</Typography>
          <Typography color="text.secondary" variant="body2">{copyright.right}</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
