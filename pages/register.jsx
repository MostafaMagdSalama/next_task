import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
function Register() {
  const session = useSession();
  const router = useRouter();
  const fetchData = () => {
    axios
      .post("/api/users/register", { fname, lname, email, password })
      .then((data) => {
        console.log(data);
      });
  };
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (typeof window !== "undefined") {
    if (session.data) {
      localStorage.setItem(
        "data",
        JSON.stringify({
          name: session.data?.user.name,
          email: session.data.user?.email,
        })
      );
    }
    if (localStorage.getItem("data")) {
      router.push("/");
    }
  }
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
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          sx={{ width: "49%" }}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          sx={{ width: "49%" }}
        />
      </Box>
      <TextField
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        name="password"
        id="outlined-basic"
        label="Passowrd"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={fetchData}>
        Register
      </Button>
    </Box>
  );
}

export default Register;
