	//angular app
	var validationApp = angular.module('validationApp', []);

	//angular controller
	validationApp.controller('mainController', function($scope) {

		$scope.invalid_password = true;
		$scope.invalid_email = true;
		$scope.invalid_age = true;

		//check email exists
		$scope.emailChange = function() {		
			var values = ["email1@yahoo.com" , "email2@yahoo.com" ];
			$scope.invalid_email = false;
			angular.forEach(values, function(value, key){					
				 if(value == $scope.email)
				 {
					$scope.invalid_email = true;
					$scope.invalidEmailMsg = "Email Already Exists!";
				 }
			});
		};

		//validate password
		 $scope.passwordChange = function() {
			var password = $scope.password;
			$scope.invalid_password = false;
		
            if(password == null || password.length == 0)
			{
				
				$scope.passwordStrMsg = "";
			}
			else if (/[a-zA-Z0-9]{8,}/.test(password)) {//should contain at least 8 from the mentioned characters
		
				if (this.password.length < 10) 
				{
					$scope.strength = 'medium';
					$scope.passwordStrMsg = "Medium Password";
				} 
				else
				{
					$scope.strength = 'strong';
					$scope.passwordStrMsg = "Strong Password";	
				}
            } 
			else 
			{
                $scope.strength = 'weak';
				$scope.invalid_password = true;
				$scope.passwordStrMsg = "Password should contain at least 8 letters or digits";
            }
		};		
		
		//validate age
		 $scope.ageChange = function() {
			var age = parseInt($scope.age);
			if( age < 18)
			{
				$scope.invalid_age = true;
				$scope.invalidAgeMsg = "No minors allowed";
			}
			else if(age > 60)
			{
				$scope.invalid_age = true;
				$scope.invalidAgeMsg = "No senior citizen allowed";				
			}
			else
			{
				$scope.invalid_age = false;
			}
		};		
		
		//check all fields are valid
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.registerForm.$valid) {
							
				if($scope.invalid_age && 
					$scope.invalid_password && 
					$scope.invalid_email)
					{
						alert('form is not ready');
					}
					else
					{
						alert("Fields are properly inputted");	
					}
								
			}
			else
			{
				alert('form is not ready');
			}

		};

	});

