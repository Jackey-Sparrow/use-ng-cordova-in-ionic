angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
        $scope.testDeleteSheet = function () {
            var options = {
                addCancelButtonWithLabel: 'Cancel',
                addDestructiveButtonWithLabel: 'Delete it'
            };
            window.plugins.actionsheet.show(options);
        };

        $scope.selectPhoto = function () {

            var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA
            };

            $cordovaCamera.getPicture(options).then(function (imageUrl) {
                alert(imageUrl);
                var image = document.getElementById('myImage');
                image.src = imageUrl;
            }, function (err) {
                // error
                alert(err);
            });
        };

        //just for FILE_URL
//      $cordovaCamera.cleanup().then(function () {
//
//      });


    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
