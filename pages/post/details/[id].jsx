import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";

import {
  CardMedia,
  Typography,
  Box,
  Stack,
  Container,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
// import {CardMedia} from '@mui/material';

function Details() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.post("/api/posts/getPost", { postId: id }).then(({ data }) => {
      setPost(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      {!post ? (
        <Box
          sx={{
            display: "flex",
            // backgroundColor: "red",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <CardMedia
            component="img"
            height="194"
            image={post.imageUrl}
            alt="Paella dish"
          />
          <Container>
            <Typography align="center" variant="h5" mt="20px" mb="20px">
              {/* This impressive paella is a perfect party dish and a fun meal to cook
        ? */}
              {post.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              {/* <Typography>Auther: Ahmed Saleh</Typography> */}
              <Typography>Auther:{post.userName}</Typography>
              <Typography>Published : 12 years ago</Typography>
            </Stack>
            <Box sx={{ color: "#333", lineHeight: "1.7" }} mt="25px">
              {post.desc}
            </Box>
            <Box sx={{}} mt="20px">
              <Typography>Replay....</Typography>
              <TextField
                id="outlined-multiline-static"
                label="Comment"
                multiline
                rows={4}
                placeholder="Write yuor comment...."
                sx={{ marginTop: "20px", width: "50%" }}
              />
              <Button
                variant="outlined"
                sx={{ display: "block", marginTop: "10px" }}
                mt="10px"
              >
                Raplay
              </Button>
            </Box>

            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                marginTop: "30px",
              }}
            >
              <Typography>All Comments</Typography>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                  <Avatar sx={{ bgcolor: "#F44336" }} aria-label="recipe">
                    R
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
                  <Avatar sx={{ bgcolor: "#F44336" }} aria-label="recipe">
                    {post && post.userName[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
                  <Avatar sx={{ bgcolor: "#F44336" }} aria-label="recipe">
                    R
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Container>
        </Box>
      )}
    </>
  );
}

export default Details;
