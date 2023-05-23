import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'
import Headerone from './Headerone';
import Footerone from './Footerone';
import axios from 'axios';
function Termcondition() {
    const [lists, setLists]=useState([]);
    useEffect(()=>{
    getHomeData();
  },[]);
  const getHomeData = async () => {
    const options ={
        headers: {
            "content-type" : "application/json; charset=utf-8",
            "Access-Control-Allow-Origin" : '*'
        }
    }
       const data = JSON.stringify({
          });
  
        await axios.get("http://admin.rentifi.in:3023/website/term_condition_list",data,options).then(res => {
        setLists(res.data.data);
    console.log("response",res.data.data);
    }).catch(err =>{
        })
    }

  return (
    <div>
<Headerone/>
       <main className="main__content_wrapper">
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title text-white mb-10">Terms & Conditions</h1>
                  <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items"><Link className="text-white" to="/">Home</Link></li>
                    <li className="breadcrumb__content--menu__items"><span className="text-white">Privacy Policy</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        {/* Start privacy policy section */}
        <div className="privacy__policy--section section--padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
               {lists.map((list) => {
                        return( 
                <div className="privacy__policy--content" key={list._id}>
                    
                  <h2 className="privacy__policy--content__title">{list.title}</h2>
                  <p className="privacy__policy--content__desc">{list.text}</p>
                </div>
                  )
                })
                }
                
              </div>
              
            </div>
          </div>
        </div>
        {/* End privacy policy section */}
      </main>
<Footerone/>
    </div>
  )
}

export default Termcondition;
