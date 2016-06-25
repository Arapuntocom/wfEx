describe('Verifica que el home este correcto', function() {

	beforeEach(module('webforge'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));


	it("Footer empieza colapsado", function(){
		var $scope = {};
		var controller = $controller('footerCtrl', { $scope: $scope });
		expect($scope.isCollapsed).toEqual(true);
	});

});

