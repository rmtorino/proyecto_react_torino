import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Counter from "../../common/counter/Counter";

const ProductDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={2}></Grid>
      <Grid item md={8}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          padding={"40px 0"}
          gap={"50px"}
        >
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height=""
                image={productSelected.img}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {productSelected.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productSelected.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productSelected.subtitle}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  ${productSelected.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Counter
                stock={productSelected.stock}
                initial={quantity}
                onAdd={onAdd}
              />
            </CardActions>
          </Card>
        </Box>
      </Grid>
      <Grid item md={2}></Grid>
      <Grid
        item
        md={12}
        display={"flex"}
        justifyContent={"center"}
        paddingBottom={"50px"}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 700 }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ea,
          hic obcaecati, nam cupiditate eaque aliquid et voluptatum accusamus
          aliquam autem molestias sit perferendis, magnam ducimus nisi!
          Doloribus, dolores nesciunt.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
