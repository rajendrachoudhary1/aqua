import "./contacttitle.css";

const Contacttitle = () => {
  return (
    <>
      <div className="contactContainerform">
        <h1>Contact us</h1>
        <p>
          Feel free to reach out to our team and make your ideas a reality.
          Provide us with your most innovative solutions and required software
          designs, and see the magic. Our customer support team is available at
          your service 24/7.
        </p>
      </div>
      <div className="form-container">
        <form action="">
          <div className="username">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              required
            />
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="userinfo">
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
            <label htmlFor="">Phone No</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile No"
              required
            />
          </div>
          <div className="usermessage">
            {/* <label htmlFor="">Message</label> */}
            <textarea name="message" id="" cols="60" rows="5" placeholder="Enter your message..."></textarea>
          </div>
          <div className="btn"><button>submit</button></div>
        </form> 
      </div>
    </>
  );
};

export default Contacttitle;
