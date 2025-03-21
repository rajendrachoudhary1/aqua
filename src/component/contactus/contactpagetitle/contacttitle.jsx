import "./contacttitle.css";
import React from "react";
const Contacttitle = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0f074b8c-8bf7-4888-9586-b98340893855");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
          Turn your vision into reality with Aquabenz! Whether you have
          innovative ideas for faucet and shower designs or need expert
          recommendations, our team is here to help. Our 24/7 customer support
          ensures a seamless experience — because your perfect bathroom deserves
          the best.
        </p>
        <p className="phone">Phone No : 9166748923 </p>
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
            <textarea
              name="message"
              id=""
              cols="60"
              rows="5"
              placeholder="Enter your message..."
            ></textarea>
          </div>
          <div className="btn">
            <button>submit</button>
          </div>
        </form>
        <span>{result}</span>
      </div>
    </>
  );
};

export default Contacttitle;
