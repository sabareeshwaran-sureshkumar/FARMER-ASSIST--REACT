import React,{useRef} from 'react'
import './About.css'
import image1 from '../../assets/Image_1.jpeg'
import image2 from '../../assets/Image_2.jpeg'
import image3 from '../../assets/Image_3.jpeg'
import image4 from '../../assets/Image_4.jpeg'
import image5 from '../../assets/Image_5.jpeg'
import image6 from '../../assets/Image_6.jpeg'
import image7 from '../../assets/Image_7.jpeg'
import image8 from '../../assets/Image_8.jpeg'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

const Programs = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -87.5) { // Adjusted to accommodate 8 images (100 / 8 = 12.5)
            tx -= 12.5; // Adjusted for 8 images
        }
        slider.current.style.transform = `translate(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 12.5; // Adjusted for 8 images
        }
        slider.current.style.transform = `translate(${tx}%)`;
    };
  return (
    
    <div className='testimonials' id='features'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
        <li><div className="slide">
        <img src={image1} alt=''/>
        <div className="content">
            <h1>Crop Recommendation</h1>
            <p>Get personalized crop recommendations based on factors like soil type, climate, and historical yield data.<br/>Make informed decisions about crop selection to maximize productivity and profitability.</p>
        </div>
       </div></li>
      <li><div className="slide">
        <img src={image2} alt=''/>
        <div className="content">
            <h1>Plant Disease Prediction</h1>
            <p>Predict potential diseases affecting crops using advanced machine learning algorithms.<br/>
Receive early warnings and actionable insights to prevent disease outbreaks and minimize crop loss.</p>
        </div>
      </div></li>
      <li><div className="slide">
        <img src={image3} alt=''/>
        <div className="content">
            <h1>Rainfall Prediction</h1>
            <p>Access accurate rainfall forecasts and predictions for your region.<br/>Plan irrigation schedules and farming activities more effectively to optimize water usage.</p>
        </div>
        
      </div></li>
      <li><div className="slide">
        <img src={image4} alt=''/>
        <div className="content">
            <h1>Surface Water Level Predictor</h1>
            <p>Predict surface water levels in agricultural areas to assess the risk of flooding or drought.<br/>Implement water management strategies to mitigate the impact of extreme weather events.</p>
        </div>
        
      </div></li>
      <li><div className="slide">
        <img src={image5} alt=''/>
        <div className="content">
            <h1>Crop Yield Prediction</h1>
            <p>Predict crop yields based on various factors such as soil quality,ph level, weather conditions, and farming practices.<br/>Plan harvest schedules and resource allocation for optimal yield outcomes.</p>
        </div>
      </div></li>
      <li><div className="slide">
        <img src={image6} alt=''/>
        <div className="content">
            <h1>PH level</h1>
            <p>Predict crop yields based on various factors such as soil quality,ph level, weather conditions, and farming practices.<br/>Plan harvest schedules and resource allocation for optimal yield outcomes.</p>
        </div>
      </div></li>
      <li><div className="slide">
        <img src={image7} alt=''/>
        <div className="content">
            <h1>HUMIDITY</h1>
            <p>Predict crop yields based on various factors such as soil quality,ph level, weather conditions, and farming practices.<br/>Plan harvest schedules and resource allocation for optimal yield outcomes.</p>
        </div>
      </div></li>
      <li><div className="slide">
        <img src={image8} alt=''/>
        <div className="content">
            <h1>Soil Moisture Prediction</h1>
            <p>Monitor soil moisture levels to ensure optimal conditions for crop growth.<br/>Implement precise irrigation strategies to prevent overwatering or drought stress.</p>
        </div>
      </div></li></ul>
    </div>
    </div>
  )
}

export default Programs
