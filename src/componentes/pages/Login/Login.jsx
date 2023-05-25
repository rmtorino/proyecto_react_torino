//import { AiOutlineUser } from "react-icons/ai";
import { TextField, Button, Box } from "@mui/material";
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
      <TextField
        id="outlined-basic"
        label="Contraseña"
        variant="outlined"
        color="secondary"
        size="small"
        type={showPassword ? "text" : "password"}
      />
      <Button onClick={() => setshowPassword(!showPassword)}>
        Ver Contaseña
      </Button>
      <Button variant="contained">Ingresar</Button>

      {/* <AiOutlineUser size = "30"/> */}
    </Box>
  );
};

export default Login;
