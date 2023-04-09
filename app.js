var target = document.querySelectorAll(".link-color");
console.log(target);
for (var i = 0; i < target.length; i++) {
  target[i].addEventListener("click", function (event) {
    event.preventDefault();
    console.log(target);
    var targetval = this.textContent.toLowerCase();
    var targetId = document.getElementById(targetval);
    console.log(targetval);
    var targetIdCoord = targetId.getBoundingClientRect().top;
    console.log(targetIdCoord);
    scroll({
      top: targetIdCoord,
      behavior: "smooth",
    });
  });
}
