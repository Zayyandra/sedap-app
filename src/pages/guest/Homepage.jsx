import React from 'react';


import NavigationBar from '../../components/guest/NavigationBar';
import HeroSection from '../../components/guest/HeroSection';
import Footer from '../../components/guest/Footer';
import AboutUs from '../../components/guest/Aboutus';
import ProdukUnggulan from '../../components/guest/ProdukUnggulan';
import Testimoni from '../../components/guest/Testimoni';
import CekStok from '../../components/guest/CekStok';


const HomePage = () => {
  return (
    <div className="font-sans">
    <NavigationBar/>
      <HeroSection/>
      <AboutUs/>
      <ProdukUnggulan/>
      <Testimoni/>
      <CekStok/>
      
      {/* Konten lain bisa ditambahkan di sini */}
      <Footer />
    </div>
  );
};

export default HomePage;