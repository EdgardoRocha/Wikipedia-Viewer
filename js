var url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val();
$(document).ready(function(){
  $.getJSON(url, function(data){
  console.log('success',data);
});
  
  $('#btn').click(function(){
  console.log($('#search').val());
});

});
