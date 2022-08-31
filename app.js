function create_input_button_and_area(div_id){
    // Div
    const div_to_inputs = document.querySelector(`#${div_id}`); // as HTMLDivElement
    const div = document.createElement('DIV')
    // Text input
    const text_input = document.createElement('INPUT');
    text_input.setAttribute('type', 'text');
    // Button
    const button_input = document.createElement('INPUT');
    button_input.setAttribute('type', 'button');
    button_input.setAttribute('value', 'Adicionar item');
    // Add inputs to div
    div.appendChild(text_input);
    div.appendChild(button_input);
    div_to_inputs.appendChild(div);
};

function main(){
    create_input_button_and_area('div-lista-compras-input')
    create_input_button_and_area('div-lista-produtos-limpeza-input');
};