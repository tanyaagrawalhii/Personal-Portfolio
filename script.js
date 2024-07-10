var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-links");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("tab-1");
        }
        event.currentTarget.classList.add("active-links");
        document.getElementById(tabname).classList.add("tab-1");
            
    }

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="dark theme icon/sun.png";
    }
    else{
        icon.src='dark theme icon/moon.png';
    }
}  


    
