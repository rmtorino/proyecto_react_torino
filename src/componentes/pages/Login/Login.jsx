//import { AiOutlineUser } from "react-icons/ai";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        color="secondary"
        size="small"
      />
      {/* <TextField
        id="outlined-basic"
        label="Contraseña"
        variant="outlined"
        color="secondary"
        size="small"
        type={showPassword ? "text" : "password"}
      /> */}

      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Comtraseña
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setshowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button variant="contained">Ingresar</Button>

      {/* <AiOutlineUser size = "30"/> */}
    </Box>
  );
};

export default Login;
