var app =angular.module("homeapp",[]);

app.controller("homecontrol",function($scope)
{
	
	 /* $scope.movieArray =
        [
            { 'name': 'Total Eclipse', 'director': 'Agniezka Hollan' },
            { 'name': 'My Left Foot', 'director': 'Jim Sheridan' },
            { 'name': 'Forest Gump', 'director': 'Robert Zemeckis' }
        ]; */
		$scope.postArray =
        [
            { 'post': 'MOBILE SELL' },
            { 'post': 'OLD to NEW MOBILE' },
            { 'post': 'ELECTRONICS' }
        ];
		$scope.addRow = function () {
            if ($scope.postcontent != undefined ) {
                var ptemp = [];
                ptemp.post = $scope.postcontent;
              

                $scope.postArray.push(ptemp);

                // CLEAR TEXTBOX.
                $scope.postcontent = null;
                
            }
        };

        // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
       /*  $scope.addRow = function () {
            if ($scope.name != undefined && $scope.director != undefined) {
                var movie = [];
                movie.name = $scope.name;
                movie.director = $scope.director;
                $scope.movieArray.push(movie);
                // CLEAR TEXTBOX.
                $scope.name = null;
                $scope.director = null;
            }
        }; */

        // Remove selected rows from table.
       /*  $scope.removeRow = function () {
            var arrMovie = [];
            angular.forEach($scope.movieArray, function (value) {
                if (!value.Remove) {
                    arrMovie.push(value);
                }
            });
            $scope.movieArray = arrMovie;
        }; */

        // Finally, submit the data.
        
    });