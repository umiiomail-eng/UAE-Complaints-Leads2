import Hero from "./components/Hero";
import ComplaintForm from "./components/ComplaintForm";


function App(){

return (

<>

<Hero />


<section 
id="complaint-form"
className="complaint-section"
>

<div className="container">
{/* 
<h2>
قدّم بلاغك
</h2> */}


{/* <p>
دقائق واحدة تفصلك عن حقك.
املأ النموذج بالبيانات الصحيحة،
وسنراجع بلاغك ونتواصل معك عند الحاجة.
</p> */}


<ComplaintForm />


</div>


</section>


</>

)

}


export default App;