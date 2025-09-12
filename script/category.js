const loadTreeCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=>res.json())
    .then((json)=> displayTreeCategorie(json.categories));
};

const loadAllPlants =(id)=>{
    const url =`https://openapi.programming-hero.com/api/plants/${id}`;
    console.log(url);   
}





const displayTreeCategorie = (TreeCategories) => {
    console.log(TreeCategories)


const categoryContainer = document.getElementById("category-container");
categoryContainer.innerHTML=`<h1 class="font-bold ml-13 mt-8"> Categories </h1>`;

for (let TreeCategorie of TreeCategories){

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button onclick="loadAllPlants('${TreeCategorie.category_name}')" class="btn btn-ghost h-8 w-50 hover:text-white hover:bg-[#15803d]  ">${TreeCategorie.category_name}</button>`;  

      categoryContainer.append(btnDiv);
    }

};

loadTreeCategories();

