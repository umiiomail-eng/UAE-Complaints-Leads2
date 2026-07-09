import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "../styles/faq.css";


function FAQ(){

const questions=[

{
q:"هل منصة شكاوى الإمارات جهة حكومية؟",
a:"المنصة مستقلة وتعمل على استقبال شكاوى المستهلكين ومراجعة البيانات المقدمة للمساعدة في تحديد المسار المناسب حسب طبيعة الشكوى."
},

{
q:"هل تقديم الشكوى مجاني؟",
a:"نعم، يمكنك تقديم البلاغ عبر النموذج الإلكتروني بسهولة."
},

{
q:"هل بياناتي محفوظة بسرية؟",
a:"نعم، يتم التعامل مع البيانات المقدمة بسرية ولا تستخدم إلا لغرض مراجعة البلاغ والتواصل عند الحاجة."
},

{
q:"ما المعلومات المطلوبة لتقديم الشكوى؟",
a:"تحتاج إلى إدخال بيانات التواصل الأساسية، تفاصيل الشكوى، وبيانات الشركة أو المؤسسة محل الشكوى."
},

{
q:"متى يتم التواصل معي؟",
a:"يتم التواصل عند الحاجة إلى معلومات إضافية أو لمتابعة تفاصيل البلاغ."
}

];


const [open,setOpen]=useState(null);



return(

<section className="faq">


<div className="faq-container">


<h2>
الأسئلة الشائعة
</h2>


<p className="faq-desc">
إجابات عن أكثر الأسئلة المتعلقة بتقديم الشكاوى.
</p>



<div className="faq-list">


{
questions.map((item,index)=>(


<div
className={`faq-item ${open===index ? "active":""}`}
key={index}
>


<button
onClick={()=>setOpen(open===index ? null:index)}
>


<span>
{item.q}
</span>


<ChevronDown size={20}/>


</button>



<div className="faq-answer">

<p>
{item.a}
</p>

</div>



</div>


))
}



</div>


</div>


</section>


)

}


export default FAQ;