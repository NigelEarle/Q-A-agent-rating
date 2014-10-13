Template.test.rendered = function(){

startDate = "05/01/2014";
endDate = "07/30/2014";
interval = "Month";
seriesData = [];
seriesNames = ['Asia'];
testResults = [

	{
		dateCreated: "05/11/2014",
		score: 99.3,
	},

	{
		dateCreated: "07/12/2014",
		score: 27.1
	},

	{
		dateCreated: "07/22/2014",
		score: 88.8
	},

	{
		dateCreated: "07/01/2014",
		score: 33.3
	},

	{
		dateCreated: "07/02/2014",
		score: 100.0
	},

	{
		dateCreated: "07/20/2014",
		score: 100.0
	},

	{
		dateCreated: "07/20/2014",
		score: 100.0
	}

];

var getMonth = function(date){
	var month = new Date(date);
	return month.getMonth() + 1;
};

startingMonth = getMonth(startDate);
endingMonth = getMonth(endDate);

var getMonthsToCheck = function(startingMonth, endingMonth){
	var monthsToCheck = [];
	for (var i = startingMonth; i <= endingMonth; i++){
		monthsToCheck.push(i);
	};
	return monthsToCheck;
};

monthsToCheck = getMonthsToCheck(startingMonth, endingMonth);
indexMonthsToCheck = 0;

var score = {
	totalScore: 0, 
	numberOfScores: 0
};

result = [];

for (var i = 0; i < testResults.length; i++){

	console.log("index!");
	console.log(i);

	if ( getMonth(testResults[i].dateCreated) == monthsToCheck[indexMonthsToCheck]){
		score.totalScore += testResults[i].score;
		score.numberOfScores++;
		console.log("Score");
		console.log(score);
	} else {
		average = score.totalScore / score.numberOfScores;
		result.push(average);
		console.log("result");
		console.log(result);
		score = {totalScore: 0, numberOfScores: 0};
		score.totalScore += testResults[i].score;
		score.numberOfScores++;
		indexMonthsToCheck++;
	};

	// updates result for the final run of the loop
	if ( testResults.length - i == 1 ){
		average = score.totalScore / score.numberOfScores;
		result.push(average);
		console.log("result");
		console.log(result);
	};

};



	// for (var x = startingMonth; x <= endingMonth; x++){
	// 	console.log("x")
	// 	console.log(x);
	// 	for (var i = 0; i < testResults.length; i++){
	// 		testMonth = returnMonth(testResults[i].dateCreated);
	// 		console.log("test month");
	// 		console.log(testMonth);
	// 		if(testMonth === x){
	// 			score.totalScore += testResults[i].score;
	// 			score.numberOfScores++;
	// 			console.log("Score");
	// 			console.log(score);
	// 		} else {
	// 			average = score.totalScore / score.numberOfScores;
	// 			result.push(average);
	// 			console.log("result");
	// 			console.log(result);
	// 			score = {totalScore: 0, numberOfScores: 0};
	// 		};
	// 	};
	// };



// result we want: [71.7, 66.7, 100.0]

};

testResults = [

	{
		dateCreated: "07/12/2014",
		score: 99.3,
	},

	{
		dateCreated: "05/11/2014",
		score: 27.1
	},

	{
		dateCreated: "07/22/2014",
		score: 88.8
	},

	{
		dateCreated: "07/01/2014",
		score: 33.3
	}
];

testAverages = [99.3, 0, 49.7]

var convertToDateObject = function(date){
	dateObject = new Date(date);
	return dateObject;
}

var calculateAverage = function(arrayOfNumbers){
	var sum = 0;
	for(var i = 0; i < arrayOfNumbers.length; i++){
		sum += arrayOfNumbers[i];
	}
	return average = sum / arrayOfNumbers.length;
}

var calculateTestAverages = function(testResults, startDate, endDate, interval){

	var testAverages;
	var arrayOfNumbers = [];
	var arrayOfAverages = [];
	var monthAverage = 0;

	if( interval == "month" ){
		startingMonth = new Date(startDate).getMonth();
		endingMonth = new Date(endDate).getMonth();
	};

	for (var month = startingMonth; month <= endingMonth; month++){
		for (var i = 0; i < testResults.length; i++){
			if ( convertToDateObject( testResults[i].dateCreated() ).getMonth() == month ){
				arrayOfNumbers.push(testResults[i].score);
			}
		}
		arrayOfAverages.push( calculateAverage(arrayOfNumbers) );
	}

	return arrayOfAverages;

}

testResults = [

	{
		dateCreated: "07/12/2014",
		score: 99.3,
	},

	{
		dateCreated: "05/11/2014",
		score: 27.1
	},

	{
		dateCreated: "07/22/2014",
		score: 88.8
	},

	{
		dateCreated: "07/01/2014",
		score: 33.3
	}

];

testAverages = [99.3, 0, 49.7]

var convertToDateObject = function(date){
	dateObject = new Date(date);
	return dateObject;
}

var getMonth = function(date){
	return convertToDateObject(date).getMonth();
}

var calculateAverage = function(arrayOfNumbers){
	var sum = 0;
	for(var i = 0; i < arrayOfNumbers.length; i++){
		sum += arrayOfNumbers[i];
	}
	return average = sum / arrayOfNumbers.length;
}

calculateTestAverages(testResults, "04/01/2014", "07/30/2014", "month")

intermediaryArray = [ [], [99.3], [], [27.1, 88.8, 33.3] ] // length 4, maxArrayIndex 3

testResults = [
	{
		dateCreated: "07/12/2014",
		score: 99.3,
	},
	{
		dateCreated: "05/11/2014",
		score: 27.1
	},
	{
		dateCreated: "07/22/2014",
		score: 88.8
	},
	{
		dateCreated: "07/01/2014",
		score: 33.3
	}
];

var calculateTestAverages = function(testResults, startDate, endDate, interval){

	var testAverages;
	var arrayOfNumbers = [];
	var arrayOfAverages = [];
	var monthAverage = 0;
	var intermediaryArray = [];

	if( interval == "month" ){
		startingMonth = getMonth(startDate); // 3
		endingMonth = getMonth(endDate); // 6
		maxArrayIndex = endingMonth - startingMonth; //3

		for (var i = 0; i <= maxArrayIndex; i++){
			intermediaryArray[i] = [];
			for (var month = startingMonth; month <= endingMonth; month++){
				for (var testNumber = 0; testNumber < testResults.length; testNumber++){
					// console.log("test number");
					// console.log(testNumber);
		  //     console.log("month");
		  //     console.log(month);
		  //     console.log("test date created month");
		  //     console.log(getMonth(testResults[testNumber].dateCreated));
					if ( getMonth(testResults[testNumber].dateCreated) == month ){
		        // console.log("month and test month equal!");
						intermediaryArray[i].push(testResults[testNumber].score);
		        // console.log("intermediaryArray");
		        // console.log(intermediaryArray);
		      } 
				}
			}
		}

	};



}

console.log( calculateTestAverages(testResults, "01/01/2014", "12/30/2014", "month") );