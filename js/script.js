$(document).ready(function () {
    "use strict";
    var host = 'https://shreecheryl.github.io',
  // var host = 'http://127.0.0.1:63856',
        pages = [host + '/SpencerTest/powerCouple.html', host + '/SpencerTest/codeBlack.html', host + '/SpencerTest/sonsOfAnarchy.html'],
        behind = document.getElementById('prev'),
        forward = document.getElementById('next');

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

    behind.addEventListener('click', function () {
        var newUrl = prev(host + window.location.pathname, pages);
        window.location.href = newUrl;
    });

    forward.addEventListener('click', function () {
        var newUrl = next(host + window.location.pathname, pages);
        window.location.href = newUrl;
    }); 
}); // end document ready