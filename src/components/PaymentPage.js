import React, { useState } from 'react'
import '../style.css'
import { Resources } from '../Resources'
import { mockdata } from '../MockData/mockdata'

function PaymentPage() {


    const [price,setPrice] = useState("0");
    // const [isClicked,setIsClicked] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(null);

    let discounted = 18500 - price;


    function handleClick(prices,index)
    {
        setPrice(prices);
       // setIsClicked(true);
       if (clickedIndex === index) {
        setClickedIndex(null);
      } else {
        setClickedIndex(index);
      }
    }

    


    
    
  return (
    <>
    <div className='paymentPage'>


        <div className='leftContent'>

            <div className='leftContentHead'>
            Access curated courses worth

            </div>
            <div style={{justifyContent:"flex-start"}}>
            
            <img style={{marginRight:"150px"}} height={"70px"} width={"630px"} src ={Resources.images.frame1}></img>
            </div>

            <div className='LeftBody'>
                <div className='features'>
                    
                        <img className='imagesLeft' src = {Resources.images.book}></img>
                        <div className='Featuresright'>
                            <p className='blueFeature'>100+ </p>
                            <p className='whiteText' style={{marginLeft:"10px"}}> Job Relevant Courses</p>
                            
                        </div>
                    </div>
                    <div className='features'>
                    
                        <img className='imagesLeft' src = {Resources.images.time}></img>
                        <div className='Featuresright'>
                            <p className='blueFeature'>20000+ </p>
                            <p className='whiteText' style={{marginLeft:"10px"}}> Hours of Content</p>
                            
                        </div>
                    </div>
                    <div className='features'>
                    
                        <img className='imagesLeft' src = {Resources.images.live}></img>
                        <div className='Featuresright'>
                            <p className='blueFeature'>Exclusive </p>
                            <p className='whiteText' style={{marginLeft:"10px"}}>Webinar Access</p>
                            
                        </div>
                    </div>
                    <div className='features'>
                    
                        <img className='imagesLeft' src = {Resources.images.degree}></img>
                        <div className='Featuresright'>
                            
                            <p className='whiteText'> Scholarship worth </p>
                            <p className='blueFeature' style={{marginLeft:"10px"}}> &#x20B9;94,000 </p>
                            
                        </div>
                    </div>
                    <div className='features'>
                    
                        <img className='imagesLeft' src = {Resources.images.ads}></img>
                        <div className='Featuresright'>
                            <p className='blueFeature'>Ad Free</p>
                            <p className='whiteText' style={{marginLeft:"10px"}}>learing Experience</p>
                            
                            
                        </div>
                    </div>
                




            </div>
                
        
            
            

        </div>

        <div className='rightContent'>
            <div className='paymentSection'> 

            <div className='TopHeader'>
                <div className='CircleText'>
                <div className='circle'>
               <img src ={Resources.images.circle1}></img>
             
                </div>
                <div> SignUp</div> 


                </div>
                <div className='CircleText'>
                <div className='circle'><img src ={Resources.images.circle2}></img>

                </div>
                <div> Subscribe</div>

                
                

                </div>
               
            </div>
            <div className='HeaderText'>Select your subcription plan</div>
     <div className='PaymentOption1'>

        <div className='offerHighlighter'> 
        Offer Expired
        </div>

            <div className='SubscribtionTab'>
                <div className='SelectCircle'>
                    <img src = {Resources.images.radio}></img>
                    


                    </div>
                    <div className='TypeOfSubscription'>
                      <div style={{marginTop:"10px",fontWeight:"600"}}>  12 Month Subscribtion
                        </div>  
                   
                    <div className='OfferPriceEnd'>

                        <div className='OfferText'>
                       <div className='OfferTotal' >Total</div>
                            <div className='OfferNo'>  &#x20B9;19 </div>

                        </div>
                        <div className='PricePerMonth'>
                        &#x20B9;8

                            <span className='perMonth'>/mon</span>

                        </div>

                    </div>

                    


                </div>





            </div>

        


     </div>

{

    mockdata.map((mock)=>(
        

        <div className={clickedIndex === mock.id ? 'paymentIsClicked' :'PaymentOption2'} key = {mock.id} onClick={()=>handleClick(mock.price,mock.id)}>

        {mock.isRecommended ? (<div className='offerHighlighter2'> 
        Recommended
        </div>) : (<div style={{marginTop :"16px"}}></div>)}

            <div className='SubscribtionTab'>
                <div className='SelectCircle'>
                    <img src = {`${clickedIndex === mock.id ? Resources.images.check : Resources.images.uncheck }`}></img>
                    


                    </div>
                    <div className='TypeOfSubscription'>
                      <div style={{marginTop:"10px",fontWeight:"600"}}>  {mock.time}
                        </div>  
                   
                    <div className='OfferPriceEnd'>

                        <div className='OfferText'>
                       <text className='OfferTotal' >Total</text>
                            <div className='OfferNo'>  &#x20B9;{mock.price} </div>

                        </div>
                        <div className='PricePerMonth'>
                        &#x20B9;{mock.pricePerMonth}

                            <span className='perMonth'>/mon</span>

                        </div>

                    </div>

                    


                </div>





            </div>

        


     </div>
    ))
}

<div className='LineBreaker'></div>

<div className='Subscription'>
    <div className='Fee'>Subscription Fee</div>
    <div className='Price'> &#x20B9;18,500</div>
</div>

<div className='LimitedOfferContainer'>


<div className='LimitedOffer'>
    <div className='outerArea'>

    

    <div  className='LimitedOfferHeader'>
    <div className='Offer'>Limited Time Offer</div>
    <div className='Price'> - &#x20B9;{discounted}</div>

    </div>

    <div className='LimitedOfferDetails'>
        <img style={{marginRight:"10px"}} src = {Resources.images.clock}></img>
        <div className='Text'>Offer valid till 25th March 2023 </div>
    </div>
    </div>




</div>
</div>


<div className='TotalPrice'>
    <div className='Fee'><div>Total</div>
    <div className ='GST'>(Incl. of 18% GST)</div>
    
    </div>
    <div className='Price'> &#x20B9;{price}</div>
</div>



<div className='Buttons'>
    <div className='leftButton'>
        <p>CANCEL</p>



    </div>
    <div className='rightButton'>
        <p>PROCEED TO PAY</p>

    </div>
    


</div>

<div className='razorpay'>
    <img src = {Resources.images.razorpay}></img>
</div>
     




 


     
    


            
            </div>
            


        </div>

        

    </div>


    </>
  )
}

export default PaymentPage;