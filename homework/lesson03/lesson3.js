
//region GlobalVariable
const PlayerOne = 1;
const PlayerTow = 2;
const NoWinner = 0;
const GameArray = ["Sang","Kaghaz","Gheychi"];
//endregion
//region Functions

function Result(ChooseOne,ChooseTow){
    try{
        let Winer;
        switch (ChooseOne) {
            case "Sang" :
                if (ChooseTow === "Kaghaz") Winer = PlayerTow;
                else if (ChooseTow === "Gheychi") Winer = PlayerOne;
                else Winer = NoWinner;
                break;
            case "Kaghaz" :
                if (ChooseTow === "Gheychi") Winer = PlayerTow;
                else if (ChooseTow === "Sang") Winer = PlayerOne;
                else Winer = NoWinner;
                break;
            case "Gheychi" :
                if (ChooseTow === "Sang") Winer = PlayerTow;
                else if (ChooseTow === "Kaghaz") Winer = PlayerOne;
                else Winer = NoWinner;
        }
        if (Winer == 1) return " بازیکن اول ";
        if (Winer == 2) return " بازیکن دوم ";
        return " ندارد ";
    }
    catch (e) {
        console.log("خطایی رخ داده است.لطفا مجدد تلاش کنید و درصورت رفع نشدن خطا به پشتیبانی سیستم اطلاع دهید")
    }
};
function Choose(){
    let RandNumber = Math.floor(Math.random() * 3) ;
    return GameArray[RandNumber];
}

//endregion

let ChooseOne = Choose();
let ChooseTow = Choose();
let Res = Result(ChooseOne, ChooseTow);
let ResInfo

console.log("بازیکن اول = " + String(ChooseOne) + "\n بازیکن دوم =" + String(ChooseTow) + "\n برنده = " +  String(Res));

