
var app = angular.module('MyApp', ['ngRoute','ui.bootstrap','ngResource']);


// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html'

        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
app.controller('mainController',function($scope,$http){
    var store = this;
    store.products = [];
    $http.get('js/product.json.js').success(function(data){
        $scope.products=data;
    });
});
app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

app.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 2000 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }
});



app.controller('myController',['$scope', 'translationService',
    function ($scope, translationService){

        //Run translation if selected language changes
        $scope.translate = function(){
            translationService.getTranslation($scope, $scope.selectedLanguage);
        };

        //Init
        $scope.selectedLanguage = 'en';
        $scope.translate();

    }]);