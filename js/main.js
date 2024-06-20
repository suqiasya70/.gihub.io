"use strict"
const apiKey="c8f25ab779fd4a8c8e1142343231209"
let form=document.querySelector("form")
let search=document.querySelector("#search")
let card=document.querySelector(".card")
let city
form.onsubmit=function(event){
    event.preventDefault()
    city=search.value.trim()
    console.log(city)
    const url=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    console.log(url)
    console.log(fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        if(data.error){
            card.innerHTML=data.error.message
        }else{
        card.innerHTML=`
         <div class="card-info">
             <h3 class="city">${data.location.name}</h3>
             <p class="country">${data.location.country}</p>
             <strong class="temp">${data.current.temp_c
             }<sup><small>o</small></sup>C</strong>
             <p class="info">${data.current.condition.text}</p>
        </div>
    <div class="card-img">
         <img src="http:${data.current.condition.icon}"
         alt="weather">
    </div>`
}
    })

    )
}