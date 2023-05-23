import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Headerone from "./Headerone";
import Footerone from "./Footerone";

function Offer() {
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
      .get("http://admin.rentifi.in:3023/website/offer_list", data, options)
      .then((res) => {
        setLists(res.data.data);
        console.log("response", res.data.data);
      })
      .catch((err) => {});
  };
  return (
    <div>
      <Headerone />

      {/* <!-- Start Categories section --> */}
      <div className="container" style={{ background: "white" }}>
        {lists.map((list) => {
          return (
            <div class="container" key={list._id}>
              <img
                src={"http://admin.rentifi.in:3023/uploads/" + list.image}
                alt="categories-product"
              />

              <hr />

              <span>
                <b>Code-{list.code}</b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Valid till-{list.ex_date}</b>
              </span>
            </div>
          );
        })}
      </div>
      {/* <!-- End Categories section --> */}
      <Footerone />
    </div>
  );
}

export default Offer;
