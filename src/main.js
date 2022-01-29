let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/*你好，我叫小方
接下来我演示一下我的前端功底
首先我要准备一个div*/
#div1{
    border:1px solid black;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
首先把div变成一个圆
*/
#div1 {
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
八卦是阴阳形成的
一黑一白
*/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before{
    position:absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    width:100px;
    height:100px;
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after {
    position:absolute;
    top:100px;
    left:50%;
    transform:translateX(-50%);
    width:100px;
    height:100px;
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n=-1;
let step = ()=>{
    setTimeout(()=>{
        n+=1;
        if(string[n] === "\n"){        
            string2 = string2+"<br>";
        }else if(string[n] === " "){     //如果是空格
            string2 = string2+"&nbsp;";
        }
        else {                               //不是换行就照搬
            string2 = string2 + string[n];  
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,9999);
        html.scrollTo(0,99999)
        if(n<string.length-1){ 
             step();
        } 
    },20);
}
step();
