var disp=document.querySelector(".ip-display");
document.querySelector("button").addEventListener("click",()=>
    fetch(`https://ipapi.co/json/`)
    .then(res => res.json())
    .then(data => {
        disp.textContent=`IP : ${data.ip}`
        document.querySelector(".Country-display").textContent=`Country : ${data.country_name}`
        document.querySelector(".State-display").textContent=`State : ${data.region}`
        document.querySelector(".City-display").textContent=`City : ${data.city}`
        document.querySelector(".PCode-display").textContent=`Postal-Code : ${data.postal}`
        document.querySelector(".Org-display").textContent=`Org : ${data.org}`
    }))