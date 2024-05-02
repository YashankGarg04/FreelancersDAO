
import React from 'react';
import styled from 'styled-components';
import Card from '../Components/Cards';
import { InnerLayout } from '../styles/Layout';
import CardComponent from '../Components/Cardss';
// const [showModal, setShowModal] = useState(false);
const PaymentSection = () => {
   return (
      <PaymentStyled id='pricing'>
         <InnerLayout>
            <div>
               <h3 className="small-heading" style={{ color: 'white' }}>
                  An exceptional service, <span>at the right price</span>
               </h3>
               {/* <p className="c-para">Start with our free plan and switch to premium as you grow. </p> */}
            </div>
            <div className='card-con'>
               {/* Wrap each Card with Link */}
              
                  <CardWrapper> 
                     <Card
                        account={'Novice'}
                        amount={'$0'}
                        text={'Manage your business with a simple and efficient account.'}
                        imgSrc={'https://i.postimg.cc/1R0ppF3g/lancer.png'}
                        backgroundColor={'#212235'}
                        button={'Get Started'}
                     />
                  </CardWrapper>
            
              
                  <CardWrapper>
                     <Card
                        account={'Ambassador'}
                        amount={'$10'}
                        text={'Manage your business with a simple and efficient account.'}
                        imgSrc={'https://i.postimg.cc/sxhnxH5H/nft.png'}
                        button={'Get Started'}
                    
                     />
                  </CardWrapper>
            
                  <CardWrapper>
                     <Card
                        account={'Lancer'}
                        amount={'$10'}
                        text={'Manage your business with a simple and efficient account.'}
                        imgSrc={'https://i.postimg.cc/qR9cwft4/ambasdoor-removebg-preview.png'}
                        backgroundColor={'radial-gradient(closest-side, #ff0000, #800080)'}
                        button={'Get Started'}
                     />
                  </CardWrapper>
             
            </div>
         </InnerLayout>
      </PaymentStyled>
   );
}
const PaymentStyled = styled.section`
  .card-con {

    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 3rem;
    padding-top: 6.4rem;
  }

  @media screen and (max-width: 980px) { 
   .card-con {
     grid-template-columns: repeat(2, 1fr); 
   }
 }

 @media screen and (max-width: 689px) {
   .card-con {
     grid-template-columns: repeat(1, 1fr);
   }

   /* Card size adjustments */
   .card-con CardWrapper { 
     max-width: 90%; /* Adjust percentage as needed */
     margin: 1.5rem auto; /* Center cards and add spacing */
   }
 }
`;

// New styled component for individual card hover
const CardWrapper = styled.div`
   transition: transform 0.3s ease;

   &:hover {
     transform: scale(1.05);
   }
`

export default PaymentSection;
