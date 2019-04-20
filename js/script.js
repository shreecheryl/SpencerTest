$(document).ready(function(){
//var host = 'https://shreecheryl.github.io/SpencerTest';
var host = 'http://127.0.0.1:63856';
var pages = [host + '/powerCouple.html', host + '/codeBlack2.html', host + '/sonsOfAnarchy.html'];
console.log(host);

var behind = document.getElementById('prev');
var forward = document.getElementById('next');

function prev(current, pages) {
  var index = pages.indexOf(current);
  if (index === 0) {
    return pages[pages.length - 1];
  }
  return pages[index - 1];
}

function next(current, pages) {
  var index = pages.indexOf(current);
  if (index === pages.length - 1) {
    return pages[0];
  }
  return pages[index + 1];
}

behind.addEventListener('click', function() {
  var newUrl = prev(host + window.location.pathname, pages);
  window.location.href = newUrl;
})

forward.addEventListener('click', function() {
  var newUrl = next(host + window.location.pathname, pages);
  window.location.href = newUrl;
}) 
}); // end document ready