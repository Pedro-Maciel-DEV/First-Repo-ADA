const email =document.querySelector('#email')
const password =document.querySelector('#password')
const button=document.querySelector('#button')



function validateUser(email,password){
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    const user=storedUsers.find((user) => user.email === email);
    if(user.password!= password){
        alert('email e ou senha invalida')
        return;
    }
    if(user.email==email && user.password==password){

     window.location.href='../html/registro.html'
    }

}

button.addEventListener('click',(e)=>{
    e.preventDefault()
  console.log(validateUser(email.value,password.value))
})