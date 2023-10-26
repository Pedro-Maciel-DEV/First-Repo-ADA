const name=document.querySelector('#name')
const email =document.querySelector('#email')
const password =document.querySelector('#password')
const button=document.querySelector('#button')
const userdata=[]
function creatUser(name,email,password){
   if(validateUser(email)){
    return;
   }
    const user={
        name,
        email,
        password,
    }
    userdata.push(user)
    localStorage.setItem('users',JSON.stringify(userdata))
    alert("Cadastro realizado")
}

function validateUser(email){
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    console.log(storedUsers)
    const userWithEmail = storedUsers.find((user) => user.email === email);
    if (userWithEmail) {
    alert('Email já em uso');
    return true;
  }
}
button.addEventListener('click',function(e){
    e.preventDefault()
    if(name.value.trim()=="" || email.value.trim()=="" || password.value.trim()==""){
        alert("dados invalidos ")
        return;
    }creatUser(name.value,email.value,password.value)   
})

export default userdata
