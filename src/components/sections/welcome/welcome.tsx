import React from 'react';
import NextLink from 'next/link';
import { Card, CardContent, Button, Typography, Box } from '@material-ui/core';

export const Welcome: React.FC = () => {
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="//cdn.shopify.com/s/files/1/2141/9909/files/Boozy_Logo_1600x200_x100.png?v=1549866189"
        />

        <Typography sx={{ marginBottom: '20px', marginTop: '20px' }} gutterBottom variant="h4" component="h1">
          BOOZY PH
        </Typography>
        <Typography
          sx={{ marginBottom: '20px', maxWidth: '600px', display: 'inline-block' }}
          gutterBottom
          variant="body2"
          component="p"
        ></Typography>

        <div css={{ marginBottom: '20px' }}>
          <NextLink href="/products" passHref>
            <Button sx={{ margin: '6px' }} variant="contained" color="primary">
              Browse Products
            </Button>
          </NextLink>
        </div>
      </CardContent>
    </Card>
  );
};
