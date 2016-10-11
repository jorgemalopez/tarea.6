// tener una funcion anonima autoejecutable
(function(){
	$(function(){
		/*console.log('document ready');
		var h1 = $ ('h1'); // se usa variable h1 para guardar un objeto
		//agarra el h1 y cambia por otro contenido
		debugger
		h1.html('Hola a todos');

		//para crear un nuevo elemento p y se anade un valor, Se le anade al body

		debugger 
		var p = $ ('<p>');
		p.html('Esto es un parrafo nuevo');
		$('.container').append(p);

		p.addClass('text-danger');

		//delegacion de eventos
		$('button').click(function(e){
			//console.log('Me gusta', e);
			//alert('Click Me gusta'); // le permite saber al usuario un mensaje el alert, esto es  muy invasivo para el usuario
			//para cambiar el color
			//this : para hacer referencia a un contexto es es de java
			$(this).toggleClass('btn-primary'); // se convierte a objeto j query entre parentesis y delante el $
			//$('button').toggleClass('btn-primary');
			//$('button').removeClass('btn-default');
			
		});*/

		//map, filter, reduce
		var id=0;

		$('form').submit(function(e){
			e.preventDefault();
			id++;
			var moneda = $(this).serializeArray();
			/*console.log(moneda[0].value);
			console.log(moneda[1].value);
			console.log(moneda[2].value);*/

			var row = '<tr>';
			row += '<td>'+id;
			row += '<td>'+moneda[0].value;
			row += '<td>'+moneda[1].value;
			row += '<td>'+moneda[2].value;

			$('table tbody').append(row);
			$('form').trigger("reset");

		});

	});


})();