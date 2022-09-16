jQuery('document').ready(function($){

	var menuBtn = $('.tres_lineas'),
		menu = $('.navigation ul');
		var_2 = $('ul .nav');
		var_3 = $('.button');


	menuBtn.click(function() {

		if (menu.hasClass('show')) {

			menu.removeClass('show');

		} else{


		menu.addClass('show');



		if (menu.hasClass('show')) {
			var_2.removeClass('show');
		}
		}
	});
	var_3.click(function(){

		if (var_2.hasClass('show')) {

			var_2.removeClass('show');
		} else{
			var_2.addClass('show');
		}

	});


});

