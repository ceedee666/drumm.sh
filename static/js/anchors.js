document.addEventListener("DOMContentLoaded", function (event) {
  var hash = window.decodeURI(location.hash.replace("#", ""));
  if (hash !== "") {
    var element = document.getElementById(hash);
    if (element) {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var clientTop =
        document.documentElement.clientTop || document.body.clientTop || 0;
      var offset = element.getBoundingClientRect().top + scrollTop - clientTop;
      // Wait for the browser to finish rendering before scrolling.
      setTimeout(function () {
        window.scrollTo(0, offset - 0);
      }, 0);
    }
  }
});
