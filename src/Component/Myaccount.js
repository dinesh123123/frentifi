import { Link } from "react-router-dom";
import React from "react";
import Headerone from "./Headerone";
import { useState, useEffect } from "react";
import axios from "axios";

function Myaccount(props) {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    getHomeData();
  }, []);
  const getHomeData = async () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = JSON.stringify({});

    await axios
      .post("http://admin.rentifi.in:3023/website/login", data, options)
      .then((res) => {
        setLists(res.data.data);
        console.log("response", res.data.data);
      })
      .catch((err) => {});
  };
  return (
    <div>
      <Headerone />
      <main class="main__content_wrapper">
        <section class="my__account--section section--padding">
          <div class="container">
            <span class="account__welcome--text">
              Hello, {localStorage.getItem("name")} welcome to your dashboard!
            </span>

            <Link to="/home" class="buying">
              <button class="choiceus__info--btn primary__btn btn__style3">
                Starting Buying
              </button>
            </Link>
            <p class="choiceus__info--btn primary__btn btn__style3">
              {" "}
              Checkout the offers to save more on your new lifestyle.
            </p>

            <div class="my__account--section__inner border-radius-10 d-flex">
              <div class="account__left--sidebar">
                <h3 class="account__content--title mb-20">My Profile</h3>
                <ul class="account__menu">
                  <li class="account__menu--list active">
                    <Link to="/myaccount">Dashboard</Link>
                  </li>
                  <br />

                  <li>
                    <select
                      name="forma"
                      onchange="location = this.value;"
                      style={{ height: "41px;width: 154px;" }}
                    >
                      <option value="">My Subscription</option>
                      <option value="transactions.html">Transactions</option>
                      <option value="invoices.html">Invoices</option>
                      <option value="all-requests.html">All Requests</option>
                      <option value="active-subscriptions.html">
                        Active Items
                      </option>
                      <option value="closed-subscriptions.html">
                        Closed Item
                      </option>
                    </select>
                  </li>
                  <br />

                  <li class="account__menu--list">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <br />

                  <li class="account__menu--list">
                    <Link to="/referral">Referral</Link>
                  </li>
                  <br />

                  <li class="account__menu--list">
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <br />
                  <li class="account__menu--list">
                    <Link to="/myaccount2">Setting</Link>
                  </li>
                  <br />
                  {/* <li class="account__menu--list"><Link to="/login">Log Out</Link></li> */}
                  <br />
                  <br />
                  <button class="account__login--btn primary__btn">
                    Need-Help
                  </button>
                </ul>
              </div>
              <div class="account__wrapper">
                <div class="account__content">
                  <h3 class="account__content--title mb-20">Orders History</h3>
                  <div class="account__table--area">
                    <table class="account__table">
                      <thead class="account__table--header">
                        <tr class="account__table--header__child">
                          <th class="account__table--header__child--items">
                            Order
                          </th>
                          <th class="account__table--header__child--items">
                            Date
                          </th>
                          <th class="account__table--header__child--items">
                            Payment Status
                          </th>
                          <th class="account__table--header__child--items">
                            Fulfillment Status
                          </th>
                          <th class="account__table--header__child--items">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody class="account__table--body mobile__none">
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            #2014
                          </td>
                          <td class="account__table--body__child--items">
                            November 24, 2022
                          </td>
                          <td class="account__table--body__child--items">
                            Paid
                          </td>
                          <td class="account__table--body__child--items">
                            Unfulfilled
                          </td>
                          <td class="account__table--body__child--items">
                            $40.00 USD
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            #2024
                          </td>
                          <td class="account__table--body__child--items">
                            November 24, 2022
                          </td>
                          <td class="account__table--body__child--items">
                            Paid
                          </td>
                          <td class="account__table--body__child--items">
                            Fulfilled
                          </td>
                          <td class="account__table--body__child--items">
                            $44.00 USD
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            #2164
                          </td>
                          <td class="account__table--body__child--items">
                            November 24, 2022
                          </td>
                          <td class="account__table--body__child--items">
                            Paid
                          </td>
                          <td class="account__table--body__child--items">
                            Unfulfilled
                          </td>
                          <td class="account__table--body__child--items">
                            $36.00 USD
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            #2345
                          </td>
                          <td class="account__table--body__child--items">
                            November 24, 2022
                          </td>
                          <td class="account__table--body__child--items">
                            Paid
                          </td>
                          <td class="account__table--body__child--items">
                            Unfulfilled
                          </td>
                          <td class="account__table--body__child--items">
                            $87.00 USD
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            #1244
                          </td>
                          <td class="account__table--body__child--items">
                            November 24, 2022
                          </td>
                          <td class="account__table--body__child--items">
                            Paid
                          </td>
                          <td class="account__table--body__child--items">
                            Fulfilled
                          </td>
                          <td class="account__table--body__child--items">
                            $66.00 USD
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            #3455
                          </td>
                          <td class="account__table--body__child--items">
                            November 24, 2022
                          </td>
                          <td class="account__table--body__child--items">
                            Paid
                          </td>
                          <td class="account__table--body__child--items">
                            Fulfilled
                          </td>
                          <td class="account__table--body__child--items">
                            $55.00 USD
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            #4566
                          </td>
                          <td class="account__table--body__child--items">
                            November 24, 2022
                          </td>
                          <td class="account__table--body__child--items">
                            Paid
                          </td>
                          <td class="account__table--body__child--items">
                            Unfulfilled
                          </td>
                          <td class="account__table--body__child--items">
                            $87.00 USD
                          </td>
                        </tr>
                      </tbody>
                      <tbody class="account__table--body mobile__block">
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            <strong>Order</strong>
                            <span>#2014</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Date</strong>
                            <span>November 24, 2022</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Payment Status</strong>
                            <span>Paid</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Fulfillment Status</strong>
                            <span>Unfulfilled</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Total</strong>
                            <span>$40.00 USD</span>
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            <strong>Order</strong>
                            <span>#2014</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Date</strong>
                            <span>November 24, 2022</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Payment Status</strong>
                            <span>Paid</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Fulfillment Status</strong>
                            <span>Unfulfilled</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Total</strong>
                            <span>$40.00 USD</span>
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            <strong>Order</strong>
                            <span>#2014</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Date</strong>
                            <span>November 24, 2022</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Payment Status</strong>
                            <span>Paid</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Fulfillment Status</strong>
                            <span>Unfulfilled</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Total</strong>
                            <span>$40.00 USD</span>
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            <strong>Order</strong>
                            <span>#2014</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Date</strong>
                            <span>November 24, 2022</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Payment Status</strong>
                            <span>Paid</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Fulfillment Status</strong>
                            <span>Unfulfilled</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Total</strong>
                            <span>$40.00 USD</span>
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            <strong>Order</strong>
                            <span>#2014</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Date</strong>
                            <span>November 24, 2022</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Payment Status</strong>
                            <span>Paid</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Fulfillment Status</strong>
                            <span>Unfulfilled</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Total</strong>
                            <span>$40.00 USD</span>
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            <strong>Order</strong>
                            <span>#2014</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Date</strong>
                            <span>November 24, 2022</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Payment Status</strong>
                            <span>Paid</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Fulfillment Status</strong>
                            <span>Unfulfilled</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Total</strong>
                            <span>$40.00 USD</span>
                          </td>
                        </tr>
                        <tr class="account__table--body__child">
                          <td class="account__table--body__child--items">
                            <strong>Order</strong>
                            <span>#2014</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Date</strong>
                            <span>November 24, 2022</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Payment Status</strong>
                            <span>Paid</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Fulfillment Status</strong>
                            <span>Unfulfilled</span>
                          </td>
                          <td class="account__table--body__child--items">
                            <strong>Total</strong>
                            <span>$40.00 USD</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* // <!-- my account section end -->

        // <!-- Start Newsletter banner section -->
        // <!-- <section class="newsletter__banner--section section--padding pt-0">
        //     <div class="container">
        //         <div class="newsletter__banner--thumbnail position__relative">
        //             <img class="newsletter__banner--thumbnail__img" src="assets/img/banner/banner-bg7.webp" alt="newsletter-banner">
        //             <div class="newsletter__content newsletter__subscribe">
        //                 <h5 class="newsletter__content--subtitle text-white">Want to offer regularly ?</h5>
        //                 <h2 class="newsletter__content--title text-white h3 mb-25">Subscribe Our Newsletter <br>
        //                     for Get Daily Update</h2>
        //                 <form class="newsletter__subscribe--form position__relative" action="#">
        //                     <label>
        //                         <input class="newsletter__subscribe--input" placeholder="Enter your email address" type="email">
        //                     </label>
        //                     <button class="newsletter__subscribe--button primary__btn" type="submit">Subscribe
        //                         <svg class="newsletter__subscribe--button__icon" xmlns="http://www.w3.org/2000/svg" width="9.159" height="7.85" viewBox="0 0 9.159 7.85">
        //                             <path  data-name="Icon material-send" d="M3,12.35l9.154-3.925L3,4.5,3,7.553l6.542.872L3,9.3Z" transform="translate(-3 -4.5)" fill="currentColor"/>
        //                         </svg>
        //                     </button>
        //                 </form>   
        //             </div>
        //         </div>
        //     </div>
        // </section> --> */}
        {/* <!-- End Newsletter banner section --> */}
      </main>
    </div>
  );
}

export default Myaccount;
