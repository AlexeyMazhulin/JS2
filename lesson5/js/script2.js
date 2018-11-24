var comments = [{
        "id": "1",
        "Approve": "yes",
        "text": "first comment"
    },
    {
        "id": "2",
        "Approve": "no",
        "text": "not approved comment"
    }, {
        "id": "3",
        "Approve": "yes",
        "text": "just comment"
    }, {
        "id": "4",
        "Approve": "yes",
        "text": "last comment"
    },
];

function Msg(id, app, txt) {
    this.id = id;
    this.approve = app;
    this.text = txt;

    this.render();
}

Msg.prototype.render = function () {
    var self = this;
    var div = $('<div/>').addClass('msg').attr("id","msg" + this.id).html(this.text +
        '<span id = msg' + this.id + 'app class = "msgApp"> Approve </span>' +
        '<span id = msg' + this.id + 'del class = "msgDelete"> Delete </span>'
    );
    $("div.comment").append(div);

    $("#msg" + this.id + 'app').on("click", function () {
        alert("id=" + $(this).parent().attr("id") + " Approved") // здесь отправка на сервер
       msg.render();

   });

    $("#msg" + this.id + 'del').on("click", function () {
         $('#' + $(this).parent().attr("id")).remove();
         alert("id=" + $(this).parent().attr("id") + " Deleted") // здесь отправка на сервер
        msg.render();

    });


};

/* // здесь отправка на сервер
function sendMsg(){
    $.ajax({
        type:"POST",
        url:"./my.json",
        dataType:"json",
        success: function (user_id, text) {
            text = $('#msg').val(); 
                    }
    });
}
Что то не разобрался во взаимодействии с сервером. КАк что то отправить и еще ответ принять?

*/
comments.forEach(function (elem, i, arr) {
    var msgs = new Msg(elem.id, elem.Approve, elem.text);
});