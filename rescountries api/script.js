
const container = document.querySelector('.container');




fetch("https://restcountries.com/v2/all")
// .then((data)=>{
//     return data.json();
//   }).then((completedata)=>{
//     console.log(completedata);
//   })
   .then((res)=>res.json())
 .then((data)=> displaycountriesdata(data));
 


 const  displaycountriesdata = (data)=>{
     data.forEach((country)=> {
        const divCol=document.createElement("div1");
        divCol.className =" row col-lg-4 col-sm-12";
        container.appendChild(divCol);
        const dive = document.createElement("div2");
        dive.className="card";
        divCol.appendChild(dive);
        const diven = document.createElement("div3");
        dive.appendChild(diven);
        diven.className="box";
        const div = document.createElement("div4");
        div.className="cards";
        div.innerHTML=`<div class="card-header text-center">${country.name}  </div><img src="${country.flag}" class="image" alt="...">
        <div class="card-body " style="padding-top:5px;">
          <p class="capital">Capital:${country.capital}</p>
          <p class="region">Region:${country.region}</p>
          <p class="code">countrycode:${country.alpha3Code}</p>
          <p class="latlng">Latlmg:${country.latlng}</p>
        <button class="button border border-light btn action" onclick='getweather("${country.capital}")'>click for weather</button>       
          
        </div>`;

        diven.appendChild(div);
     });
 };


 
 async function getweather (opendata) {
   try{
  const posts= await fetch("http://api.openweathermap.org/data/2.5/weather?q="+ opendata +"&APPID=34a56f92101c766babb8bcd19c1c9015");
  if(posts.ok === false){
    throw "page not found"
  } 
  const parsedata= await posts.json();
  const weather= await JSON.stringify(parsedata);
    //  console.log(weather);
         alert(weather);
   }
   catch(err){
     console.log(err);
     console.log("page 404 error");
   }

 };