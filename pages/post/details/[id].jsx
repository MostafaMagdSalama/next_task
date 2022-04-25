import React from 'react'
import { useRouter } from 'next/router'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { CardMedia, Typography,Box, Stack,Container, TextField, Button } from '@mui/material';
// import {CardMedia} from '@mui/material';

function Details() {
    const router = useRouter();
    const {id}= router.query
  return (
      <>
        <CardMedia
        component="img"
        height="194"
        image="/images/1.jpg"
        alt="Paella dish"
      />
      <Container >
      <Typography align="center" variant="h5" mt="20px" mb="20px">
      This impressive paella is a perfect party dish and a fun meal to cook ?
      </Typography>
      <Stack  direction="row" justifyContent="space-between">
        <Typography>Auther: Ahmed Saleh</Typography>
        <Typography>Published : 12 years ago</Typography>
      </Stack>
      <Box sx={{color:'#333', lineHeight:"1.7"}} mt="25px">
      Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
      </Box>
      <Box sx={{}} mt="20px">

      <Typography>
          Replay....
      </Typography>
      <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          placeholder="Write yuor comment...."
          sx={{marginTop:'20px',width:'50%'}}
        />
        <Button variant="outlined" sx={{display:'block', marginTop:'10px'}} mt="10px">Raplay</Button>

      </Box>
      
      <List sx={{ width: '100%', bgcolor: 'background.paper' , marginTop:'30px'}} >
      <Typography>
   All Comments 
      </Typography>
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
                sx={{ display: 'inline' }}
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
            R
          </Avatar>


        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
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
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Container>

      </>
  )
}

export default Details
