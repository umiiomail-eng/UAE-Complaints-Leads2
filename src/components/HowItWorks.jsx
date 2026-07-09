import { useEffect, useRef, useState } from "react";
import {
  FileEdit,
  SearchCheck,
  PhoneCall,
  CheckCircle
} from "lucide-react";

import "../styles/how.css";


function HowItWorks(){

const steps=[

{
icon:<FileEdit />,
title:"تعبئة النموذج",
text:"أدخل بياناتك وتفاصيل الشكوى بشكل واضح."
},

{
icon:<SearchCheck />,
title:"مراجعة البلاغ",
text:"نراجع المعلومات للتأكد من اكتمالها."
},

{
icon:<PhoneCall />,
title:"التواصل عند الحاجة",
text:"قد يتم التواصل معك لاستكمال أي معلومات إضافية."
},

{
icon:<CheckCircle />,
title:"متابعة الإجراءات",
text:"يتم تحديد المسار المناسب حسب طبيعة الشكوى."
}

];

const stepRefs = useRef([]);
const [visibleSteps, setVisibleSteps] = useState([]);

useEffect(() => {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const index = Number(entry.target.dataset.index);

                    setVisibleSteps((prev) =>
                        prev.includes(index) ? prev : [...prev, index]
                    );

                    // بمجرد ما يظهر مرة، ما في داعي نراقبه تاني
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.25,
            rootMargin: "0px 0px -60px 0px"
        }
    );

    stepRefs.current.forEach((el) => {
        if (el) observer.observe(el);
    });

    return () => observer.disconnect();

}, []);


return(

<section className="how">

<div className="how-container">


<h2>
كيف يعمل النظام؟
</h2>


<p className="how-desc">
خطوات بسيطة لتقديم شكواك ومتابعتها بسهولة.
</p>


<div className="steps">


{
steps.map((step,index)=>(

<div
    className={`step ${visibleSteps.includes(index) ? "in-view" : ""}`}
    key={index}
    ref={(el) => (stepRefs.current[index] = el)}
    data-index={index}
    style={{ transitionDelay: `${index * 0.12}s` }}
>


<div className="step-number">

{index + 1}

</div>


<div className="step-icon">

{step.icon}

</div>


<h3>
{step.title}
</h3>


<p>
{step.text}
</p>


</div>

))
}


</div>


</div>

</section>

)

}


export default HowItWorks;
