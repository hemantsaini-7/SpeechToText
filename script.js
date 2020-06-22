var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
var area = $("#area");
var textIn = $("#textIn");

var content = "";

recognition.continuous = true;

recognition.onstart = function () {
  textIn.text("Voice Recognition is on");
};

recognition.onspeechend = function () {
  textIn.text("No Activity");
};

recognition.onerror = function () {
  textIn.text("Try Again");
};

recognition.onresult = function () {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;

  content += transcript;

  area.val(content);
};

$("#start-btn").click(function (event) {
  if (content.length) {
    content += "";
  }
  recognition.start();
});

area.on("input", function () {
  content = $(this).val;
});
