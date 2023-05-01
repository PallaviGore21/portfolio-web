import { Button } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Particles from 'react-tsparticles'
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  }));

 function About() {
  return <>
 <Particles options={{
            particles:{
                color:{
                    value:"#fff"
                },
                number:{
                    value:100
                },opacity:{
                    value:{min:0.3, max:1}
                },
                shape:{
                  type:"circle"
                },
                size:{
                   value:{min:1,max:5}
                },
                move:{
                    direction:"bottomLeft",
                    enable:true,
                    speed:{min:3,max:5}
                }
            }
        }} />

{/* <div className='bg-primary'> */}
  <div class="container mt-5 ">
             {/* <div className='https://www.beyondintranet.com/images/webinar/Upcoming-Webinar.png'> */}
                 {/* <div className='container pt-2'>
                     <h1 className=' text-primary d-flex justify-content-between'>
                         About Me
                         <i class="bi bi-person-fill" id='icon'></i></h1>
                 </div> */}
                 <div className='row'>
                     <div className='col-sm-6'>
                         <img id='img' src="https://www.beyondintranet.com/images/webinar/Upcoming-Webinar.png" alt="" height={400} />
                     </div>
                     <div className='col-sm-6 text-white'>
                     {/* <h5 className='bg-primary'>I'm Web Developer</h5>
                    
                         <div  className='bg-primary'>Hi! My name is Pallavi gore. I have acquired the skills and necessary  <br />
                             to make your project a success.</div> */}
                     <Box sx={{ width: '100%' }}>
      <Stack spacing={4}>
        <Item><h5><i class="bi bi-person-fill" id='icon'></i>Name: Pallavi Gore </h5></Item>
        <Item><h5><i class="bi bi-calendar3" id='icon'></i>Age:23</h5></Item>
        <Item><h5><i class="bi bi-envelope-fill" id='icon'></i>  Mail: pallavigore21@gmail.com</h5></Item>
        <Item><h5><i class="bi bi-gift-fill" id='icon'></i>Birthday:21.4.1999</h5></Item>
        <Item><h5><i class="bi bi-geo-alt-fill" id='icon'></i>Location : Aurangabad,Maharastra</h5></Item>
        <Item><h5><i class="bi bi-telephone-fill" id='icon'></i>Phone:8329612445</h5></Item>
       </Stack>
    </Box>
                     </div>
                     </div>
                     </div>
                     {/* </div> */}
  </>

}

export default About