const loadPlants = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((json) => displayPlant(json.plants))
        .catch((err) => console.error("Error loading plants:", err));
};

const displayPlant = (plants) => {
     // Will print the array of plant objects

     const plantContainer = document.getElementById("plant-container");
     plantContainer.innerHTML ="";


     for (let plant of plants){
        const plantCard= document.createElement("div")
        plantCard.innerHTML =`   <div class="card bg-base-100 w-full h-full shadow-sm flex flex-col justify-between max-w-sm mx-auto min-h-[450px]">
  <figure class="px-10 pt-10">
    <img src="${plant.image}" alt="tree" class="rounded-xl h-40 w-full object-cover" />
  </figure>
  <div class="card-body items-center flex flex-col justify-between  text-center">
    <h2 class="card-title mr-30 font-bold text-xl  ">${plant.name}</h2>
    <p class="text-sm text-gray-600 ">${plant.description}</p>
    <!--div-->
    <div class="flex mt-2">
      <div class="badge text-green-900 font-bold  bg-[#DCFCE7] rounded-full mr-30">${plant.category}</div>
      <div class="badge  font-bold">৳<span>${plant.price}</span></div>
    </div>


    <div class="card-actions mt-4 w-full">
      <button class="btn w-full mx-auto  rounded-full text-white bg-[#15803D]">Add to Cart</button>

      
    </div>
  </div>
</div>`;

       plantContainer.appendChild(plantCard);
     };
};

loadPlants();