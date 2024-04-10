function alert() {
	$(".alert").addClass("show");
	setTimeout("$('.alert').removeClass('show');", 1000);
}

$("a.btn").click(function(e) {
	e.preventDefault();
	var btn = $(this);
	btn.addClass("rumble");

	setTimeout("$('a.btn').removeClass('rumble');", 300);

	alert();
});

