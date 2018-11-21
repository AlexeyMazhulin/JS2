function Container() {
  this.id = "";
  this.className = "";
  this.htmlCode = "";
}

Container.prototype.render = function () {
  return this.htmlCode;
}

function Menu(my_id, my_class, my_items) {
  Container.call(this);
  this.id = my_id;
  this.className = my_class;

  this.items = my_items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function () {
  var result = "<ul class='" + this.className + "'>";

  for (var item in this.items) {
    if (this.items[item] instanceof MenuItem) {
      result += this.items[item].render();
    }
  }

  result += "</ul>";

  return result;
}

function MenuItem(my_href, my_name, my_class) {
  Container.call(this);
  this.className = my_class;
  this.href = my_href;
  this.itemName = my_name;
  this.id = my_name;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function () {
  return "<li class='" + this.className + "' id='" + this.id + "'> <a href ='" + this.href + "'>" + this.itemName + "</a></li>";
}

var my_items;


function getChild(elem_id, m_items) {
  var items = m_items;
  var elem = document.getElementById(elem_id);
  var sub_menu = [];
  for (var i = 0; i < items.length; i++) {
    if (elem.id == items[i].className) {
      sub_menu.push(items[i]);
    }
  }
  var menu = new Menu(elem.class, elem.id, sub_menu);
  if (sub_menu.length > 0) {
    elem.innerHTML += menu.render();
  }
}


function fullMenuContent(xhr) {
  my_items = [];
  var j = 0;

  if (xhr.readyState == 4) {
    if (xhr.status == 0) {
      var items = JSON.parse(xhr.responseText);

      for (var i = 0; i < items.menu_items.length; i++) {
        my_items[i] = new MenuItem(items.menu_items[i].href, items.menu_items[i].title, items.menu_items[i].class);
      }
      var div = getChild("my_menu", my_items);

      var menu_elem = document.getElementById("my_menu");
      var allId = menu_elem.getElementsByTagName("li");


      for (var j = 0; j < allId.length; j++) {
        div = getChild(allId[j].id, my_items);
      }


    }

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


xhr.onreadystatechange = function () {
  fullMenuContent(xhr)
};
xhr.open('GET', "./menu.json", true);
xhr.send();


//----------------------------- 3е задание

function Pics(my_big, my_small, my_title) {
  Container.call(this);
  this.id = my_title;
  this.big = my_big;
  this.small = my_small;

}

Pics.prototype = Object.create(Container.prototype);
Pics.prototype.constructor = Menu;

Pics.prototype.render = function () {
  var result = "<a id = '" + this.id + "' href='" + this.big + "' target='blank'><img src='" + this.small + "'  alt='" + this.id + "'></a>" 
 
  return result;
}



function PicContent(xhr) {
  my_items = [];
  var j = 0;

  if (xhr.readyState == 4) {
    if (xhr.status == 0) {
      var items = JSON.parse(xhr.responseText);

      var pic_elem = document.getElementById("pics");

      for (var i = 0; i < items.pic_items.length; i++) {
        my_pic = new Pics(items.pic_items[i].big,items.pic_items[i].small,items.pic_items[i].title);
        pic_elem.innerHTML += my_pic.render();
      }
      
      
    }

  }
}

var xhr1 = false;
if (window.XMLHttpRequest) {
  xhr1 = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  try {
    xhr1 = new ActiveXObject('Msxml2.XMLHTTP');
  } catch (e) {
    try {
      xhr1 = new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {}
  }
}

if (!xhr1) {
  alert("Ошибка: невозможно создать");
}



xhr1.onreadystatechange = function () {
  PicContent(xhr1)
};
xhr1.open('GET', "./pic.json", true);
xhr1.send();