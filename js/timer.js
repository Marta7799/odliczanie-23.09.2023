function countDown() {
  var last = new Date("23 September 2023 16:00:00");
  var last = Date.parse(last) / 1000;
  var current = new Date();
  var current = Date.parse(current) / 1000;
  var leftTime = last - current;
  var days = Math.floor(leftTime / 86400);
  var hours = Math.floor((leftTime - days * 86400) / 3600);
  var minutes = Math.floor((leftTime - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    leftTime - days * 86400 - hours * 3600 - minutes * 60
  );
  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }
  $("#days").html(days + "<span>Days</span>");
  $("#hours").html(hours + "<span>Hours</span>");
  $("#minutes").html(minutes + "<span>Minutes</span>");
  $("#seconds").html(seconds + "<span>Seconds</span>");
}
setInterval(function () {
  countDown();
}, 0);
