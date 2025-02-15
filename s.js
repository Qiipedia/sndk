 
var str;
var i;
var j;
function a() {
   
var y = parseInt(document.getElementById('z').value, 10);
var x = y+1
str='';
for(i=1; i<=40; i++){
	
    for(j=1; j<=40; j++){
    if((j-i)%x==0){
        str=str+'■';
    }else{
        str=str+'□';
    }
    
}   str=str+'\n';    
}   
   
document.getElementById('pre1').textContent = str;
}

document.getElementById('z').addEventListener('change', a);
document.getElementById("z").value = 5;
a();