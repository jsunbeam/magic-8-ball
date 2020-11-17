$(document).ready(function(){


var magic8ball = {};
	magic8ball.listOfAnswers = ["How would I know?", "Not a chance", "Your call", "Ask someone else"];
	$("#answer").hide();
	magic8ball.getAnswer = function (question) {
		var random = Math.random() * this.listOfAnswers.length;
		var round = Math.floor(random);
		var answer = this.listOfAnswers[round];
		$("#answer").text(answer);
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png")
		$("#8ball").effect("shake");
		$("#answer").fadeIn(4000);
};

var onClick = function () {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png")
	setTimeout (
		function() {
			prompt("Ask a yes or no question.");
		magic8ball.getAnswer();
		}, 500);
	

};


$("#questionButton").click(onClick);
});