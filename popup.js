function click(e) {
    chrome.tabs.executeScript(null, 
        {code:"document.body.style.backgroundImage='url("+images[e.target.id]+"'"});
    windows.close();
}

document.addEventListener('DOMContentLoaded', function() {
    var divs = document.querySelectorAll('div');
    for (var i=0; i<divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});

var images = {
    joe: 'https://cloud.fullstackacademy.com/joe_alves.jpg',
    kate: 'https://cloud.fullstackacademy.com/kate.png',
    david: 'https://cloud.fullstackacademy.com/david_yang.jpg'
}