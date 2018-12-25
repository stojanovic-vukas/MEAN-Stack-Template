meanStackTemplate.controller("messages", function($http, $scope) {

    $scope.loadMessages = function() {
        
        $http({
            
            method:"GET",
            url:"api/message"
    
        }).then(function successCallBack(response) {
            $scope.messages = response.data;
    
        }, function errorCallBack(response) {
    
            Materialize.toast("Error! " + response.data.message, 3000);
        });

    }

    $scope.loadMessages();

    $scope.loadDoc = function(path, details) {
        var queryString = "?para1=" + path + "&para2=" + details;
        window.location.href = "details.html" + queryString;
    }

});


app.controller('myCtrl', function($scope) {
    var queryString = decodeURIComponent(window.location.search); //parsing
    console.log (queryString);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    for (var i = 0; i < queries.length; i++)
    {
        if (i == 0)
            $scope.path = queries[i];
        else if (i == 1)
        $scope.details = queries[i];
    }
    $scope.path = $scope.path.substring(6, $scope.path.length);
    $scope.details = $scope.details.substring(6, $scope.details.length);
});