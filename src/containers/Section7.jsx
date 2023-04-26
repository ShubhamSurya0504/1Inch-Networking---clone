import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';
import { section7Content } from '../utils/content';

const {title,subtitle,ITEMS} = section7Content
const Section7 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 15, lg: 20 } }} >
      <Title variant={{ sx: "h3", md: "h2" }} sx={{ mb: { xs: 2, md: 3} }}>{title}</Title>
      <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 3, md:6} }}>{subtitle}</Typography>
      <Grid container spacing={3}>
        {ITEMS.map((item) => (
          <Grid item key={item.title} xs={12} md={6}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Section7