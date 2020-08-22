const URL ="https://covid19.mathdro.id/api";

var mymodule=angular.module("myApp",[]);

mymodule.controller("MyCtrl",
 function($scope,$http){

//this is conroller....
	$scope.title="Stay Home Stay Safe.";

// call api for function..
$http.get(URL).then(
	(response)=>{
	// success coding..
	console.log("inside success");
    console.log(response.data);
   $scope.all_data=response.data;

} ,(error)=>{
	//error coding...
console.log(error);

});

//get country data 

$scope.get_c_data=()=>
{
let country=$scope.c;

if(country == "")
{
	return;
}

$http.get(`${URL}/countries/${country}`).then(
(response)=>{
console.log(response.data)
$scope.c_data=response.data;
},(error)=>{
	console.log(error);

})
};


});

