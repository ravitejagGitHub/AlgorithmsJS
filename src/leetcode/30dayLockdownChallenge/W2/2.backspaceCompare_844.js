/**
 * @param {string} S
 * @param {string} T
 
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    var slen = S.length-1;
    var tlen = T.length-1;
    var skipSpaceForS =0;
    var skipSpaceForT =0;
    while(slen>=0 || tlen>=0){
        
        while(slen >= 0){
             if(S[slen] == "#" ){
                slen--;
                skipSpaceForS++;
            }
            else  if(skipSpaceForS > 0){
                slen--;
                skipSpaceForS--;
            }
          
            else
                break;
        }
        while(tlen >= 0){
            if(T[tlen] == "#" ){
                tlen--;
                skipSpaceForT++;
            }
            else  if(skipSpaceForT > 0){
                tlen--;
                skipSpaceForT--;
            }
            else
                break;
        }
        
        if(slen>=0 && tlen >=0 && S[slen] != T[tlen] ){
            return false;
        }
        if((slen >= 0) != (tlen >= 0))
            return false;
        slen--;
        tlen--;
        
        
    }
    return true;
};