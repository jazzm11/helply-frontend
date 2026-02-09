const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
const name = form.username.value
const passwd = form.password.value
const conPass = form.confPassword.value



  const res = await fetch("http://10.12.18.201:6001/user/signUp",{
    method: "POST",
    body: JSON.stringify({name,passwd,conPass}),
    headers: {"Content-Type":"application/json"}
  })

  const data = await res.json()

  if(data.userId){
    window.location.href = "/"
  }
});
