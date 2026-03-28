const btn = document.getElementById("my_btn");
const details = document.getElementById("details")

btn.addEventListener('click', ()=> {
    details.classList.toggle('d-none')

    if (details.classList.contains('d-none')){
        btn.innerText = 'แสดงรายละเอียดเพิ่มเติม'
    }else{
        btn.inerText = 'ซ่อนรายละเอียด'
    }
})