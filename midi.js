let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.navbar')
menu.oneclick = () =>{

menu.classList.toggle('fa-times')
 navbar.classList.toggle('active')

}

window.onscroll=()=>{

    menu.classList.remove('fa-times')
     navbar.classList.remove('active')
    
    };

    function hello(){




   
        let button =document.querySelector('.hr')
        
        if(button.innerHTML==='book'){
            button.innerHTML='booking done';
        }else{
        button.innerHTML='book';
        
        
        };



 };