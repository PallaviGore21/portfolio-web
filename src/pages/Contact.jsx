import React from 'react'
import Button from '@mui/material/Button';


const Contact = () => {
    let linkendProfile="https://www.linkedin.com/in/pallavi-gore-47a7251a1/"
  return <>
  <div className='text-light pt-5'>
             <div className='row'>
                 <div className='col-sm-6'>
                     <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120073.07457602382!2d75.23516031228274!3d19.87024401440609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbd7267313c37%3A0x3cb077158fca7928!2sD%20Mart!5e0!3m2!1sen!2sin!4v1660474249580!5m2!1sen!2sin"
                         width="650" height="580" allowfullscreen="" loading="lazy"
                         referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </div>
                 <div className='col-sm-2 text-primary'>
                     <h3>Address :</h3>
                     <br />
                     <div>Pisadevi Road</div>
                     <div>Harsul, Aurangabad</div>
                     <br />
                     <h3>Follow :</h3>
                     <br />
                     <div class="contact">
                         {/* <h3><i class="bi bi-instagram"></i></h3> */}
                         <h3><a href={linkendProfile}><i  class="bi bi-linkedin"></i></a></h3>
                         <h3><i class="bi bi-twitter"></i></h3>
                         <h3><i class="bi bi-github"></i></h3>
                     </div>
                 </div>

                 <div className='col-sm-4 text-primary'>
                     <h1>Get In Touch</h1>
                     <div class="container pt-3">
                         <div className='row'>
                             <div className='col-sm-6'>
                                 <div >Name</div><input  class="form-control border-info" type="text " />
                             </div>
                             <div class="col-sm-6">
                                 <div >Number</div><input class="form-control border-info " type="text " />
                             </div>
                         </div>
                         <br />
                         <div className='row'>
                             <div className='col-sm-12'>
                                 <div >Email</div><input class="form-control border-info" type="text " />
                             </div>
                         </div>
                         <div class="row">
                             <div class="col-sm-12">
                                 <div >Your Message</div><textarea class="form-control border-info pt-5" type="text" />
                             </div>
                         </div>
                     </div>
                     <br />
                     <div className='row'>
                         <div className='col-sm-6'></div>
                         <div className='col-sm-6'>
                         <Button variant="contained">Send Message</Button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
  
  
  </>
}

export default Contact