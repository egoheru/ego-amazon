import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                
                <div className="home__row">
                     <Product 
                     id="12321341"
                     title="The lean Startup: How Constant Innovation Creates Radically Succesful Businesses Paperback" 
                     price={11.96} 
                     image='https://m.media-amazon.com/images/I/41W0YrZUgqL._AC_UL320_.jpg'
                     rating={5}
                     />
                     <Product
                      id="49538094"
                      title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk,s Litre Glass Bowl"
                      price={239.0}
                      rating={4}
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lH6PPesn5wiTlQtjVE14tDxuJrxeZYUaSA&usqp=CAU"
                     />
                </div>

                <div className="home__row">
                 <Product 
                 id="4903850"
                 title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                 price={199.99}
                 rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                 />   
                <Product 
                id="23445930"
                title="Amazon Echo (3rd) generation Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszUbYDfFt5Rlf2hFGACkjmzNh0PKxZ0vieQ&usqp=CAU"
                />
                <Product 
                 id="3254354345"
                 title="New Apple ipad Pro (12.9-inch, Wi-Fi 128GB) - Silver (4th Generation)"
                 price={598.99}
                 rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
                {/* <Product /> */}
               </div>

               <div className="home__row">
               <Product 
               id="90829332"
               title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 × 1440"
               price={1094.98}
               rating={4}
               image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
               />
                </div>
                 <div className="home__row">
                 <Product 
                 id="4954250"
                 title="Laptop Pro"
                 price={899.99}
                 rating={3}
                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWUedrUaFSWBb_xrw_j3j2JM5f-e6Brx9Zw&usqp=CAU"
                 />   
                <Product 
                id="23479030"
                title="Garment Pressing Machine - China Garment Pre"
                price={98.99}
                rating={5}
                image="https://image.made-in-china.com/318f0j00SQaEHdtsRTbT/video.jpg"
                />
                <Product 
                 id="3428694345"
                 title="IndiaMART-Fabric Checking Machine (4th Generation)"
                 price={598.99}
                 rating={4}
                 image="https://3.imimg.com/data3/BR/WM/MY-1659618/fabric-checking-machine-500x500.jpg"
                />
                {/* <Product /> */}
               </div>
               <div className="home__row">
                     <Product 
                     id="12321341"
                     title="online-shopping-sites-for-cheap-electronics Pro" 
                     price={500.96} 
                     image='https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
                     rating={5}
                     />
                     <Product
                      id="49538094"
                      title="Reviewed Frigidaire FFSS2315TS"
                      price={400.0}
                      rating={4}
                      image="https://reviewed-com-res.cloudinary.com/image/fetch/s--4TZBZ71R--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1610737027444/Frigidaire-FFSS2315TS-hero.jpg"
                     />
                </div>
                <div className="home__row">
                 <Product 
                 id="4954250"
                 title="Sweetwater NT1-A Large-Diaphragm Condenser Micro"
                 price={899.99}
                 rating={3}
                 image="https://media.sweetwater.com/api/i/q-82__ha-4a2b7ad75ce1e8c1__hmac-9ba75fef7da87911721fa8d181832c786a0e1744/images/items/750/NT1AAnniv-large.jpg"
                 />   
                <Product 
                id="23479030"
                title="apple-iphone-11-pro-max-preorder-how-to-verizon-att-t-mobile"
                price={98.99}
                rating={5}
                image="https://cdn.vox-cdn.com/thumbor/zQl7AEyXAyVhPBvxE2vQVKH3uEc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19206380/akrales_190913_3666_0391.jpg"
                />
                <Product 
                 id="3428694345"
                 title="Electrolux gas stove - gas oven - 4-burner"
                 price={799.99}
                 rating={4}
                 image="https://www.horeca.com/images/product/detail/electrolux-4-vlams-gas-fornuis-met-gas-oven-e9gcgh4cg0-391005(1).jpg"
                />
                {/* <Product /> */}
               </div>
               <div className="home__row">
                     <Product 
                     id="12321491"
                     title="A Complete Recording Studio Equipment List for Home Studio" 
                     price={500.96} 
                     image='https://dubbingking.com/wp-content/uploads/2020/03/Radio-Station-Equipment-for-a-Professional-Studio-Setup-New-Header_959859dc378260aea429e8718bdccf34.jpg'
                     rating={5}
                     />
                     <Product
                      id="49638094"
                      title="Panoramic Ball Head Max Load 6kg Tripod"
                      price={250.0}
                      rating={4}
                      image="https://p.globalsources.com/IMAGES/PDT/B5077030116/Panoramic-Ball-Head-Max-Load-6kg.jpg"
                     />
                </div>
                <div className="home__row">
               <Product 
               id="90829332"
               title="fujifilm Sony a5100 Interchangeable Lens Camera with 16-50mm Lens, Black. Exposure Modes- AUTO (iAUTO, Superior Auto), Programmed AE (P), Aperture priority "
               price={1094.98}
               rating={4}
               image="https://2.imimg.com/data2/IU/CX/MY-3006476/81vgbokmqkl-_aa1402_-500x500.jpg"
               />
                </div>
                <div className="home__row">
                     <Product 
                     id="12321491"
                     title="Series LED Full HD Smart Roku smart-tvs-help-connect-the-whole-family" 
                     price={500.96} 
                     image='https://luciditysolutions.net/wp-content/uploads/2019/05/smart-tv-vpn@2x-60e05d246ac8e975c2c60f59b6945334.png'
                     rating={5}
                     />
                     <Product
                      id="49638094"
                      title="china-kitchen-appliances-resellers"
                      price={250.0}
                      rating={4}
                      image="https://seoagencychina.com/wp-content/uploads/2020/05/a-18.png"
                     />
                </div>
            </div>
        </div>
    );
}

export default Home
