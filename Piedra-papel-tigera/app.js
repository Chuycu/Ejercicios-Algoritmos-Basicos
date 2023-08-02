// captura de elementos del DOM para las opciones piedra,papel,tijera
const botonPiedra = document.querySelector(".piedra");
const botonPapel = document.querySelector(".papel");
const botonTijera = document.querySelector(".tijera");

// captura de los elementos del DOM para el tablero de opciones
// usuario-pc
const manoUsuario = document.querySelector(".mano-usuario");
const manoCompu = document.querySelector(".mano-computadora");

// captura de los puntajes
const puntajeUsuario = document.querySelector(".puntajeUsuario");
const puntajeCompu = document.querySelector(".puntajeComputadora");


const labelResultado = document.querySelector(".resultado");
const botonReinicio = document.querySelector(".reinicio");

const tablero = document.querySelector(".tablero")

let eleccionUsuario = "";
let eleccionCompu = "";

let contUsuario = 0;
let contCompu = 0;

const swalInicio = () =>{
    Swal.fire(
        '¿Jugamos?',
        'Gana el primero que alcance los 3 puntos',
        'question'
    )
}
swalInicio();

async function reinicio(){
    await resultado();
    tablero.classList.remove("jugando");
}

function reiniciarJuego(){
    puntajeUsuario.textContent = 0;
    puntajeCompu.textContent = 0;   
    labelResultado.textContent="Seleccione una opcion";
    swalInicio();
}

function resultado (eleccionUsuario,eleccionCompu){
    if(contCompu>=  3 || contUsuario>= 3){
        let botonConfirmacion = 'Jugar Otra Vez';
        if(contCompu>=3 && contCompu > contUsuario) {
            
            let swalPerdedor= async ()=>{
                    let {isConfirmed}= await Swal.fire({
                    title: '!Perdiste¡',
                    icon:'error',
                    showCancelButton:true,
                    confirmButtonText: botonConfirmacion,
                    cancelButtonText: 'Ver Resultado', 
                }); 
                if(isConfirmed){
                    reiniciarJuego();
                }
            }
            swalPerdedor();
        }else if(contUsuario >=3  ){
            let swalGanador = async ()=>{
                 let {isConfirmed} = await Swal.fire({
                 title: '!Ganaste¡',
                 icon: 'success',
                 showCancelButton:true,
                 confirmButtonText: botonConfirmacion,
                 cancelButtonText: 'Jugar otra vez',   
                });
                if(isConfirmed){
                    reiniciarJuego();
                }
            }
            swalGanador();
        }
    }else{
        if((eleccionUsuario=="papel" && eleccionCompu=="papel")||(eleccionUsuario=="piedra" && eleccionCompu=="piedra")||(eleccionUsuario=="papel"&&eleccionCompu=="papel")){
            labelResultado.textContent="Empate";
        }
        if((eleccionUsuario =="papel" && eleccionCompu =="tijera") || (eleccionUsuario=="piedra" && eleccionCompu =="papel") || (eleccionUsuario=="tijera" && eleccionCompu=="piedra")){
            labelResultado.textContent="Perdiste";
            contCompu = contCompu +1;
            puntajeCompu.textContent = contCompu;  
        }
        if((eleccionUsuario =="papel" && eleccionCompu =="piedra") || (eleccionUsuario=="piedra" && eleccionCompu =="tijera") || (eleccionUsuario=="tijera" && eleccionCompu=="papel")){
            labelResultado.textContent="Ganaste";
            contUsuario = contUsuario +1;
            puntajeUsuario.textContent = contUsuario;
        }   
    }
    }


function eleccionComputador(){
    let numeroAleatorio=Math.floor(Math.random()*3);
    switch(numeroAleatorio){
        case 0:  
        eleccionCompu="piedra";
        manoCompu.src = "./assets/piedra_computadora.png";
        break;
        case 1:  
        eleccionCompu="papel";
        manoCompu.src = "./assets/papel_computadora.png";
        break;
        case 2: 
        eleccionCompu ="tijera";
        manoCompu.src = "./assets/tijera_computadora.png";
        break;
    }
    return eleccionCompu;
}

botonPiedra.addEventListener('click',()=>{
    eleccionUsuario = "piedra"
    manoUsuario.src = "./assets/piedra_user.png"
    tablero.classList.add("jugando")
    labelResultado.textContent = "..."
    setTimeout(()=>{
        eleccionUsuario="piedra"
        manoUsuario.src = "./assets/piedra_user.png"
        eleccionComputador(eleccionCompu);
        resultado(eleccionUsuario,eleccionCompu);
        tablero.classList.add("jugando")
        reinicio();
    },2000)
})

botonPapel.addEventListener('click',()=>{
    eleccionUsuario = "papel"
    manoUsuario.src = "./assets/papel_user.png"
    tablero.classList.add("jugando")
    labelResultado.textContent = "..."
    setTimeout(()=>{
        eleccionUsuario = "papel";
        manoUsuario.src = "./assets/papel_user.png"
        eleccionComputador(eleccionCompu);
        resultado(eleccionUsuario,eleccionCompu);
        tablero.classList.add("jugando")
        reinicio();
    },2000)
})

botonTijera.addEventListener('click',()=>{
    eleccionUsuario = "tijera"
    manoUsuario.src = "./assets/tijera_user.png"
    tablero.classList.add("jugando")
    labelResultado.textContent = "..."
    setTimeout(()=>{
        eleccionUsuario = "tijera";
        manoUsuario.src = "./assets/tijera_user.png"
        eleccionComputador(eleccionCompu);
        resultado(eleccionUsuario,eleccionCompu);
        tablero.classList.add("jugando");
        reinicio();
    },2000)
})

botonReinicio.addEventListener('click',()=>{
    reiniciarJuego();
    
})
