const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const buttons = document.querySelectorAll("button");

for(button of buttons){
    button.addEventListener("click",display);
}
console.log(document.querySelector("#keypad").getAttribute("class"));
function display(){
    let id = this.getAttribute("id");
    let symbolFirst = document.querySelector("#keypad").getAttribute("class");;
    let symbolRegex = /\+|÷|\*|\-/g;
    
   
    if(id == "equals"){
        if(symbolFirst == "symbolFirst"){
            return;
            }
        h2.classList.toggle("visible");
        h2.classList.toggle("invisible");
        h1.textContent = calculate(h2.textContent);
        
         document.querySelector("#keypad").classList.add("numberFirst")
        return;
    }
    else if(symbolRegex.test(id)){
        if(symbolFirst == "symbolFirst"){
        return;
        }
        document.querySelector("#keypad").classList.add("symbolFirst");
        document.querySelector("#keypad").classList.remove("numberFirst")
        h2.classList.remove("invisible");
        h2.classList.add("visible");
        h2.textContent+= id;
        return
    }
    else if(id == "C"){
        h1.textContent = "";
        h2.textContent = "";
        document.querySelector("#keypad").classList.add("symbolFirst");
        document.querySelector("#keypad").classList.remove("numberFirst")
        return;
    }
    else if(symbolFirst == "numberFirst"){
        return;
    }

        h2.classList.remove("invisible");
        h2.classList.add("visible");
        h2.textContent+= id;
        document.querySelector("#keypad").classList.remove("symbolFirst");
    
}

function calculate(solution){
    

    let regex = /\d+/g;
    let symbolRegex = /\+|÷|\*|\-/g;
    let numbers=solution.match(regex);
    console.log(numbers);
    let symbols = solution.match(symbolRegex);
    let returner = Number(numbers[0]);
    
   
    for(let i = 0; i <symbols.length; i++){
        let numberOne = Number(numbers[i + 1]);
        let symbol = symbols[i];
        
        switch(symbol){
            case("*"): 
                    returner *= numberOne
                    break;
                case("+"):
                    returner += numberOne;
                    break;
                case("-"):
                    returner -= numberOne;
                    break;
                case("÷"):
                    returner /= numberOne;
                    break;
        }
        
    }
   
    solution = returner.toString();
    const cleaner = /\d+.{0,3}/g;
    solution = solution.match(cleaner)[0];
    return solution;

    
}

