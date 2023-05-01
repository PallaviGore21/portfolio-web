import React, { useCallback } from 'react'
 import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import "./index.css";
// import './../public/assets/pallavigoreCV'
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const Home = () => {
    const init = useCallback(
      async(engine) => {
        await loadFull(engine)
      },
      [],
    )
  //  const nil = ReactPDF.render(<Home />, `${__dirname}/src\public\assets\pallavigoreCV.pdf`);

  return  <>
         <Particles  options={{
           "particles": {
             "number": {
               "value": 6,
               "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#1b1e34"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 160,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 10,
        "size_min": 40,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 8,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 500,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 1,
        "opacity": 8,
        
        
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}} init={init} />

 <div className='row bg-primary' style={{zIndex:5000}}  >
 <div className="vh-100 wh-100">
                            <div className='col-sm-12 mt-5'>
                             <div className='mt-5 text-center text-light'>
                                 <h1 id='first'  class="welcome">_Hello</h1>
                                 <h3>I'm</h3>
                                 <TypeAnimation
                                     sequence={[
                                         'Pallavi Gore',
                                         1000,
                                         'Web Designer',
                                         2000,
                                         'ReactJs Developer',
                                         1000,
                                        
                                         console.log('Done typing!')
                                     ]}
                                    
                                     wrapper="div"
                                     cursor={true}
                                     repeat={Infinity}
                                     style={{ fontSize: '4rem' }}
                                 />
                                 <h5 id='third '>From Aurangabad Maharastra</h5>

                                 <a href="src\public\assets\pallavigoreCV.pdf" download>
                                 <button  style={{zIndex:9999}} id='btn'  className='mt-4 btn btn-light rounded-pill'>Download CV <FileDownloadOutlinedIcon/></button>
                                        </a>
                                 </div>
                           
                         </div>
                         <div className='col-sm-6'>
                            {/* <img src="https://xd.adobe.com/ideas/wp-content/uploads/2018/09/ADOBE-114-18_CPRO_build-your-portfolio_hero-1257x550.jpg" alt="" height={550} width={630} /> */}
                            {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7664d678602623.5dd7d620bf216.jpg" alt="" height={550} width={650} /> */}
                         </div>
   


</div>
                         </div> 
        
  </>
}

export default Home