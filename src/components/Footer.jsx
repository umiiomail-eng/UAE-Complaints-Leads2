import {
  ShieldCheck,
  Mail,
  MapPin,
  ArrowUp
} from "lucide-react";

import { Link } from "react-router-dom";

import "../styles/footer.css";


function Footer(){

const scrollTop = () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

};


return (

<footer className="footer">


<div className="footer-container">


<div className="footer-brand">


<div className="footer-logo">

<ShieldCheck size={32}/>

<span>
منصة شكاوى الإمارات
</span>

</div>


<p>

منصة مستقلة لاستقبال شكاوى المستهلكين
داخل دولة الإمارات بطريقة سهلة وآمنة.

</p>


</div>




<div className="footer-links">


<h3>
روابط مهمة
</h3>


<Link to="/">
الرئيسية
</Link>


<Link to="/privacy">
سياسة الخصوصية
</Link>


<Link to="/terms">
الشروط والأحكام
</Link>


<Link to="/contact">
تواصل معنا
</Link>


</div>





<div className="footer-contact">


<h3>
تواصل معنا
</h3>



<div>

<Mail size={18}/>

<span>
support@example.com
</span>

</div>



<div>

<MapPin size={18}/>

<span>
الإمارات العربية المتحدة
</span>

</div>



</div>


</div>





<div className="footer-bottom">


<p>
© 2026 منصة شكاوى الإمارات - جميع الحقوق محفوظة
</p>



<button
onClick={scrollTop}
aria-label="العودة للأعلى"
>

<ArrowUp size={20}/>

</button>


</div>



</footer>

)

}


export default Footer;