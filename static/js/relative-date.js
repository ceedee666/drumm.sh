// Replaces <span class="relative-date" data-date="..."> with a humanized
// relative date ("2 years ago"), matching the previous date-fns behaviour
// closely enough without shipping a date library.
(function () {
  function relative(date) {
    var diff = date.getTime() - Date.now();
    var abs = Math.abs(diff);
    var second = 1000;
    var minute = 60 * second;
    var hour = 60 * minute;
    var day = 24 * hour;
    var month = 30.44 * day;
    var year = 365.25 * day;

    var value, unit;
    if (abs < minute) {
      value = Math.round(diff / second);
      unit = "second";
    } else if (abs < hour) {
      value = Math.round(diff / minute);
      unit = "minute";
    } else if (abs < day) {
      value = Math.round(diff / hour);
      unit = "hour";
    } else if (abs < month) {
      value = Math.round(diff / day);
      unit = "day";
    } else if (abs < year) {
      value = Math.round(diff / month);
      unit = "month";
    } else {
      value = Math.round(diff / year);
      unit = "year";
    }

    return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
      value,
      unit,
    );
  }

  document.querySelectorAll(".relative-date[data-date]").forEach(function (el) {
    var date = new Date(el.getAttribute("data-date"));
    if (!isNaN(date.getTime())) {
      el.textContent = relative(date);
    }
  });
})();
