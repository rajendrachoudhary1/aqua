import "./contacttitle.css";
import React from "react";
const Contacttitle = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "62a6d26f-f274-47fe-9c96-857b38e18338");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
        <form onSubmit={onSubmit}>
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
        <span>{result}</span> 
      </div>
    </>
  );
};

export default Contacttitle;
