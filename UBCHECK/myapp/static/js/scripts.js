const allRows = document.querySelectorAll('.more-row');
const btn = document.getElementById('my_btn')

btn.addEventListener('click', ()=>{
    const anyopen = document.querySelector('.details.show')

    allRows.forEach(row=>{
        const details = row.querySelector('.details');

        if (anyopen){
            details.classList.remove('show')
        }else{
            details.classList.add('show')
        }

    })
    btn.innerText = anyopen ? 'แสดงข้อมูลเพิ่มเติม' : 'แสดงน้อยลง'
})

allRows.forEach(row =>{
    const details = row.querySelector('.details');

    row.addEventListener('click', ()=>{
        details.classList.toggle('show');

        const isopen = document.querySelector('.details.show');
        btn.innerText = isopen ? 'แสดงน้อยลง' : 'แสดงข้อมูลเพิ่มเติม'
    })

    details.addEventListener('click', (e) => {
        e.stopPropagation(); // หยุดการส่งเหตุการณ์คลิกไปหาตัวพ่อ (row)
    });
})


