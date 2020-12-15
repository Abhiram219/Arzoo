import React, {useState, } from 'react';
import Header from '../header/index'
import { StarFilled, LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'

import './index.scss'

const Home = () => {

  const imagesCount = new Array(4).fill(0);
  const faqs = [
    {
      'title' : 'Specification',
      'description' : 'Specification description'
    },
    {
      'title' : 'Features',
      'description' : 'Features description'
    },
    {
      'title' : 'Description',
      'description' : 'Description description'
    }
  ];

  const highlights = [
    'Resolution : HD Ready 1366 * 768 Pixels',
    'Sound Output : 20W',
    'Refresh Rate : 50 Hz' 
  ]
  
  const [faqToggle, setFaqToggle] = useState(new Array(faqs.length).fill(false));

  const handleToggleClick = (index) => {
    let currFaqState = faqToggle;
    currFaqState[index] = !faqToggle[index];
    setFaqToggle(currFaqState);
  }



  return(
    <React.Fragment>
      <Header />
      
      <div className="home">

        <div className="home__container1">
          <div className="breadCrumb">
            <div className="breadCrumb__item"> Home </div>
            <div className="breadCrumb__item"> TVs </div>
            <div className="breadCrumb__itemSelected"> LG 55" Smart </div>
          </div>

          <div className="home__imageContainer">
            <div className="home__imageSelected"> <img src="https://prod-cowork-consumable.s3-ap-southeast-1.amazonaws.com/images/LG_TV.png"></img> </div>
              
            <div className="home__imageView"> View 360 </div>
              <div className="home__imagesSubContainer">
                <LeftCircleFilled style={{ fontSize: 32, cursor:'pointer' }}/>
                {imagesCount.map( (item,index) => {
                  return <div key={index} className="home__image"> <img></img> </div>
                })}
                <RightCircleFilled style={{ fontSize: 32, cursor:'pointer' }} />
              </div>
          </div>

          <div style={{width:'100%'}}>
            <div className="home__options">
              <div className="home__optionsItem"> Add to Cart </div>
              <div className="home__optionsItem-selected"> Buy Now </div>
            </div>
          </div>
        </div>



        <div className="home__container2">

          <div className="item">  

            <div className="item__name"> 
              LG R 202F 80cm (32 inch) HD Ready LED TV 
              <span className="item__modelNo"> (KLV-32R202F) </span>
            </div>

           <div className="customRow">
            <div className="item__priceContainer">
              <div className="item__discountPrice">₹ 89,999</div>
              <div className="item__origianlPrice"> ₹ 98,999</div>
              <div className="item__discountPercentage"> 35% </div>
            </div>

            <div className="item__reviewContainer">
              <StarFilled style={{color: '#008dff'}}/>
              <StarFilled style={{color: '#008dff'}}/>
              <StarFilled style={{color: '#008dff'}}/>
              <StarFilled style={{color: '#008dff'}}/>
              
              <span style={{marginLeft:8}}> 4608 Reviews </span>

            </div>

           </div>
          </div>

          <div className="offer__container">
            <div className="offer__title"> Available Offers </div>
            <div className="offer__itemContainer">
              <div className="offer__item"> Bank Offer 10% instant discount with HDFC bank </div>
              <div className="offer__item"> Credit Card and Credit/Debit EMI transactions </div>
              <div className="offer__item"> Bank Offer 10% instant discount with HDFC bank </div>
              <div className="offer__item"> Debit Card transactions <a href='#'> T&C </a> </div>
              <div className="offer__ViewMore"> View 4 more offers</div>
            </div>
          </div>

          <p> 1 year manufacture warranty </p>

          <div className="home__deliveryContainer"> 
            <div className="home__itemInfoTitle"> Delivery </div>
            <div className="home__deliverySubContainer"> 
              <input type='number' placeholder="Enter pincode" className="home__deliveryInput"></input>  
              <RightCircleFilled style={{color: '#008dff', fontSize:24}}/> 
            </div>
          </div>

          <div className="customRow">
            <div className="home__highlightsContainer">
                <div className="home__itemInfoTitle"> Highlights </div>
                <div className="home__highlightsItemsContainer">
                  {highlights.map( (item,index) => <div key={index} className="home__highlightsItem">{item}</div> )}
                </div>
            </div>
            <div className="home__highlightsContainer">
              <div className="home__itemInfoTitle"> Seller </div>
              <div className="home__highlightsItemsContainer">
                <div className="home__highlightsItem">White Orange, HSR</div> 
                <a href="#" > View more sellers </a>
              </div>
            </div>
          </div>

          <div className="faqs">
            {
              faqs.map( (item,index) => {
                return (
                  <div className="faqs__item" onClick={()=>{handleToggleClick(index)}}> 
                    <div className="faqs__title"> 
                      {item.title}  
                      <span> {faqToggle[index] ?
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path fill="#000" fillRule="evenodd" d="M4.5 11.5v1h15v-1z"></path>
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#000" fillRule="evenodd" d="M11.5 4.5v7h-7v1h7v7h1v-7h7v-1h-7v-7z"></path>
                          </svg>
                        } 
                      </span>
                     </div>
                    
                    {faqToggle[index] ? <div className="faqs__description"> {item.description} </div> : '' }
                  </div>
                )
              } )
            }
          </div>
        </div>

      </div>

    </React.Fragment>
  )
}

export default Home;