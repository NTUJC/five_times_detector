let user = document.getElementById('user_id_num');
let click_check = document.getElementById('check_price');
let user_num;

// 第一週
let list_1 = [21, 32,98, 67, 97, 410]; //國旅
let list_2 = [64, 85]; //i 原
let list_3 = [89, 32, 54, 597, 453, 152]; //農遊
let list_4 = [96, 15, 07, 30, 73, 98, 19, 11]; //藝 Fun
let list_5 = [97, 13, 19, 55, 71, 93,381, 734, 644, 453, 985]; //動滋
let list_6 = [81, 900]; //客庄
let list_7 = [081, 105, 594, 188, 089, 396, 521, 467, 912, 798, 358, 441, 367, 941, 335]; //地方創生
let all_list = [list_1, list_2, list_3, list_4, list_5, list_6, list_7];
let lottery = "";

click_check.addEventListener('click', ()=>{

    for(let i=0;i<list_1.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_1[i].toString().length));
        if(true_num == list_1[i]){
            lottery += '～國旅券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    for(let i=0;i<list_2.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_2[i].toString().length));
        if(true_num == list_2[i]){
            lottery += '～ i 原券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    for(let i=0;i<list_3.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_3[i].toString().length));
        if(true_num == list_3[i]){
            lottery += '～農遊券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }

    for(let i=0;i<list_4.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_4[i].toString().length));
        if(true_num == list_4[i]){
            lottery += '～藝 Fun 券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    for(let i=0;i<list_5.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_5[i].toString().length));
        if(true_num == list_5[i]){
            lottery += '～動滋券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    for(let i=0;i<list_6.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_6[i].toString().length));
        if(true_num == list_6[i]){
            lottery += '～客庄券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    for(let i=0;i<list_7.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_7[i].toString().length));
        if(true_num == list_7[i]){
            lottery += '～地方創生券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }

})

// 第二週
list_1 = [87, 04, 40, 29, 71]; //國旅
list_2 = [12, 59]; //i 原
list_3 = [50, 13]; //農遊
list_4 = [78, 00, 39, 22, 61, 23, 15]; //藝 Fun
list_5 = [91, 11, 04, 18, 57, 498, 756]; //動滋
list_6 = [11, 439, 841, 052, 206, 161, 457, 205, 012, 293, 446, 589]; //客庄
list_7 = [99999999999999999]; //地方創生
let lottery2 = "";



click_check.addEventListener('click', ()=>{

    for(let i=0;i<list_1.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_1[i].toString().length));
        if(true_num == list_1[i]){
            lottery2 += '～國旅券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    for(let i=0;i<list_2.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_2[i].toString().length));
        if(true_num == list_2[i]){
            lottery2 += '～ i 原券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    for(let i=0;i<list_3.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_3[i].toString().length));
        if(true_num == list_3[i]){
            lottery2 += '～農遊券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }

    for(let i=0;i<list_4.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_4[i].toString().length));
        if(true_num == list_4[i]){
            lottery2 += '～藝 Fun 券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    for(let i=0;i<list_5.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_5[i].toString().length));
        if(true_num == list_5[i]){
            lottery2 += '～動滋券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    for(let i=0;i<list_6.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_6[i].toString().length));
        if(true_num == list_6[i]){
            lottery2 += '～客庄券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    for(let i=0;i<list_7.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_7[i].toString().length));
        if(true_num == list_7[i]){
            lottery2 += '～地方創生券中籤！～' + '\n';
        }
        else{
            continue;
        }
    }
    
    if (lottery == ""){
        if (lottery2 == "") {
            alert("第一週沒中！ \n第二週沒中！" );

        } else{
            alert('第二週：' + '\n' + lottery);
        };
    } else {
        if(lottery2 ==""){
            alert("第一週：\n" + lottery);
        } else{
            alert("第一週：\n" + lottery + "\n第二週沒中！");
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