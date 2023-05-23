import { Link } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footerone from "./Footerone";
import { useState, useEffect } from "react";
import axios from "axios";
import Orderlist from "./Orderlist";
import Addaddress from "./Addaddress";

function Checkout() {
  const [lists, setLists] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const userid = localStorage.getItem("_id");
    console.log("check for summery userid", userid);
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = JSON.stringify({
      userId: userid,
    });
    await axios
      .post("http://admin.rentifi.in:3023/website/order_summery", data, options)
      .then((res) => {
        setLists(res.data.data);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <Header />
      {/* <!-- Start breadcrumb section --> */}
      <section class="breadcrumb__section breadcrumb__bg">
        <div class="container">
          <div class="row row-cols-1">
            <div class="col">
              <div class="breadcrumb__content">
                <h1 class="breadcrumb__content--title text-white mb-10">
                  Checkout
                </h1>
                <ul class="breadcrumb__content--menu d-flex">
                  <li class="breadcrumb__content--menu__items">
                    <Link class="text-white" to="/home">
                      Home
                    </Link>
                  </li>
                  <li class="breadcrumb__content--menu__items">
                    <span class="text-white">Checkout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End breadcrumb section -->

        <!-- Start checkout page area --> */}
      <div class="checkout__page--area section--padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-6">
              <div class="main checkout__mian">
                <form action="#">
                  <div class="checkout__content--step section__contact--information">
                    <div class="section__header checkout__section--header d-flex align-items-center justify-content-between mb-25">
                      <h2 class="section__header--title h3">
                        Contact information
                      </h2>
                      <p class="layout__flex--item">
                        Already have an account?
                        <Link class="layout__flex--item__link" to="/login">
                          Log in
                        </Link>
                      </p>
                    </div>
                  </div>
                  <Addaddress />
                  <div class="order-notes mb-20">
                    <label class="checkout__input--label mb-5" for="order">
                      Order Notes{" "}
                      <span class="checkout__input--label__star">*</span>
                    </label>
                    <textarea
                      class="checkout__notes--textarea__field border-radius-5"
                      id="order"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      spellcheck="false"
                    ></textarea>
                  </div>
                  <div class="checkout__content--step__footer d-flex align-items-center">
                    <Link
                      class="continue__shipping--btn primary__btn border-radius-5"
                      to="/home"
                    >
                      Continue To Shipping
                    </Link>
                    <Link class="previous__link--content" to="/cart">
                      Return to cart
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <Orderlist />
          </div>
        </div>
      </div>
      {/* <!-- End checkout page area --> */}

      <Footerone />
    </div>
  );
}

export default Checkout;
