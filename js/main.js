    //https://jsonplaceholder.typicode.com/users
var container =  document.querySelector('.container');
var head = document.getElementById('rowDate');
var recpieName = document.querySelectorAll('.nav-link')
var apiArr = []
for(i=0;i<recpieName.length;i++){

    recpieName[i].addEventListener('click', getName)
    
    function getName(){

    var linkName = this.innerHTML;
    apiConnect(linkName)
    }}
    
    
function apiConnect(linkName){
    
    var req = new XMLHttpRequest();
    
    req.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${linkName}`);
    req.send();
    
        req.addEventListener('readystatechange',resonceReqest)
       function resonceReqest(){
           
           if(req.readyState == 4 && req.status == 200){
               var response = JSON.parse( req.response).recipes
               
               apiArr = response;
               console.log(apiArr)
            }
         displayData();
         
        }
        
    }

    


function displayData(){
    var div = " ";
    for(i=0; i<apiArr.length;i++){

        div +=`
        <div class="head col-md-4">
        <img class="img-fluid height" src="${apiArr[i].image_url}">
        <h2>${apiArr[i].title}</h2>
        <a target="_blank" href="${apiArr[i].source_url}">go to source</a>
        </div>
        ` 
    }
    head.innerHTML = div;
 
}
