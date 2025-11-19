const Countries = document.querySelector("#Countries");
const SearchInput = document.getElementById("SearchInput")
const filterButton = document.getElementById("filterButton")
const fa_moon = document.querySelector(".fa-moon")
const sun = document.querySelector(".fa-sun")
const Menu = document.getElementById("Menu")
const europe = document.querySelector(".Eu")
const Asia = document.querySelector(".As")
const Antarctic = document.querySelector(".An")
const Africa = document.querySelector(".Af")
const America = document.querySelector(".Am")
const Oceania = document.querySelector(".Oc")

const div = document.createElement("div");
const SearchBtn = document.getElementById("SearchBtn")
async function fetchData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("could not fetch");

    const data = await response.json(); // <-- this is an array
    
   
   data.forEach(Country => {
    const div = document.createElement("div");
    div.innerHTML =
    `
    <div class="dark:bg-[#2b3944] bg-gray-100 lg:w-80  w-full h-full">
        <img class="w-full h-60" src="${Country.flags.png}" alt="">
        <div class="p-5">
        <h2 class="text-lg font-bold">${Country.name}</h2>
        <p class=" text-sm"><span class="font-semibold">population:</span> ${Country.population}</p>
        <p class=" text-sm"><span class="font-semibold">Region:</span> ${Country.region}</p>
        <p class=" text-sm"><span class="font-semibold">Capital:</span> ${Country.capital}</p>

        </div>
     </div>
    
    `;
    Countries.appendChild(div);
   

   });

   
   SearchBtn.addEventListener("click" , ()=> {
    let FindByName = data.find(c => {
      if(SearchInput.value.toLowerCase() === c.name.toLowerCase()){
        Countries.innerHTML =
        `
        <div class="dark:bg-[#2b3944] bg-gray-100 lg:w-80  w-full h-full">
            <img class="w-full h-60" src="${c.flags.png}" alt="">
            <div class="p-5">
            <h2 class="text-lg font-bold">${c.name}</h2>
            <p class=" text-sm"><span class="font-semibold">population:</span> ${c.population}</p>
            <p class=" text-sm"><span class="font-semibold">Region:</span> ${c.region}</p>
            <p class=" text-sm"><span class="font-semibold">Capital:</span> ${c.capital}</p>
    
            </div>
         </div>
        
        `;

        SearchInput.value = "";
      }
   
    }) 
      
       
    })

    europe.addEventListener("click" , ()=> {
      Countries.innerHTML = "";
      let EuropeCountries = data.filter(c => c.region === "Europe")
        EuropeCountries.forEach(c => {
          
          let div = document.createElement("div")
          div.innerHTML = `
          <div class="dark:bg-[#2b3944] bg-gray-100 lg:w-80  w-full h-full">
              <img class="w-full h-60" src="${c.flags.png}" alt="">
              <div class="p-5">
              <h2 class="text-lg font-bold">${c.name}</h2>
              <p class=" text-sm"><span class="font-semibold">population:</span> ${c.population}</p>
              <p class=" text-sm"><span class="font-semibold">Region:</span> ${c.region}</p>
              <p class=" text-sm"><span class="font-semibold">Capital:</span> ${c.capital}</p>
      
              </div>
           </div>
          
          `;
              
             Countries.appendChild(div)         
            
             
        })
         
      })
      Asia.addEventListener("click" , ()=> {
        Countries.innerHTML = "";
        let EuropeCountries = data.filter(c => c.region === "Asia")
          EuropeCountries.forEach(c => {
            
            let div = document.createElement("div")
            div.innerHTML = `
            <div class="dark:bg-[#2b3944] bg-gray-100 lg:w-80  w-full h-full">
                <img class="w-full h-60" src="${c.flags.png}" alt="">
                <div class="p-5">
                <h2 class="text-lg font-bold">${c.name}</h2>
                <p class=" text-sm"><span class="font-semibold">population:</span> ${c.population}</p>
                <p class=" text-sm"><span class="font-semibold">Region:</span> ${c.region}</p>
                <p class=" text-sm"><span class="font-semibold">Capital:</span> ${c.capital}</p>
        
                </div>
             </div>
            
            `;
                
               Countries.appendChild(div)         
              
               
          })
           
        })
        Africa.addEventListener("click" , ()=> {
          Countries.innerHTML = "";
          let EuropeCountries = data.filter(c => c.region === "Africa")
            EuropeCountries.forEach(c => {
              
              let div = document.createElement("div")
              div.innerHTML = `
              <div class="dark:bg-[#2b3944] bg-gray-100 lg:w-80  w-full h-full">
                  <img class="w-full h-60" src="${c.flags.png}" alt="">
                  <div class="p-5">
                  <h2 class="text-lg font-bold">${c.name}</h2>
                  <p class=" text-sm"><span class="font-semibold">population:</span> ${c.population}</p>
                  <p class=" text-sm"><span class="font-semibold">Region:</span> ${c.region}</p>
                  <p class=" text-sm"><span class="font-semibold">Capital:</span> ${c.capital}</p>
          
                  </div>
               </div>
              
              `;
                  
                 Countries.appendChild(div)         
                
                 
            })
             
          })
          Antarctic.addEventListener("click" , ()=> {
            Countries.innerHTML = "";
            let EuropeCountries = data.filter(c => c.region === "Antarctic")
              EuropeCountries.forEach(c => {
                
                let div = document.createElement("div")
                div.innerHTML = `
                <div class="dark:bg-[#2b3944] bg-gray-100 lg:w-80  w-full h-full">
                    <img class="w-full h-60" src="${c.flags.png}" alt="">
                    <div class="p-5">
                    <h2 class="text-lg font-bold">${c.name}</h2>
                    <p class=" text-sm"><span class="font-semibold">population:</span> ${c.population}</p>
                    <p class=" text-sm"><span class="font-semibold">Region:</span> ${c.region}</p>
                    <p class=" text-sm"><span class="font-semibold">Capital:</span> ${c.capital}</p>
            
                    </div>
                 </div>
                
                `;
                    
                   Countries.appendChild(div)         
                  
                   
              })
               
            })
            Oceania.addEventListener("click" , ()=> {
              Countries.innerHTML = "";
              let EuropeCountries = data.filter(c => c.region === "Oceania")
                EuropeCountries.forEach(c => {
                  
                  let div = document.createElement("div")
                  div.innerHTML = `
                  <div class="dark:bg-[#2b3944] bg-gray-100 lg:w-80  w-full h-full">
                      <img class="w-full h-60" src="${c.flags.png}" alt="">
                      <div class="p-5">
                      <h2 class="text-lg font-bold">${c.name}</h2>
                      <p class=" text-sm"><span class="font-semibold">population:</span> ${c.population}</p>
                      <p class=" text-sm"><span class="font-semibold">Region:</span> ${c.region}</p>
                      <p class=" text-sm"><span class="font-semibold">Capital:</span> ${c.capital}</p>
              
                      </div>
                   </div>
                  
                  `;
                      
                     Countries.appendChild(div)         
                    
                     
                })
                 
              })
              America.addEventListener("click" , ()=> {
                Countries.innerHTML = "";
                let EuropeCountries = data.filter(c => c.region === "Americas")
                  EuropeCountries.forEach(c => {
                    
                    let div = document.createElement("div")
                    div.innerHTML = `
                    <div class="dark:bg-[#2b3944] bg-gray-100 lg:w-80  w-full h-full">
                        <img class="w-full h-60" src="${c.flags.png}" alt="">
                        <div class="p-5">
                        <h2 class="text-lg font-bold">${c.name}</h2>
                        <p class=" text-sm"><span class="font-semibold">population:</span> ${c.population}</p>
                        <p class=" text-sm"><span class="font-semibold">Region:</span> ${c.region}</p>
                        <p class=" text-sm"><span class="font-semibold">Capital:</span> ${c.capital}</p>
                
                        </div>
                     </div>
                    
                    `;
                        
                       Countries.appendChild(div)         
                      
                       
                  })
                   
                })
              
            
      
  } catch (error) {
    console.log(error);
  }
}
fetchData();




tailwind.config = {
  darkMode: 'class',
}

const darkMode = document.getElementById("darkMode")
const html = document.querySelector("html");
darkMode.addEventListener("click" , () => {
html.classList.toggle("dark")
fa_moon.classList.toggle("hidden")
sun.classList.toggle("hidden")

});


filterButton.addEventListener("click" , () =>{
Menu.classList.toggle("hidden")
})
