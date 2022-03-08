const btn = document.querySelector(".ham-btn");
const headerList= document.querySelector(".header-list ul");
const btnEx= document.querySelector(".ham-btn.bar");
const btn1=document.querySelector('.ham-btn.bar span:nth-child(1)')
const btn2=document.querySelector('.ham-btn.bar span:nth-child(2)')
const btn3=document.querySelector('.ham-btn.bar span:nth-child(3)')
btn.onclick = ()=> {
    
    headerList.classList.toggle('show');
    
    btn1.classList.toggle('show')
    btn2.classList.toggle('show')
    btn3.classList.toggle('show')
}



// btnEx.onclick= ()=> {
//     btnEx.classList.toggle('show');
//     headerList.classList.toggle('show');
//     btn.classList.toggle('show');
// }
