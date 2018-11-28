var items = [{
	"id": "1",
	"title": "Товар 1",
	"price": 100
},
{
	"id": "2",
	"title": "Товар 2",
	"price": 200
},
{
	"id": "3",
	"title": "Товар 3",
	"price": 300
},
{
	"id": "4",
	"title": "Товар 4",
	"price": 400
},
{
	"id": "5",
	"title": "Товар 5",
	"price": 500
},
{
	"id": "6",
	"title": "Товар 6",
	"price": 600
},
];

function Goods(id, title, price) {
this.id = id;
this.title = title;
this.price = price;

this.render();
}

Goods.prototype.render = function () {
var self = this;
var div = $('<div/>').addClass('goods');

div.attr("id", this.id);
div.append($('<div/>').addClass('title').html(this.title));
div.append($('<div/>').addClass('price').html("Цена: " + this.price + "р"));
div.append($('<div/>').addClass('button').html("Купить"));

$(".content").append(div);

$(".button").on("click", function () {
	if ($(this).parent().attr("id") == self.id) {
		basket.add(self.id);
		basket.render();
	}
});
};

function Basket() {
this.summ = 0;
this.count = 0;

this.render();


$(".close").on("click", function () {
	$('.modal').css("display", "none");
});

}
Basket.prototype.render = function () {
var div = $('.basket');
div.html('');
div.append($('<div/>').addClass('count').html("Колличество товаров: " + this.count));
div.append($('<div/>').addClass('summ').html("Сумма: " + this.summ));
/*div.append($('<div/>').addClass('button_busc').html("Показать"));*/

$(".basketImg").on("click", function () {
	$('.modal').css("display", "flex");
});

};

Basket.prototype.add = function (id) {
var self = this;

items.forEach(function (elem, i, arr) {
	if (id == elem.id) {
		self.summ += elem.price;


		if ($("#item" + elem.id).attr('count') == undefined) {
			$('.modal_window').append($('<div/>').addClass('modal_item').attr('id', 'item' + elem.id).attr('count', 1).html(
				elem.title +
				" Цена:" + elem.price + "  " + 1 + "шт." + "Сумма: " + elem.price +
				'<span id = ' + 'item' + elem.id + 'pl class = "buttonPlus"> + </span>' +
				'<span id = ' + 'item' + elem.id + 'mi class = "buttonMinus"> - </span>'));

		} else {
			$("#item" + elem.id).attr('count', Number($("#item" + elem.id).attr('count')) + 1);
			$("#item" + elem.id).html(elem.title + " Цена:" + elem.price + "  " + $("#item" + elem.id).attr('count') +
				"шт." + "Сумма: " + Number($("#item" + elem.id).attr('count')) * elem.price +
				'<span id = item' + elem.id + 'pl class = "buttonPlus"> + </span>' +
				'<span id = item' + elem.id + 'mi class = "buttonMinus"> - </span>');
		}

		$("#item" + elem.id + 'mi').on("click", function () {
			basket.delete(elem.id);
			basket.render();
		});

		$("#item" + elem.id + 'pl').on("click", function () {
			basket.add(elem.id);
			basket.render();
		});

	}
});
this.count++;
}

Basket.prototype.delete = function (id) {
var self = this;

items.forEach(function (elem, i, arr) {
	if (id == elem.id) {
		self.summ -= elem.price;


		if ($("#item" + elem.id).attr('count') == 1) {
			$("#item" + elem.id).remove()
		} else {
			$("#item" + elem.id).attr('count', Number($("#item" + elem.id).attr('count')) - 1);
			$("#item" + elem.id).html(elem.title + " Цена:" + elem.price + "  " + $("#item" + elem.id).attr('count') +
				"шт." + "Сумма: " + Number($("#item" + elem.id).attr('count')) * elem.price +
				'<span id = item' + elem.id + 'pl class = "buttonPlus"> + </span>' +
				'<span id = item' + elem.id + 'mi class = "buttonMinus"> - </span>');
		}

		$("#item" + elem.id + 'mi').on("click", function () {
			basket.delete(elem.id);
			basket.render();
		});

		$("#item" + elem.id + 'pl').on("click", function () {
			basket.add(elem.id);
			basket.render();
		});

	}
});
this.count--;
}


items.forEach(function (elem, i, arr) {
var good = new Goods(elem.id, elem.title, elem.price);
});

var basket = new Basket();