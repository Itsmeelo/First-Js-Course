/* <\ css generator />

   მოცემულია ჰტმლ ფაილი თავისი მარქაფით, დავალება მდგომარეობს შემდეგში
   უნდა დაიჭიროთ ყველა ინპუტი და შესაბამისად შეუცვალთ სტილი მთავარ კვადრატს,
   ასევე როცა რადიუსებს შეუცვლით გვერდითა სპანში უნდა გამოუტანოთ რეზულტატი.
*/



let main = document.querySelector('.main-box');

main.style.backgroundColor = "red";

main.style.borderRadius = "20px";

let span = document.querySelectorAll('span');


let shadow = document.querySelector('.shadow');


shadow.style.background = 'red';

shadow.style.borderRadius = "10px";

let input = document.querySelectorAll('input');
let btn = document.querySelectorAll('button');

btn[0].addEventListener('click', function () {
   let color = input[0];
   main.style.backgroundColor = color.value;

});

btn[1].addEventListener('click', function () {
   let color2 = input[9];
   shadow.style.backgroundColor = color2.value;
})


function change_BRadius() {
   let val1 = input[1].value;
   main.style['border-top-left-radius'] = val1 + "%";

   span[0].innerHTML = val1;
}

function change_BRadius2() {
   let val2 = input[2].value;
   main.style['border-top-right-radius'] = val2 + "%";

   span[1].innerHTML = val2;
}

function change_BRadius3() {
   let val3 = input[3].value;
   main.style['border-bottom-left-radius'] = `${val3}%`;

   span[2].innerHTML = val3;
}

function change_BRadius4() {
   let val4 = input[4].value;
   main.style['border-bottom-right-radius'] = val4 + "%";

   span[3].innerHTML = val4;
}

console.log(input);

console.log(span);