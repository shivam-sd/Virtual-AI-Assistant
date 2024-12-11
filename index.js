const box = document.querySelector(".box");
const btn = document.querySelector("button");


const speakFunc = (input) => {
    const speakInput = new SpeechSynthesisUtterance(input);
    // speakInput.rate = 1
    // speakInput.pitch = 10
    //    speakInput.volume = 10
    // speakInput.voice = "female"
        speakInput.lang = 'hi-GB'
    window.speechSynthesis.speak(speakInput);
}
window.onload = () => {
    // speakFunc("Hello Shivam kaise ho");
    greetingFunc();
}

const greetingFunc = () => {
    const date = new Date();
    const hours = date.getHours();
    console.log(hours);
    if(hours>=0 && hours<12){
        speakFunc("Good Morning Sir . How Can i help you");
    }else if(hours > 12 && hours <=16){
        speakFunc("Good Afternoon Sir . How Can i help you.");
    }else{
        speakFunc("Good Evening Sir . How Can I help You.")
    }
}

const startVoiceinput = () => {
    if('webkitSpeechRecognition' in window){
        var voiceinput = new webkitSpeechRecognition();
    }else{
        alert("Your Browser Does Not Support Voice Input"); 
    }
    voiceinput.lang = "en-US";
    voiceinput.onresult = (e) => {
        // console.log(e.results[0][0].transcript);
        const spokenText = e.results[0][0].transcript;
        console.log( e.results[0][0].transcript)
        handleAllVoiceCmmands(spokenText.toLowerCase());
        btn.classList.remove("btn-box");
        btn.innerHTML = ` <i class="fa-solid fa-microphone-lines-slash"></i>`;
    }
    voiceinput.start();
}

btn.onclick = () => {
    startVoiceinput();
    btn.classList.add("btn-box");
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
}

const handleAllVoiceCmmands = (command) => {
    if(command.includes("hello")){
        speakFunc("Hello Sir . How can i help you.");
    }
    else if(command.includes("hii") || command.includes("hy")){
        speakFunc("HII Sir . How can i help you.");
    }
    else if(command.includes("hey") || command.includes("hay")){
        speakFunc("Hey Sir . How can i help you.");
    }
    else if(command.includes("who are you") || command.includes("who") || command.includes("who are developed you") || command.includes("develop") || command.includes("developed") || command.includes("tum con ho") || command.includes("hu r u")){
        speakFunc(`I am virtual assistant , developed by shivam mauryaa`);
    }
    else if(command.includes("open the shivam the fun vlogs youtube channel") || command.includes("open the fun vlogs channel") || command.includes("channel") || command.includes("youtue channel") || command.includes("shivam the fun vlogs") || command.includes("open shivam the fun vlogs") || command.includes("Shivam defence blogs") || command.includes("Shivam the fun blocks") || command.includes("Shivam Di fan block YouTube channel") || command.includes("shivam the fun vlogs youtube channel") || command.includes("Shivam Di fan blocks")){
        speakFunc("oppening shivam the fun vlogs youtube channel");
        window.open("https://www.youtube.com/@ShivamTheFunVlogs");
    }
    else if(command.includes("youtube") || command.includes("open the youtube") || command.includes("YouTube")){
        speakFunc("oppening the youtube....");
        window.open("https://youtube.com")
    }
    else if(command.includes("website") || command.includes("shivam ki website") || command.includes("portfolio") || command.includes("shivam ka portfolio") || command.includes("shivam ki portfolio") || command.includes("website open karo") || command.includes("open the shivam portfolio") || command.includes("open shivam portfolio")){
        speakFunc("oppening the shivam portfolio...");
        speakFunc("wow your portfolio is looking good and also you");
        window.open("https://shivambca.netlify.app");
    }if(command.includes("google") || command.includes("open the google") || command.includes("google kholo") || command.includes("open D Google")){
        speakFunc("oppening the google... for you");
        window.open("https://google.com");
    }else if(command.includes("kya tum mujhe janti ho") || command.includes("kya tum mujhe jante ho") || command.includes("you know me")){
        speakFunc("chal be nikal.... hahahaahahaaha")
    }
    else if(command.includes("where are you from") || command.includes("where r u from") || command.includes("tum kha se ho") || command.includes("tumhe kon banaya hai") || command.includes("tumhe con banaya hai") || command.includes("tum kaun ho")){
        speakFunc("mai ai machine hu.. mai aap logo ke computer aur laptop ke andar rahti hu.. mujhe aap logo ke sahayata ke liye banaya gya hai.. mujhe coding ke se banaya gya hai shivam ke dwara");
    }
    else if(command.includes("tell me time") || command.includes("time batao") || command.includes("current time batao") || command.includes("time")){
        let time = new Date().toLocaleString(undefined , {hour:'numeric' , minute:"numeric"});
        speakFunc(time);
    }
    else if(command.includes("tell me date") || command.includes("date") || command.includes("current date batao")){
        let date = new Date().toLocaleString(undefined , {day:"numeric" , month:"long" , year:"numeric"})
        speakFunc(date)
    }
    else if(command.includes("open the calculator") || command.includes("open calculator") || command.includes("calculator")){
        speakFunc("oppening the calculator....");
        window.open("calculator://")
    }
    else if(command.includes("open the vs code") || command.includes("vs code kholo") || command.includes("vs code")){
        speakFunc("oppening the vs code..")
        window.open("vscode://")
    }
    else{
        speakFunc(`this is, what i found on internet regarding ${command}`)
        window.open(`https://google.com/search?q=${command}`);
    }
}

