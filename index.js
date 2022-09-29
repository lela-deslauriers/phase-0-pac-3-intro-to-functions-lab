function shout(string) {
    return string.toUpperCase();// todo
  }

function whisper(string) {
    return string.toLowerCase();// todo
  }

function logShout(string) {
    console.log(string.toUpperCase())
  }
  
logShout("hello");

function logWhisper(string) {
    console.log(string.toLowerCase())
  }
  
logWhisper("hello");

function sayHiToHeadphonedRoommate(string) {
    let whisperHi = "I can't hear you!"
    let shoutHi = "YES INDEED!"
    let dinnerHi = "I would love to!"
   
    if (string === string.toLowerCase()) {
      return whisperHi;
    } else if (string === string.toUpperCase()) {
          return shoutHi; 
     }else if (string === "Let's have dinner together!") {
            return dinnerHi;
            }
}  
    
  

