let count=0
function increment(){
    count=count+1
    document.getElementById("count-el").innerText=count

}


function save(){
    document.getElementById("save-el").textContent+=count + " - "

    count=0
    document.getElementById("count-el").innerText= count

}
