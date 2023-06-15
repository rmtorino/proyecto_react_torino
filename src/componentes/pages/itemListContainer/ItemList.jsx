//import CounterContainer from "../../common/counter/CounterContainer";

import { Box, Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <Grid container>
      <Grid item md={1.5}></Grid>
      <Grid item md={9}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={"20px"}
          padding={"40px 0"}
        >
          {items.map((element) => {
            return <ProductCard element={element} key={element.id} />;
          })}
        </Box>
      </Grid>
      <Grid item md={1.5}></Grid>
    </Grid>
  );
};

export default ItemList;
