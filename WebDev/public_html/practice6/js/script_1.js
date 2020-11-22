document.addEventListener("DOMContentLoaded",
  (event) => {
      
    const btn = document.getElementById("onclick");
    const name=document.getElementById("name");
    const surname=document.getElementById("surname");
    const avatar=document.getElementById("avatar");
    const email=document.getElementById("email");
    let counter=1;
    btn.onclick=()=>{
       $ajaxUtils
          .sendGetRequest(`https://reqres.in/api/users/`+counter, 
            (request) => {
              const data = (JSON.parse(request.responseText));
              name.innerHTML=data.data.first_name;
              surname.innerHTML=' ' + data.data.last_name;
              avatar.src=data.data.avatar;
              email.innerHTML=data.data.email;
                                         
              if (counter==12){
                  counter=0;
              }
              counter++;
              
            });
    }
  });