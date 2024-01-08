window.onload = () => {
    const casillas = document.querySelectorAll('.casilla');
    let jugador = document.getElementById('jugador-text');
    const casilla1 = document.getElementById('casilla1')
    const casilla2 = document.getElementById('casilla2')
    const casilla3 = document.getElementById('casilla3')
    const casilla4 = document.getElementById('casilla4')
    const casilla5 = document.getElementById('casilla5')
    const casilla6 = document.getElementById('casilla6')
    const casilla7 = document.getElementById('casilla7')
    const casilla8 = document.getElementById('casilla8')
    const casilla9 = document.getElementById('casilla9')
    const btn = document.getElementById('nuevo-juego')

    
    casillas.forEach((casilla) => {
        casilla.addEventListener('click', () => {
            const colocarFicha = () => {
                if(jugador.getAttribute('value') == '1' && casilla.innerText == ''){
                    casilla.textContent = 'X'; 
                    casilla.style.color = 'skyblue'
                    jugador.setAttribute('value', '2'); 
                    jugador.textContent = 'Jugador 2'; 
                } else if(jugador.getAttribute('value') == '2' && casilla.innerText == ''){
                    casilla.textContent = 'O'; 
                    casilla.style.color = 'purple'
                    jugador.setAttribute('value', '1'); 
                    jugador.textContent = 'Jugador 1'; 
                } else if(jugador.getAttribute('value') == '2' && casilla.innerText == 'X'){
                    casilla.textContent = 'O'; 
                    casilla.style.color = 'purple'
                    jugador.setAttribute('value', '1'); 
                    jugador.textContent = 'Jugador 1'; 
                } else if(jugador.getAttribute('value') == '1' && casilla.innerText == 'O'){
                    casilla.textContent = 'X'; 
                    casilla.style.color = 'skyblue'
                    jugador.setAttribute('value', '2'); 
                    jugador.textContent = 'Jugador 2'; 
                }
            };

            const comprobar = () => {
                if (casilla1.innerText == 'X' && casilla2.innerText == 'X' && casilla3.innerText == 'X'){jugador.textContent = 'Ganador jugador 1'}
                else if (casilla4.innerText == 'X' && casilla5.innerText == 'X' && casilla6.innerText == 'X'){jugador.textContent = 'Ganador jugador 1'}
                else if (casilla7.innerText == 'X' && casilla8.innerText == 'X' && casilla9.innerText == 'X'){jugador.textContent = 'Ganador jugador 1'}
                else if (casilla1.innerText == 'X' && casilla5.innerText == 'X' && casilla9.innerText == 'X'){jugador.textContent = 'Ganador jugador 1'}
                else if (casilla3.innerText == 'X' && casilla5.innerText == 'X' && casilla7.innerText == 'X'){jugador.textContent = 'Ganador jugador 1'}
                else if (casilla1.innerText == 'X' && casilla4.innerText == 'X' && casilla7.innerText == 'X'){jugador.textContent = 'Ganador jugador 1'}
                else if (casilla2.innerText == 'X' && casilla5.innerText == 'X' && casilla8.innerText == 'X'){jugador.textContent = 'Ganador jugador 1'}
                else if (casilla3.innerText == 'X' && casilla6.innerText == 'X' && casilla9.innerText == 'X'){jugador.textContent = 'Ganador jugador 1'}

                else if (casilla1.innerText == 'O' && casilla2.innerText == 'O' && casilla3.innerText == 'O'){jugador.textContent = 'Ganador jugador 2'}
                else if (casilla4.innerText == 'O' && casilla5.innerText == 'O' && casilla6.innerText == 'O'){jugador.textContent = 'Ganador jugador 2'}
                else if (casilla7.innerText == 'O' && casilla8.innerText == 'O' && casilla9.innerText == 'O'){jugador.textContent = 'Ganador jugador 2'}
                else if (casilla1.innerText == 'O' && casilla5.innerText == 'O' && casilla9.innerText == 'O'){jugador.textContent = 'Ganador jugador 2'}
                else if (casilla3.innerText == 'O' && casilla5.innerText == 'O' && casilla7.innerText == 'O'){jugador.textContent = 'Ganador jugador 2'}
                else if (casilla1.innerText == 'O' && casilla4.innerText == 'O' && casilla7.innerText == 'O'){jugador.textContent = 'Ganador jugador 2'}
                else if (casilla2.innerText == 'O' && casilla5.innerText == 'O' && casilla8.innerText == 'O'){jugador.textContent = 'Ganador jugador 2'}
                else if (casilla3.innerText == 'O' && casilla6.innerText == 'O' && casilla9.innerText == 'O'){jugador.textContent = 'Ganador jugador 2'}
            }

            const estiloGanador = () => {
                if (jugador.textContent == 'Ganador jugador 1')
                {
                    jugador.style.backgroundColor = 'skyblue'
                    jugador.style.border = '2px solid orange'
                    jugador.style.padding = '5px'
                }
                else if (jugador.textContent == 'Ganador jugador 2'){
                    jugador.style.backgroundColor = 'purple'
                    jugador.style.border = '2px solid orange'
                    jugador.style.padding = '5px'
                }
            }

            const nuevoJuego = () => {
                casilla.innerText = ''
                jugador.textContent = 'Jugador 1'
                jugador.setAttribute('value', '1')
                jugador.style.backgroundColor = 'transparent'
                jugador.style.textTransform = 'capitalize'
                jugador.style.border = 'none'
                jugador.style.padding = '0px'
            }

            btn.addEventListener('click', nuevoJuego)

            colocarFicha();
            comprobar();
            estiloGanador();
        });
    });
};




    
    


