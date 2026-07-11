import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getTrackingData } from "../services/tracking";
import "../styles/form.css";
import { useState } from "react";
import {
    User,
    Phone,
    Mail,
    Building2,
    FileText,
    MapPin,
    Shield
} from "lucide-react";

import { GOOGLE_SCRIPT_URL } from "../services/config";



const schema = z.object({

    fullName: z
        .string()
        .min(3, "يرجى إدخال الاسم الكامل")
        .max(100, "الاسم طويل جدًا")
        .regex(
            /^[\u0600-\u06FFa-zA-Z\s'.-]+$/,
            "يسمح بالأحرف العربية والإنجليزية فقط"
        ),


    phone: z
        .string()
        .regex(
            /^(?:\+971|05)[0-9]{8,9}$/,
            "أدخل رقم هاتف إماراتي صحيح"
        ),


    email: z
        .string()
        .email("البريد الإلكتروني غير صحيح"),


    status: z
        .string()
        .min(1, "يرجى اختيار الحالة"),


    emirate: z
        .string()
        .min(1, "يرجى اختيار الإمارة"),


    complaintCategory: z
        .string()
        .min(1, "يرجى اختيار فئة الشكوى"),


    companyName: z
        .string()
        .min(2, "أدخل اسم الشركة أو المؤسسة"),


    complaintDetails: z
        .string()
        .min(20, "تفاصيل الشكوى يجب أن تكون 20 حرفًا على الأقل")
        .max(3000, "تفاصيل الشكوى طويلة جدًا"),


});


function ComplaintForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }

    } = useForm({
        resolver: zodResolver(schema),
        mode: "all"
    });
    const onSubmit = async (data) => {

        setLoading(true);
        setSuccess(false);

        const tracking = getTrackingData();

        const finalData = {
            ...data,
            ...tracking
        };

        try {

            await fetch(
                GOOGLE_SCRIPT_URL,
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"
                    },
                    body: JSON.stringify(finalData)
                }
            );

            // تفريغ الفورم
            reset();

            // إظهار رسالة النجاح
            setSuccess(true);

            // إخفاء الرسالة بعد 5 ثوانٍ
            setTimeout(() => {
                setSuccess(false);
            }, 5000);

            // النزول إلى أعلى الفورم (اختياري)
            const formSection = document.getElementById("complaint-form");

            if (formSection) {
                window.scrollTo({
                    top: formSection.offsetTop - 30,
                    behavior: "smooth"
                });
            }

        } catch (error) {

            console.error("Submit Error:", error);
            alert("حدث خطأ أثناء إرسال البلاغ، يرجى المحاولة مرة أخرى.");

        } finally {

            setLoading(false);

        }

    };


    const complaintCategories = [

        "شكوى تجارية",
        "شكوى ضد شركة",
        "حماية المستهلك",
        "الغش التجاري",
        "المتاجر الإلكترونية",
        "الشكاوى العقارية",
        "الاحتيال المالي",
        "النصب والاحتيال",
        "الشكاوى المالية",
        "شركات التأمين",
        "التعويضات"

    ];


    const emirates = [

        "أبوظبي",
        "دبي",
        "الشارقة",
        "عجمان",
        "أم القيوين",
        "رأس الخيمة",
        "الفجيرة"

    ];


    const statuses = [

        "مواطن",
        "مقيم",
        "زائر",
        "شركة"

    ];



    return (

        <div className="form-card">


            <h2>
                قدّم بلاغك
            </h2>


            <p className="form-description">
                دقائق واحدة تفصلك عن حقك.
            </p>



            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="form-grid">



                    <div className="field">

                        <label>
                            الاسم الكامل
                        </label>

                        <div className="input-wrapper">

                            <User size={18} />

                            <input
                                {...register("fullName")}
                                placeholder="مثال: محمد أحمد"
                            />

                        </div>

                        <p className="error">
                            {errors.fullName?.message}
                        </p>

                    </div>



                    <div className="field">

                        <label>
                            رقم الهاتف
                        </label>

                        <div className="input-wrapper">

                            <Phone size={18} />

                            <input
                                {...register("phone")}
                                placeholder="+9715XXXXXXXX"
                            />

                        </div>

                        <p className="error">
                            {errors.phone?.message}
                        </p>

                    </div>



                    <div className="field">

                        <label>
                            البريد الإلكتروني
                        </label>

                        <div className="input-wrapper">

                            <Mail size={18} />

                            <input
                                {...register("email")}
                                placeholder="you@example.com"
                            />

                        </div>

                        <p className="error">
                            {errors.email?.message}
                        </p>

                    </div>



                    <div className="field">

                        <label>
                            الحالة
                        </label>

                        <div className="input-wrapper">

                            <Shield size={18} />

                            <select {...register("status")}>

                                <option value="">
                                    اختر...
                                </option>

                                {
                                    statuses.map(item =>
                                        <option key={item}>
                                            {item}
                                        </option>
                                    )
                                }

                            </select>

                        </div>

                        <p className="error">
                            {errors.status?.message}
                        </p>

                    </div>



                    <div className="field">

                        <label>
                            الإمارة
                        </label>


                        <div className="input-wrapper">

                            <MapPin size={18} />

                            <select {...register("emirate")}>

                                <option value="">
                                    اختر...
                                </option>

                                {
                                    emirates.map(item =>
                                        <option key={item}>
                                            {item}
                                        </option>
                                    )
                                }

                            </select>

                        </div>


                        <p className="error">
                            {errors.emirate?.message}
                        </p>


                    </div>




                    <div className="field">

                        <label>
                            فئة الشكوى
                        </label>


                        <select {...register("complaintCategory")}>

                            <option value="">
                                اختر...
                            </option>


                            {
                                complaintCategories.map(item =>
                                    <option key={item}>
                                        {item}
                                    </option>
                                )
                            }


                        </select>


                        <p className="error">
                            {errors.complaintCategory?.message}
                        </p>


                    </div>




                    <div className="field full">

                        <label>
                            اسم الشركة / المؤسسة
                        </label>


                        <div className="input-wrapper">

                            <Building2 size={18} />

                            <input
                                {...register("companyName")}
                                placeholder="اسم الشركة المُشتكى عليها"
                            />

                        </div>


                        <p className="error">
                            {errors.companyName?.message}
                        </p>


                    </div>



                    <div className="field full">


                        <label>
                            تفاصيل الشكوى
                        </label>


                        <div className="textarea-wrapper">

                            <FileText size={18} />

                            <textarea
                                {...register("complaintDetails")}
                                rows="6"
                                placeholder="اشرح الشكوى بالتفصيل: ماذا حدث، متى، وأي دليل يدعم بلاغك."
                            />

                        </div>


                        <p className="error">
                            {errors.complaintDetails?.message}
                        </p>


                    </div>



                </div>


                <button
                    type="submit"
                    disabled={loading}
                >

                    {
                        loading
                            ?
                            "جاري الإرسال..."
                            :
                            "إرسال البلاغ"
                    }

                </button>
                {success && (

                    <div className="success-overlay">

                        <div className="success-modal">

                            <div className="success-icon">
                                ✓
                            </div>

                            <h3>
                                تم إرسال البلاغ بنجاح
                            </h3>

                            <p>
                                نشكرك على إرسال البلاغ.<br />
                                سيتم مراجعة البيانات والتواصل معك عند الحاجة.
                            </p>

                            <button
                                onClick={() => setSuccess(false)}
                            >
                                حسناً
                            </button>

                        </div>

                    </div>

                )}


                <p className="privacy">
                    بإرسال البلاغ فإنك توافق على سياسة الخصوصية والشروط.
                </p>



            </form>


        </div>

    )


}


export default ComplaintForm;
