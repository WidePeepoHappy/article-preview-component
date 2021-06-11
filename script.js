const shareButton = document.querySelector(".profile__share-img");
const shareBlock = document.querySelector(".profile__share");
const shareImg = document.querySelector(".profile__share-img");

shareButton.addEventListener("click", showSocialLinks);

function showSocialLinks() {
  if (shareBlock.style.visibility === "hidden") {
    shareBlock.style.visibility = "visible";
    shareImg.classList.add("active");
  } else {
    shareBlock.style.visibility = "hidden";
    shareImg.classList.remove("active");
  }
}
