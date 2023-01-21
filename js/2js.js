const a ='50px';
const b = Number.parseInt(a);
console.log(a);
console.log(Number.parseInt(a));
const x ='50.27px';
const y = Number.parseFloat(x);
console.log(x);
console.log(y);
const c = 232.232;
const d = c.toFixed(2);
const e = Number(d);
console.log(d);
console.log(e);

const firstName = 'Mango';
const lastName = 'Lee';
const room = 716;
const type = 'VIP';
const userData = "Гість " +firstName+" "+lastName+" поселяється в " +room+" номер "+type;
console.log(userData)
// «Гість x y поселяється в g номер q»,