import React from "react";
import Image from "next/image";
import payment_option_img from '@assets/img/product/icons/payment-option.png';

const DetailsBottomInfo = ({sku,category}) => {
  return (
    <>
      {/* product-details-query */}
      <div className="tp-product-details-query">
        <div className="tp-product-details-query-item d-flex align-items-center">
          <span>SKU: </span>
          <p>{sku}</p>
        </div>
        <div className="tp-product-details-query-item d-flex align-items-center">
          <span>Category: </span>
          <p>{category}</p>
        </div>
      </div>

      {/* product-details-msg */}

      <div className="tp-product-details-msg mb-15">
        <ul>
          <li>30 days easy returns</li>
          <li>Order yours before 2.30pm for same day dispatch</li>
        </ul>
      </div>
      {/* product-details-payment */}
      <div className="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between">
        <p>
          Guaranteed safe <br /> & secure checkout
        </p>
        <Image src={payment_option_img} alt="payment_option_img" />
      </div>
    </>
  );
};

export default DetailsBottomInfo;