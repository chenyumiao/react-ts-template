var xss = {
  xssAttackPrevention(str:string,reg:any){
    return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g, function (a, b) {
        if(b){
          return a;
        }else{
          return {
            '<':'&lt;',
            '&':'&amp;',
            '"':'&quot;',
            '>':'&gt;',
            "'":'&#39;',
          }[a]
        }
      }) : '';
  },
  traversalObject(obj:any){
    if(typeof obj === "object"){
      for (var a in obj) {
        if (typeof obj[a] === "object") {
          this.traversalObject(obj[a]); //递归遍历
        }else if(typeof obj[a] === 'string'){
          obj[a] = this.xssAttackPrevention(obj[a],'');
        }
      }
    }
  },
};

export default xss;

