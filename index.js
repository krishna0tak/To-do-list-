function getAndupdate(){
    let  desc = document.getElementById("txtar").value
 let  tit = document.getElementById("title").value
   if (localStorage.getItem('itemsJson')==null){
      itemJsonArray = [];
       itemJsonArray.push([tit , desc])
       localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray))
   }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson')
       itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([ tit , desc ]);
        localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray))}
        update()
}
function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
         localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray))
     }else {
        itemJsonArraystr = localStorage.getItem('itemsJson')
       itemJsonArray = JSON.parse(itemJsonArraystr);
      }
     
 
        let tablebody = document.getElementById("tablebody");
        let str = ""
        itemJsonArray.forEach((element , index ) => {
          str += ` <tr>
            <th  scope="row">${index + 1 }</th>
            <td >${element[0]}</td>
            <td >${element[1]} </td>
            <td ><button  id="Delete" onclick="deleted(${index})">Delete</button></td>
            </tr>  <hr> `
        });
        tablebody.innerHTML = str;
}

let add = document.querySelector("#addto")
add.addEventListener("click" , getAndupdate  ) ;
update() 
   function deleted(itemIndex)
   { itemJsonArraystr = localStorage.getItem('itemsJson')
   itemJsonArray = JSON.parse(itemJsonArraystr);
   itemJsonArray.splice(itemIndex, 1)
   localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray))
   update()}
   function clearStorage(){ 
       if (confirm("do you really want to clear your items")){localStorage.clear()
        update()}
   }





 