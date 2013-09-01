describe("jQuery text manipulations ", function(){
	it("provides a class to .main-heading", function(){
		expect($('.main-heading').hasClass('blue')).toBe(true);
	});
	it("provide a method to .main-heading", function(){
		expect($('.main-heading').fadeIn(2000));
	});
	it("provides a method to $('.sub-text')", function(){
		expect($('.sub-text').fadeOut(2000));
	});
	it("provides a method to $('h2')", function(){
		expect($('h2').hasClass('blue')).toBe(true);
	});
	it("provide a class to all label elements", function(){
		expect($('label').hasClass('label-color')).toBe(true);
	});
	it("provides a class to #submitBtn", function(){
		expect($('input[type="button"]').hasClass('button-color')).toBe(true);
	});
	it("provides a class to $('footer p')", function(){
		expect($('footer p').hasClass('blue')).toBe(true);
	});
	it("provides a method to $('footer p')", function(){
		expect($('footer p').fadeOut(1000));
	});
});
describe("typeof tests ", function(){
	it("proves a container is an array", function(){
		expect(typeof(inputCollection)).toBe("object");
	});
	it("proves a container is an array", function(){
		expect(typeof(usersCollection)).toBe("object");
	});
});
describe("function backgroundAlter ", function(){
	it("changes the page's background-color when the #submitBtn event fires", function(){
		// expect returns a boolean
		// that boolean return needs .toBe/=== to true
		$('#submitBtn').click();
		expect($('body').hasClass('background-alter')).toBe(true);
	});
});
describe("function validateForm ", function(){
	it("will add .warning to empty input fields", function(){
		$('#submitBtn').click();
		expect($('input[type="text"]').val() === "").toBe(true);
	});
});
