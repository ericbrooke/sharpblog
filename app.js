angular.module('sharpBlogg', ['ui.router'])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
    url: '/posts/{id}',
    templateUrl: '/posts.html',
    controller: 'PostsCtrl'
    });

    $urlRouterProvider.otherwise('home');
  }])

.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])

.controller('MainCtrl', ['$scope','posts',
function($scope, posts){

  $scope.message = 'Welcome to sharp blog';

  $scope.post = posts.posts[$stateParams.id];


  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';

      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
    };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

  $scope.incrementDownvotes = function(post) {
    post.upvotes -= 1;
  };
}]);

.controller('PostsCtrl', ['$scope','$stateParams','posts',
function($scope, $stateParams, posts){

  $scope.addComment = function(){
    if($scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    };
}]);
