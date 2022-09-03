function create_input_button_and_area(div_inputs_id, div_itens_id){
    // Div
    const div_to_inputs = document.querySelector(`#${div_inputs_id}`) // as HTMLDivElement
    const div = document.createElement('DIV')
    const text_input_label = document.createElement('LABEL')

    // Text input
    const text_input = document.createElement('INPUT')
    text_input.setAttribute('type', 'text')
    text_input.setAttribute('id', `text-input-${div_inputs_id}`)

    // Button
    const button_input = document.createElement('BUTTON')
    button_input.innerHTML = 'Adicionar item'
    button_input.setAttribute('id', `btn-input-${div_inputs_id}`)

    // Text Input Label
    text_input_label.setAttribute('for', `btn-input-${div_inputs_id}`)

    // Button event
    button_input.setAttribute(
        'onclick', `button_click('${div_itens_id}', 'text-input-${div_inputs_id}')`
    )

    // Add inputs to div
    text_input_label.appendChild(text_input)
    div.appendChild(text_input_label)
    div.appendChild(button_input)
    div_to_inputs.appendChild(div)
}

function button_click(div_itens_id, text_input_id){
    const text_input = document.querySelector(`#${text_input_id}`)
    const text_input_value = text_input.value
    if (text_input_value != '') {
        add_item_to_list(div_itens_id, text_input_value)
        text_input.value = ''
    }
}

function add_item_to_list(div_list_id, item){
    // Label
    const label = document.createElement('LABEL')
    label.setAttribute('class', 'lista')
    label.setAttribute('for', item)
    label.innerHTML = item

    // Checkbox
    const checkbox = document.createElement('INPUT')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('name', 'lista-1')
    checkbox.setAttribute('id', item)

    // Br
    const br = document.createElement('BR')

    // Div
    const div = document.querySelector(`#${div_list_id}`)
    div.appendChild(label)
    div.appendChild(checkbox)
    div.appendChild(br)
}

function main(){
    create_input_button_and_area('div-lista-compras-input', 'lista-de-compras')
    create_input_button_and_area('div-lista-produtos-limpeza-input', 'lista-produtos-limpeza')
}

window.addEventListener('DOMContentLoaded', main, false)