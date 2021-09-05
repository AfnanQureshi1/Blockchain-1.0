const a = {firstName : "faisal" , lastName : "obaid" };


   let b={
   }
   for(let key in a)  // ok approach
   {
       b[key] = a[key];
   }

    b.firstName ="afnan";
    b.lastName = "qureshi";

  //  var b = Object.assign({},a); // good approach
  // https://stackoverflow.com/questions/52188120/how-to-break-javascript-object-reference

console.log(a.firstName);
