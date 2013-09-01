// event fire confirmation
var eventFire = "an event fired";
var inputCollection = [];
var usersCollection = [];
var submitBtn;
var formInput1, formInput2, formInput3, formInput4;
$(document).ready(function(){
	console.log("the DOM is ready");
	$('.main-heading').addClass('blue');
	$('.main-heading').fadeOut(2000);
	$('.sub-text').fadeOut(2000);
	$('h2').addClass('blue');
	$('label').addClass('label-color');
	$('#submitBtn').addClass('button-color');
	$('footer p').addClass('blue');
	$('footer p').fadeOut(2000).fadeIn(2000);
	submitBtn = $('#submitBtn');
	submitBtn.click(function(){
		console.log(eventFire);
		backgroundAlter();
		formInput1 = $('#formName').val();
		$('#spanName').text(formInput1);
		formInput2 = $('#formEmail').val();
		$('#spanEmail').text(formInput2);
		formInput3 = $('#formNumber').val();
		$('#spanNumber').text(formInput3);
	    formInput4 = $('#formJob').val();
		$('#spanJob').text(formInput4);
		inputCollection.push(formInput1, formInput2, formInput3, formInput4);
		inputCollection.forEach(function(){
			if ($('input[type="text"]').val() === "")
				validateForm();
			});
		$('.form-input').val('');
		usersCollection.push(getFormValues());
		updateUserList(usersCollection);	
	});
});
function backgroundAlter () {
	// add a visual effect when the event fires
	$('body').addClass('background-alter');
}
function validateForm () {
	$('input[type="text"]').addClass('warning');
}
function getFormValues(){
	var nameVal	= formInput1;
	var jobVal = formInput4;
	var formData = {
		nameValue: nameVal,
		jobValue: jobVal
	};
	return formData;
}
function updateUserList(list){
	var ul = $('.form-list-container ul');
	ul.html('');
	list.forEach(function(user){
		var text = "<li>" + user.nameValue + " works as a " + user.jobValue + "</li>";
		ul.append(text);
	});
}