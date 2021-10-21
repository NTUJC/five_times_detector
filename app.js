let user = document.getElementById('user_id_num');
let click_check = document.getElementById('check_price');
let user_num;

// 第一週
let list_1  //國旅
let list_2 //i 原
let list_3 //農遊
let list_4 //藝 Fun
let list_5 //動滋
let list_6  //客庄
let list_7  //地方創生

let lottery = "";
let win_times=0;




click_check.addEventListener('click', ()=>{

    list_1 = [21, 32, 98, 67, 97, 410]; //國旅
    list_2 = [64, 85]; //i 原
    list_3 = [89, 32, 54, 597, 453, 152]; //農遊
    list_4 = [96, 15, 07, 30, 73, 98, 19, 11]; //藝 Fun
    list_5 = [97, 13, 19, 55, 71, 93,381, 734, 644, 453, 985]; //動滋
    list_6 = [81, 900]; //客庄
    list_7 = [081, 105, 594, 188, 089, 396, 521, 467, 912, 798, 358, 441, 367, 941, 335]; //地方創生

    for(i=0;i<list_1.length;i++){
        your_id = user.value.split("").slice(-list_1[i].length).join("");
        if (your_id == list_1[i]){
            lottery += '～國旅券中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_2.length;i++){
        your_id = user.value.split("").slice(-list_2[i].length).join("");
        if (your_id == list_2[i]){
            lottery += '～ i 原券中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_3.length;i++){
        your_id = user.value.split("").slice(-list_3[i].length).join("");
        if (your_id == list_3[i]){
            lottery += '～農遊券中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_4.length;i++){
        your_id = user.value.split("").slice(-list_4[i].length).join("");
        if (your_id == list_4[i]){
            lottery += '～藝 Fun 券（數位）中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_5.length;i++){
        your_id = user.value.split("").slice(-list_5[i].length).join("");
        if (your_id == list_5[i]){
            lottery += '～動滋券中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_6.length;i++){
        your_id = user.value.split("").slice(-list_6[i].length).join("");
        if (your_id == list_6[i]){
            lottery += '～客庄券中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_7.length;i++){
        your_id = user.value.split("").slice(-list_7[i].length).join("");
        if (your_id == list_7[i]){
            lottery += '～地方創生券中籤！～' + '\n';
            win_times += 1;
        } 
    }

    if( win_times > 1 ){
        lottery += '重複中籤！只能得「較前面」且有「登記」\n';
    }
    win_times = 0;

  // 第二週

    list_1 = [87, 04, 40, 29, 71]; //國旅
    list_2 = [12, 59]; //i 原
    list_3 = [50, 13]; //農遊
    list_4 = [78, 00, 39, 22, 61, 23, 15]; //藝 Fun
    list_5 = [91, 11, 04, 18, 57, 498, 756]; //動滋
    list_6 = [11, 439, 841, 052, 206, 161, 457, 205, 012, 293, 446, 589]; //客庄
    list_7 = [99999999999999999]; //地方創生
    let lottery2 = "";

    for(i=0;i<list_1.length;i++){
        your_id = user.value.split("").slice(-list_1[i].length).join("");
        if (your_id == list_1[i]){
            lottery2 += '～國旅券中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_2.length;i++){
        your_id = user.value.split("").slice(-list_2[i].length).join("");
        if (your_id == list_2[i]){
            lottery2 += '～ i 原券中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_3.length;i++){
        your_id = user.value.split("").slice(-list_3[i].length).join("");
        if (your_id == list_3[i]){
            lottery2 += '～農遊券中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_4.length;i++){
        your_id = user.value.split("").slice(-list_4[i].length).join("");
        if (your_id == list_4[i]){
            lottery2 += '～藝 Fun 券（數位）中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_5.length;i++){
        your_id = user.value.split("").slice(-list_5[i].length).join("");
        if (your_id == list_5[i]){
            lottery2 += '～動滋券中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_6.length;i++){
        your_id = user.value.split("").slice(-list_6[i].length).join("");
        if (your_id == list_6[i]){
            lottery2 += '～客庄券中籤！～' + '\n';
            win_times += 1;
        } 
    }
    for(i=0;i<list_7.length;i++){
        your_id = user.value.split("").slice(-list_7[i].length).join("");
        if (your_id == list_7[i]){
            lottery2 += '～地方創生券中籤！～' + '\n';
            win_times += 1;
        } 
    }

    if( win_times > 1 ){
        lottery += '重複中籤！只能得「較前面」且有「登記」\n';
    }
    win_times = 0;
    
    if (lottery == ""){
        if (lottery2 == "") {
            alert("第一週沒中！\n第二週沒中！" );

        } else{
            alert("第一週沒中！\n" + '\n第二週：' + '\n' + lottery2);
        };
    } else {
        if(lottery2 ==""){
            alert("第一週：\n" + lottery + '\n' + "第二週沒中！");
        } else{
            alert("第一週：\n" + lottery + '\n第二週：' + '\n' + lottery2);
        };
    }

    lottery = "";
    lottery2 = "";
    user.value = "";
})





// for(a=0;a<all_list.length;a++){
//     for(b=0;b<all_list[a].length;b++){
//             user_num = parseInt(user.value.toString());
//             let true_num = user_num % (10 ** (all_list[a][b].toString().length));
//             if(true_num == all_list[a][b]){
//                 alert('中獎ㄌ');
//             }
//             else{
//                 alert('可惜ㄛ！');
//             };
 
//     }
// }