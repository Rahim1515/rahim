
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Start color picker option
$(function() {
  $('#cp4').colorpicker().on('changeColor', function(e) {
    $('body')[0].style.backgroundColor = e.color.toString(
                'rgba');
  });
});

$(function() {
  $('#cp5').colorpicker().on('changeColor', function(e) {
    $('body')[0].style.backgroundColor = e.color.toString(
                'rgba');
  });
});

$(function() {
  $('#cp6').colorpicker().on('changeColor', function(e) {
    $('body')[0].style.backgroundColor = e.color.toString(
                'rgba');
  });
});

$(function() {
  $('#cp7').colorpicker().on('changeColor', function(e) {
    $('body')[0].style.backgroundColor = e.color.toString(
                'rgba');
  });
});

$(function() {
  $('#cp8').colorpicker().on('changeColor', function(e) {
    $('body')[0].style.backgroundColor = e.color.toString(
                'rgba');
  });
});
// End color picker option
function show(){
  document.getElementById('specify-section1').style.display ='none';
}

