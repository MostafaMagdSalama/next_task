import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
function Register() {
  const fetchData = () => {
    console.log("heeeeeeeey");
    axios
      .post("/api/users/login", { email: "mostafa@gmail.com", password: "123" })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Box
      sx={{
        width: "40%",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        align="center"
        sx={{ padding: "20px" }}
      >
        Register
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          sx={{ width: "49%" }}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          sx={{ width: "49%" }}
        />
      </Box>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField
        type="password"
        id="outlined-basic"
        label="Passowrd"
        variant="outlined"
      />
      <Button variant="contained" onClick={fetchData}>
        Register
      </Button>
    </Box>
  );
}

export default Register;
