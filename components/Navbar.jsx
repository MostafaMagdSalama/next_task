import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Avatar, Button } from "@mui/material";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  React.useEffect(() => {
    if (localStorage.getItem("data")) {
      setAuth(localStorage.getItem("data"));
      console.log("hey dudue ", auth);
      console.log(JSON.parse(auth).userName);
    }
  });
  console.log(auth);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    console.log(Boolean(event.currentTarget));
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const signoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("data");
    signOut({ redirect: true, callbackUrl: "/login" });
    // router.push("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
         <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          {auth && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">Home</Link>
            </Typography>
          )}
          {!auth && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/login">Home</Link>
            </Typography>
          )}
          <Box
            sx={{
              flexGrow: 12,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {!auth && (
              <Button sx={{ my: 1, color: "white", display: "block" }}>
                <Link href="/login">Login</Link>
              </Button>
            )}
            {!auth && (
              <Button sx={{ my: 1, color: "white", display: "block" }}>
                <Link href="/register">Register</Link>
              </Button>
            )}
            {auth && (
              <Button sx={{ my: 1, color: "white", display: "block" }}>
                <Link href="/add-post">Add Post</Link>
              </Button>
            )}
            {auth && (
              <Button
                sx={{ my: 1, color: "white", display: "block" }}
                onClick={(e) => signoutHandler(e)}
              >
                signOut
              </Button>
            )}
          </Box>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {/* <Avatar alt="Remy Sharp" src="/images/1.jpg" /> */}
                {auth && (
                  <Avatar sx={{ bgcolor: "#F44336" }} aria-label="recipe">
                    {JSON.parse(auth)?.name[0]}
                  </Avatar>
                )}
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
