import '../css/list.css'

class ListClass {

    private list_itens: string[] // Itens list to avoid duplicate itens
    private text_input_generic_name: string
    private btn_input_generic_name_generic_name: string

    constructor (){
        this.list_itens = []
        this.text_input_generic_name = 'text-input'
        this.btn_input_generic_name_generic_name = 'btn-input'
    }
    public create_input_button_and_area(div_inputs_id: string, div_itens_id: string){
        // Div
        const div_to_inputs = document.querySelector(`#${div_inputs_id}`) // as HTMLDivElement
        const div = document.createElement('DIV')
        const text_input_label = document.createElement('LABEL')

        // Text input
        const text_input = document.createElement('INPUT')
        text_input.setAttribute('type', 'text')
        text_input.setAttribute('id', `${this.text_input_generic_name}-${div_inputs_id}`)

        // Button
        const button_input = document.createElement('BUTTON')
        button_input.innerHTML = 'Adicionar item'
        button_input.setAttribute('id', `${this.btn_input_generic_name_generic_name}-${div_inputs_id}`)

        // Text Input Label
        text_input_label.setAttribute('for', `${this.btn_input_generic_name_generic_name}-${div_inputs_id}`)

        // Button event
        button_input.addEventListener(
            "click", () => { 
                this.button_click(div_itens_id, `${this.text_input_generic_name}-${div_inputs_id}`)
            }
        )

        // Add inputs to div
        text_input_label.appendChild(text_input)
        div.appendChild(text_input_label)
        div.appendChild(button_input)
        div_to_inputs.appendChild(div)
    }

    private button_click(div_itens_id: string, text_input_id: string){
        const text_input = document.querySelector(`#${text_input_id}`) as HTMLInputElement
        const text_input_value = text_input.value
        if (text_input_value != '') {
            this.add_item_to_list(div_itens_id, text_input_value)
            text_input.value = ''
        }
    }

    private delete_button_click(item: string){
        const div = document.querySelector(`#div-${item}`)
        div.remove()
        const item_pos = this.list_itens.indexOf(item)
        this.list_itens.splice(item_pos, 1)
    }

    private add_item_to_list(div_list_id: string, item: string){
        if (!(this.list_itens.indexOf(item) === -1)){ // Verify if item exists
            window.alert('Item já foi adicionado!')
            return false
        }
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

        // Delete button
        const delete_button = this.create_delete_item_button(item)

        // Div
        const div = document.createElement('DIV')
        div.setAttribute('id', `div-${item}`)
        div.appendChild(label)
        div.appendChild(checkbox)
        div.appendChild(delete_button)
        div.appendChild(br)

        // Div list
        const div_list = document.querySelector(`#${div_list_id}`)
        div_list.appendChild(div)
        this.list_itens.push(item)
        return true
    }

    private create_delete_item_button(div_item_id: string){
        const button = document.createElement('BUTTON')
        button.innerHTML = 'Remover item'
        button.addEventListener(
            'click', () => {
                this.delete_button_click(div_item_id)
            }
        )
        return button
    }

}

function main(){
    const list_class = new ListClass()
    list_class.create_input_button_and_area('div-lista-compras-input', 'lista-de-compras')
    list_class.create_input_button_and_area('div-lista-produtos-limpeza-input', 'lista-produtos-limpeza')
}

window.addEventListener('DOMContentLoaded', main, false)