$(document).load(function() {
  $('#reload').bind('click',function() { alert("Reload!"); });
  var ts = new Date().getTime();
  $('#reload').attr("href","index.html?"+ts);
});