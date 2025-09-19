const loadTreeCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=>res.json())
    .then((data)=> displayTreeCategorie(data.categories));
};


const loadPlants = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((data) => displayPlant(data.plants))
        
};
/// by clicking category get plants
const loadAllPlants =(id)=>{

  /////spinner
  document.getElementById("loading-spinner").classList.remove("hidden");
  document.getElementById("plant-container").classList.add("hidden");
////

const url =id 
?`https://openapi.programming-hero.com/api/category/${id}`
:`https://openapi.programming-hero.com/api/category/1`

const catBtns = document.querySelectorAll(".btn-category");
  catBtns.forEach((btn) => btn?.classList?.remove("active"));

  const currentBtn = document.getElementById(`TreeCategorie-btn-${id}`);
  console.log(currentBtn);
  currentBtn?.classList?.add("active");
 fetch(url)
.then((res) => res.json())
.then((data) =>displayPlant(data.plants));
}

///modal

const loadTreeDetails=(id)=> {
  const url =`https://openapi.programming-hero.com/api/plant/${id}`;  
  fetch(url)
.then((res) => res.json())
.then((data) =>displayDetails(data.plants));
}

//all plant show
const displayPlant = (plants) => {
     

     const plantContainer = document.getElementById("plant-container");
     plantContainer.innerHTML ="";


     for (let plant of plants){
        const plantCard= document.createElement("div")
        plantCard.innerHTML =`
        <div onclick="loadTreeDetails(${plant.id})"  class="card bg-base-100 w-full h-full shadow-sm flex flex-col  max-w-sm mx-auto min-h-[450px]">
  <figure class="px-5 pt-5">
    <img src="${plant.image}" alt="tree" class="rounded-xl h-40 w-full object-cover" />
  </figure>
  <div class="card-body items-center flex flex-col justify-between  text-center">
    <h2 class="card-title mr-30 font-bold text-xl  ">${plant.name}</h2>
    <p class="text-sm text-gray-600 ">${plant.description}</p>
    <!--div-->
    <div class="flex ">
      <div class="badge text-green-900 font-bold  bg-[#DCFCE7] rounded-full mr-20">${plant.category}</div>
      <div class="badge  font-bold">৳<span>${plant.price}</span></div>
    </div>


    <div class="card-actions mt-4 w-full">
      <button class="btn w-full mx-auto  rounded-full text-white bg-[#15803D]">Add to Cart</button>

      
    </div>
  </div>
</div>`;

       plantContainer.append(plantCard);
         
     };
     
  document.getElementById("loading-spinner").classList.add("hidden");
  document.getElementById("plant-container").classList.remove("hidden");  
};

//active






// category show

const displayTreeCategorie = (TreeCategories) => {
const categoryContainer = document.getElementById("category-container");
categoryContainer.innerHTML="";

for (let TreeCategorie of TreeCategories){

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button id="TreeCategorie-btn-${TreeCategorie.id}"  onclick="loadAllPlants(${TreeCategorie.id})" class="btn btn-ghost h-8 w-50 hover:text-white hover:bg-[#15803d] btn-category">${TreeCategorie.category_name}</button>`;  

      categoryContainer.append(btnDiv);
    }

};
//modal display

const displayDetails = (plant)=>{
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML=`<div class="">
        <img src="${plant.image}" alt="" class="rounded-xl h-40 w-full object-cover />
        <h2 class="card-title mr-30 font-bold text-xl  ">${plant.name}</h2>
    <p class="text-sm text-gray-600 ">${plant.description}</p>
    <div class="flex ">
      <div class="badge text-green-900 font-bold  bg-[#DCFCE7] rounded-full mr-20">${plant.category}</div>
      <div class="badge  font-bold">৳<span>${plant.price}</span></div>
    </div> 
    </div>`;

    document.getElementById("my_modal_2").showModal();

}




loadPlants();
loadTreeCategories();
loadTreeDetails();
