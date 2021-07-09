import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shirts', description: 'Male T-Shirt', price: '$29.99', image: '/assets/images/BlackETC.jpg' },
    { id: 1, name: 'Shirts', description: 'Female T-Shirt', price: '$29.99', image: '/assets/images/UpliftETC.jpg' },
    { id: 1, name: 'Hats', description: 'ETC Bucket Hat', price: '$19.99', image: '/assets/images/BucketETC.jpg' },
];
// src\assets
const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;