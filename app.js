angular.module('sharpBlogg', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.message = 'Welcome to sharp blog';

  $scope.posts = [
  {title: 'title 1', upvotes: 5},
  {title: 'title 2', upvotes: 2},
  {title: 'title 3', upvotes: 12},
  {title: 'title 4', upvotes: 8},
  {title: 'title 5', upvotes: 4}
  ];

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }

    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

  $scope.incrementDownvotes = function(post) {
    post.upvotes -= 1;
  };

}]);
