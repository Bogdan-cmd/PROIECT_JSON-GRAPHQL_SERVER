


async function DataFetch(url) {
  url = 'http://localhost:3000';
 try {
     let res = await fetch(url+'/category');
     return await res.json();
 } catch (error) {
     console.log(error);
 }
} 
async function renderCategories(){
 let elements = await DataFetch();
 let html = '';

 elements.forEach(type => {
   let htmlSegment = `
   <div class = "elemente" onclick = "displayDetails()"> 
   <h3> ${type.id,type.name} <h3>
    </div>
   ` ;
   html += htmlSegment;
 });

 
 let container = document.querySelector('.deAfisat');
   container.innerHTML = html;
}

function displayCategories(){
 renderCategories();
}
async function displayDetails(url) {
 let mark = await DataFetch(url+'/menu');
 let html ='';
 mark.forEach(item => {  
  let htmlSegment = `
  <div> 
   <h2> ${item.name}</h2>
  </div>
  `;
  console.log(url)
     html +=htmlSegment;
 });

   let container = document.querySelector('.details');
   container.innerHTML = html;

}