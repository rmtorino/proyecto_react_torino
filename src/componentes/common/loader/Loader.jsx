import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Card, CardContent } from "@mui/material";

const Loader = () => {
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
          {Array.from(new Array(3)).map((id) => (
            <Card key={id}>
              <CardContent>
                <Skeleton animation="wave" height={400} width={300} />
                <Skeleton animation="wave" height={15} />
                <Skeleton animation="wave" height={15} />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>
      <Grid item md={1.5}></Grid>
    </Grid>
  );
};

export default Loader;
