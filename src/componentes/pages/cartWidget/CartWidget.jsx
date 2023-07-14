import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const clearItems = () => {
    Swal.fire({
      title: "Quiere vaciar el carrito?",
      text: "Todos los productos seran eliminados",
      icon: "warning",
      iconColor: "black",
      showCancelButton: true,
      confirmButtonColor: "black",
      cancelButtonColor: "black",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("", "", "success");
        clearCart();
      }
    });
  };

  return (
    <Grid container>
      <Grid item md={2}>
        <Box>
          {cart.length > 0 && (
            <Button onClick={clearItems}>Vaciar Carrito</Button>
          )}
          {cart.length > 0 && (
            <Typography gutterBottom variant="h6" component="div">
              TOTAL: ${total}
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid item md={8}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={"20px"}
          padding={"40px 0"}
        >
          {cart.map((product) => {
            return (
              <Card sx={{ maxWidth: 300 }} key={product.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height=""
                    image={product.img}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.subTitle}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      CANTIDAD
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.quantity}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button onClick={() => removeById(product.id)}>
                    Eliminar producto
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Grid>
      <Grid item md={2}>
        <Link to={"/checkout"}>
          <Box>
            <Button>FINALIZAR COMPRA</Button>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};

export default CartWidget;
