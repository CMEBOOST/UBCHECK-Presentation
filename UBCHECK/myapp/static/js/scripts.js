const allRows = document.querySelectorAll('.more-row');
const btn = document.getElementById('my_btn')
console.log(allRows)
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


function showLoader() { //ส่งข้อมูลมาทาง line notation ว่ามีคนกดปุ่ม
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.display = 'flex'; // 1. โชว์ Loader ทันที

    const webAppUrl = 'https://script.google.com/macros/s/AKfycbyv2w1CeDltexYeLrB1aFaMcC-G0dvlPWUpMysyt2hCdbku5v76HM7DckvvgDJSl424DQ/exec';

    fetch(webAppUrl, {
        method: 'POST',
        mode: 'no-cors'
    })
    .then(() => {
        // 2. เมื่อส่งสำเร็จ (หรือคำสั่งถูกส่งออกไปแล้ว)
        alert('ขอบคุณครับ!');
    })
    .catch(err => {
        console.error('Error:', err);อ
        alert('เกิดข้อผิดพลาด!');
    })
    .finally(() => {
        // 3. ไม่ว่าจะสำเร็จหรือพัง ให้ปิด Loader ทันที
        overlay.style.display = 'none';
    });
}