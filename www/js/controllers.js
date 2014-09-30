angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope) {
	
})


.controller('PlaylistsCtrl', function($scope, $filter) {
  
	$scope.eintrag = {
        ids: {1 : true}
    };
  
	$scope.gelenke = [
		{ name: 'Handgelenke', id: 1 },
		{ name: 'Fingergelenke', id: 2 },
		{ name: 'Kniegelenke', id: 3 },
		{ name: 'Schultergelenke', id: 4 },
		{ name: 'Sprunggelenke', id: 5 },
		{ name: 'Zehengelenke', id: 6 },
		{ name: 'Ellenbogengelenke', id: 7 },
		{ name: 'Halswirbelsäule', id: 8 },
		{ name: 'Hüftgelenke', id: 9 },
		{ name: 'Kiefergelenke', id: 10 }
	];
	
	$scope.tablettenart = [
		{name: 'Tablette', id: 1 },
		{name: 'Tropfen', id: 2 },
		{name: 'Zäpfchen', id: 3 }
	];
	
	$scope.tablettendosirung = [
		{name: '1x1/2', id: 1 },
		{name: '2x1/2', id: 2 },
		{name: '3x1/2', id: 3 },
		{name: '4x1/2', id: 4 },
		{name: '1x1', id: 5 },
		{name: '1x2', id: 6 },
		{name: '1x3', id: 7 },
		{name: '1x4', id: 8 },
		{name: '2x1', id: 9 },
		{name: '2x2', id: 10 },
		{name: '2x3', id: 11 },
		{name: '2x4', id: 12 }
	];

	$scope.tablettenauswirkung = [
		{name: 'Ja', id: 1 },
		{name: 'Nein', id: 2 }
	];

	$scope.datum = $filter('date')(Date.now(), 'dd-MM-yyyy');
	
	$scope.schmerzdauer = $filter('date')('h:mm');
	
	$scope.schmerzstaerke = 1;
	
	$scope.morgensteifigkeit = $filter('date')(Date, 'h:mm');
	
	$scope.verlaufsdatum = $filter('date')(Date.now(), 'dd-MM-yyyy');
})

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

	// Triggered on a button click, or some other target
	$scope.showPopup = function() {
	//$scope.data = {}

	// An elaborate, custom popup
		var myPopup = $ionicPopup.show({
			template: '<input type="date" ng-model="verlaufsdatum">',
			title: 'Bitte Wählen Sie das Datum aus',
			scope: $scope,
			buttons: [
			  { text: 'Cancel' },
			  {
				text: '<b>OK</b>',
				type: 'button-positive',
				onTap: function(e) {
				 
				}
			  },
			]
		});
	};
	// An alert dialog
	$scope.showAlert = function() {
		var alertPopup = $ionicPopup.alert({
			title: 'Die komplette Datenbank wird gelöscht!',
			template: 'Die Daten können nach dem Löschen nicht wiederherstellt werden!',
			scope: $scope,
			buttons: [
			  { text: 'Cancel' },
			  {
				text: '<b>OK</b>',
				type: 'button-positive',
				onTap: function(e) {
				 
				}
			  },
			]
		});
		alertPopup.then(function(res) {
		console.log('Sie haben die komplette datenbank gelöscht!');
		});
	};
	
	$scope.showPopupDB = function() {
	//$scope.data = {}

	// An elaborate, custom popup
		var myPopup = $ionicPopup.show({
			template: '<input type="date" ng-model="verlaufsdatum">',
			title: 'Bitte Wählen Sie das Datum aus',
			scope: $scope,
			buttons: [
			  { text: 'Cancel' },
			  {
				text: '<b>OK</b>',
				type: 'button-positive',
				onTap: function(e) {
					var alertPopup = $ionicPopup.alert({
						title: 'Die komplette Datenbank wird gelöscht!',
						template: 'Die Daten können nach dem Löschen nicht wiederherstellt werden!',
						scope: $scope,
						buttons: [
						  { text: 'Cancel' },
						  {
							text: '<b>OK</b>',
							type: 'button-positive',
							onTap: function(e) {
							 
							}
						  },
						]
					});
				}
			  },
			]
		});
	};
});

