const input = document.querySelector("input")
const nome = document.querySelector(".card-title")
const tel = document.querySelector(".card-text")



const contacts = [
    {name: "rodolfo", number: "(85) 94343-3434"},
    {name: "Paulo", number: "(12) 98541-2547"},
    {name: "Aline", number: "(89) 99854-4512"},
    {name: "Maria", number: "(87) 948745-1100"},
]


function search(){
    
    for(let i = 0; i<contacts.length; i++){

        if(input.value.toLowerCase() === contacts[i].name.toLowerCase())
            {
            nome.innerHTML = contacts[i].name
            tel.innerHTML = contacts[i].number
            break}
            
            
        else{
            nome.innerHTML = "Contato não encontrato"
            tel.innerHTML = "Tente outra vez"
        }
    }
}