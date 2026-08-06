const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀ Light Mode";

    }

    themeBtn.addEventListener("click",function(){

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            themeBtn.textContent = "☀ Light Mode";
            localStorage.setItem("theme","dark");

        }else{

            themeBtn.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme","light");

        }

    });

}