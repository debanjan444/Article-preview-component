document.getElementById("shareimg").addEventListener("click",function(){
  var x = document.querySelector(".sharebox").style.display;
  if(x == "block"){
     document.querySelector(".sharebox").style.display = "none";
  }else{
    document.querySelector(".sharebox").style.display = "block";
  }
})
