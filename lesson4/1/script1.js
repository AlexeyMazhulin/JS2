$(".label").click(function () {
    $(this).siblings().removeClass('checked');

});

$(".label").click(function () {
    $(this).addClass('checked');
    fillContent(xhr,this.id);
});


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


function fillContent(xhr,ID) {
    if (xhr.readyState == 4) {
        if (xhr.status == 0) {
            var items = JSON.parse(xhr.responseText);
            for (var i = 0; i < items.label_items.length; i++) {
                if (items.label_items[i].id == ID) {
                    $('#val').html(items.label_items[i].text);

                }
            }
        }
    }
}
xhr.onreadystatechange = function () {
    $("#t1").click();
  };

fillContent(xhr,"t1")
xhr.open('GET', "./text.json", true);
xhr.send();