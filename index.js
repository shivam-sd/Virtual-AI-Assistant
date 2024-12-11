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
    }else if(command.includes("open the whatsapp") || command.includes("WhatsApp kholo") || command.includes("whatsapp") || command.includes("kholo WhatsApp kholo")){
        speakFunc("oppening the whatsapp..")
        window.open("whatsapp://")
    }else if(command.includes("open the linkdin") || command.includes("linkedin kholo") || command.includes("linkedin") || command.includes("kholo WhatsApp kholo")){
        speakFunc("oppening the linkedin..")
        window.open("linkedin://")
    }else if(command.includes("shivam kon hai") || command.includes("shivam") || command.includes("who is shivam") || command.includes("who is this shivam")){
        speakFunc("ha mai Shivam sar ko janti hu unhone mujhe banaya hai..");
    }else if(command.includes("prakash kaun hai") || command.includes("who is prakash") || command.includes("who is this prakash")){
        speakFunc("prakash shivam ji ke dost hai");
    }else if(command.includes("aavesh kaun hai") || command.includes("who is aavesh") || command.includes("who is this aavesh")){
        speakFunc("avesh lawandiya baaz hai");
    }else if(command.includes("anuj kaun hai") || command.includes("who is anuj") || command.includes("who is this anuj")){
        speakFunc("anuj ke baare mai janti hu");
        speakFunc("bholaaa bhalaaaa tha mai ... shidhaaa sadhaaa tha mai");
    }else if(command.includes("prashant kaun hai") || command.includes("who is prashant") || command.includes("who is this prashant")){
        speakFunc("yah wahi ladka hai jo din bhar chilllata rhata hai...");
    }else if(command.includes("lucky kaun hai") || command.includes("who is lucky") || command.includes("who is this lucky") || command.includes("laki kaun hai")){
        speakFunc("lucky boby ka bhai hai");
    }else if(command.includes("boby kaun hai") || command.includes("who is boby") || command.includes("who is this boby") || command.includes("boby kaun hai")){
        speakFunc("boby lucky ka bhai hai");
    }else if(command.includes("ratnakar kaun hai") || command.includes("who is ratnakar") || command.includes("who is this ratnakar") || command.includes("ratnakar kaun hai")){
        speakFunc("ye wahi ladka hai jisko saadi mai baar baar latring lag jaati hai");
    }else if(command.includes("hamara makan malik kaisa hai") || command.includes("who is makan malik") || command.includes("who is this makan malik") || command.includes("laki kaun hai") || command.includes("makan malik kaun hai") || command.includes("makan malik")){
        speakFunc("arey mai tumhare makan malik ko janti hu wah bahut bada wala hai .. aage aap samajh jaao.");
    }else if(command.includes("open the chat gpt") || command.includes("chat gpt") || command.includes("gpt") || command.includes("chat gpt") || command.includes("chat gpt kholo")){
        speakFunc("oppeming the chat gpt..");
        window.open("https://chatgpt.com/");
    }else if(command.includes("tum apne boyfriend ke baare mai batao") || command.includes("boyfriend") || command.includes("tell me about your boyfriend")){
        speakFunc("mai nahi bataungi mujhe sarram aati hai");
    }
    else{
        speakFunc(`this is, what i found on internet regarding ${command}`)
        window.open(`https://google.com/search?q=${command}`);
    }
}

