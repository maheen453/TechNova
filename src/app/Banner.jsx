'use client'
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <div>
        <div className="h-[4rem] text-[1.5rem] bg-[#FFF0EB] flex items-center text-[#FF906C]">
            <Marquee speed={50}>
                <p className="whitespace-nowrap sm:tracking-[7px] tracking-[4px] sm:text-[2rem] ">
                    TRANSACTIONS&nbsp;&nbsp;MINT TOKEN&nbsp;&nbsp;CHECK BALANCE&nbsp;
                    PAUSE TOKEN&nbsp;&nbsp;RESUME TOKEN&nbsp;&nbsp;
                </p>
            </Marquee>
        </div>
    </div>
  )
}

export default Banner