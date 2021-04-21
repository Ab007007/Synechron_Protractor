const resto = new Map();

resto.set('name' , 'My Restorent')
resto.set('address' , 'MG-Road, Bangalore, Karnataka-India')
resto.set(1, 'Number one Rank');
resto
.set('categories', ['Indian' , 'Chines', 'Maxican'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are Open')
.set(false, 'We are closed!')


console.log(resto.get('name'));
console.log(...resto);
const time = 12
console.log(resto.get(time>=resto.get('open') && time <= resto.get('close')));


