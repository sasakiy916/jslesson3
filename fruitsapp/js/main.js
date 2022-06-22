window.onload=()=>{
    const prices = [120,50,180];
    const result = document.getElementById("result");
    const fruits =document.getElementsByClassName("fruits");

    // function numberChange(){
    const numberChange=()=>{
        let sum = 0;
       /*  
        for(let i=0;i<fruits.length;i++){
            sum += fruits[i].value * fruits[i].getAttribute("data-price");;
        }
         */
        for(let f of fruits){
            sum += f.value * f.getAttribute("data-price");
            console.log(f.getAttribute("value"));
        }
        result.textContent = sum + "円です!";
    };
    //function numberChangeの場合は関数より上に書いても動作する
    //const numberChangeの場合は関数より下に書かなければ動作しない
    for(let f of fruits){
        f.addEventListener("change",numberChange);
    }
};