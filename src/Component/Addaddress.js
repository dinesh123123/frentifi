import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function Addaddress() {
    const [ output , setOutput ] = useState();
    const [ address , setAddress ] = useState();
    const [ city  ,setCity] = useState();
    const [ pincode , setPincode ] = useState();
    

    const handleSubmit=(evt)=>{
        evt.preventDefault();
      let userDetails={"address":address,"city":city,"pincode":pincode,};
      axios.post("http://admin.rentifi.in:3023/website/add_address" ,userDetails).then((response)=>{
        
            setOutput(response.data.result);
            setAddress('');
            setCity('');
            setPincode('');
            console.log("response of user input",response.data.result)
  
          }).catch((err)=>{
            console.log(err);
        });
      };
      
        return (
    <div>
      <div class="checkout__content--step section__shipping--address">

      <font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
                                    <div class="section__shipping--address__content">
                                    
                                    
                                        <div class="row">
                                    
                    <div class="col-12 mb-20">
                        
                                                <div class="checkout__input--list">
                                              
                                                    <label class="checkout__input--label mb-5" for="input4">Address <span class="checkout__input--label__star">*</span></label>
                                                    <input value={address} onChange={e => setAddress(e.target.value)} class="checkout__input--field border-radius-5" placeholder="Address" id="input4" type="text"/>
                                                </div>
                                            </div>
                                           
                                            <div class="col-12 mb-20">
                                                <div class="checkout__input--list">
                                                    <label class="checkout__input--label mb-5" for="input5">Town/City <span class="checkout__input--label__star">*</span></label>
                                                    <input value={city} onChange={e => setCity(e.target.value)} class="checkout__input--field border-radius-5" placeholder="City" id="input5" type="text"/>
                                                </div>
                                            </div>
                                           
 <div class="col-lg-12 mb-20">
                                                <div class="checkout__input--list">
                                                    <label class="checkout__input--label mb-5" for="input6">Postal Code <span class="checkout__input--label__star">*</span></label>
                                                    <input value={pincode} onChange={e => setPincode(e.target.value)} class="checkout__input--field border-radius-5" placeholder="Postal code" id="input6" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <details>
                                        <summary class="checkout__checkbox mb-20">
                                            <input class="checkout__checkbox--input" type="checkbox"/>
                                            <span class="checkout__checkbox--checkmark"></span>
                                            <span class="checkout__checkbox--label">Ship to a different address?</span>
                                        </summary>
                                        <div class="section__shipping--address__content">
                                            <div class="row">

                                                
                                                
                                                <div class="col-12 mb-20">
                                                    <div class="checkout__input--list">
                                                        <label class="checkout__input--label mb-5" for="input10">Address <span class="checkout__input--label__star">*</span></label>
                                                        <input class="checkout__input--field border-radius-5" placeholder="Address1" id="input10" type="text"/>
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-20">
                                                    <div class="checkout__input--list">
                                                        <input class="checkout__input--field border-radius-5" placeholder="Apartment, suite, etc. (optional)"  type="text"/>
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-20">
                                                    <div class="checkout__input--list">
                                                        <label class="checkout__input--label mb-5" for="input11">Town/City <span class="checkout__input--label__star">*</span></label>
                                                        <input class="checkout__input--field border-radius-5" placeholder="City" id="input11" type="text"/>
                                                    </div>
                                                </div>
                                               
                                                <div class="col-lg-12 mb-20">
                                                    <div class="checkout__input--list">
                                                        <label class="checkout__input--label mb-5" for="input12">Postal Code <span class="checkout__input--label__star">*</span></label>
                                                        <input class="checkout__input--field border-radius-5" placeholder="Postal code" id="input12" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                    <button type='submit' >Save</button>

                                   </form>
                                </div>
    </div>
  )
}

export default Addaddress;
