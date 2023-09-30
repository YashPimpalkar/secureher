import React from 'react'
import svg1 from '../../assets/hero/Authentication-rafiki.png'

const Hero = () => {
     return (
          <section className='hero bg-grey py-12 xl-pt-12 xl-pb-0 overflow-hidden'>
               <div className='container mx-auto h-full'>
                    <div className='flex flex-col xl:flex-row items-center justify-between h-full'>
                         <div className='hero__text xl:w-[48%] text-center xl:text-left'>
                              <div className='flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0'>
                                   <i className='ri-heart-pulse-line text-2xl text-accent'></i>
                                   <div className='uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]'>
                                        safe your life
                                   </div>
                              </div>
                              <h1 className='h2 mb-6 max-w-xl'>Empowering and ensuring the safety of women everywhere</h1>
                              <p className='mb-[42px] md:max-w-xl'>Our mission is to provide resources, tips, and guidance to ensure women's safety in all situations. Join us on this journey.</p>
                              <button className='btn btn-lg btn-accent mx-auto xl:mx-0'>Contact Us</button>
                         </div>
                         <div className='hero__img hidden xl:flex max-w-[814px] self-end'>
                           <img src={svg1} alt="" />
                         </div>
                    </div>
               </div>
          </section >
     )
}

export default Hero