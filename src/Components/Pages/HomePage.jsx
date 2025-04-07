// import Form from "../FormOld"
import ContactForm from "../ContactForm"
import { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import ImageSlider2 from "./ImageSlider2";
function HomePage() {

  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header>
        <div className="section__container header__container">
          <section id="home" className="imageSlides">
            <video
              autoPlay
              muted
              loop
              src="/v.mp4"
              className="vid"
            >
            </video>
          </section>

          {/* <div className="arrow__down">
            <a href="#footer" className="ri-arrow-down-line"></a>
          </div> */}
          <div className="image__box"></div>
        </div>
      </header>

      <section id="About Us" style={{ marginTop: "500px" }}>
      <h2 style={{fontsize:'30px'}}>About Us</h2>
      <p>Our design philosophy revolves around seamless space integration — bringing together aesthetics and functionality in perfect balance. We believe every space should flow effortlessly, connecting different areas while maintaining their individual purpose. By understanding the site, user needs, and context, we create layouts that are not only visually appealing but also highly efficient and practical. Our aim is to ensure that every corner of the space is thoughtfully utilized, creating harmony between architecture, interiors, and the environment.</p>
      
  
      </section>
      <section id="slider-section">
        <h2>Residential Projects</h2>
        <ImageSlider />   {/* Slider component here */}
      </section>
      <section id="slider-section">
        <h2>Commercial Projects</h2>
        <ImageSlider2 />   {/* Slider component here */}
      </section>


      <section class="work">
     <b>HOW WE WORK?</b> 
    </section>
    <section class="section__container experience__container">
      <div class="experience__image">
        <img src="/plan.png" alt="experience" />
      </div>
      <div class="experience__content">
        <h2 class="section__header">Conceptual Plan</h2>
        <p class="experience__description" style={{ fontSize: '18px', fontWeight: 100 ,color: 'black'}}>
        Every design journey begins with a vision.<br />
         Our process starts with creating a strong conceptual plan that reflects your needs, aspirations, and the essence of the space. <br />
         In this first phase, we communicate our idea with visuals such as vision boards of inspiration photos and materials.<br />
         <u>We understand the site, study the requirements, and translate ideas into thoughtful layouts that define the spatial flow and functionality.</u><br />
         This is the most crucial step where we set the tone and direction for the entire project, ensuring that every detail is aligned with your lifestyle and design sensibility.
        </p>
        
        
      </div>
    </section>
    
    <section class="section__container process__container">
      <div class="process__content">
        <h2 class="section__header">Schematic</h2>
        <div class="process__grid" style={{ fontSize: '18px', fontWeight: 100 ,color: 'black'}}>
          
      Here,  <u> we combine the ideas from the conceptual phase with the space or constraints of a project at a very high level.
        During this phase, we introduce material options, furniture concepts, and loose layouts.</u><br/>
        Our aim is to create a cohesive visual language that reflects your personality and vision while setting a strong foundation for the detailed design stages ahead.
        </div>
      </div>
      <div class="process__image">
        <img src="/schem.png" alt="process" />
      </div>
    </section>
    <section class="section__container experience__container">
      <div class="experience__image">
        <img src="/desdev.png" alt="experience" />
      </div>
      <div class="experience__content" >
        <h2 class="section__header">Design Development</h2>
        <p class="experience__description" style={{ fontSize: '18px', fontWeight: 100 ,color: 'black'}}>
        This is the phase where we begin to figure out how the concepts work in detail. 
       <u>We learn about constraints and limitations as they relate to things like the building’s mechanical, plumbing, and structural needs.</u> <br/>
        We also flush through ADA requirements and layouts.
        Every element is thoughtfully crafted to ensure functionality, comfort, and aesthetics come together seamlessly.
        This stage ensures that every space is not only beautiful but also functional and ready for real-world implementation.
        </p>
        
        
      </div>
    </section>
    


<ContactForm />
   

  

    {/* <section class="section__container subscribe__container">
      <h2 class="section__header">Subscribe to get the latest news about us</h2>
      <p class="subscribe__description">
        We recommend you to subscribe to our newspaper, enter your email below
        to get our daily update about us.
      </p>
      <form>
        <input type="text" id="email" placeholder="Enter your email address" />
        <button type="button" onclick="chk_email()">Subscribe</button>
      </form>
    </section> */}

    </div>
  )
}

export default HomePage