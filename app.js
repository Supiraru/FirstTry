let NilaiUser = 0;
let NilaiComputer = 0;
const NilaiUserSpan = document.getElementById("user-score");
const NilaiComputerSpan = document.getElementById("computer-score");
const ScoreBoardDiv = document.querySelector(".score-board");
const HasilP = document.querySelector(".Hasil > p");
const BatuDiv = document.getElementById("B");
const KertasDiv = document.getElementById("K");
const GuntingDiv = document.getElementById("G");

function Computer(){
    const pilihan = ['B','K','G'];
    const RandomNumber = Math.floor(Math.random() * 3)
    return pilihan[RandomNumber];
}
function Convert(letter){
    if(letter === "G"){return "Gunting";}
    else if(letter === "K"){return "Kertas";}
    else if(letter === "B"){return "Batu";}
}

function Menang(User, Computer){
    const UserDiv = document.getElementById(User);
    NilaiUser++;
    NilaiUserSpan.innerHTML = NilaiUser;
    NilaiComputerSpan.innerHTML = NilaiComputer;
    HasilP.innerHTML = Convert(User) + "(Kamu) Ngalahin " + Convert(Computer) + "(Computer). KAMU MENANG! ASIQUE.";
    UserDiv.classList.add('green-glow');
    setTimeout(function(){UserDiv.classList.remove('green-glow')}, 1000);
}
function Kalah(User, Computer){
    const UserDiv = document.getElementById(User);
    NilaiComputer++;
    NilaiComputerSpan.innerHTML = NilaiComputer;
    NilaiUserSpan.innerHTML = NilaiUser;
    HasilP.innerHTML = Convert(Computer) + "(Computer) Ngalahin " + Convert(User) + "(Kamu). KAMU KALAH! JANGAN NANGIS GAN.";
    UserDiv.classList.add('red-glow');
    setTimeout(function(){UserDiv.classList.remove('red-glow')}, 1000);
}
function Seri(User, Computer){
    const UserDiv = document.getElementById(User);
     NilaiUserSpan.innerHTML = NilaiUser;
    NilaiComputerSpan.innerHTML = NilaiComputer;
    HasilP.innerHTML = Convert(User) + "(Kamu) Dan " + Convert(Computer) + "(Computer). HASILNYA SERI! ULANGINLAH.";
    UserDiv.classList.add('gray-glow');
    setTimeout(function(){UserDiv.classList.remove('gray-glow')}, 1000);
}

function game(PilihanUser){
    const PilihanComputer = Computer();
    switch(PilihanUser + PilihanComputer) {
        case "BG":
        case "KB":
        case "GK":
            Menang(PilihanUser, PilihanComputer);
            break;
        case "GB":
        case "BK":
        case "KG":
            Kalah(PilihanUser, PilihanComputer);
            break;
        case "BB":
        case "KK":
        case "GG":
            Seri(PilihanUser, PilihanComputer);
            break;
    }
}
function main(){
    BatuDiv.addEventListener('click', function(){
        game("B");
    })

    KertasDiv.addEventListener('click', function(){
        game("K");
    })

    GuntingDiv.addEventListener('click', function(){
        game("G");
    })
}

main();