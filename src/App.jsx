import Hero from "./components/Hero";
import ComplaintForm from "./components/ComplaintForm";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


function Home(){

return (

<>
<Hero />

<section id="complaint-form" className="section-form">
  <ComplaintForm />
</section>

<div className="why-section">
  <WhyChooseUs />
</div>

<HowItWorks />

<FAQ />

<Footer />

</>

)

}



function App(){

return (

<BrowserRouter>

<Routes>

<Route 
path="/" 
element={<Home />} 
/>


<Route 
path="/privacy" 
element={<Privacy />} 
/>


<Route 
path="/terms" 
element={<Terms />} 
/>

<Route 
path="/contact" 
element={<Contact />} 
/>
</Routes>

</BrowserRouter>

)

}


export default App;