import React from "react";
import {
  Box,
  Button,
  Container,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function AddPost() {
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
      username: JSON.parse(localstorage.getItem("data")).username,
    };
    axios.post("/api/posts/add", {});
  };
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
            <Input type="file" name="image"></Input>
            <Typography>Add Title</Typography>

            <TextField
              id="outlined-multiline-static"
              label="Write Your Title"
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
