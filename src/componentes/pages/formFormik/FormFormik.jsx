import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      phone: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Nombre requerido")
        .min(3, "Debe ingresar al menos tres letras"),
      email: Yup.string()
        .email("No es un email valido")
        .required("Debe ingresar al menos un email"),
      password: Yup.string()
        .required()
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener al menos 1 mayuscula, un numero y un caracter especial (!@#$%^&*)",
        }),
      repeatPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
      phone: Yup.number().required(),
    }),
  });

  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"10px"}
        >
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            onChange={handleChange}
            error={errors.password ? true : false}
            helperText={errors.password}
          />
          <TextField
            label="Repetir Password"
            variant="outlined"
            name="repeatPassword"
            onChange={handleChange}
            error={errors.repeatPassword ? true : false}
            helperText={errors.repeatPassword}
          />
          <TextField
            label="Telefono"
            variant="outlined"
            name="phone"
            onChange={handleChange}
            error={errors.phone ? true : false}
            helperText={errors.phone}
          />
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default FormFormik;
