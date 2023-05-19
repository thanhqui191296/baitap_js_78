var number = []
function main() {
    var num = Number(document.getElementById("inputSo").value)
    number.push(num)
    document.getElementById("txtResult").innerHTML = number
    // console.log(number)


}


document.getElementById("themSo").onclick = main
function sumArr() {
    var sum = 0
    for (var i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            sum += number[i]
        }
        if (number[i] < 0)
            continue
    }
    document.getElementById("txtTong").innerHTML = "Tổng số dương: " + sum
}
document.getElementById("calcTong").onclick = sumArr
function count() {
    var count = 0
    for (var i = 0; i < number.length; i++) {
        if (number[i] >= 0) {
            count++;
        }
        if (number[i] < 0) {
            continue
        }
    }
    document.getElementById("demSo").innerHTML = "Có : " + count + " số dương"
}
document.getElementById("countNum").onclick = count

function findMin() {
    var min = number[0]
    var indexMin = 0
    for (var i = 0; i < number.length; i++) {
        if (min > number[i]) {
            min = number[i]
            indexMin = i
        }

    }
    document.getElementById("timSo").innerHTML = "Số nhỏ nhất: " + min
}
document.getElementById("findMin").onclick = findMin

function soDuongNho() {

    var arrNumberCoppy = []
    for (var i = 0; i < number.length; i++) {
        if (number[i] >= 0) {
            arrNumberCoppy.push(number[i])
        } if (number[i] < 0) {
            continue
        }
    }
    var minDuong = arrNumberCoppy[0];
    var indexMinDuong = 0
    for (var i = 0; i < arrNumberCoppy.length; i++) {
        if (minDuong > arrNumberCoppy[i]) {
            minDuong = arrNumberCoppy[i]
            indexMinDuong = i
        }

    }
    console.log(arrNumberCoppy)
    console.log(minDuong)
    document.getElementById("timSoDuongNho").innerHTML = "Số dương nhỏ nhất: " + minDuong
}
document.getElementById("findSoDuongNhoNhat").onclick = soDuongNho
function soChan() {
    var soChan1 = []
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            soChan1.push(number[i])
            console.log(soChan1)
        }
    }

    var soChanCuoi = []
    for (var i = 0; i < soChan1.length; i++) {
        
        if (soChan1[i] %2 == 0) {
            soChanCuoi = soChan1[soChan1.length-1]
            console.log(soChanCuoi)
        }
    }
    document.getElementById("timSoCNN").innerHTML = "Số chẵn cuối cùng :" + soChanCuoi
}

document.getElementById("timSoChan").onclick = soChan
// function upperCase(string) {
//     const arrString = string.split(" ")
//     for (let i = 0; i < arrString.length; i++) {
//         arrString[i] = arrString[i][0].toUpperCase() + arrString[i].slice(1);
//     }
//     return arrString.join('')
// }
function doiViTri() {
    var viTri1 =Number (document.getElementById("inputViTri1").value);
    var viTri2 = Number(document.getElementById("inputViTri2").value);
    console.log(viTri1,viTri2)
    const swapEle = (number,viTri1,viTri2) => {
        let temp = number[viTri1];
        number[viTri1] = number[viTri2];
        number[viTri2] = temp;
    }
    swapEle(number,viTri1,viTri2)
    console.log(number)
    document.getElementById("doiViTri").innerHTML = "Mảng sau khi đổi: "+number
}
document.getElementById("doiCho").onclick = doiViTri
function sapXep() {
    var numberCoppy = []
    for (var i = 0; i < number.length; i++) {
        numberCoppy.push(number[i])
        
    }
    var sort = numberCoppy.sort(function(a,b){
        return a - b
    })
    document.getElementById("sapXepTD").innerHTML = "Mảng sau khi sắp xếp: "+sort
}
document.getElementById("sapXep").onclick = sapXep
function kiemTraSoNguyenTo(num) {
    if (num < 2){
        return false
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
} 
function soNguyenTo() {
    var soNguyen = -1;
    for (var i = 0; i < number.length; i++) {
        if (kiemTraSoNguyenTo(number[i])) {
            soNguyen = number[i]
            break
        }
        
    }
    document.getElementById("timSNT").innerHTML = soNguyen
}
// document.getElementById("timSNT").innerHTML = soNguyenTo
document.getElementById("timSoNguyenTo").onclick = soNguyenTo





