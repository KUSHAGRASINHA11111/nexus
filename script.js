let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey") ||message.includes("hii")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("what can you do for me") || message.includes("what things you can do nexus"){
        speak("I can assist with a wide range of tasks like browsing, searching apps and many more")
    }
    else if(message.includes("who are you")){
        speak("i am Nexus ,created by Kushagra Sinha your own virtual assitant")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open Chatgpt")){
        speak("opening chatgpt...")
        window.open("https://chatgpt.com/","_blank")
    }
    else if(message.includes("open Gemini")){
        speak("opening gemini...")
        window.open("https://gemini.google.com/app?hl=en-IN","_blank")
    }
    else if(message.includes("open cuims")){
        speak("opening cuims...")
        window.open("https://uims.cuchd.in/","_blank")
    }
    else if(message.includes("open github")){
        speak("opening github...")
        window.open("https://github.com/","_blank")
    }
    else if(message.includes("open Leetcode")){
        speak("opening google...")
        window.open("https://leetcode.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        android.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        android.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("Nexus","") || message.replace("Nexus","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Nexus","")}`,"_blank")
    }
}
