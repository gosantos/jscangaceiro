var formFields = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")     
]

var contentTable = document.querySelector("table tbody")

document.querySelector(".form").addEventListener('submit', function(event) {
    event.preventDefault()
    var row = document.createElement("tr")
    
    formFields.forEach(function (field) {
        var data = document.createElement("td")
        data.textContent = field.value
        row.appendChild(data)
    })
    
    var volume = document.createElement("td")
    volume.textContent = formFields[1].value * formFields[2].value
    row.appendChild(volume)

    contentTable.appendChild(row)

    formFields[0].value = ''
    formFields[1].value = '1'
    formFields[2].value = '0'

    formFields[0].focus()
})

