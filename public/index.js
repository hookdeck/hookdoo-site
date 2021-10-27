var toggleElement = function (id) {
  var element = document.getElementById(id);
  if (element) {
    element.classList.toggle("hidden");
  }
};
