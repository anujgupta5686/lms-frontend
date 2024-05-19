import React from 'react'
import logo1 from '../../../assets/naac.png';
import logo2 from '../../../assets/nirf.png';
import logo3 from '../../../assets/stars1.png';
import logo4 from '../../../assets/times-global.avif';
import career from '../../../assets/career-transition-icon.png';
import hiring from '../../../assets/hiring-partner-ixon.png';
import ranking from '../../../assets/ranking-icon.png';
import salasry from '../../../assets/salasry-hike-icon.png';
import hero from '../../../assets/hero.jpg';
import WhyChooseLMS from '@/components/home-components/WhyChooseLMS';
function Home() {
    return (
        <>

            <div className=' w-10/12 shadow-md mx-auto mt-7 rounded-sm py-5'>

                {/* Left side */}
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='bg-gradient-to-br from-[#C80B45] to-[#881235eb] flex flex-col justify-center items-center py-2 rounded-l-lg'>
                        <div className='flex flex-col'>
                            <h1 className='lg:text-[1.8rem]  text-[1rem] text-white font-bold'>Library Management System</h1>
                            <p className='text-end md:-mt-1 lg:text-[12px] text-[10px] text-[#eeeaea]'>Powered By Study Notion</p>
                        </div>
                        <div className='text-center lg:text-[1.6rem] text-[1.3rem] px-10 text-white mt-5'>
                            Embark on Your Transformation Journey
                            With Our<span className='font-bold'> Globally Recognized Certification Programs</span>
                        </div>
                        <div className='bg-[#eab2bb] w-11/12 mt-8 rounded-sm grid grid-cols-3 gap-5 py-5 px-2'>
                            <img src={logo1} height={115} width={115} loading="lazy" className='object-fill justify-self-center' />
                            <img src={logo2} height={115} width={115} loading="lazy" className='object-fill justify-self-center' />
                            <img src={logo3} height={115} width={115} loading="lazy" className='object-fill justify-self-center' />
                            <img src={logo4} height={115} width={115} loading="lazy" className='object-fill justify-self-center' />
                        </div>
                    </div>
                    <div className="flex">
                        <img src={hero} className='object-center' alt='Responsive Learning' />
                    </div>
                </div>
            </div>
            <div className=' w-10/12 shadow-md mx-auto mt-7 rounded-sm py-5'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
                    <div className='flex flex-row gap-5 justify-center items-center'>
                        <img src={ranking} height={70} width={70} loading="lazy" className='object-fill' />
                        <div className='flex flex-col text-[#cc3363] leading-7 items-start'>
                            <p className='text-[2rem] font-bold'>39<sup>th</sup> </p>
                            <p className=' font-bold'>NIRF Ranking</p>
                            <p >Management category</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-1 justify-center items-center'>
                        <img src={hiring} height={70} width={70} loading="lazy" className='object-fill' />
                        <div className='flex flex-col text-[#cc3363] leading-7 items-start'>
                            <p className='text-[2rem] font-bold'>480+ </p>
                            <p className=' font-bold'>Hiring</p>
                            <p >Partners</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-1 justify-center items-center'>
                        <img src={career} height={70} width={70} loading="lazy" className='object-fill' />
                        <div className='flex flex-col text-[#cc3363] leading-7 '>
                            <p className='text-[2rem] font-bold'>50,000+</p>
                            <p className=' font-bold'>Career</p>
                            <p >Transitions</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-1 justify-center items-center'>
                        <img src={salasry} height={70} width={70} loading="lazy" className='object-fill' />
                        <div className='flex flex-col text-[#cc3363] leading-7 '>
                            <p className='text-[2rem] font-bold'>45%</p>
                            <p className=' font-bold'>Average</p>
                            <p >Salary Hike</p>
                        </div>
                    </div>

                </div>
            </div >
            {/* Create Why Should Choose your LMS */}
            <div>
                <WhyChooseLMS />
            </div>
        </>
    )
}

export default Home
