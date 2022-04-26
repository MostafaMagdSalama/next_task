import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSession, signIn, signOut } from "next-auth/react";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import { useRouter } from "next/router";
import axios from "axios";

const MyComponent = {
  backgroundColor: "#333",
  transition: "all .7s",
  "& > svg": {
    transition: "all .5s",
  },
  "&:hover svg": {
    color: "#333",
  },
  "&:hover": {
    border: "1px solid #333",
  },
};
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [valid, setValid] = useState(true);
  const session = useSession();
  const router = useRouter();
  const fetchData = () => {
    axios
      .post("/api/users/login", { email, password })
      .then(({ data }) => {
        localStorage.setItem(
          "data",
          JSON.stringify({ user: { name: data.name, email: data.email } })
        );
        router.push("/");
      })
      .catch((err) => {
        setValid(false);
      });
  };

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
        Login
      </Typography>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        id="outlined-basic"
        label="Passowrd"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Typography color="error">
        {!valid && "email or password not correct"}
      </Typography>
      <Button variant="contained" onClick={fetchData}>
        Login
      </Button>

      <Button sx={MyComponent} onClick={() => signIn()}>
        <GitHubIcon sx={{ color: "white" }} />
      </Button>
    </Box>
  );
}

export default Login;
