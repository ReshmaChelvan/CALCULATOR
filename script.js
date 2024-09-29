const gettingDiv =document.querySelector('#Container');
const creatingNewDiv =document.createElement("div");
creatingNewDiv.setAttribute("id","main")
gettingDiv.appendChild(creatingNewDiv)

const GettingDiv =document.querySelector("#main");
const NewInput =document.createElement("input")
NewInput.setAttribute("type","text");
NewInput.setAttribute("id","inputbox")
NewInput.setAttribute("placeholder","0")
GettingDiv.appendChild(NewInput)

const first =document.querySelector("#main")
const creatfirst=document.createElement("button")
creatfirst.setAttribute("id","button")
creatfirst.setAttribute("onclick","AllClear()")
creatfirst.innerText ="AC"
first.appendChild(creatfirst)

const Second =document.querySelector("#main")
const creatsecond=document.createElement("button")
creatsecond.setAttribute("id","button")
creatsecond.setAttribute("onclick","Dell()")
creatsecond.innerText ="Del"
Second.appendChild(creatsecond) 

const third =document.querySelector("#main")
const createthird=document.createElement("button")
createthird.setAttribute("onclick","Display('%')")
createthird.setAttribute("id","button")
createthird.innerText ="%"
third.appendChild(createthird) 


const fouring =document.querySelector("#main")
const createfour=document.createElement("button")
createfour.setAttribute("onclick","Display('/')")
createfour.setAttribute("id","button")
createfour.innerText ="/"
fouring.appendChild(createfour) 

const five =document.querySelector("#main")
const createfive=document.createElement("button")
createfive.setAttribute("onclick","Display('7')")
createfive.setAttribute("id","button")
createfive.innerText ="7"
five.appendChild(createfive) 


const six =document.querySelector("#main")
const createsix=document.createElement("button")
createsix.setAttribute("onclick","Display('8')")
createsix.setAttribute("id","button")
createsix.innerText ="8"
six.appendChild(createsix) 

const Seveen =document.querySelector("#main")
const createSeveen=document.createElement("button")
createSeveen.setAttribute("onclick","Display('9')")
createSeveen.setAttribute("id","button")
createSeveen.innerText ="9"
Seveen.appendChild(createSeveen)

const nine =document.querySelector("#main")
const createnine=document.createElement("button")
createnine.setAttribute("onclick","Display('*')")
createnine.setAttribute("id","button")
createnine.innerText ="*"
nine.appendChild(createnine) 


const eight =document.querySelector("#main")
const createeight=document.createElement("button")
createeight.setAttribute("onclick","Display('4')")
createeight.setAttribute("id","button")
createeight.innerText ="4"
eight.appendChild(createeight) 

const ten =document.querySelector("#main")
const createten=document.createElement("button")
createten.setAttribute("onclick","Display('5')")
createten.setAttribute("id","button")
createten.innerText ="5"
ten.appendChild(createten) 


const eleven =document.querySelector("#main")
const createeleven=document.createElement("button")
createeleven.setAttribute("onclick","Display('6')")
createeleven.setAttribute("id","button")
createeleven.innerText ="6"
eleven.appendChild(createeleven) 


const tweel =document.querySelector("#main")
const createtweel=document.createElement("button")
createtweel.setAttribute("onclick","Display('-')")
createtweel.setAttribute("id","button")
createtweel.innerText ="-"
tweel.appendChild(createtweel) 


const thirty =document.querySelector("#main")
const createthirty=document.createElement("button")
createthirty.setAttribute("onclick","Display('1')")
createthirty.setAttribute("id","button")
createthirty.innerText ="1"
thirty.appendChild(createthirty) 

const fourteen =document.querySelector("#main")
const createfourteen=document.createElement("button")
createfourteen.setAttribute("onclick","Display('2')")
createfourteen.setAttribute("id","button")
createfourteen.innerText ="2"
fourteen.appendChild(createfourteen) 

const fifteen =document.querySelector("#main")
const createfifteen=document.createElement("button")
createfifteen.setAttribute("onclick","Display('3')")
createfifteen.setAttribute("id","button")
createfifteen.innerText ="3"
fifteen.appendChild(createfifteen) 

const sixteen =document.querySelector("#main")
const createsixteen=document.createElement("button")
createsixteen.setAttribute("onclick","Display('+')")
createsixteen.setAttribute("id","button")
createsixteen.innerText ="+"
sixteen.appendChild(createsixteen) 

const seventeen =document.querySelector("#main")
const createseventeen=document.createElement("button")
createseventeen.setAttribute("onclick","Display('0')")
createseventeen.setAttribute("id","button")
createseventeen.innerText ="0"
seventeen.appendChild(createseventeen)


const Eightteen =document.querySelector("#main")
const createEightteen=document.createElement("button")
createEightteen.setAttribute("onclick","Display('.')")
createEightteen.setAttribute("id","button")
createEightteen.innerText ="."
Eightteen.appendChild(createEightteen)

const nineteen =document.querySelector("#main")
const createnineteen=document.createElement("button")
createnineteen.setAttribute("onclick","equal()")
createnineteen.setAttribute("id","button")
createnineteen.setAttribute("class","ing")
createnineteen.innerText = "="
nineteen.appendChild(createnineteen)


const StoreData = document.querySelector("#inputbox")

function Display(Number) {
     StoreData.value += Number
}
function AllClear() {
    StoreData.value = "";
}
function Dell() {
    StoreData.value = StoreData.value.slice(0,-1)
}
function equal() {
    try {
        StoreData.value = eval(StoreData.value)
    } catch (error) {
        alert("Check The Input ");
    }
}