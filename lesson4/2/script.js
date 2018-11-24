function validation(){
var name = document.getElementById("name");
    reName = /[^A-Zа-я]/ig;
    if (reName.test(name.value)){
       name.className = "error";
       alert("wrong name");        
    } 
    else {
       name.className = "txt";
    }  


    var phone = document.getElementById("phone");
    rePhone = /^\+[7][\(]\d{3}\)\d{3}-\d{4}$/ig;
    var valid = rePhone.test(phone.value);
    if (!valid){
        alert("wrong phone"); 
        phone.className = "error";
    }
    else {
        phone.className = "txt";
     }  


     var email = document.getElementById("email");
     reEmail = /^[a-z]{2}\.?\-?[a-z]{4}\@[a-z]{4}\.ru$/ig;
     var valid = reEmail.test(email.value);
     if (!valid){
         alert("wrong mail"); 
         email.className = "error";
     }
     else {
         email.className = "txt";
      }  
    }


var xhr = false;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    try {
        xhr = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
        try {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {}
    }
}

if (!xhr) {
    alert("Ошибка: невозможно создать");
}

function fillContent(xhr) {
    var my_coutries = [];
    if (xhr.readyState == 4) {
        if (xhr.status == 0) {
            var items = JSON.parse(xhr.responseText);
            for (var i = 0; i < items.country.length; i++) {
             my_coutries[i] = items.country[i].name;
            }
            $("#my_country").autocomplete({
                source: my_coutries ,
                minLength: 3
                

            });
        }
    }
   
}


xhr.onreadystatechange = function () {
fillContent(xhr);
 };

  xhr.open('GET', "./countries.json", true);
  xhr.send();


