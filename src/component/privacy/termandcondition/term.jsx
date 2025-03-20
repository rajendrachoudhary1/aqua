import '../privacyandpolicy/privacy.css'

const Term = () => {
  return (
    <div className="privacyContainer">
      <h2>Terms and Conditions</h2>
      <h3>Warranty Coverage:</h3>
      <p>
        <ul className='dot-list'>
          <li>
            This warranty is valid only for the first purchaser of the product.
          </li>
          <li>
            The warranty period begins from the date of purchase and can only be
            claimed if a valid proof of purchase (original invoice) and warranty
            card are presented to authorized service personnel.
          </li>
          <li>
            Repairs or replacements will be carried out by Aquabenz's service
            center or authorized service associates.
          </li>
        </ul>
      </p>

      <h3>Service and Repairs:</h3>
      <p>
        <ul className='dot-list'>
          <li>
            For installations beyond the municipal limits of Aquabenz’s service
            centers or authorized service associates, travel and incidental
            expenses incurred for service personnel will be borne by the
            customer.
          </li>
          <li>
            In case of repair or replacement of any part(s), the warranty will
            continue only for the remaining period of the original warranty.
          </li>
          <li>
            The company reserves the right to retain any replaced part(s) or
            component(s).
          </li>
          <li>
            Replacement of faulty parts will be done with new or functionally
            equivalent parts at Aquabenz’s discretion.
          </li>
        </ul>
      </p>

      <h3>Warranty Exclusions:</h3>
      <p>
        <ul className='dot-list'>
          <li>
            This warranty does not cover damages due to misuse, negligence,
            accidents, improper installation, unauthorized repairs, normal wear
            and tear, lime-scale buildup, or use of aggressive cleaning
            chemicals.
          </li>
          <li>
            Any repair work carried out by unauthorized personnel will void the
            warranty.
          </li>
          <li>
            Components like washers, rubber parts, springs, and other plastic
            items are not covered under warranty.
          </li>
          <li>
            Accessories external to the product are not covered under warranty.
          </li>
          <li>
            The company is not responsible for any consequential or resulting
            liability, damage, or loss to property or life arising directly or
            indirectly out of any defect in Aquabenz products.
          </li>
        </ul>
      </p>

      <h3>Claim Process:</h3>
      <p>
        <ul className='dot-list'>
          <li>
            To claim warranty service, the original invoice and warranty card
            must be shown to the authorized service personnel.
          </li>
          <li>
            The customer must ensure proper maintenance and cleaning of the
            products according to Aquabenz's guidelines to avoid voiding the
            warranty.
          </li>
        </ul>
      </p>

      <h3> General Guidelines:</h3>
      <p>
        <ul className='dot-list'>
          <li>
            Ensure pipelines are straight with minimal bends to support smooth
            water flow.
          </li>
          <li>Regularly clean aerators to maintain perfect foam flow.</li>
          <li>
            Avoid using harsh cleaning agents containing abrasives and acid.
            Instead, use soft sponges or wet cloth with soapy water or diluted
            vinegar.
          </li>
          <li>
            Protect product finishes during construction by covering fittings
            with cloth or poly-pack until actual use.
          </li>
          <li>
            Buy Aquabenz products only from authorized dealers to ensure genuine
            quality.
          </li>
          <li>
            Insist on genuine spares from authorized service centers for repairs
            or replacements.
          </li>
        </ul>
      </p>

      <h3>Limitation of Liability:</h3>
      <p>
        <ul className='dot-list'>
          <li>
            Aquabenz shall not be liable for any indirect, incidental, special,
            or consequential damages arising out of or related to the use of its
            products.
          </li>
          <li>
            Any disputes arising out of this warranty shall be subject to the
            jurisdiction of the courts in [Your City, Country].
          </li>
        </ul>
        By purchasing Aquabenz products, you agree to these terms and
        conditions. For technical support or service assistance, please contact
        your nearest Aquabenz branch office, area representative, or dealer.
      </p>
    </div>
  );
};

export default Term;
