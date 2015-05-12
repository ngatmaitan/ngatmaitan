Parse.initialize("qMpPy1hKZ8SXZyhlNifr46TZQ3b45aw6AHBaCXtC", "xHnUXoXAIVSmpbZ0kmLmwZlSuWyQD6mEW34327l8");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
var user = new Parse.User();
user.set("username", "my name");
user.set("password", "my pass");
user.set("email", "email@example.com");
  
// other fields can be set just like with Parse.Object
user.set("phone", "650-555-0000");
  
user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});

$("#signup").submit( function(event) {
		event.preventDefault();
		var user = new Parse.User();
		user.set( "email", $("#email").val() );
		user.set( "password", $("#email").val() );
		}
	});