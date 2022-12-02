function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            var output = "";
            for(var i=0;i<response.length;i++){
                if(response[i].completed==true){
                    output +=`<tr>
                <th scope="row">${response[i].id}</th>
                <td>${response[i].title}</td>
                <td><input type=checkbox checked disabled></td>
              </tr>`;
                }
                else{
                    output +=`<tr>
                    <th scope="row">${response[i].id}</th>
                    <td>${response[i].title}</td>
                    <td><input type=checkbox name=checklist onclick=count()></td>
                  </tr>`;
                }
            }
            document.getElementById("demo").innerHTML=output;
        }
    }

    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function count(){
    var promise=new Promise(function(resolve,reject){
        var count=0;
        var checklist=document.getElementsByName("checklist");
        for(i=0;i<checklist.length;i++){
            if (checklist[i].checked==true){
                count++;
            }
        }
        if(count==5){
           resolve("Congrats. Completed 5 Tasks.");
        }
    })
    promise
      .then(function(s){
           alert(s);
      })
}


function redirect(){
        location.href = "/index.html";
}
    