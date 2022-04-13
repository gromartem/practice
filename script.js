//Условия
if (1) { 
    console.log("Great!");
}else {
    console.log("bad( ");
};
 num = 50;
 if( num < 10) {
     console.log('Error');
 } else if ( num >100 ){
 } else {
     console.log('ok!');
 }
 //тернарный
 let num = 10;
 (num === 50) ? console.log('Ok!') : console.log('Error');

 //Switch
 switch (num){
     case 49:
         console.log('no!');
         break;
         case 51:
            console.log('no!');
            break;
             case 50: 
             console.log("Right");
             break;
             default:
                 console.log('Not Today!')
                 break;
 }
//Циклы
//While
let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}
//do
let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

//for 
//do
let num = 50;

for (let i = 1; i <= 8; i++){
    console.log(num);
    num++;
}

for (let i =1;i < 10;i++){
    if (i === 6){
        break;//оператор позволяет прервать цикл до 6.
    }
    console.log(i);
}

for (let i =1;i < 10;i++){
    if (i === 6){
        continue;//оператор позволяет пропустить шаг но не прерывает цикл.
    }
    console.log(i);
}