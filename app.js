function Employee (eNum, eFirstName, eLastName, eTitle, eSalary, eReviewScore) {
	this.num = eNum;
	this.firstName = eFirstName;
	this.lastName = eLastName;
	this.title = eTitle
	this.salary = eSalary;
	this.reviewScore = eReviewScore;
};

function EmployeeList () {
	this.list = [];

	var self = this;
	this.addEmployee = function (employee) {
			self.list.push(employee);
	};

	this.removeEmployee = function (num) {
		for (i=0; i< self.list.length; i++) {
			if(num == self.list[i].num){
				self.list.splice(i, 1);
				break;
			};
		};
	};
};


$(function(){

	var employeeList = new EmployeeList();

	var employeeTemplate = $('#employee-list').html();

	var template = Handlebars.compile(employeeTemplate);


	$('#empInfo').on('submit', function(event) {
		try {

			var num = $('#num').val();
			var firstName = $('#firstName').val();
			var lastName = $('#lastName').val();
			var title = $('#title').val();
			var reviewScore = $('#reviewScore').val();
			var salary = $('#salary').val();

			employeeList.addEmployee(new Employee(num, firstName, lastName, 
				title, salary, reviewScore));

			console.log(employeeList);

			$('.employees').empty();

			var compiledHtml = template(employeeList);

			console.log(compiledHtml);		

			$('.employees').append(compiledHtml);

		} catch (ex) {
			console.log('Exception:', ex);
		} finally {
			event.preventDefault();
		}
	})
	$('.remove').on('click', function(){
		var kill = $(this).parents('tr').data('num');
		employeeList.remove(kill);
	})
});
