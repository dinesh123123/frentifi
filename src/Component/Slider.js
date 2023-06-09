import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Slider() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);
    return () => clearInterval(intervalId);
  });
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
      .get("http://admin.rentifi.in:3023/website/banner_list", data, options)
      .then((res) => {
        setData(res.data.data);
        console.log("response", res.data.data);
      })
      .catch((err) => {}, []);
  };
  return (
    <div className="container" style={{ height: "565px" }}>
      {data.length > 0 ? (
        <img
          class="swiper-slide swiper-slide-visible swiper-slide-active"
          src={"http://admin.rentifi.in:3023/uploads/" + data[index].image}
          alt="sliderimage"
        />
      ) : null}

      {/* })
                        } */}
    </div>
  );
}
export default Slider;
