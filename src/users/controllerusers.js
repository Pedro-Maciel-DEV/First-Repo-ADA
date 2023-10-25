const name=document.querySelector('#name')
const email =document.querySelector('#email')
const password =document.querySelector('#password')
const button=document.querySelector('#button')
const userdata=[]
let userJson
function creatUser(name,email,passsword){
    const user={
        name,
        email,
        passsword,
    }
    userJson= JSON.stringify(user)
    userdata.push(userJson)
    alert("Cadastro realizado")
    return userdata
}
button.addEventListener('click',function(e){
    e.preventDefault()
    if(name.value.trim()=="" || email.value.trim()=="" || password.value.trim()==""){
        alert("dados invalidos ")
    }
    creatUser(name.value,email.value,password.value)
    console.log(userdata)
})


