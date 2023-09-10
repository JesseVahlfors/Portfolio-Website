const sun = document.querySelector(".button");
const page = document.querySelector("#page-container")
const nav = document.querySelectorAll("a")
const contact = document.querySelectorAll(".contact-container")
let dayMode = true;


sun.addEventListener("click", () => {

    if (dayMode === true) 
    {
        page.style.backgroundColor = "rgb(20, 44, 82)";
        sun.style.backgroundColor = "rgb(20, 44, 82)";
        page.style.color = "rgb(181, 212, 253)";
        // Nav item text coloring
        colorLinks("rgb(181, 212, 253)");
        colorContacts("rgb(20, 44, 82)");
        
        function colorLinks(rgb)
        {
            for(let i=0;i<nav.length;i++)
            {
                if(nav[i].href)
                {
                    nav[i].style.color = rgb;  
                }
            }  
        }
        
        function colorContacts(rgb)
        {
            for(let j=0;j<contact.length;j++)
            {
                if(contact[j].className === "contact-container")
                {
                    contact[j].style.backgroundColor = rgb;  
                }
            }  
        }

        document.querySelector("footer").style.backgroundColor = "rgb(20, 44, 82)";
        document.querySelector("footer").style.borderColor = "rgb(181, 212, 253)"
        dayMode = false;
        console.log(dayMode)
    } else {
        page.style.backgroundColor = "rgb(181, 212, 253)";
        sun.style.backgroundColor = "rgb(181, 212, 253)";
        page.style.color = "rgb(20, 44, 82)";
        // Nav item text coloring
        colorLinks("rgb(20, 44, 82)");
        colorContacts("azure");  
        function colorLinks(rgb)
        {
            for(let i=0;i<nav.length;i++)
            {
                if(nav[i].href)
                {
                    nav[i].style.color = rgb;  
                }
            }  
        }
        
        function colorContacts(rgb)
        {
            for(let j=0;j<contact.length;j++)
            {
                if(contact[j].className === "contact-container")
                {
                    contact[j].style.backgroundColor = rgb;  
                }
            }  
        }
        document.querySelector("footer").style.backgroundColor = "rgb(181, 212, 253)";
        document.querySelector("footer").style.borderColor = "rgb(20, 44, 82)"
        dayMode = true;
        console.log(dayMode)
    };   
})
