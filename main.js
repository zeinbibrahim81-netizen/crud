let title=document.getElementById('title');
let price=document.getElementById('price');
let texes=document.getElementById('texes');
let ads=document.getElementById('ads');
let discount =document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit =document.getElementById('submit');
// let =document.getElementById('title')
let mood ='create'; 
let tmp;
function getTotal(){
if(price.value != ''){
  
  let result= (+price.value + +texes.value + +ads.value ) - +discount.value;
 total.innerHTML=result;
  total.style.background='#040';
} else {
  total.innerHTML = '' ;
  total.style.background = 'rgb(118, 24, 24)';
}

}
// creat product
let dataPro;

if(localStorage.product != null){
dataPro = JSON.parse(localStorage.product)
}else{
  dataPro= [];
}

submit.onclick=function(){

  let newPro = {  
    title:title.value.toLowerCase(),
price:price.value,
texes:texes.value,
ads:ads.value,
discount:discount.value,
total:total.innerHTML,
count:count.value,
category:category.value.toLowerCase(),



  }


  if( title.value != '' && count.value<10){
  if(mood === 'create'){

      if(newPro.count>1){
for(i=0; i<newPro.count; i++){
    dataPro.push(newPro)

  }}else{

    dataPro.push(newPro)
  }}
 else{
  dataPro[ tmp ]=newPro;
  mood = 'create';
submit.innerHTML='create'
count.style.display='block';
  clearData()
 }}
  

  localStorage.setItem('product', JSON.stringify(dataPro))
  console.log(newPro)

  showData()
 


}
// clear data

function clearData(){
  title.value = '';
  price.value='';
  texes.value='';
  ads.value='';
  discount.value='';
  total.innerHTML='';
  count.value='';
category.value='';  
}
// show data
function showData(){
getTotal()
  let table='';
  for(i=0; i<dataPro.length; i++){
table = table +`<tr>   
<td>${i+1}</td>
<td>${dataPro[i].title}</td>
<td>${dataPro[i].price}</td>
<td>${dataPro[i].texes}}</td>
<td>${dataPro[i].ads}</td>
<td>${dataPro[i].discount}</td>
<td>${dataPro[i].total}</td>
<td>${dataPro[i].category}</td>
<td><button  onclick="updatedata(${i})"  id="update">update</button></td>
	<td><button    onclick="deletData(${i})"    id="delete">delet</button></td>








</tr> `


  }
  document.getElementById('tbody').innerHTML=table;

  
let btndelete=document.getElementById('deleteall');
if(dataPro.length > 0){
btndelete.innerHTML=`<button  onclick="deleteAlld()" >Delete All </button>`
}else{


  btndelete.innerHTML= '';
}

}
showData()
// delete


function deletData(i){
  dataPro.splice(i,1)
  localStorage.product=  JSON.stringify(dataPro);
showData()
}

// delete all




function deleteAlld() {

  localStorage.clear();
    dataPro.splice(0)
  showData()

}
// update data 

function updatedata(i){
title.value=dataPro[i].title;
price.value= dataPro[i].price;
texes.value=dataPro[i].texes;
ads.value=dataPro[i].ads;
discount.value=dataPro[i].discount;
getTotal()
count.style.display='none';
category.value=dataPro[i].category;
submit.innerHTML='update'
mood='update'
tmp=i;
scroll({
  top:0,
  behavior:'smooth',

})
}
let searchmood ='title';
function  getsearchMood(id){
  let search=document.getElementById('search')
if( id == 'searchtitle'){
searchmood='title';

} else{
searchmood='category';

}
search.focus()
search.placeholder='search by'+ searchmood;
search.value='';
showData();
}



function searchdata(value){
  // getsearchMood()
   let table='';
    
    





      for( i=0; i < dataPro.length; i++ ){ 


  if( searchmood == 'title' )
    
    
    {



if(dataPro[i].title.includes(value.toLowerCase())){
 
table = table +`<tr>   
<td>${i}</td>
<td>${dataPro[i].title}</td>
<td>${dataPro[i].price}</td>
<td>${dataPro[i].texes}}</td>
<td>${dataPro[i].ads}</td>
<td>${dataPro[i].discount}</td>
<td>${dataPro[i].total}</td>
<td>${dataPro[i].category}</td>
<td><button  onclick="updatedata(${i})"  id="update">update</button></td>
	<td><button    onclick="deletData(${i})"    id="delete">delet</button></td>








</tr> `;





  }}

      
else{

   
if(dataPro[i].category.includes(value.toLowerCase())){
 
table = table +`<tr>   
<td>${i}</td>
<td>${dataPro[i].title}</td>
<td>${dataPro[i].price}</td>
<td>${dataPro[i].texes}}</td>
<td>${dataPro[i].ads}</td>
<td>${dataPro[i].discount}</td>
<td>${dataPro[i].total}</td>
<td>${dataPro[i].category}</td>
<td><button  onclick="updatedata(${i})"  id="update">update</button></td>
	<td><button    onclick="deletData(${i})"    id="delete">delet</button></td>








</tr> `;


}}}
document.getElementById('tbody').innerHTML=table;

}
