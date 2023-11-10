let w = document.querySelector('.w');         //Añadimos a una variable la clase W del HTML
let tom1 = new Audio('./sounds/tom-1.mp3');   //Añadimos a la variable el audio con el elemento reservado

if (w) {                                      // Creamos el condicional para que haga una acción cada vez de pulsemos W

  w.addEventListener('click', () => {         // Añadimos un evento 'CLICK' (Al pulsar el ratón) a W 
    console.log('click');
    w.style.color = 'white';                  //Le damos un estilo cada vez que hagamos 'CLICK por que estamos dentro del evento
    tom1.play();                              //Usamos .play() elemento reservada de JS para reproducir y delante la variable donde tenemos guardado el audio
    setTimeout(() => {                        //Añadimos una función para que le de un delay al evento anterior y lo devuelva al estado anterior
      w.style.color = '#DA0463';
    }, 500);
  });
  
  document.addEventListener('keydown', (event) => {     //Añadiimos un evento'keydown' para cada pulso de tecla en el teclado
    console.log(event); 
    if (event.key == 'w') {                             //Añadimos un condicional para que cada vez que pulsemos la tecla haga una acción
      w.style.color = 'white';                          //Cambiamos color
      tom1.play();                                      //iniciamos la variable de sonido con su elemento reservado
      setTimeout(() => {
        w.style.color = '#DA0463';
      }, 500);
    }
  })
} 

const drumsElements = [
  {
    drum: document.querySelector(".a"),
    sound: new Audio("./sounds/tom-2.mp3"),
  },
  {
    drum: document.querySelector(".s"),
    sound: new Audio("./sounds/tom-3.mp3"),
  },
  {
    drum: document.querySelector(".d"),
    sound: new Audio("./sounds/tom-4.mp3"),
},
  { 
    drum: document.querySelector(".j"), sound: new Audio("./sounds/kick.mp3") 
  },
  { 
    drum: document.querySelector(".k"), sound: new Audio("./sounds/crash.mp3") 
  },
  {
    drum: document.querySelector(".l"), sound: new Audio("./sounds/snare.mp3")
  }

];

drumsElements.forEach((element) => {
  element.drum.addEventListener("click", () => {
    element.drum.style.color = "white";
    element.sound.play();
    setTimeout(() => {
      element.drum.style.color = "#DA0463";
    }, 500);
  });
  //console.log(element)

  
});
document.addEventListener("keydown", (event) => {
  let element = document.querySelector(`.${event.key}`)
  //console.log(element)
  if (event.key == element.classList [0]) {     
    drumsElements.forEach((item) =>{
        console.log(item.drum.classList)
        if(item.drum.classList[0] == event.key){
          item.sound.play();
        }
      
    })                        
    element.style.color = 'white';                                                      
    setTimeout(() => {
      element.style.color = '#DA0463';
    }, 500);
  }
});