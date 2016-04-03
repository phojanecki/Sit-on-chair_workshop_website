document.addEventListener("DOMContentLoaded", function(){

// menu rozwijane
  var menu = document.querySelectorAll("#menu ul li");

  for(var i=0; i < menu.length; i++) {
    menu[i].addEventListener("mouseover", function(event) {
      if(this.children.length != 0) {
        this.children[0].style.display = "block";
      }
    });

    menu[i].addEventListener("mouseout", function(){
      if(this.children.length != 0) {
        this.children[0].style.display = "none";
      }
    });
  }
});

// zanikanie obrazka po najechaniu myszką

var boxes = document.getElementsByClassName("box1");
console.log(boxes);

for(var i=0; i < boxes.length; i++){
  boxes[i].addEventListener("mouseover", function(event){
    boxes[i].style.display = "none";
  });
}
