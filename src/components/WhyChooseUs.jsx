import {
ShieldCheck,
Lock,
BadgeCheck
} from "lucide-react";

import "../styles/why.css";

function WhyChooseUs(){

const items=[

{
icon:<ShieldCheck size={34}/>,
title:"مراجعة أولية",
text:"تتم مراجعة البلاغ للتأكد من اكتمال المعلومات قبل متابعة الإجراءات المناسبة."
},

{
icon:<Lock size={34}/>,
title:"سرية البيانات",
text:"تُعامل جميع البيانات بسرية، ولا تُستخدم إلا لغرض مراجعة البلاغ والتواصل مع مقدمه."
},

{
icon:<BadgeCheck size={34}/>,
title:"متابعة منظمة",
text:"يتم تصنيف البلاغات حسب نوعها لتسهيل متابعتها وتحديد المسار المناسب."
}

];

return(

<section className="why">

<div className="container">

<h2>لماذا تختار المنصة؟</h2>

<p className="why-subtitle">
منصة مستقلة لاستقبال شكاوى المستهلكين داخل دولة الإمارات بطريقة سهلة وآمنة.
</p>

<div className="why-grid">

{items.map((item,index)=>(

<div
key={index}
className="why-card"
>

<div className="icon">
{item.icon}
</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>

))}

</div>

</div>

</section>

);

}

export default WhyChooseUs;