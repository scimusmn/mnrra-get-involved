$browserContainer = $('#browser-container');
$buttonsContainer = $('#buttons-container');
$browserContainer.hide();

//Event handlers
$('#learn').click(function () {
  learn();
});

$('#attend').click(function () {
  attend();
});

$('#volunteer').click(function () {
  volunteer();
});

$('#member').click(function () {
  member();
});

$('#home').click(function () {
  home();
});

//--------------//

function attend() {
  var url = 'http://parkconnection.org/events/';
  goToBrowser(url);
}

function learn() {
  var url = 'https://www.nps.gov/miss/index.htm';
  goToBrowser(url);
}

function volunteer() {
  var url = 'http://parkconnection.org/support/volunteer/';
  goToBrowser(url);
}

function member() {
  var url = 'http://parkconnection.org/support/membership/';
  goToBrowser(url);
}

function home() {
  var url = 'http://parkconnection.org';
  goToHome(url);
}

function goToBrowser(url) {
  $buttonsContainer.fadeOut(300);
  $browserContainer.fadeIn(300);
  $('#browser')
    .attr('src', url);
}

function goToHome() {
  $browserContainer.fadeOut(300);
  $buttonsContainer.fadeIn(300);
}
