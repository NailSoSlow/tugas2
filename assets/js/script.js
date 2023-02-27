let headlineIndex = 0;
startHeadline();

function startHeadline() {
  let i;
  let slides = document.getElementsByClassName("headline_placeholder");
  let dots = document.getElementsByClassName("headline_dot");
  headlineIndex++;
  if (headlineIndex > slides.length) {
    headlineIndex = 1;
  }
  let n = headlineIndex - 1;
  showHeadline(n);
  setTimeout(startHeadline, 5000);
}

function showHeadline(n) {
  let i;
  let slides = document.getElementsByClassName("headline_placeholder");
  let dots = document.getElementsByClassName("headline_dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n].style.display = "block";
  dots[n].className += " active";
}

function openMainMenu() {
  document.getElementsByClassName("side_menu")[0].style.width = "80%";
}
function closeMainMenu() {
  document.getElementsByClassName("side_menu")[0].style.width = "0";
}

function openSearchBar() {
  document.getElementsByClassName("search_bar")[0].style.height = "80px";
}
function closeSeatchBar() {
  document.getElementsByClassName("search_bar")[0].style.height = "0";
}
