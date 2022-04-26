import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

function AddPost() {
  const session = useSession();
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("data"))
  );
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    const fileInput = Array.from(event.target.elements).find(
      ({ name }) => name === "file"
    );
    console.log(fileInput.files);
    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "my-uploads");
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/delivary-app/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());
    console.log(data.secure_url);
    const postData = {
      username: JSON.parse(localStorage.getItem("data")).username,
    };
    axios
      .post("/api/posts/add", {
        userEmail: userData.email,
        userName: userData.name,
        imageUrl: data.secure_url,
        title,
        desc,
      })
      .then((postRes) => {
        console.log(postRes);
      });
  };
  if (typeof window !== "undefined") {
    if (!localStorage.getItem("data")) {
      router.push("/login");
    }
  }
  return (
    <Container>
      <Box sx={{ width: "50%", margin: "50px auto" }}>
        <form onSubmit={handleSubmit}>
          <Stack
            direction="column"
            // sx={{backgroundColor:'red'}}
            gap="10px"
          >
            <Typography variant="h3" align="center">
              Add Post
            </Typography>
            <Typography>Choose An Image</Typography>
            <Input type="file" name="file"></Input>
            <Typography>Add Title</Typography>

            <TextField
              id="outlined-multiline-static"
              label="Write Your Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              multiline
              rows={1}
              placeholder="Write yuor comment...."
              sx={{ marginTop: "20px" }}
            />

            <Typography>Add Description</Typography>

            <TextField
              id="outlined-multiline-static"
              label="Write Your Description"
              multiline
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Write yuor comment...."
              sx={{ marginTop: "20px" }}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}

export default AddPost;
