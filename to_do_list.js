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
            
            il.parentNode.removeChild('il')
            check.style.fontSize= "0pt";

            
        }

        console.log(tst);


    
        if(tex === ''){
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
