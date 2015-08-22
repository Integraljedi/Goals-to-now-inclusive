
// ||========================================================||
// || trigger for pressing enter from within part 3
// 


$(document).ready(function(){

// set up a debug mode to be changed to false on deployment
// ||========================================================||
// || 
// 
	var _DEBUG = true;

// set up an array (for testing) of tracking items as objects

// ||========================================================||
// || 
// 

	var items = [];


// ||========================================================||
// || create an initial demo
// 

	var demoMode = true;

// ||========================================================||
// || load that which is in memory if it exists
// 



if(localStorage.yearSpot != undefined){
  console.log("this is not your first time in yearsPot, grasshopper " );
  $(".yearsSpot").find(".log").html(localStorage.yearSpot); 

}

if(localStorage.monthsSpot != undefined){
  console.log("this is not your first time in monthsSpot, grasshopper " );
  $(".yearsSpot").find(".log").html(localStorage.monthsSpot); 

}

if(localStorage.weekSpot != undefined){
  console.log("this is not your first time in weekSpot, grasshopper " );
  $(".weekSpot").find(".log").html(localStorage.yearSpot); 

}


if(localStorage.daySpot != undefined){
  console.log("this is not your first time in yearsPot, grasshopper " );
  $(".yearsSpot").find(".log").html(localStorage.yearSpot); 

}





// ||========================================================||
// || Save the contents of the document added by the user to local storage
// 


var SaveThisDocumentState = function (){

        localStorage.yearSpot =  $(".yearsSpot").find(".log").html(); 
        localStorage.monthsSpot =  $(".monthsSpot").find(".log").html(); 
        localStorage.weekSpot =  $(".weekSpot").find(".log").html(); 
        localStorage.daySpot =  $(".daySpot").find(".log").html(); 

}




// ||========================================================||
// || trigger saving the content on document reload or unload
// 

// @weakness of this approach: there are ways of exiting the document that will
// not trigger this and thus not record data, 
// @benefit of this approach, it may decrease actual memory needed compared to the 
// next best simple approach
// ideal: save each entry as an object in an array, bind the display to that array of 
// objects, bind a back end database to that array of objects, thus enable multi browser 
// functionality

    $(window).unload(function(){

          SaveThisDocumentState();
    });
   



// track the last submitted space to identify patterns in user pathways
// (for testing)
// ||========================================================||
// || 
// 
	var lastSubmission = "notDefinedYet";


// ||========================================================||
// || set up for demo mode
// for testing popovers

// if (demoMode){

// 		$("input").popover(
// 			"container:body"
// 			);
// 	    $('.focusLog').popover("placement:right")



// }


// clear a menu based on user input... 
	$(".resetThis").on("click",function(){
		$(this).parent().parent().find(".log").empty();

	});


// changing the destination for this one... 
	var logLocation = $(".viewSpotActive").find(".log");



	$(".viewSpot").on("click",function(){
		$(".viewSpotActive").removeClass("viewSpotActive");
		$(this).addClass("viewSpotActive");
		logLocation = $(this).find(".log");

	});



	$('body').on('click', '._pItem', function () {

	 	// get the value of the items contents
	 	// save it in a variable
	 	// set it as the new focus 	
	 	var newFocus = $(this).find("._content").text();
	 	$(".focusLog").val(newFocus).focus();

	 });

	$('body').on('hover', '._pItem', function () {



	});

      // <div class="btn-group navigationButtons" style="margin-left:500px;" data-toggle="buttons-checkbox">
      //     <button type="button" class="btn btn-primary yearsTrigger">5 Years</button>
      //     <button type="button" class="btn btn-primary monthsTrigger">3 Months</button>
      //     <button type="button" class="btn btn-primary weeksTrigger">This Weeks Goals</button>
      //     <button type="button" class="btn btn-primary todaysTrigger">Todays Goals</button>
      //   </div>


	$(".yearsTrigger").on("click",function(){
		// hide the years area on toggle
		$(".yearsSpot").toggle(200);
		// pull any active locations
		$(".viewSpotActive").removeClass("viewSpotActive");
		// set new log location to first visible area
		logLocation = $(".viewSpot:visible").first().find(".log");
		// set highlighting to demarcate that shift
		$(".viewSpot:visible").first().addClass("viewSpotActive");

	});


	$(".monthsTrigger").on("click",function(){
		// hide the years area on toggle
		$(".monthsSpot").toggle(200);
		// pull any active locations
		$(".viewSpotActive").removeClass("viewSpotActive");
		// set new log location to first visible area
		logLocation = $(".viewSpot:visible").first().find(".log");
		// set highlighting to demarcate that shift
		$(".viewSpot:visible").first().addClass("viewSpotActive");

	});



	$(".weeksTrigger").on("click",function(){
		// hide the years area on toggle
		$(".weekSpot").toggle(200);
		// pull any active locations
		$(".viewSpotActive").removeClass("viewSpotActive");
		// set new log location to first visible area
		logLocation = $(".viewSpot:visible").first().find(".log");
		// set highlighting to demarcate that shift
		$(".viewSpot:visible").first().addClass("viewSpotActive");

	});


	$(".todaysTrigger").on("click",function(){
		// hide the years area on toggle
		$(".daySpot").toggle(200);
		// pull any active locations
		$(".viewSpotActive").removeClass("viewSpotActive");
		// set new log location to first visible area
		logLocation = $(".viewSpot:visible").first().find(".log");
		// set highlighting to demarcate that shift
		$(".viewSpot:visible").first().addClass("viewSpotActive");

	});


function jumpToPageBottom() {

		$('.logArea').scrollTop($('.logArea').get(0).scrollHeight);
		console.log("d");
}






	$('body').on('keydown', '.focusLog', function (e) {

		if (e.keyCode == 13) {
			if ($(this).val() != ""){
			  // prevent default keystroke function
			  e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem focusItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Focus: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();

			// if lastSubmission is tracked, then I can save a likely next step here now

			// define what was submitted last and save it
			lastSubmission = "focusLog";

		}

	}

});

$('body').on('keydown', '.statusLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){

	  		// prevent default keystroke function
	  		e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem statusItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Status Update: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();
			lastSubmission = "statusLog";


		}
	}


});



$('body').on('keydown', '.ideaLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){


			// prevent default keystroke function
			e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem ideaItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Idea: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();

		}


	}

	

});


$('body').on('keydown', '.challengeLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){

			// prevent default keystroke function
			e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem challengeItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Challenge: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();

		}


	}




});



$('body').on('keydown', '.timeLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){

			// prevent default keystroke function
			e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem timeItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Time Spent: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();

		}

	}





});




$('body').on('keydown', '.newDesireLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){


			// prevent default keystroke function
			e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem desireItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("What I want from this: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			jumpToPageBottom();

		}

	}





});




$('body').on('keydown', '.stateLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){


			// prevent default keystroke function
			e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem stateItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("My State: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$("#lookingInwards").focus();
			jumpToPageBottom();

		}

	}




});



$('body').on('keydown', '.beingLog', function (e) {

	if (e.keyCode == 13) {

		if ($(this).val() != ""){

	  		 // prevent default keystroke function
	  		 e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem beingItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Being with this: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			$("#lookingInwards").attr("class","form-control input-lg emergenceLog")
			$("#lookingInwards").attr("placeholder", "What does this bring up for you?")
			jumpToPageBottom();

		}
	}

});



$('body').on('keydown', '.emergenceLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){
		  // prevent default keystroke function
		  e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem beingItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("What this brings up: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$(".stateLog").focus();
			$("#lookingInwards").attr("class","form-control input-lg beingLog")
			$("#lookingInwards").attr("placeholder","What is it like being with this?")
				jumpToPageBottom();
	}

	}

});




$('body').on('keydown', '.alivenessLog', function (e) {

	if (e.keyCode == 13) {
		if ($(this).val() != ""){
			 // prevent default keystroke function
			 e.preventDefault();
			// get the contents of the new item
			var newLogItemTitle = $(this).val();
			// create a div to hold everything
			var _pItem = document.createElement("div");
			// set the class & contents of the paragraph
			// _________________________________________
			$(_pItem).attr("class","_pItem alivenessItem")
			// create a prefix section
			var _prefix = document.createElement("span");
			// set the prefix contents and class
			// _________________________________________
			$(_prefix).text("Alive for me: ").attr("class","_prefix");
			// create a contents area
			var _contents  = document.createElement("span");
			// set class of contents area
			$(_contents).attr("class","_content"); 
			// set the content of this area
			$(_contents).html(newLogItemTitle);
			// put it all together
			$(_pItem).append(_prefix).append(_contents);
			// place it in the log
			$(logLocation).append(_pItem);
			// reset the field
			$(this).val("");
			// focus on the next field
			$("#lookingInwards").focus();
				jumpToPageBottom();
	}

	}

});







});