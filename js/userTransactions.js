var userName;
var password;
var score=0;

$("#Register").click(function(){
	if ($('#userNameInput').val()!="" && $('#userPassInput').val()!=""){
		userName = $('#userNameInput').val();
	    password = $('#userPassInput').val();
	    //alert(userName + ' ' + passwrod);
	    alert('Successfully Registered!');
	    $('#myModalReg').modal('hide');
	   	document.getElementById('userNameInput').value = "";
	    document.getElementById('userPassInput').value = "";

	}
    //$('#userDisplay').html(userName);
});

$("#mLogin").click(function(){
	if ($('#uname').val()!="" && $('#pname').val()!=""){
	    if (userName==$('#uname').val() && password==$('#pname').val()){
	    	alert('Welcome ' + userName + '!');
	    	document.querySelector("#userdisplay").innerHTML='<p style="text-decoration: underline;">' + userName + '</p>';
	    	$('#UsernameDisplay').show();

	    	$('#loginModal').modal('hide');
		   	document.getElementById('uname').value = "";
		    document.getElementById('pname').value = "";
	    }else
	    alert('Invalid username/password');
	}
});


$("#mPlay").click(function(){
		if(userName!=null){
	    	window.location='html/ingame.html';
	    }else
	    alert('Login first!');
});

$("#begin").click(function(){
		$('#begin').hide();
		$('#template').show();
		$('#submitAnswer').show();
		
});

$("#letsPlay").click(function(){
	 if(userName!=null){
		$('#myModalPlay').modal('show');
		document.querySelector("#userdisplay2").innerHTML='<p style="text-decoration: underline;">' + 'Player: '+ userName + '</p>';
		document.querySelector("#userdisplayScore").innerHTML='<p style="text-decoration: underline;">' + 'Score: $'+ score + '</p>';
	    $('#UsernameDisplay2').show();
	    $('#UsernameDisplay3').show();

	}else
	alert('Login first!');
});



$('.mainDiv').on('click','.divs',function () {
    $(this).parent().find('.divs').css('background-color', 'transparent');
    $(this).css('background-color', 'orange');
});

//QUESTION AND ANSWER HERE---------------------------------------------------------------------------------------------------//
var clicked;
$('.divs').click(function() {
    clicked = $(this).text();
       // do something with the text
});

var pos = 0, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [ //Sequence: Question/A,B,C,D/Answer
    [ "Which of the following tag is used to mark a begining of paragraph?", "< TD >", "< br >", "< P >", "< TR >", "< P >" ], 
	[ "Which of the following attributes of text box control allow to limit the maximum character?", "size", "len", "maxlength", "all of these", "maxlength" ],
	[ "Web pages starts with which of the following tag?", "< Body >", "< Title >", "< HTML >", "< Form >", "< HTML >" ],
	[ "How can you open a link in a new browser window?", '< a href = "url" target = "new">', '< a href = "url" target= "_blank">', '< a href = "url".new>', '< a href = "url" target ="open">', '< a href = "url" target= "_blank">' ],
	[ "Which of the tag is used to creates a number list?", "< LI >", "< OL >", "< LI > and < OL >", "None of these", "< LI > and < OL >" ],
	[ "What does CSS stand for?", "Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets" ],
	[ "Which HTML attribute is used to define inline styles?", "styles", "font", "style", "class", "style" ],
	[ "Which is the correct CSS syntax?", " { body;color:black; }", " body { color: black; } ", " body:color=black; ", " {body:color=black;} ", " body { color: black; } " ],
	[ "Which CSS property controls the text size?", "text-size", "font-style", "text-style", "font-size", "font-size" ],
	[ "What is the correct CSS syntax for making all the < p > elements bold?", '< p style="text-size:bold;">', " p {font-weight:bold;} ", " p {text-size:bold;}", ' < p style="font-size:bold;"> ', " p {font-weight:bold;} " ],
	[ "Inside which HTML element do we put the JavaScript?", "< script > ", "< js >", "< scripting >", "< javascript >", "< script > " ],
	[ 'How do you write "Hello World" in an alert box?', ' alertBox( "Hello World" ); ', ' msg("Hello World"); ', ' alert( "Hello World" ); ', ' msgBox( "Hello World" );', ' alert( "Hello World" ); ' ],
	[ "How to write an IF statement in JavaScript?", "if i = 5 then", "if i == 5 then", "if i = 5", "if ( i == 5 )", "if ( i == 5 )" ],
	[ 'How to write an IF statement for executing some code if " i " is NOT equal to 5?', " if (i <> 5) ", "if i <> 5 ", "if (i != 5) ", "if i =! 5 then", "if (i != 5) " ],
	[ "How does a FOR loop start?", "for (i <= 5; i++ )", "for (i = 0; i <= 5 )", "for (i = 0; i <= 5; i++ )", "for i = 1 to 5", "for (i = 0; i <= 5; i++ )" ]
];

function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	questions.sort(function(a, b){return 0.5 - Math.random()});
	test = _("Question");
	
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	test.innerHTML = question;
	document.querySelector("#LetterA").innerHTML= chA;
	document.querySelector("#LetterB").innerHTML= chB;
	document.querySelector("#LetterC").innerHTML= chC;
	document.querySelector("#LetterD").innerHTML= chD;
	//test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){

	    $('.divs').css('background-color', 'transparent');
	


	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			clicked = choices[i].value;
		}
	}
	if(clicked == questions[pos][5]){
		score=score+100000;
		if(score >= 1000000){
			$('#myModalGameWon').modal('show');
			pos = 0;
			correct = 0;
			score=0;
			renderQuestion()
			document.querySelector("#userdisplayScore").innerHTML='<p style="text-decoration: underline;">' + 'Score: $'+ score + '</p>';
			$('#myModalPlay').modal('hide');
			return false;
		}
		correct++;
		$('#myModalCorrect').modal('show');
		
		document.querySelector("#userdisplayScore").innerHTML='<p style="text-decoration: underline;">' + 'Score: $'+ score + '</p>';

	

	}else{
		$('#myModalGameOver').modal('show');
		pos = 0;
		correct = 0;
		score=0;
		renderQuestion()
		document.querySelector("#userdisplayScore").innerHTML='<p style="text-decoration: underline;">' + 'Score: $'+ score + '</p>';
		$('#myModalPlay').modal('hide');
	}
	
	pos++;
	renderQuestion();
}

$("#Mequit").click(function(){
	pos = 0;
	correct = 0;
	score=0;
	renderQuestion()
	document.querySelector("#userdisplayScore").innerHTML='<p style="text-decoration: underline;">' + 'Score: $'+ score + '</p>';
	$('#myModalPlay').modal('hide');

});
window.addEventListener("load", renderQuestion, true);
