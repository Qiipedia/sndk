function b(){
	var r = parseInt(en.value);
	
    span.textContent = r;
var str = '';
            var i;
        var j;
    
            for (i = 1; i <= 160; i++) {
                for (j = 1; j <= 160; j++) {
                    if (Math.pow(j - 75, 2) + Math.pow(i - 75, 2) <= r) {
                        str += '■';
                    } else {
                        str += '□';
                    }
                }
                str += '\n';
            }
    	
            pre2.textContent = str;
        }
	en.addEventListener("input", b);
    document.getElementById("en").value = 2000;
    b();
    