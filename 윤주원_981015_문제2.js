let coin = 0;
// const drink1 = document.getElementById("drink1");
// const drink2 = document.getElementById("drink2");
// const drink3 = document.getElementById("drink3");
const cash1 = document.getElementById("cash1");
const cash2 = document.getElementById("cash2");
const cash3 = document.getElementById("cash3");
const beverage1 = document.getElementById("beverage1");
const result = document.getElementById("result");

// 금액 버튼 클릭시
function cash1_Click(){
    coin = coin + 100;
    if(coin > 10000){
        alert(`${coin}원은 너무 많아요`)
    }
    document.getElementById('current').innerHTML = coin;
};

function cash2_Click(){
    coin = coin + 500;
    if(coin > 10000){
        alert(`${coin}원은 너무 많아요`)
    }
    document.getElementById('current').innerHTML = coin;
};

function cash3_Click(){
    coin = coin + 1000;
    if(coin > 10000){
        alert(`${coin}원은 너무 많아요`)
    }

    document.getElementById('current').innerHTML = coin;
};

// 가능한 음료
function beverage1_Click(){
    if(coin >= 300 ){
        document.getElementById('current2').innerHTML = '비타민음료';
    }if(coin >= 500){
        document.getElementById('current2').innerHTML = '사이다, 비타민음료';
    }if(coin >= 1000){      
        document.getElementById('current2').innerHTML = '사이다, 비타민음료, 콜라';
    }else if(coin < 300){   
        document.getElementById('current2').innerHTML = 'x';
    }
}
//실행
function result2(){
    cash1.addEventListener('click',cash1_Click);
    cash2.addEventListener('click',cash2_Click);
    cash3.addEventListener('click',cash3_Click);    
    result.addEventListener('click',beverage1_Click);
    
};

result2();