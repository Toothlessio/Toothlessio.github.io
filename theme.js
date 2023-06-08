toggle.addEventListener("click", () => {
   document.body.classList.toggle("dark");
   if (theme === "dark") {
     window.localStorage.setItem("theme", "light");
   } else window.localStorage.setItem("theme", "dark");
});

personaltheme.addEventListener("click", () => {
   document.body.classList.toggle("mytheme");
   if (theme === "mytheme") {
     window.localStorage.setItem("theme", "mytheme");
   } else window.localStorage.setItem("theme", "mytheme");
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Dark") {
    x.innerHTML = "Light";
  } else {
    x.innerHTML = "Dark";
  }
}

