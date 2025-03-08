import React, { useState } from "react";
import "./aquafaq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Aquafaq = () => {
  const [ans, setans] = useState(false);
  const [ans1, setans1] = useState(false);
  const [ans2, setans2] = useState(false);
  const [ans3, setans3] = useState(false);
  // const ansvisible= ( ) =>{
  //     setans(prev=>!prev);
  // }

  return (
    <div className="aquaContainer">
      <div className="faq">
        <h1>Frequently asked Questions</h1>
        <div className="question">
          <p onClick={() => setans((prev) => !prev)} className="ques">
            {" "}
            Do Aquabenz products come with a warranty?{" "}
            <span className={ans ? "rotate-icon" : ""}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </p>
          {ans ? (
            <p className="ans">
              Yes! We offer a warranty on all our products to ensure customer
              satisfaction. The warranty period varies based on the product
              type—please check the product manual or contact our support team
              for specific details.
            </p>
          ) : null}
        </div>
        <div className="underline-faq"></div>
        <div className="question">
          <p onClick={() => setans1((prev) => !prev)} className="ques">
            {" "}
            What makes Aquabenz faucets and showers different from other brands?{" "}
            <span className={ans1 ? "rotate-icon" : ""}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </p>
          {ans1 ? (
            <p className="ans">
              Aquabenz products are designed with a perfect blend of style,
              durability, and innovation. We use high-quality materials like
              solid brass and stainless steel to ensure long-lasting
              performance.
            </p>
          ) : null}
        </div>
        <div className="underline-faq"></div>
        <div className="question">
          <p className="ques" onClick={() => setans2((prev) => !prev)}>
            {" "}
            Are Aquabenz products easy to install?
            <span className={ans2 ? "rotate-icon" : ""}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </p>
          {ans2 ? (
            <p className="ans">
              Yes! Our faucets and showers come with detailed installation
              guides and are designed for easy DIY installation. However, for
              complex setups, we recommend hiring a professional plumber to
              ensure proper fitting and performance.
            </p>
          ) : null}
        </div>
        <div className="underline-faq"></div>
        <div className="question">
          <p className="ques" onClick={() => setans3((prev) => !prev)}>
            {" "}
            How do I choose the right faucet or shower for my bathroom?
            <span className={ans3 ? "rotate-icon" : ""}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </p>
          {ans3 ? (
            <p className="ans">
              When selecting a faucet or shower, consider factors like water
              pressure, finish, installation type, and features (such as
              thermostatic controls or multi-function sprays). Aquabenz offers a
              wide range of modern, classic, and luxury designs to suit
              different bathroom styles.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Aquafaq;
