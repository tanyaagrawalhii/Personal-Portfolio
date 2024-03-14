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

