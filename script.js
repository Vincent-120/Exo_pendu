let secretWord =["b","o","n","j","o","u","r"];
let word =["_","_","_","_","_","_","_"];
let none =[]
let echecs = 0; 

const guessLetter =() => {
  let user = prompt('indiquer une lettre');
  let test = /[a-z]/.test(user); //vérifier que une seule lettre 
  if (test==true) { //bonne lettre entrée 
    none.push(user); 
    if(secretWord.includes(user)){
      //ajouter aux lettres entrees 
      //gérer affichage 
      for(let i = 0, c = secretWord.length; i < c; i++){
        if(secretWord[i]==user) {
          word[i]=user;
          document.getElementById("good").innerHTML = word ;
        }
    }
  }else{
    document.getElementById('bad').innerHTML =+ user;
  }

  if (secretWord.includes(word)) {
    alert ('you win')
  }
  }
  guessLetter()
}
guessLetter()