import React from 'react';
import Grid from '@material-ui/core';

const products = [
    { id: 1, name: 'Shirts', decription: 'Male T-Shirt', price: '$29.99' }
    { id: 1, name: 'Shirts', decription: 'Female T-Shirt', price: '$29.99' }
    { id: 1, name: 'Hats', decription: 'ETC Bucket Hat', price: '$19.99' }
];

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product.id) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
            </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;