const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = form.username.value;
  const passwd = form.password.value;

  const res = await fetch("http://10.12.18.201:6001/user/signIn", {
    method: "POST",
    body: JSON.stringify({ name, passwd }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  if(data.err){
    console.log(data.err)
  }
  if (data.token) {
    window.location.href = `/cookie/${data.token}`;
  }
});
