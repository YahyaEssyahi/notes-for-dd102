function yahya(){
      var xdev=document.getElementById("dev").value;
      var xent=document.getElementById("ent").value;
      var xeng=document.getElementById("eng").value;
      var xbd=document.getElementById("bd").value;
      var xmyn= (Number(xdev)+ Number(xent)+Number(xeng)+Number(xbd))/4;
      document.getElementById('myn').value=xmyn.toFixed(2);
      document.getElementById("dev").focus();
      if(xmyn>=10){
        document.getElementById("rsl").value="admis";
        document.getElementById("rsl").style.color="green";
        alert("congratulions keep going")
      }
      else{
        document.getElementById("rsl").value="NON admis";
        document.getElementById("rsl").style.color="red";
        alert("next time dont give up")
      }
        
     
    }
   
function god(){
    var xdev=document.getElementById("dev").value="";
    var xent=document.getElementById("ent").value="";
    var xeng=document.getElementById("eng").value="";
    var xbd=document.getElementById("bd").value="";
    var xrly=document.getElementById("rsl").value="";
    var xmyn=document.getElementById("myn").value="";
    

    
}
