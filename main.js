// Your JavaScript code goes here.

 function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 
 function map(coll, f) { 
       var acc = [];
      if(!Array.isArray(coll)){
      	acc={};
  }
       each(coll, function(element, key) { 
         acc[key] = f(element, key); 
       }); 
       return acc; 
 }


 function eachHtml(array,callback){
 	return map(array,function(element){
 		console.log(callback(element))
 	})
 }
 function callback(element){
  return 'Hello World '+ element
 }
  function eachHtml(array,callback){
  return map(array,function(element){
    console.log(callback(element))
  })
 }