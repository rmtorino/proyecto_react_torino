import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ element }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia component="img" height="" image={element.img} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {element.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.subtitle}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${element.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
          <Button size="big" color="primary">
            VER DETALLE
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
