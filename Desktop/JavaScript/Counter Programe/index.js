const descreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increasBtnBtn=document.getElementById("increaseBtn");
const countLabel=document.getElementById("countLabel");
let count=0;

increasBtnBtn.onclick=function(){
    count++;
    countLabel.textContent=count;

}

descreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
    
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
    
}