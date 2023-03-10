//CODE RHIABI

var buttons = document.querySelectorAll(".drum");


/*
document.addEventListener("click", (event) => {
    console.log(event);
});
*/

//Detecting button press

//adding to a specific element (button)
for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", function () {
            
            console.log(this.innerHTML);
            //console.log(event);
            makeSound(this.innerHTML);
            buttonAnimation(this.innerHTML);

    })
}

//Detecting keyboard press

//adding to the entier document
document.addEventListener("keydown", function (event) { 

            console.log(event.key);
            makeSound(event.key);
            buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":

            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":

            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            break;
    }

}



function buttonAnimation(activeKey){
    var activeButton = document.querySelector("."+activeKey); //.w .a .s | activeKey = w - a - s
    

    buttons.forEach(e => {
        if(e.innerHTML === activeKey) {
            activeButton.classList.add("pressed");

            setTimeout(()=>{ 
                activeButton.classList.remove("pressed");
            },100);

        }
    });
}

/*
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        //gi me the identity of the object that got clicked
        console.log(this); //ktrj3 object kaml <button class="w drum">w</button>

        //this.textContent or this.innerHTML

        switch (this.textContent) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
                
            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":

                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":

                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            default:
                console.log(this.textContent);
        }

        //this.style.color = "white"; 
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
    });
}

document.addEventListener("keydown", function (event) {
        
    console.log(this);

        switch (event.key) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
                
            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":

                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":

                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            default:
                console.log(event.key);
        }

    });
*/
