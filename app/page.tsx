"use client"
import Head from 'next/head';
import Appbar from './Components/AppBar';
import Hero from './Components/hero';
import Benefits from './Components/benefits';
import BulletIcon from './Components/BulletIcon'; 
// Import the image file
import anaImage from '../public/assests/ana.jpg';
import ana1Image from '../public/ana1.png'
import ana2Image from '../public/ana2.png'

import SectionTitle from './SectionTitle';
import Testimonials from './Components/Testimonials';
import Faq from './Components/Faq';
import Cta from './Components/Cta';
import Footer from './Components/Footer';
import PopupWidget from './Components/PopupWidget';

export default function Home() {
  // Define your data object
  const data = {
    image: anaImage,
    title: "Effortless time tracking",
    desc: "So you can start tracking instantly",
    bullets: [
      {  icon: <BulletIcon />, desc: "Ditch paper timesheets and track time anywhere, anytime! Seamlessly log your hours across desktop, mobile, and web applications." },
      
      // Add more bullet items as needed
    ]
  };
  const data1 = {
    image: ana1Image,
    title: "Powerful project management",
    desc: "Achieve project goals faster    ",
    bullets: [
      {  icon: <BulletIcon />, desc: "Integrate our time tracking software with powerful project management. Log hours seamlessly across activities and projects, ensuring accurate billing and resource allocation." },
      
      // Add more bullet items as needed
    ]
  };
  const data2 = {
    image: ana2Image,
    title: "Detailed reporting & analytics",
    desc: "Transform time tracking data into actionable insights    ",
    bullets: [
      {  icon: <BulletIcon />, desc: "Gain valuable insights into employee productivity, project efficiency, and resource allocation. Make informed decisions based on real-time data, not just guesswork." },
      
      // Add more bullet items as needed
    ]
  };

  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A simple Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mb-40'>
      <Appbar />
      <Hero />
      </div>
      {/* Provide the align prop */}
      <div className='bg-white'>
      <SectionTitle
        align="center" // Adjust the alignment as needed
        pretitle="Nextly Benefits"
        title=" Tracking time for thousands of users can be hard.
        we makes it easy.">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={data} />
      <Benefits imgPos="right" data={data1} />
      <Benefits data={data2} />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />

      </div>
    </div>
  );
}
