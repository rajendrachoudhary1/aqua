import "./privacy.css"

const Privacy = () => {
  return (
    <div className='privacyContainer'>
      <h3>Privacy Policy & Disclaimer</h3>
      <p>
        Aquabenz (“Aquabenz,” “we,” “our,” or “us”) values your privacy and is
        committed to protecting your personal information. This Privacy Policy
        outlines how we collect, use, and safeguard your information when you
        interact with our website, products, and services.
      </p>
      <h3>Information We Collect</h3>
      <p>
        When you visit our website, contact us, or make a purchase, we may
        collect the following types of information:
        <ul  className="dot-list">
          <li>
            <h4>Personal Information:</h4>Name, email address, phone number, and
            shipping/billing address.
          </li>
          <li>
            <h4>Order Information:</h4> Purchase details, payment information, and
            delivery preferences.
          </li>
          <li>
            <h4>Device Information:</h4>  IP address, browser type, operating system, and
            browsing activity.
          </li>
          <li>
            <h4>Communications:</h4>  Information provided through inquiries, feedback, or
            customer support.
          </li>
          <li>
           <h4>Cookies and Tracking Technologies:</h4>   Data collected through cookies
            and similar technologies to enhance user experience and analyze
            website performance.
          </li>
        </ul>
      </p>
      <h3>How We Use Your Information</h3>
      <p><ul className="dot-list">
        <li>Provide customer support and respond to inquiries.</li>
        <li>Improve our products, website, and services.</li>
        <li>Send updates, promotions, and marketing materials (with your consent).</li>
        <li>Comply with legal obligations and prevent fraudulent activities.</li>
        </ul></p>


    </div>
  );
};

export default Privacy;
