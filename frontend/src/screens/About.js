import React from 'react'
import ExampleProfilePic from "../assets/example_profile_pic.jpg"
import BlockQuote from "../components/BlockQuote.js"
import "../styles/about.css"

const About = () => {
  return (
    <>
      <div className="container">
        <div className="mt-4 mb-4 row">
          <div className="img_style col-lg-6 col-xl-6 col-md-12 col-sm-12">
            <img src={ExampleProfilePic} alt="alans profile pic" />
          </div>
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
            <div className="bio">
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium. Volutpat lacus laoreet non curabitur gravida. Nam at lectus urna duis convallis convallis. Arcu dictum varius duis at consectetur lorem donec. Urna et pharetra pharetra massa massa ultricies. Arcu non sodales neque sodales ut etiam. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Tortor posuere ac ut consequat semper viverra. Malesuada nunc vel risus commodo viverra maecenas. Consectetur a erat nam at lectus urna duis convallis convallis. Morbi blandit cursus risus at ultrices. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu.
          </p>
              <p>
                <br />Ac ut consequat semper viverra nam libero justo. Eget mi proin sed libero enim sed faucibus turpis. Ut venenatis tellus in metus. Porta lorem mollis aliquam ut porttitor leo a. Felis imperdiet proin fermentum leo vel orci porta. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Sed viverra tellus in hac habitasse. Elementum nibh tellus molestie nunc non blandit.
          </p>
              <br />
              <br />
              <BlockQuote
                quote="A skilled and honest man of service is more rare than a diamond"
                citation="Anonymous" />
            </div>
          </div>
        </div>
      </div>
      <div className="bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12">
              <h2 className="text-center">
                <span className="ads">Call Now</span>
              </h2>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12">
              <h2 className="text-center">
                <span className="phone-number">781-363-0937</span>
              </h2>
            </div>
            <div className="button-col col-lg-4 col-xl-4 col-md-12 col-sm-12">
              <button type="button" className="btn btn-success" style={{ fontSize: "28px" }} >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About