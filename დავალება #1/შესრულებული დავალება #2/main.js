/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
    1) კომენტარები
    2) ცვლადები
    3) მონაცემთა ტიპები
    4) ოპერატორები და არითმეტიკა
 */



// 1 კომენტარები

/*
    კომენტარები გაფუჭდა თქვენი დავალებაა
    არასწორად დაწერილი კომენტარი ჩაასწოროთ
    და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად
*/



// 2 ცვლადები

/*
    მსურს ჩემი Spotify ლისტის განახლება 
    ამაში კი თქვენი დახმარება მჭირდება
    აღწერეთ თქვენი საყვარელი მომღერლის
    (სახელი, გვარი, ასაკი, დაბადების წელი, დაბადების ადგილი,)
    გაითვალისწინეთ რომ ამისთვის უნდა
    გამოიყენოთ მხოლოდ (const, let)
    (ნებისმიერი პიროვნების ჩაწერა შეგიძლიათ)
*/

//კოდი დაწერეთ აქ

const name = "Jared";
const surname = "Leto";
let ageOfSigner = 51;
const birthDate = 1971;
const birthdayLocation = "USA";


/*
  დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  რომელსაც გამოვიყენებთ მომავალში.

  წიგნების მაღაზიის მაგალითი:

  const BookName = "ვეფხისტყაოსანი";
  const AuthrName = "შოთა რუსთაველი";
  const CreateDate = "13 საუკუნე";
  let ProductQuant = 124;
*/


//კოდი დაწერეთ აქ
const shuger = "3 kg";
const fish = "2 kg";
const walnut = "3 kg";
const milk = "1 bottle"
const butter = "200 gr"
let ProductQuant = 5; 




// 3 მონაცემთა ტიპები

/*
აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
დროს გაასწოროთ შეცდომა;
const age = "1";
const hisName = ["bob"];
const isHigh = "true";
const dateOfBirth = "1995";*/

const age = 1;
const hisName = "Bob";
let isHight = true;
const dateOfBirth = 1995;


/*ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

თქვენი მიზანია დააბრუნოთ პირველი 4 frue*/

console.log(typeof age === "number");
console.log(typeof hisName === "string");
console.log(typeof isHight === "boolean");
console.log(typeof dateOfBirth === "number")



/*აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი

  მაგ: console.log(typeof age)*/

 console.log(typeof shuger);
 console.log(typeof fish);
 console.log(typeof walnut);
 console.log(typeof milk);
 console.log(typeof butter);
 console.log(typeof ProductQuant);

  //ოპერატორები არითმეტიკა

  let num = 5;

  /*გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

  კოდი დაწერეთ აქ*/

  num = 10;
  let num2 = 15;

  num = num + num2; 
  num = num * num2; 


  console.log(num)



  /*სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
  მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

  კოდი დაწერეთ აქ*/
  let type1 = num + hisName;

  let type2 = butter + ProductQuant;

  let type3 = isHight + ProductQuant;

  let type4 = isHight + hisName;

  console.log(typeof type1);
  console.log(typeof type2);
  console.log(typeof type3);
  console.log(typeof type3);
