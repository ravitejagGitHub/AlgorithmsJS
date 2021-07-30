export function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false;
     
     const stack: string[] = [];
     for (let i = 0; i < s.length; i++) {
         let c = s[i];
 
         if (["(", "{", "["].includes(c)) {
             stack.push(c);
         } else {
             const top = stack.pop()
             let match = false;
 
             switch (c) {
                 case ")":
                     match = top === "(";
                     break;
                 case "}":
                         match = top === "{";
                     break;
                 case "]":
                         match = top === "[";
                     break;
             }
 
             if (!match) {
                 return false;
             }
         }
     }
 
     return stack.length === 0;
 };