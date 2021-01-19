// Pega todos os elementos com a classe "ripple" e armazena em "buttons" (NodeList)
const buttons = document.querySelectorAll('.ripple')

// Para cada item dentro de buttons
buttons.forEach(button => {
  // Adiciona um ouvidor de evetos do tipo "clique" que executa uma função passando o evento (event)
  button.addEventListener('click', event => {
    // Pega as coordenadas X e Y do ponteiro do mouse reativo ao viewport do usuário
    const x = event.clientX
    const y = event.clientY
    
    // Retorna as coordenadas X e Y da parte superior (top) e esquerda (left) do elemento relativo ao viewport
    const buttonTop = event.target.offsetTop
    const buttonLeft = event.target.offsetLeft
    
    // Subitrai o valor em "x" - "buttonLeft" e armazena o resultado
    const xInside = x - buttonLeft
    // Subitrai o valor em "y" - "buttonTop" e armazena o resultado
    const yInside = y - buttonTop
    
    // Cria um elemento span
    const circle = document.createElement('span')
    // Adiciona ao elemento criado (circle) a classe "circle"
    circle.classList.add('circle')
    // Atribui os valores em "yInside" e "xInside" como valores de top e left
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
    
    // Adiciona o elemento no botão
    button.appendChild(circle)
    
    // Remove o elemento após 500ms (meio segundo)
    setTimeout(() => circle.remove(), 500)
  })
})

// clientX / clientY: São relativos ao canto superior esquerdo da parte visível da página, "visto" através da janela do navegador
// https://www.w3schools.com/jsref/event_clientx.asp

// offsetTop / offsetLeft:
// https://www.w3schools.com/jsref/prop_element_offsettop.asp