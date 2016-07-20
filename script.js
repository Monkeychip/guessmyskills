

var FSGlobal = {};

jQuery(document).ready(function($){
	FSGlobal.$questionlabel = $("#questionlabel") ; 
	FSGlobal.$whatResponse = $("#whatresponse") ; 
	FSGlobal.$question = $("#questionlabel") ; 
	FSGlobal.questionsArray = [
		"Can you GUESS what skills I have?",
		"Next ?: What kind of things can I build using these skills?",
		"Next ?: What tools or platforms do I use most often?",
		"Next ?: What percent of the last two years have I spent living in a van?"
	];
	FSGlobal.$answer = $("#answer") ; 
	FSGlobal.$submitbut = $("#submitbtnID") ;
	FSGlobal.$nextquestion = $("#nextquestion") ;
    FSGlobal.magicStrings = {
        "jQuery" : "Heck yes!  That's what this script is written in. jQuery and Javascript were my first languages, and I use them the most. I find myself writing scripts for simple things, including sending text messages to myself when something happened on a spreadsheet, or to run a very specific calculation that I often have to do when problem solving a racer's result problem at a race.",
        "html" : "I can't specifically remember learning this language, but it defiantly comes with the territory of web design and technical support for clients.  Oh and HTML5, I heart you.",
        "css" : "I know CSS well. There are hours of my life I have spent 'playing with colors'." ,
        "websites" : "Yep!  I've built several in the last 4 years.  I've built them from the ground up, no framework, just raw HTML, CSS, Javascript.  I've built them in WordPress.  Most recently, this site included, I've been using webflow, and adding my own custom style and code.",
        "scripts" : "I have been an Excel guru since my econ days, and know that VBA is too heavy and cause a frustrating number of computer stall-outs.  Enter... GOOGLE SCRIPTS.  Enough said, this tool is amazing and I take full advantage of it.",
        "apps" : "Kind of.  I've built an HTML5 website that acted like an app.  You would save the bookmark to your screen and wha-la, it looks and functions very similar to an app.  A non-professional hack to get around developer licenses, xCode, etc.",
        "webflow" : "Yep, that was an easy one. did you do a little cmd+shift+j action??",
        "angular" : "I've messed around with it, but I like learning the hard way and have not relied on frameworks in most of my builds",
        "70%" : "Good guess, yep, I've lived in a van on average, 8 - 9 months of the year, for the last two years.  Read the blog post [256 days in a van].", 
    };
    FSGlobal.randomWrong = [
    	"WRONG. Hint: Spanish was my worse class in college, but I do know a couple other languages" ,
    	"WRONG. Hint: I like details, e.g. spell check" ,
    	"WRONG. HINT: Read blog post for clues" ,
    	"WRONG. HINT: Some hints are worthless" ,
    	"WRONG. HINT: when in doubt go lower case" ,
    	"WRONG. HINT: I only see home when it's under snow" ,
    	"WRONG. Hint: My favorite color is #05B2D2" 
    ];

 	FSGlobal.$submitbut.click(function( event ) {
		event.preventDefault() ; 
		applyAnswer();
	 });

 	FSGlobal.$nextquestion.click(function( event ) {
		event.preventDefault() ; 
		var currentQuestionIndex = $.inArray($("#questionlabel").text(), FSGlobal.questionsArray); 
		if(currentQuestionIndex > -1 && currentQuestionIndex < 3){
			FSGlobal.$question.fadeOut(function() {
            	$(this).text(FSGlobal.questionsArray[currentQuestionIndex + 1]).fadeIn(1000);
			});
		}else if(currentQuestionIndex > 2){
			FSGlobal.$question.fadeOut(function() {
            	$(this).text(FSGlobal.questionsArray[0]).fadeIn(1000);
			});
		}else{
			FSGlobal.$question.fadeOut(function() {
            	$(this).text(FSGlobal.questionsArray[0]).fadeIn(1000);
			});
		}
	});
 	function findMagicString(searchString){ 
        for(var magic in FSGlobal.magicStrings){
         	if(searchString.indexOf(magic) === 0){        
              return magic ;
            }
    	}
    }
    function applyAnswer(){
    	 response = findMagicString( FSGlobal.$whatResponse.val() ); 
	       	 if( typeof response != 'undefined' ) { 
	            var answer = FSGlobal.magicStrings[ response ];  
	            FSGlobal.$answer.fadeOut(function() {
	            	$(this).text(answer).fadeIn(1000);
	            	$(this).css("background-color","rgba(0,0,0,.3)" ).css("line-height" , "1.5em"); 
	            });
	            FSGlobal.$submitbut.fadeOut(function() {
	            	$(this).val("Correct !").fadeIn(1000); 
	            });
	            FSGlobal.$whatResponse.fadeOut(function() {
	            	$(this).val("").fadeIn(1000);
	            });
	          
	    	 }else{ 
	            FSGlobal.$answer.fadeOut(function() {

					  var arraylength = FSGlobal.randomWrong.length;
	  				  var randomanswer = Math.floor(Math.random()*arraylength);
	  				  var randomresponse = FSGlobal.randomWrong[randomanswer];
	            	$(this).text(randomresponse).fadeIn(1000); 
	            	$(this).css("background-color","rgba(0,0,0,.3)" ).css("line-height" , "1.5em"); 
	            });
	    	 } 
    }
    FSGlobal.$whatResponse.on("change, mousedown, click", function(){
    		FSGlobal.$submitbut.fadeOut(function() {
    			$(this).val("SUBMIT").fadeIn(500); 
    		});
    		FSGlobal.$answer.fadeOut(function() {
    			$(this).text("");
    			$(this).css("background-color","transparent" ); 
    		});
    });

});
