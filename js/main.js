//greeting entrance

const greeting_h = document.querySelectorAll(".greeting-h")
const greeting = document.querySelector(".greeting")

setTimeout(()=>{for (let i = 0; i < greeting_h.length; i++){
    setTimeout(() => {
        greeting_h[i].classList.add("greeting-h-active")
    }, i * 800)  
}},500)
setTimeout(() => {
    greeting.style.setProperty("top", "-120%")
}, 5000)  
//navigation
const nav_bar = document.getElementById("nav_bar");
const section_top = document.getElementById("section-top");

// navigation
const hamburger_wrap = document.querySelector(".h-wrap");
const menu_wrap = document.querySelector(".ul-wrap");
let active = false;
const bars = document.querySelector(".h-wrap");


hamburger_wrap.addEventListener("click", () => {
    if (!active) {
        menu_wrap.classList.add("show-menu");
        bars.classList.add("active-menu");
        document.body.classList.add("body-100");
        setTimeout(() => {
            bars.classList.add("a-m-rotate")
        }, 400);
        active = !active
    } else if (active) {

        menu_wrap.classList.remove("show-menu");
        bars.classList.remove("a-m-rotate")
        setTimeout(() => {
            bars.classList.remove("active-menu");
            document.body.classList.remove("body-100");
        }, 400);
     




        active = !active
    }

})
const list_a = document.querySelectorAll(".list-a");
list_a.forEach((a) => {
    a.addEventListener("click", () => {
     
        if (active) {

            menu_wrap.classList.remove("show-menu");
            bars.classList.remove("a-m-rotate")
            setTimeout(() => {
                bars.classList.remove("active-menu");
                document.body.classList.remove("body-100");
            }, 400);
         
    
    
    
    
            active = !active
        }
    })
})

//cards sections
const sections = document.querySelectorAll(".card")
const section_top_h1 = document.getElementById("section-top-h1");
const titles = document.querySelectorAll(".title")
// const header_background = document.querySelector(".header-background");
//scroll
window.addEventListener("scroll", () => {
    //change nav background
    if (document.documentElement.scrollTop > section_top.clientHeight ) {
        nav_bar.classList.add("bg-scrolled");
    } else {;
        nav_bar.classList.remove("bg-scrolled");
    }
    //header parallax
    // header_background.style.setProperty("top", `${scrollY / 4}px`)
    section_top_h1.style.setProperty("transform", `translateY(${scrollY/ 2}px)`)
    //show element on scroll
    sections.forEach(card => {
        const slide = (window.scrollY + window.innerHeight / 1.5) ;
        if (slide > card.offsetTop) {
            card.classList.add('section-active');



         
        } else {
            card.classList.remove('section-active') 
        }







    })

  
    
})







            // mousemove
            const cards = document.querySelectorAll(".card")
            if (window.innerWidth > 1024) {
    



                cards.forEach((card) => {
                    card.addEventListener("mousemove", (e) => {
                    
                        const images = document.querySelectorAll(".img")
                        // const img = document.querySelector("img")
                        const x = e.clientX;
                        const y = e.clientY;
                        const cx = (((window.innerWidth / 2) - x) / 2) / 12;
                        const cy = (((window.innerHeight / 2) - y) / 2) / 6;
            
                        images.forEach((img) => {
                            img.style.setProperty("transform", `translate(${-cx}px, ${-cy}px)`)

                            

                        })
                 
            
                 
                    
            
                    })
                })
            }

// Scroll certain amounts from current position 
const scrollTopButton = document.querySelector(".scroll-top");
scrollTopButton.addEventListener("click", () => {
    window.scrollTo(0,0);
})

