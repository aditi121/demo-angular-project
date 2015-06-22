app.service('translationService', function($resource) {
    this.getTranslation = function($scope, language) {
        var languageFilePath = 'js/translation_' + language + '.json';
        console.log(languageFilePath);
        $resource(languageFilePath).get(function (data) {
            $scope.translation = data;
            console.log($scope.translation );
        });
    };
});

/*
var store = this;
store.products = [];
$http.get('js/product.json.js').success(function(data){
    $scope.products=data;
});*/
