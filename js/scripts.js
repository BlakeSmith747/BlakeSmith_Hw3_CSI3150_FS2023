function scrollToTarget() {
  var targetSection = document.querySelector(".background1");

  // Scroll to the target section smoothly
  targetSection.scrollIntoView({ behavior: "smooth" });
}
function toggleMoreInfo() {
  var moreInfo = document.querySelector(".more-info");
  var button = document.querySelector(".read-more-button");

  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
    button.textContent = "Read Less";
  } else {
    moreInfo.style.display = "none";
    button.textContent = "Read More";
  }
}
function showqtext(imageNumber) {
  var qtextId = "qtext" + imageNumber;
  var qtext = document.getElementById(qtextId);

  if (qtext.style.display === "block") {
    qtext.style.display = "none";
  } else {
    qtext.style.display = "block";
  }
}