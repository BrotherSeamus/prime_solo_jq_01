$(function(){

	$('form').on('submit', function(event) {
		try {
			var data = $(this).serializeArray();
			var emp = {
				firstName: data[0].value, 
				lastName: data[1].value, 
				empNum: data[2].value,
				emptitle: data[3].value, 
				reviewScore: data[4].value, 
				salary: data[5].value
			};
			var $btn = $('<button class="remove">Remove</button>')
			var $li = $('<li>')

			$('.empList').append($li);

			$li.text( "Name: " + emp.firstName + " " + emp.lastName +
				",  Employee Number: " + emp.empNum + ",  Title: " + emp.emptitle +
				",  Review Score: " + emp.reviewScore + ",  Salary: " + emp.salary);
			
			$('ul').children().last().append($btn);
			
			$('button').on('click', function(){
				$(this).closest("li").remove('li')
			})
			if (data[4].value == 1) {
				$li.addClass('one');
			}
			if (data[4].value == 2) {
				$li.addClass('two');
			}
			if (data[4].value == 3) {
				$li.addClass('three');
			}
			if (data[4].value == 4) {
				$li.addClass('four');
			}
			if (data[4].value == 5) {
				$li.addClass('five');
			}
			$(this)[0].reset();
		} catch (ex) {
			console.log('Exception:', ex);
		} finally {
			event.preventDefault();
		}
	})
});
