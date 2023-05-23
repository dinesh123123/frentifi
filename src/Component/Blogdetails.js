import React from 'react'

function Blogdetails() {
  return (
    
      
      {/* <!-- Start Offcanvas stikcy toolbar --> */}
        <div className="offcanvas__stikcy--toolbar" tabindex="-1">
            <ul className="d-flex justify-content-between">
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn" href="index.html">
                    <span className="offcanvas__stikcy--toolbar__icon"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="21.51" height="21.443" viewBox="0 0 22 17"><path fill="currentColor" d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"></path></svg>
                        </span>
                    <span className="offcanvas__stikcy--toolbar__label">Home</span>
                    </a>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn" href="shop.html">
                    <span className="offcanvas__stikcy--toolbar__icon"> 
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="18.51" height="17.443" viewBox="0 0 448 512"><path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z"></path></svg>
                        </span>
                    <span className="offcanvas__stikcy--toolbar__label">Shop</span>
                    </a>
                </li>
                <li className="offcanvas__stikcy--toolbar__list ">
                    <a className="offcanvas__stikcy--toolbar__btn search__open--btn" href="javascript:void(0)">
                        <span className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>   
                        </span>
                    <span className="offcanvas__stikcy--toolbar__label">Search</span>
                    </a>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn minicart__open--btn" href="javascript:void(0)">
                        <span className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.51" height="15.443" viewBox="0 0 18.51 15.443">
                            <path  d="M79.963,138.379l-13.358,0-.56-1.927a.871.871,0,0,0-.6-.592l-1.961-.529a.91.91,0,0,0-.226-.03.864.864,0,0,0-.226,1.7l1.491.4,3.026,10.919a1.277,1.277,0,1,0,1.844,1.144.358.358,0,0,0,0-.049h6.163c0,.017,0,.034,0,.049a1.277,1.277,0,1,0,1.434-1.267c-1.531-.247-7.783-.55-7.783-.55l-.205-.8h7.8a.9.9,0,0,0,.863-.651l1.688-5.943h.62a.936.936,0,1,0,0-1.872Zm-9.934,6.474H68.568c-.04,0-.1.008-.125-.085-.034-.118-.082-.283-.082-.283l-1.146-4.037a.061.061,0,0,1,.011-.057.064.064,0,0,1,.053-.025h1.777a.064.064,0,0,1,.063.051l.969,4.34,0,.013a.058.058,0,0,1,0,.019A.063.063,0,0,1,70.03,144.853Zm3.731-4.41-.789,4.359a.066.066,0,0,1-.063.051h-1.1a.064.064,0,0,1-.063-.051l-.789-4.357a.064.064,0,0,1,.013-.055.07.07,0,0,1,.051-.025H73.7a.06.06,0,0,1,.051.025A.064.064,0,0,1,73.76,140.443Zm3.737,0L76.26,144.8a.068.068,0,0,1-.063.049H74.684a.063.063,0,0,1-.051-.025.064.064,0,0,1-.013-.055l.973-4.357a.066.066,0,0,1,.063-.051h1.777a.071.071,0,0,1,.053.025A.076.076,0,0,1,77.5,140.448Z" transform="translate(-62.393 -135.3)" fill="currentColor"/>
                            </svg> 
                        </span>
                        <span className="offcanvas__stikcy--toolbar__label">Cart</span>
                        <span className="items__count">3</span> 
                    </a>
                </li>
                <li className="offcanvas__stikcy--toolbar__list">
                    <a className="offcanvas__stikcy--toolbar__btn" href="wishlist.html">
                        <span className="offcanvas__stikcy--toolbar__icon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.541" height="15.557" viewBox="0 0 18.541 15.557">
                            <path  d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z" transform="translate(-62.498 -132.915)" fill="currentColor"/>
                            </svg> 
                        </span>
                        <span className="offcanvas__stikcy--toolbar__label">Wishlist</span>
                        <span className="items__count wishlist__count">3</span> 
                    </a>
                </li>
            </ul>
        </div>
        // <!-- End Offcanvas stikcy toolbar -->

        // <!-- Start offCanvas minicart -->
        <div className="offCanvas__minicart" tabindex="-1">
            <div className="minicart__header ">
                <div className="minicart__header--top d-flex justify-content-between align-items-center">
                    <h3 className="minicart__title"> Shopping Cart</h3>
                    <button className="minicart__close--btn" aria-label="minicart close btn">
                        <svg className="minicart__close--icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
                    </button>
                </div>
                <p className="minicart__header--desc">The organic foods products are limited</p>
            </div>
            <div className="minicart__product">
                <div className="minicart__product--items d-flex">
                    <div className="minicart__thumbnail">
                        <a href="product-details.html"><img src="assets/img/product/product1.webp" alt="prduct-img"/></a>
                    </div>
                    <div className="minicart__text">
                        <h4 className="minicart__subtitle"><a href="product-details.html">The is Garden Vegetable.</a></h4>
                        <span className="color__variant"><b>Color:</b> Beige</span>
                        <div className="minicart__price">
                            <span className="current__price">$125.00</span>
                            <span className="old__price">$140.00</span>
                        </div>
                        <div className="minicart__text--footer d-flex align-items-center">
                            <div className="quantity__box minicart__quantity">
                                <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                <label>
                                    <input type="number" className="quantity__number" value="1" />
                                </label>
                                <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                            </div>
                            <button className="minicart__product--remove" aria-label="minicart remove btn">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="minicart__product--items d-flex">
                    <div className="minicart__thumbnail">
                        <a href="product-details.html"><img src="assets/img/product/product2.webp" alt="prduct-img"></a>
                    </div>
                    <div className="minicart__text">
                        <h4 className="minicart__subtitle"><a href="product-details.html">Fresh Tomatoe is organic.</a></h4>
                        <span className="color__variant"><b>Color:</b> Green</span>
                        <div className="minicart__price">
                            <span className="current__price">$115.00</span>
                            <span className="old__price">$130.00</span>
                        </div>
                        <div className="minicart__text--footer d-flex align-items-center">
                            <div className="quantity__box minicart__quantity">
                                <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                <label>
                                    <input type="number" className="quantity__number" value="1" />
                                </label>
                                <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                            </div>
                            <button className="minicart__product--remove" aria-label="minicart remove btn">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="minicart__amount">
                <div className="minicart__amount_list d-flex justify-content-between">
                    <span>Sub Total:</span>
                    <span><b>$240.00</b></span>
                </div>
                <div className="minicart__amount_list d-flex justify-content-between">
                    <span>Total:</span>
                    <span><b>$240.00</b></span>
                </div>
            </div>
            <div className="minicart__conditions text-center">
                <input className="minicart__conditions--input" id="accept" type="checkbox"/>
                <label className="minicart__conditions--label" for="accept">I agree with the <a className="minicart__conditions--link" href="privacy-policy.html">Privacy And Policy</a></label>
            </div>
            <div className="minicart__button d-flex justify-content-center">
                <a className="primary__btn minicart__button--link" href="cart.html">View cart</a>
                <a className="primary__btn minicart__button--link" href="checkout.html">Checkout</a>
            </div>
        </div>
        {/* <!-- End offCanvas minicart -->

        <!-- Start serch box area --> */}
        <div className="predictive__search--box " tabindex="-1">
            <div className="predictive__search--box__inner">
                <h2 className="predictive__search--title">Search Products</h2>
                <form className="predictive__search--form" action="#">
                    <label>
                        <input className="predictive__search--input" placeholder="Search Here" type="text">
                    </label>
                    <button className="predictive__search--button" aria-label="search button"><svg className="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="30.51" height="25.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>  </button>
                </form>
            </div>
            <button className="predictive__search--close__btn" aria-label="search close btn">
                <svg className="predictive__search--close__icon" xmlns="http://www.w3.org/2000/svg" width="40.51" height="30.443"  viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
            </button>
        </div>
        {/* <!-- End serch box area --> */}
  
    {/* <!-- End header area --> */}

    <div className="main__content_wrapper">
        
        {/* <!-- Start breadcrumb section --> */}
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="breadcrumb__content">
                            <h1 className="breadcrumb__content--title text-white mb-10">Blog Details</h1>
                            <ul className="breadcrumb__content--menu d-flex">
                                <li className="breadcrumb__content--menu__items"><a className="text-white" href="index.html">Home</a></li>
                                <li className="breadcrumb__content--menu__items"><span className="text-white">Blog Details</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End breadcrumb section --> */}

        {/* <!-- Start blog details section --> */}
        <section className="blog__details--section section--padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog__details--wrapper">
                            <div className="entry__blog">
                                <div className="blog__post--header mb-30">
                                    <h2 className="post__header--title mb-15">Natural Virtual reality, Feel your  happiness with VR </h2>
                                    <p className="blog__post--meta">Posted by : admin / On : February 04, 2022 / In : <a className="blog__post--meta__link" href="blog-details.html">Company, Image, Travel</a></p>                                     
                                </div>
                                <div className="blog__thumbnail mb-30">
                                    <img className="blog__thumbnail--img border-radius-10" src="assets/img/blog/blog-page-big1.webp" alt="blog-img"/>
                                </div>
                                <div className="blog__details--content">
                                    <h3 className="blog__details--content__subtitle mb-25">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non sint saepe rem eveniet sit ea esse.</h3>
                                    <p className="blog__details--content__desc mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in recusandae sit officia ipsa, natus ad voluptatem doloribus dolorum placeat, rem deleniti est accusamus ipsum corporis voluptates soluta totam maiores nostrum reprehenderit quasi? Laboriosam itaque ab odit harum sed aut voluptates, illum unde. Saepe enim ad ut pariatur doloremque quas harum sequi, excepturi tempore exercitationem suscipit quam recusandae corrupti quibusdam. Laboriosam sapiente provident repellat blanditiis ratione nostrum illum asperiores quo cumque in quisquam, non iste aut illo vel, alias debitis!</p>
                                    <p className="blog__details--content__desc mb-30"> Vel ipsa officiis nobis eveniet omnis consequuntur neque quasi, in, optio rerum suscipit totam odio. Alias necessitatibus nulla accusantium voluptatem ipsum voluptatum, vero in impedit nobis cupiditate ea, dicta eos facilis eaque optio laudantium non neque itaque? Possimus officia aut accusamus illum, adipisci, nihil numquam minus eum fugit, beatae minima facilis magni.</p>
                                    <blockquote className="blockquote__content bg__gray--color mb-30">
                                        <p className="blockquote__content--desc">Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                                    </blockquote>
                                    <p className="blog__details--content__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sapiente omnis sunt labore mollitia, quaerat incidunt sequi, ut alias accusamus nostrum magni fugit facilis dignissimos illum repellendus et numquam adipisci quos. Eos omnis maiores beatae cum a consequatur magnam sequi neque, at numquam qui ipsam unde veritatis voluptates quam dicta! Ipsam, mollitia illo fuga vel culpa reprehenderit quisquam maxime nesciunt. Sunt quaerat inventore aspernatur quibusdam corrupti numquam mollitia exercitationem rem alias consectetur hic iusto dignissimos nostrum odio, cumque impedit.</p>
                                </div>
                            </div>
                            <div className="blog__tags--social__media d-flex align-items-center justify-content-between">
                                <div className="blog__tags--media d-flex align-items-center">
                                    <label className="blog__tags--media__title">Releted Tags :</label>
                                    <ul className="d-flex">
                                        <li className="blog__tags--media__list"><a className="blog__tags--media__link" href="blog-details.html">Popular</a></li>
                                        <li className="blog__tags--media__list"><a className="blog__tags--media__link" href="blog-details.html">Business</a></li>
                                        <li className="blog__tags--media__list"><a className="blog__tags--media__link" href="blog-details.html">desgin</a></li>
                                        <li className="blog__tags--media__list"><a className="blog__tags--media__link" href="blog-details.html">Service</a></li>
                                    </ul>
                                </div>
                                <div className="blog__social--media d-flex align-items-center">
                                    <label className="blog__social--media__title">Social Share :</label>
                                    <ul className="d-flex">
                                        <li className="blog__social--media__list">
                                            <a className="blog__social--media__link" target="_blank" href="https://www.facebook.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7.667" height="16.524" viewBox="0 0 7.667 16.524">
                                                    <path data-name="Path 237" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Facebook</span>
                                            </a>
                                        </li>
                                        <li className="blog__social--media__list">
                                            <a className="blog__social--media__link" target="_blank" href="https://twitter.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.489" height="13.384" viewBox="0 0 16.489 13.384">
                                                    <path data-name="Path 303" d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z" transform="translate(-951.23 -1140.849)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Twitter</span>
                                            </a>
                                        </li>
                                        <li className="blog__social--media__list">
                                            <a className="blog__social--media__link" target="_blank" href="https://www.skype.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.482" height="16.481" viewBox="0 0 16.482 16.481">
                                                    <path data-name="Path 284" d="M879,926.615a4.479,4.479,0,0,1,.622-2.317,4.666,4.666,0,0,1,1.676-1.677,4.482,4.482,0,0,1,2.317-.622,4.577,4.577,0,0,1,2.43.678,7.58,7.58,0,0,1,5.048.961,7.561,7.561,0,0,1,3.786,6.593,8,8,0,0,1-.094,1.206,4.676,4.676,0,0,1,.7,2.411,4.53,4.53,0,0,1-.622,2.326,4.62,4.62,0,0,1-1.686,1.686,4.626,4.626,0,0,1-4.756-.075,7.7,7.7,0,0,1-1.187.094,7.623,7.623,0,0,1-7.647-7.647,7.46,7.46,0,0,1,.094-1.187A4.424,4.424,0,0,1,879,926.615Zm4.107,1.714a2.473,2.473,0,0,0,.282,1.234,2.41,2.41,0,0,0,.782.829,5.091,5.091,0,0,0,1.215.565,15.981,15.981,0,0,0,1.582.424q.678.151.979.235a3.091,3.091,0,0,1,.593.235,1.388,1.388,0,0,1,.452.348.738.738,0,0,1,.16.481.91.91,0,0,1-.48.753,2.254,2.254,0,0,1-1.271.321,2.105,2.105,0,0,1-1.253-.292,2.262,2.262,0,0,1-.65-.838,2.42,2.42,0,0,0-.414-.546.853.853,0,0,0-.584-.17.893.893,0,0,0-.669.283.919.919,0,0,0-.273.659,1.654,1.654,0,0,0,.217.782,2.456,2.456,0,0,0,.678.763,3.64,3.64,0,0,0,1.158.574,5.931,5.931,0,0,0,1.639.235,5.767,5.767,0,0,0,2.072-.339,2.982,2.982,0,0,0,1.356-.961,2.306,2.306,0,0,0,.471-1.431,2.161,2.161,0,0,0-.443-1.375,3.009,3.009,0,0,0-1.2-.894,10.118,10.118,0,0,0-1.865-.575,11.2,11.2,0,0,1-1.309-.311,2.011,2.011,0,0,1-.8-.452.992.992,0,0,1-.3-.744,1.143,1.143,0,0,1,.565-.97,2.59,2.59,0,0,1,1.488-.386,2.538,2.538,0,0,1,1.074.188,1.634,1.634,0,0,1,.622.49,3.477,3.477,0,0,1,.414.753,1.568,1.568,0,0,0,.4.594.866.866,0,0,0,.574.2,1,1,0,0,0,.706-.254.828.828,0,0,0,.273-.631,2.234,2.234,0,0,0-.443-1.253,3.321,3.321,0,0,0-1.158-1.046,5.375,5.375,0,0,0-2.524-.527,5.764,5.764,0,0,0-2.213.386,3.161,3.161,0,0,0-1.422,1.083A2.738,2.738,0,0,0,883.106,928.329Z" transform="translate(-878.999 -922)" fill="currentColor"></path>
                                                    </svg>
                                                    <span className="visually-hidden">Skype</span>   
                                            </a>
                                        </li>
                                        <li className="blog__social--media__list">
                                            <a className="blog__social--media__link" target="_blank" href="https://www.youtube.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.49" height="11.582" viewBox="0 0 16.49 11.582">
                                                    <path data-name="Path 321" d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z" transform="translate(-951.269 -1359.8)" fill="currentColor"></path>
                                                </svg>
                                                <span className="visually-hidden">Youtube</span>  
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="related__post--area mb-50">
                                <div className="section__heading text-center mb-20">
                                    <h2 className="section__heading--maintitle h3">Related Articles</h2>
                                </div>
                                <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n28">
                                    <div className="col mb-28">
                                        <div className="related__post--items">
                                            <div className="related__post--thumbnail border-radius-10 mb-20">
                                                <a className="display-block" href="blog-details.html"><img className="related__post--img display-block border-radius-10" src="assets/img/blog/related-post1.webp" alt="related-post"/></a>
                                            </div>
                                            <div className="related__post--text">
                                                <h3 className="related__post--title mb-5"><a className="related__post--title__link" href="blog-details.html">Post With Gallery</a></h3>
                                                <span className="related__post--deta">September 17, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-28">
                                        <div className="related__post--items">
                                            <div className="related__post--thumbnail border-radius-10 mb-20">
                                                <a className="display-block" href="blog-details.html"><img className="related__post--img display-block border-radius-10" src="assets/img/blog/related-post2.webp" alt="related-post"/></a>
                                            </div>
                                            <div className="related__post--text">
                                                <h3 className="related__post--title mb-5"><a className="related__post--title__link" href="blog-details.html">Post With Vedio</a></h3>
                                                <span className="related__post--deta">September 17, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="comment__box">
                                <div className="reviews__comment--area2 mb-50">
                                    <h3 className="reviews__comment--reply__title mb-25">Recent Comment</h3>
                                    <div className="reviews__comment--inner">
                                        <div className="reviews__comment--list d-flex">
                                            <div className="reviews__comment--thumbnail">
                                                <img src="assets/img/other/comment-thumb1.webp" alt="comment-thumbnail"/>
                                            </div>
                                            <div className="reviews__comment--content ">
                                                <h4 className="reviews__comment--content__title2">Jakes on</h4>
                                                <span className="reviews__comment--content__date2">January 11, 2022</span>
                                                <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                                <button className="comment__reply--btn primary__btn" type="submit">Reply</button>
                                            </div>
                                        </div>
                                        <div className="reviews__comment--list margin__left d-flex">
                                            <div className="reviews__comment--thumbnail">
                                                <img src="assets/img/other/comment-thumb2.webp" alt="comment-thumbnail"/>
                                            </div>
                                            <div className="reviews__comment--content">
                                                <h4 className="reviews__comment--content__title2">Jakes on</h4>
                                                <span className="reviews__comment--content__date2">January 11, 2022</span>
                                                <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                                <button className="comment__reply--btn primary__btn" type="submit">Reply</button>
                                            </div>
                                        </div>
                                        <div className="reviews__comment--list d-flex">
                                            <div className="reviews__comment--thumbnail">
                                                <img src="assets/img/other/comment-thumb3.webp" alt="comment-thumbnail"/>
                                            </div>
                                            <div className="reviews__comment--content">
                                                <h4 className="reviews__comment--content__title2">Jakes on</h4>
                                                <span className="reviews__comment--content__date2">January 11, 2022</span>
                                                <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                                <button className="comment__reply--btn primary__btn" type="submit">Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews__comment--reply__area">
                                    <form action="#">
                                        <h3 className="reviews__comment--reply__title mb-20">Leave A Comment</h3>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input className="reviews__comment--reply__input" placeholder="Your Name...." type="text"/>
                                                </label>
                                            </div>  
                                            <div className="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input className="reviews__comment--reply__input" placeholder="Your Email...." type="email"/>
                                                </label>
                                            </div> 
                                            <div className="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input className="reviews__comment--reply__input" placeholder="Your Website...." type="text"/>
                                                </label>
                                            </div> 
                                            <div className="col-12 mb-15">
                                                <textarea className="reviews__comment--reply__textarea" placeholder="Your Comments...." ></textarea>
                                            </div> 
                                             
                                        </div>
                                        <button className="primary__btn text-white" data-hover="Submit" type="submit">SUBMIT</button>
                                    </form>   
                                </div> 
                            </div> 
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog__sidebar--widget left widget__area">
                            <div className="single__widget widget__bg">
                                <h2 className="widget__title position__relative h3">Search</h2>
                                <form className="widget__search--form" action="#">
                                    <label>
                                        <input className="widget__search--form__input border-0" placeholder="Search by" type="text"/>
                                    </label>
                                    <button className="widget__search--form__btn"  type="submit">
                                        Search 
                                    </button>
                                </form>
                            </div>
                            <div className="single__widget widget__bg">
                                <h2 className="widget__title position__relative h3">Categories</h2>
                                <ul className="widget__categories--menu">
                                    <li className="widget__categories--menu__list">
                                        <label className="widget__categories--menu__label d-flex align-items-center">
                                            <img className="widget__categories--menu__img" src="assets/img/product/small-product1.webp" alt="categories-img"/>
                                            <span className="widget__categories--menu__text">Design Moon Sofa</span>
                                            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                                <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                        <ul className="widget__categories--sub__menu">
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product2.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Jacket, Women</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product3.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product4.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Western denim</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product5.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Mini Dresss</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <label className="widget__categories--menu__label d-flex align-items-center">
                                            <img className="widget__categories--menu__img" src="assets/img/product/small-product2.webp" alt="categories-img"/>
                                            <span className="widget__categories--menu__text">Chairs Design</span>
                                            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" >
                                                <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                        <ul className="widget__categories--sub__menu">
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product2.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Jacket, Women</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product3.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product4.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Western denim</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product5.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Mini Dresss</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <label className="widget__categories--menu__label d-flex align-items-center">
                                            <img className="widget__categories--menu__img" src="assets/img/product/small-product3.webp" alt="categories-img"/>
                                            <span className="widget__categories--menu__text">Bedstead</span>
                                            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                                <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                        <ul className="widget__categories--sub__menu">
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product2.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Jacket, Women</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product3.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product4.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Western denim</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product5.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Mini Dresss</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <label className="widget__categories--menu__label d-flex align-items-center">
                                            <img className="widget__categories--menu__img" src="assets/img/product/small-product4.webp" alt="categories-img"/>
                                            <span className="widget__categories--menu__text">Tv Cabinet</span>
                                            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                                <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                        <ul className="widget__categories--sub__menu">
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product2.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Jacket, Women</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product3.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product4.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Western denim</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product5.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Mini Dresss</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <label className="widget__categories--menu__label d-flex align-items-center">
                                            <img className="widget__categories--menu__img" src="assets/img/product/small-product5.webp" alt="categories-img"/>
                                            <span className="widget__categories--menu__text">Office Chair</span>
                                            <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                                <path  d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                        <ul className="widget__categories--sub__menu">
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product2.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Jacket, Women</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product3.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Woolend Jacket</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product4.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Western denim</span>
                                                </a>
                                            </li>
                                            <li className="widget__categories--sub__menu--list">
                                                <a className="widget__categories--sub__menu--link d-flex align-items-center" href="blog-details.html">
                                                    <img className="widget__categories--sub__menu--img" src="assets/img/product/small-product5.webp" alt="categories-img"/>
                                                    <span className="widget__categories--sub__menu--text">Mini Dresss</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="single__widget widget__bg">
                                <h2 className="widget__title position__relative h3">Post article</h2>
                                <div className="articl__post--inner">
                                    <div className="articl__post--items d-flex align-items-center">
                                        <div className="articl__post--items__thumbnail position__relative">
                                            <a className="articl__post--items__link display-block" href="blog-details.html">
                                                <img className="articl__post--items__img display-block" src="assets/img/product/small-product1.webp" alt="product-img"/>
                                            </a>
                                        </div>
                                        <div className="articl__post--items__content">
                                            <h4 className="articl__post--items__content--title"><a href="blog-details.html">The Greatest Team's Favorite Leggings.</a></h4>
                                            <span className="meta__deta text__secondary">Jan 11, 2022</span>
                                        </div>
                                    </div>
                                    <div className="articl__post--items d-flex align-items-center">
                                        <div className="articl__post--items__thumbnail position__relative">
                                            <a className="articl__post--items__link display-block" href="blog-details.html">
                                                <img className="articl__post--items__img display-block" src="assets/img/product/small-product2.webp" alt="product-img"/>
                                            </a>
                                        </div>
                                        <div className="articl__post--items__content">
                                            <h4 className="articl__post--items__content--title"><a href="blog-details.html">Top 10 Best Furniture Company.</a></h4>
                                            <span className="meta__deta text__secondary">Jan 11, 2022</span>
                                        </div>
                                    </div>
                                    <div className="articl__post--items d-flex align-items-center">
                                        <div className="articl__post--items__thumbnail position__relative">
                                            <a className="articl__post--items__link display-block" href="blog-details.html">
                                                <img className="articl__post--items__img display-block" src="assets/img/product/small-product3.webp" alt="product-img"/>
                                            </a>
                                        </div>
                                        <div className="articl__post--items__content">
                                            <h4 className="articl__post--items__content--title"><a href="blog-details.html">There are History you Should Know.</a></h4>
                                            <span className="meta__deta text__secondary">Jan 11, 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div className="single__widget widget__bg">
                                <h2 className="widget__title position__relative h3">Tags</h2>
                                <ul className="widget__tagcloud">
                                    <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Wooden</a></li>
                                    <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Chair</a></li>
                                    <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Modern</a></li>
                                    <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Fabric  </a></li>
                                    <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Shoulder </a></li>
                                    <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Winter</a></li>
                                    <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Accessories</a></li>
                                    <li className="widget__tagcloud--list"><a className="widget__tagcloud--link" href="blog-details.html">Dress </a></li>
                                </ul>
                            </div> --> */}
                        </div>
                    </div>
                </div>
        </section>
            </div>
        {/* <!-- End blog details section -->

        <!-- Start Newsletter banner section -->
        <!-- <section className="newsletter__banner--section section--padding pt-0">
            <div className="container">
                <div className="newsletter__banner--thumbnail position__relative">
                    <img className="newsletter__banner--thumbnail__img" src="assets/img/banner/banner-bg7.webp" alt="newsletter-banner">
                    <div className="newsletter__content newsletter__subscribe">
                        <h5 className="newsletter__content--subtitle text-white">Want to offer regularly ?</h5>
                        <h2 className="newsletter__content--title text-white h3 mb-25">Subscribe Our Newsletter <br>
                            for Get Daily Update</h2>
                        <form className="newsletter__subscribe--form position__relative" action="#">
                            <label>
                                <input className="newsletter__subscribe--input" placeholder="Enter your email address" type="email">
                            </label>
                            <button className="newsletter__subscribe--button primary__btn" type="submit">Subscribe
                                <svg className="newsletter__subscribe--button__icon" xmlns="http://www.w3.org/2000/svg" width="9.159" height="7.85" viewBox="0 0 9.159 7.85">
                                    <path  data-name="Icon material-send" d="M3,12.35l9.154-3.925L3,4.5,3,7.553l6.542.872L3,9.3Z" transform="translate(-3 -4.5)" fill="currentColor"/>
                                </svg>
                            </button>
                        </form>   
                    </div>
                </div>
            </div>
        </section> -->
        <!-- End Newsletter banner section --> */}


   
  )
}

export default Blogdetails;
