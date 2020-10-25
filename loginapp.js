var app =angular.module("login",[]);
app.controller("logincont",function($scope)
{
	    
	$scope.childvalue = "Welcome Old to New Mobiles";
     $scope.passw = function(value) 
	 {
		if(value.length < 10)
		    return false
		else
			return true
	 
	 }
}
);

app.controller("child",function($scope)
{
	$scope.childvalue = "Welcome Old to New Mobiles";
});

app.filter('lower', function() {
	return function(uname) {
		
		return angular.lowercase(uname);
		
 }
});