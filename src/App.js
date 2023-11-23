import React from 'react';





// import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App() {
  return ( <Grid item xs={12}>
    <HeaderContainer />
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8} style={{display:'flex',flexWrap:'wrap', gap:'20px'}}>
          {[1,2,3,4,5,6,7,8,9,99].map((i)=>{return( <HomeContainer  imgg={`https://source.unsplash.com/random?${i}`}/>)})}
        </Grid>
      </Grid>
    </Box>
    
    </Grid>);
}
