//* Import Material UI
import Grid from '@material-ui/core/Grid'
import Product from './product/Product'

const products = [
  {
    id: 1,
    name: 'shoes',
    description: 'running shoes',
    price: '$34.99',
    image:
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 2,
    name: 'iphone',
    description: 'newest iphone',
    price: '$34.99',
    image:
      'https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_13_Pro/Produktfotos_Apple_iPhone_13_Pro_1448.jpg',
  },
]

const Products = () => (
  <main>
    <Grid container justify='center' spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  </main>
)

export default Products
