window.addEventListener( "load", function () {
    function sendData() {
      const request = new XMLHttpRequest();
  
      // Bind the FormData object and the form element
      const accountInfo = new URLSearchParams(new FormData( form ));


  
      // Define what happens on successful data submission
      request.addEventListener( "load", function(event) {
        alert( 'Account created ;)');
      } );
  
      // Define what happens in case of error
      request.addEventListener( "error", function( event ) {
        alert( 'Oops! Something went wrong. Try again' );
      } );
  
      // Set up our request
      request.open( "POST", "https://localhost:5000/app/new/user" );
  
      // The data sent is what the user provided in the form
      request.send( accountInfo );
    }
  
    // Access the form element...
    const form = document.getElementById( "myForm" );
  
    // ...and take over its submit event.
    form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
  
      sendData();
    } );
  } );