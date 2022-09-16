let Array = [];
let count = 0;

//biến count để trong function clickAdd sẽ đặt lại 0
function clickAdd() {
    let element = document.getElementById("inputCell").value;
    Array.push(element);
    alert("Element " + element + " added to index " + count);
    count++
}

// let display = document.getElementById("display")
// display.addEventListener("click", Print) //hàm lấy sự kiện, cho chạy câu lệnh Print khi click từ biến lấy id
// function Print() {           //dùng hàm này k cần đặt onclick bên html, phải đặt thêm id

function Print() {
    let len = Array.length;
    let data = "";
    for (let i = 1; i <= len; i++) {
        data += "Element " + (i - 1) + " = " + Array[i - 1] + "<br>";
    }
    document.getElementById("result").innerHTML = data;     //đặt document trong for sẽ bị ghi đè
}
