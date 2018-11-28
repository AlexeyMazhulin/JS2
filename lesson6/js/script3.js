function validation() {
    var name = document.getElementById("name");
    reName = /[^A-Zа-я]/ig;
    if (reName.test(name.value)) {
        name.className = "error";
        $("#name").effect("shake");
        $("#dialogName").dialog({
            width: 400,
            height: 100
        });

    } else {
        name.className = "txt";
    }


    var phone = document.getElementById("phone");
    rePhone = /^\+[7][\(]\d{3}\)\d{3}-\d{4}$/ig;
    var valid = rePhone.test(phone.value);
    if (!valid) {
        phone.className = "error";
        $("#phone").effect("shake");
        $("#dialogPhone").dialog({
            width: 600,
            height: 200,
            buttons: {
                Ясно: function () {
                    $(this).dialog("close");
                },
                Понятно: function () {
                    $(this).dialog("close");
                }
            }
        });

    } else {
        phone.className = "txt";
    }


    var email = document.getElementById("email");
    reEmail = /^[a-z]{2}\.?\-?[a-z]{4}\@[a-z]{4}\.ru$/ig;
    var valid = reEmail.test(email.value);
    if (!valid) {
        $("#email").effect("shake");
        email.className = "error";
        $("#dialogMail").dialog({
            width: 500,
            height: 150,
            buttons: {
                Ясно: function () {
                    $(this).dialog("close");
                },
                Понятно: function () {
                    $(this).dialog("close");
                }
            }
        });
    } else {
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
                source: my_coutries,
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


$(document).ready(function () {
    $('#date').datepicker({});

    $("#my_slider").slider({
        slide: function (event, ui) {
            var i = ui.value;
            $("#sliderBox").css({
                "margin-left": -10 * i
            });
        }
    });

    $(".goods").draggable({revert:true,stack:"basketImg"});
    

});


$(document).ready(function(){
    $(".basketImg").droppable({
       over:function(){
         $(".basketImg").css("background-color","#d7fa99");
       },
       drop:function(event){
          $(".basketImg").css("background-color","#fff");
          var Nid
          if (event.toElement.id == "") {
               Nid = event.toElement.parentElement.id;
          }
          else {
              Nid = event.toElement.id
          }
          basket.add(Nid);
          basket.render();
         
         
       }
    });
 });
 