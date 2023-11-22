import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import '../Login/Loginpage.css'
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const navigate6=useNavigate();
  const handlesign = ()=>{
      navigate6('/signup')
  }
  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://media.istockphoto.com/id/1254191034/vector/white-first-aid-kit-icon-isolated-with-long-shadow-medical-box-with-cross-medical-equipment.jpg?s=612x612&w=0&k=20&c=sXJW-UqKXgYsQhWV7NFUV1w8wuTk1tlfft2Wr6l9W08="
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Medflix: Your Pathway to Wellness and Care</h4>
            </div>

            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger' onClick={handlesign}>
                Create Account
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">🌟 Welcome to Medflix Medical Shop! 🌟

Your one-stop destination for all your healthcare needs. We're here to make your life healthier and happier. Explore our range of quality medicines and medical essentials from the comfort of your home.

At Medflix, your well-being is our priority. Trust us to deliver reliable and affordable healthcare solutions right to your doorstep.

Thank you for choosing Medflix. Here's to a healthier you!

Best regards,
The Medflix Team

              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Loginpage;