

let searchEl=document.getElementById("search")
let cityEl=document.getElementById("cityname")
let searchbtn=document.getElementById("searchbtn")
let temprature=document.getElementById("temprature")
let countryname=document.getElementById("countryname")
let statusicon=document.getElementById("statusicon")
let statuss=document.getElementById("status")
let state=document.getElementById("state")
console.log("pakistan")
let getData=async()=>{
let searchVal=searchEl.value;
if (searchVal==="") {
    cityEl.innerText="please enter city name before clickeng search buton"
}
else{
    try {
        let url=`http://api.weatherapi.com/v1/current.json?key=2fd1af6afa3a45b99b534802240501&q=${searchVal}&aqi=no`
        let data=await fetch(url)
        let jdata=await data.json()
        console.log(jdata)
        cityEl.innerText=`${jdata.location.name}`
        temprature.innerText=`${jdata.current.temp_c} o C`
        countryname.innerText=`${jdata.location.country}`
        statuss.innerText=`${jdata.current.condition.text}`
        statuss.innerText=`${jdata.location.region}`
        statusicon.src=`${jdata.current.condition.icon}`
        searchEl.focus();
        searchEl.value="";
    } catch (error) {
        cityEl.innerText="please enter correct city name in small letters"
        searchEl.value=""
        searchEl.focus();
    }
}
}

searchbtn.addEventListener("click",getData)
//~