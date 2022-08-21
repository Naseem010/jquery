// for(var i=0;i<document.querySelectorAll("button").length;i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color="red";
//   });
// }
$("h1").click(function(){
  $("h1").css("color","purple");
});
$("body").keypress(function(event){
  $("h1").text(event.key);
});
$("h1").on("mouseover",function(){
  $("h1").css("color","purple");
});
$("h1").before("<button>NEW</button>");
$("h1").after("<button>NEW</button>");
$("h1").prepend("<button>NEW</button>");
$("h1").append("<button>NEW</button>");
