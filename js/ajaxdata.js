window.onload = function () {
// GETTING DATA USING SIMPLE JAVASCRIPT
  // var http = new XMLHttpRequest();
  // http.onreadystatechange = function () {
  //   if(http.readyState == 4 && http.status) {
  //     console.log(JSON.parse(http.response));
  //   }
  // }
  // http.open('GET', 'json/data.json', true);
  // http.send();
  // console.log('obj');

// GETTING AJAX DATA USING JQUERY
// error handler
  function erroHandler (jqXHR, textStatus, error) {
    console.log(error);
  }
// displaying friends
  $.ajax({
    type: "GET",
    url: "json/friends.json",
    success: disFriends,
    error: erroHandler
  });
  function disFriends (data) {
    console.log(data);
  // displaying planets
    $.ajax({
      type: "GET",
      url: "json/planets.json",
      success: disPlanets,
      error: erroHandler
    });
  }
  function disPlanets (data) {
    console.log(data);
  // displaying Jobs
    $.ajax({
      type: "GET",
      url: "json/jobs.json",
      success: function (data) {
        console.log(data);
      },
      error: erroHandler
    });
  }

// GETTING AJAX DATA USING JAVASCRIPT PROMISES  
};
