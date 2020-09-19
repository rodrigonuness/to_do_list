document.addEventListener('keydown', function(txto) {
    
    if(txto.key == "Enter"){
        clicou();
    }
})
function clicou(){
        var tex = document.getElementById('text').value;
        var tst = document.createTextNode(tex);
        var ul = document.getElementById('ul');
        var il = document.createElement('li');
        var check = document.createElement('a');
        check.onclick = function () {
            
            il.style.fontSize = "0pt";
            
            il.style.width= "0px";
            il.style.fontSize= "0Pt";
            il.style.border= "rgba(51, 51, 51, 0) 0px solid";
            il.style.marginTop= "0";
            il.style.marginBottom= "0";
            il.style.marginLeft= "0";
            check.style.fontSize= "0pt";

            
        }

        console.log(tst);


    
        if(testo === ''){
            alert("Write a thing!");
        }else{
            
            il.appendChild(tst); 
            ul.appendChild(il);
            check.innerHTML = "    x";
            check.style.color = "red";
            il.appendChild(check);
            var testo = document.getElementById('text').value = "";
        }



}
