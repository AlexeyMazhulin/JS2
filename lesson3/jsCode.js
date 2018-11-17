var t = "Разнообразный и богатый опыт консультация с широким активом влечет за собой процесс 'внедрения' и модернизации существенных ф'инансовых и административных условий. С другой 'стороны' постоянное информационно-пропагандистское обеспечение 'нашей' деятельности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовки и реализации соответствующий условий активизации. Повседневная практика показывает, что рамки и место обучения кадров представляет собой интересный эксперимент проверки новых предложений. Равным образом укрепление и развитие структуры играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.";
var re1 = /\s\'/g;
var re2 = /\'\s/g;

var answer = t.replace(re1," \"").replace(re2,"\" ");


document.getElementById("text").innerHTML = t;
document.getElementById("answer").innerHTML = answer;


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
