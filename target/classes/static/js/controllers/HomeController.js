var HomeController = function($scope,$http,$state,$location,$http,$interval){

	var self = this;

	$scope.allMessages = "";


	self.pullMessages = function(){

	}

	$interval(function(){
		$http.get("http://localhost:9000/chat/pullMessages").then(function(response){
			var allMessagesContent = ""
			var allMessages = response.data;
			for(var i=0; i < allMessages.length; i++){
				allMessagesContent += new Date(allMessages[i].date) +  " : " + allMessages[i].message + "\n";
			}
			$scope.allMessages = allMessagesContent;
			
		})
	},1000)

	$scope.sendMessage = function(message){
		console.log("sending message : "+message);
		$http.get("http://localhost:9000/chat/putMessage/"+message).then(function(result){
			$scope.message = "";
		})
	}


}