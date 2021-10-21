let user = document.getElementById('user_id_num');
let click_check = document.getElementById('check_price');
let user_num;

let list_1 = [456];

click_check.addEventListener('click',  ()=>{
    for(let i=0;i<list_1.length;i++){
        user_num = parseInt(user.value.toString());
        let true_num = user_num % (10 ** (list_1[i].toString().length));
        if(true_num == list_1[i]){
            alert('中獎ㄌ');
        }
        else{
            alert('可惜ㄛ！');
        }

    }
    
}

)
