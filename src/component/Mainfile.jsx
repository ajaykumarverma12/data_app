import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';
import '../index.css';
import App from '../App';
import CardComponent from './CardComponent';
import SliderImage from './SliderImage';
import Footer from './Footer';
import Dailydeals from './Dailydeals';
import Popularcard from './Popularcard';
import Vegatbles from './Vegatbles';
import Fruit from './Fruit';
import Babycare from './Babycare';
import Persnalcare from './Persnalcare';
import Babycareimage from "../lib/Babycareimage";
import CardImage from "../lib/CardImage";
import Dailydealimage from "../lib/Dailydealimage";
import Fruitimage from "../lib/Fruitimage";
import Persnalcareimage from "../lib/Persnalcareimage";
import Popularimage from "../lib/Popularimage";
import Vegatblesimage from "../lib/Vegatblesimage";
import MenuImage from './MeunImage';
import Addredlabeltea from './Addredlabeltea';
import Addredlabelteaimage from "../lib/Addredlabelteaimage";
import Bestsellingimage from "../lib/Bestsellingimage";
import Bestselling from './Bestselling';
import { Daily_deals } from "../lib/utils";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Mainfile() {
  const [data, setdata] = useState(false)
  const bgChnagepage = () => {
    setdata(true)
    window.location.href = 'singleitem'
  }
  return (
    <div>
      <div style={{color: '#FFFFFF', boxShadow: '0px 1px 8px  #00000014',padding:'10px' }}>

<SliderImage />
</div>
      <MenuImage />
      <div style={{ color: '#FFFFFF', boxShadow: '0px 0px 5px  #00000014',padding:'10px' }}>
      <h2 className="discountcss" >Discount Offer
 <Button variant="success" className="buttoncard"  >View All</Button></h2>
 
   

{CardImage.map((val) => {
        return (
          <CardComponent  
            imgsrc={val.imgsrc}
            categry={val.category_item}
            offvalue={val.off}
          />
        )
      })}
</div>
<div style={{marginTop:'350px'}}></div>
<div style={{color: '#FFFFFF', boxShadow: '0px 1px 5px  #00000014',padding:'5px' }}>

      <h2 className="discountcss">Daily Deals
 <Button variant="success" className="buttoncard" onClick={bgChnagepage} >View All</Button></h2>
 </div>
      {Addredlabelteaimage.map(redtea)}
      <div style={{color: '#FFFFFF', boxShadow: '0px 1px 8px  #00000014',padding:'10px' }}>

      <SliderImage />
      </div>
      <div style={{marginTop:'10px'}}></div>

      <div style={{color: '#FFFFFF', boxShadow: '0px 1px 5px  #00000014',padding:'10px' }}>

      <h2 className="discountcss">Best Selling
 <Button variant="success" className="buttoncard" >View All</Button></h2>
 </div>
      {Bestsellingimage.map(best)}
      <div style={{marginTop:'350px'}}></div>

      <div style={{color: '#FFFFFF', boxShadow: '0px 1px 5px  #00000014',padding:'10px' }}>

      <h2 className="discountcss">Most Popular
 <Button variant="success" className="buttoncard" >View All</Button></h2>
 </div>
      {Popularimage.map(popular)}
      <div style={{color: '#FFFFFF', boxShadow: '0px 0px 8px  #00000014',padding:'10px' }}>

      <SliderImage />
      </div>
      <div style={{color: '#FFFFFF', boxShadow: '0px 0px 8px  #00000014',padding:'10px' }}>

      <h2 className="discountcss">Vegetables
 <Button variant="success" className="buttoncard" >View All</Button></h2>
 </div>
      {Vegatblesimage.map(veg)}
      <div style={{color: '#FFFFFF', boxShadow: '0px 0px 8px  #00000014',padding:'10px' }}>

      <h2 className="discountcss">Fruits
 <Button variant="success" className="buttoncard" >View All</Button></h2>
 </div>
      {Fruitimage.map(fruits)}
      <div style={{color: '#FFFFFF', boxShadow: '0px 0px 8px  #00000014',padding:'10px' }}>

      <SliderImage />
      </div>
      <div style={{color: '#FFFFFF', boxShadow: '0px 0px 8px  #00000014',padding:'10px' }}>

      <h2 className="discountcss">Baby Care
 <Button variant="success" className="buttoncard" >View All</Button></h2>
 </div>
      {Babycareimage.map(Baby)}
      <div style={{color: '#FFFFFF', boxShadow: '0px 0px 8px  #00000014',padding:'10px' }}>

      <h2 className="discountcss">Persnal Care
 <Button variant="success" className="buttoncard" >View All</Button></h2>
 </div>
      {Persnalcareimage.map(pers)}

      <Footer />
    </div>
  );
}
function redtea(val) {
  return (
    <Addredlabeltea
      imgValue={val.imgValue}
      item1={val.item1}
      price={val.price}
      save={val.save}
      MRP={val.MRP}
      rating={val.rating}
      seller={val.seller}

    />
  );
};

function best(val) {
  return (
    <Bestselling
      imgValue={val.imgValue}
      item1={val.item1}
      price={val.price}
      save={val.save}
      MRP={val.MRP}
      rating={val.rating}
      seller={val.seller}

    />
  );
};




function popular(val1) {
  return (
    <Popularcard
      imgValue1={val1.imgValue1}
      item2={val1.item2}
      offerItem={val1.offerItem}
      priceValue={val1.priceValue}
      save1={val1.save1}
      MRP1={val1.MRP1}
      rating={val1.rating}

    />
  );
};
function veg(val1) {
  return (
    <Vegatbles
      img_Veg={val1.img_Veg}
      item_veg={val1.item_veg}
      offer_veg={val1.offer_veg}
      price_veg={val1.price_veg}
      save_veg={val1.save_veg}
      MRP_veg={val1.MRP_veg}
      item_weight={val1.item_weight}
      rating={val1.rating}

    />
  );
};
function fruits(val1) {
  return (
    <Fruit
      img_fruit={val1.img_fruit}
      item_fruit={val1.item_fruit}
      offer_fruit={val1.offer_fruit}
      price_fruit={val1.price_fruit}
      save_fruit={val1.save_fruit}
      MRP_fruit={val1.MRP_fruit}
      item_weight={val1.item_weight}
      rating={val1.rating}

    />
  );
};
function Baby(val1) {
  return (
    <Babycare
      img_care={val1.img_care}
      item_care={val1.item_care}
      offer_care={val1.offer_care}
      price_care={val1.price_care}
      save_care={val1.save_care}
      MRP_care={val1.MRP_care}
      rating={val1.rating}

    />
  );
};
function pers(val1) {
  return (
    <Persnalcare
      img_care1={val1.img_care1}
      item_care1={val1.item_care1}
      offer_care1={val1.offer_care1}
      price_care1={val1.price_care1}
      save_care1={val1.save_care1}
      MRP_care1={val1.MRP_care1}
      rating={val1.rating}

    />
  );
};



export default Mainfile;
