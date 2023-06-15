import { Grid } from "@mui/material";
const GridComponent = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={10} md={6}>
          <h2 style={{ border: "2px solid red", width: "100%" }}>Hola</h2>
        </Grid>
        <Grid item>
          <h2 style={{ border: "2px solid blue", width: "100%" }}>Hola</h2>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridComponent;
