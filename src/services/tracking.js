function getDevice() {

  const ua = navigator.userAgent;

  if (/mobile/i.test(ua)) {
    return "Mobile";
  }

  if (/tablet/i.test(ua)) {
    return "Tablet";
  }

  return "Desktop";

}



function getBrowser() {

  const ua = navigator.userAgent;


  if (ua.includes("Edg")) return "Edge";

  if (ua.includes("Chrome")) return "Chrome";

  if (ua.includes("Firefox")) return "Firefox";

  if (ua.includes("Safari")) return "Safari";


  return "Unknown";

}



function getOS() {

  const ua = navigator.userAgent;


  if (ua.includes("Windows")) return "Windows";

  if (ua.includes("Mac")) return "MacOS";

  if (ua.includes("Android")) return "Android";

  if (ua.includes("iPhone")) return "iOS";


  return "Unknown";

}



function getUTM() {

  const params = new URLSearchParams(
    window.location.search
  );


  return {

    source:
      params.get("utm_source") || 
      getReferrerSource(),


    medium:
      params.get("utm_medium") || "",


    campaign:
      params.get("utm_campaign") || ""

  };

}



function getReferrerSource(){

  const ref = document.referrer;


  if(!ref){
    return "Direct";
  }


  if(ref.includes("google")){
    return "Google";
  }


  if(ref.includes("facebook")){
    return "Facebook";
  }


  if(ref.includes("instagram")){
    return "Instagram";
  }


  return ref;

}




export function getTrackingData(){


  const utm = getUTM();


  return {


    timezone:
    Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone,


    device:
    getDevice(),


    browser:
    getBrowser(),


    os:
    getOS(),


    source:
    utm.source,


    medium:
    utm.medium,


    campaign:
    utm.campaign,


    referrer:
    document.referrer || "Direct",


    landingPage:
    window.location.href


  };


}