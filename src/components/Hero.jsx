import {
  ShieldCheck,
  FileCheck,
  Scale
} from "lucide-react";

import "../styles/hero.css";


function Hero(){

return (

<section className="hero">

<div className="hero-overlay"></div>


<div className="container hero-container">


<div className="hero-content">


<span className="hero-badge">
🇦🇪 منصة إماراتية لحماية المستهلك
</span>


<h1>
قدّم شكوى ضد أي شركة
<br/>
أو مؤسسة في الإمارات
</h1>


<p>
قدّم بلاغك خلال دقائق، وسيتم مراجعة بياناتك
وتوجيهها إلى الجهة المختصة مع الحفاظ على
سرية معلوماتك.
</p>



<div className="hero-features">


<div className="feature">
<ShieldCheck/>
<span>
بياناتك محمية بالكامل
</span>
</div>


<div className="feature">
<FileCheck/>
<span>
مراجعة البلاغ قبل التوجيه
</span>
</div>


<div className="feature">
<Scale/>
<span>
متوافق مع حماية المستهلك الإماراتية
</span>
</div>


</div>


<a 
href="#complaint-form"
className="hero-btn"
>
قدّم شكوتك الآن
</a>


</div>


</div>


</section>

)

}


export default Hero;