// Variables globales
var $doc = $(document);
var $win = $(window);

// Eventos
(function() {
	$("#scroller").loadwhenscroll(function(){
		$(this).append(makeid()+"<br>");
	});

	$("#scroller2").loadwhenscroll({ direction: "right", threshold: 900}, function(){
		$(this).append("ooooooooooooooooooooooooooooooooooooooookkkkkkkkkkkkkkkkkkkkkkkkooooooooooooookkkkkkkkkkkkooooooooooo");
	});
})();