document.addEventListener('keydown', function(txto) {
    
    if(txto.key == "Enter"){
        put();
    }
})
function put(){
        var tex = document.getElementById('text').value;
        var tst = document.createTextNode(tex);
        var ul = document.getElementById('ul');
        var il = document.createElement('li');
        var check = document.createElement('a');
        check.onclick = function () {
            
            tst.parentNode.remove();

            
        }

        console.log(tst);


    
        if(tex === ''){
            alert("Write a thing!");
        }else{
            
            il.appendChild(tst); 
            ul.appendChild(il);
            check.innerHTML = "x";
            check.style.color = "red";
            il.appendChild(check);
            var testo = document.getElementById('text').value = "";
        }



}
