function joke(){
  //create new XMLHttpRequest
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.kanye.rest', true);
  //get our responce
  request.onreadystatechange = function(){
    // chuck for valid responce

    if(request.readyState == 4 && request.status == 200){
      var text = request.responseText;
      var jsonText = JSON.parse(text);
      var joke = jsonText.quote;
      document.getElementById('joke').innerHTML = joke;
    }
  };
request.send();

}
