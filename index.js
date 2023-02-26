let accordian =document.getElementsByClassName("Faq_title");
for(let i=0;i<accordian.length;i++){
    accordian[i].addEventListener("click",function(){
        if(this.childNodes[i].classList.contains("fa-plus")){
            this.childNodes[i].classList.remove("fa-plus");
            this.childNodes[i].classList.add("fa-times");
        } else{
            this.childNodes[i].classList.remove("fa-times");
            this.childNodes[i].classList.add("fa-plus");
        }
        let content =this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight=null;
        } else{
            content.style.maxHeight=content.scrollHeight + "px";
        }
    

    
  });
}
