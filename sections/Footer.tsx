import Wrapper from '@/shares/Wrapper';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 rounded-t-[40px]">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-xl font-bold text-lime-300">DEVLOP.ME</h2>
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="font-semibold text-white/80">Say hello</h4>
            <p className="text-white/60">HELLO@DEVLOP.ME.COM</p>
            <p className="text-white/60">MAHBUBUL@ME.COM</p>
            <h4 className="font-semibold mt-4 text-white/80">Call</h4>
            <p className="text-white/60">+784549 4981 00</p>
            <p className="text-white/60">+8845 0100 211</p>
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="font-semibold text-white/80">Menu</h4>
            <p className="cursor-pointer hover:text-lime-300 transition">HOME</p>
            <p className="cursor-pointer hover:text-lime-300 transition">ABOUT</p>
            <p className="cursor-pointer hover:text-lime-300 transition">PORTFOLIO</p>
            <p className="cursor-pointer hover:text-lime-300 transition">BLOG</p>
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="font-semibold text-white/80">Social</h4>
            <p className="cursor-pointer hover:text-lime-300 transition">TWITTER</p>
            <p className="cursor-pointer hover:text-lime-300 transition">INSTAGRAM</p>
            <p className="cursor-pointer hover:text-lime-300 transition">FACEBOOK</p>
            <p className="cursor-pointer hover:text-lime-300 transition">BEHANCE</p>
            <p className="cursor-pointer hover:text-lime-300 transition">DRIBBBLE</p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
