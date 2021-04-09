

// // Bài 1
// let str_input = "Polytechnic"
// let str_reverse= ""

// for(let i = str_input.length-1; i>-1; i--){
//     str_reverse = str_reverse + str_input[i]
// }
// console.log(str_reverse);

// // Bài 2

// let str = "game easy"
// let arr_str= str.toLowerCase().split(" ")

// str=""
// for(let i = 0;i< arr_str.length; i++){
//    str = str +" " +arr_str[i].charAt(0).toUpperCase() + arr_str[i].slice(1);
// }

// console.log(str);

// Bài 3

let arr_3 = [1, 2, 3, 4, 4, 3, 5]

let arr_repeat = []

for (let i = 0; i < arr_3.length; i++) {
    if (check(arr_3[i] === 0)) {
        arr_3.splice(i, 1)
    } else {
        arr_repeat.push(arr_3[i])
    }
}

console.log(arr_3);

function check(a) {
    for (let i = 0; i < arr_repeat.length; i--) {
        if (a === arr_repeat[i]) {
            return 0
        }
        else {
            return 1
        }
    }
}

// Bài 4

// let mindX =[]

// let staff = {
// }

// staff= {name:"a",age:20,salary:1000,position:"staff"}
// mindX.push(staff)
// staff= {name:"a",age:20,salary:1000,position:"staff"}
// mindX.push(staff)
// staff= {name:"a",age:20,salary:1000,position:"staff"}
// mindX.push(staff)
// while(true){
//     let inputUser = prompt("Enter C/R/U/D").toLowerCase()

//     if(inputUser === 'c'){
//         let inputName = prompt("Vui lòng nhập tên").toLowerCase()
//         let inputAge = prompt("Vui lòng nhập tuổi").toLowerCase()
//         let inputSalary = prompt("Vui lòng nhập lương").toLowerCase()
//         let inputPosition = prompt("Vui lòng nhập vị trí").toLowerCase()

//         staff.name = inputName
//         staff.age = inputAge
//         staff.salary = inputSalary
//         staff.position = inputPosition

//         mindX.push(staff)


//     }else if(inputUser === 'r'){
//         for(let i=0;i<mindX.length;i++){
//             console.log("Nhân viên thứ " + (i+1));
//             staff = mindX[i]
//             for(let key in staff){
//                 console.log(key, staff[key])
//             }
//         }
//     }else if(inputUser === 'u'){
//         let index = Number(prompt("Vui lòng nhập số muốn đổi"))
//         mindX[index - 1].age = prompt("Nhập tuổi mới")
//         mindX[index - 1].salary = prompt("Nhập lương mới")
//         mindX[index - 1].position = prompt("Nhập chức vụ mới")


//     }else if(inputUser === 'd'){
//         let indexDelete = Number(prompt("Vui lòng nhập số muốn xóa"))
//         mindX.splice(indexDelete-1,1)
//     }else{
//         alert("Nhập c/r/u/d")
//     }
// }


// Bài 5

let day = Number(prompt("Mời bạn nhập ngày"))
let month = Number(prompt("Mời bạn nhập tháng"))
let year = Number(prompt("Mời bạn nhập năm"))

if (year % 4 == 0) {
    if (month > 0 && month < 12) {
        if (month === 2 && day > 29) {
            alert("Ngày không hợp lệ")
        } 
        else if ((month === 4&& day >30)||(month === 6&& day >30) ||(month === 9&& day >30) ||(month === 11 && day >30)) {
            alert("Ngày không hợp lệ")
        }else if(day>31){
            alert("Ngày không hợp lệ")
        }else{
            alert("Ngày hợp lệ")

        }
   }else{
    alert("Ngày không hợp lệ")
   }
} else {
    if (month > 0 && month < 12) {
        if (month === 2 && day > 28) {
            alert("Ngày không hợp lệ")
        } 
        else if ((month === 4&& day >30)||(month === 6&& day >30) ||(month === 9&& day >30) ||(month === 11 && day >30)) {
            alert("Ngày không hợp lệ")
        }else if(day>31){
            alert("Ngày không hợp lệ")
        }else{
            alert("Ngày hợp lệ")
        }
   }else{
    alert("Ngày không hợp lệ")
   }
}

