//https://www.youtube.com/watch?v=dRZxQY2RgUA

//run some jquery

$(document).ready(function(){
//run code when search is clicked
  $("#search").click(function(){
//gets search input
    var searchTerm = $("#searchTerm").val();
//API URL with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success : function(data){ 
        $("#output").html(""); // <-- this wipes out the search so results don't append on each other
        for(var i = 0 ; i < data[1].length ; i++){ $("#output").prepend("<li><h3>" + data[1][i] + "</h3>" + data[2][i] +'<a href="' +data[3][i] +'">' + data[3][i] + "</a></li>"); 
      }; 
        $("#searchTerm").val(''); // <--- this makes the search term disappear from the bar after you search
      }, 
      error: function(errorMessage){
      alert("Error");
    }
    });
  });
  //this will allow you to press enter to search
  $("#searchTerm").keypress(function(e){
    if(e.which==13){
      $("#search").click();
    }
  })
  
});