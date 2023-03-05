import React, { useCallback } from 'react'
 import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles';


const Home = () => {
    const init = useCallback(
      async(engine) => {
        await loadFull(engine)
      },
      [],
    )
    
  return<div>

<div className='row bg-primary vh-100' style={{zIndex:5000}}  >
                            <div className='col-sm-6'>
                             <div className='mt-5 text-center text-light'>
                                 <h1 id='first' class="welcome">_Hello</h1>
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
                             </div>
                           
                         </div>
                         <div className='col-sm-6'>
                            <img src="https://xd.adobe.com/ideas/wp-content/uploads/2018/09/ADOBE-114-18_CPRO_build-your-portfolio_hero-1257x550.jpg" alt="" height={550} width={650} />
                            {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7664d678602623.5dd7d620bf216.jpg" alt="" height={550} width={650} /> */}
                         </div>
                         </div>
        <Particles  options={{
             "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 6,
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
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 2
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 1
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
            // particles:{
            //     color:{
            //         value:"#2e5e4c"
            //     },
            //     number:{
            //         value:100
            //     },opacity:{
            //         value:{min:0.3, max:1}
            //     },
            //     shape:{
            //       type:"circle"
            //     },
            //     size:{
            //        value:{min:1,max:5}
            //     },
            //     move:{
            //         direction:"bottomLeft",
            //         enable:true,
            //         speed:{min:3,max:2}
            //     }
            // }
        }} init={init} />
                
                     {/* <div className='container'> */}
                      
                         
                
             
      


  {/* <div className='container'>
    <div className='row'>
      <div className="col-sm-12">
 <img src="https://png.pngtree.com/illustrations/20190322/ourlarge/pngtree-business-office-flat-character-meeting-png-image_37339.jpg" alt=""  />

      </div>
     <div className="col-sm-6">

      </div>
 </div> 
  </div> */}
  </div>
}

export default Home