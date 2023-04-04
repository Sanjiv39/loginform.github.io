var str1 = ""
var str2 = ""
const check = () =>
{
    var user = username.value
    var pass = password.value
    console.log(user, pass)
    if(user=="")
    {
        document.getElementById("username").style = `outline: none`
    }
    else if(user==="username")
    {
        document.getElementById("username").style = `outline: green solid 1px`
    }
    else
    {
        document.getElementById("username").style = `outline: red solid 1px`
    }
    if(pass=="")
    {
        document.getElementById("password").style = `outline: none`
    }
    else if(pass==="password")
    {
        document.getElementById("password").style = `outline: green solid 1px`
    }
    else
    {
        document.getElementById("password").style = `outline: red solid 1px`
    }
}

submitbtn.onclick = () => 
{
    document.getElementById("circle1").style = `animation: slide1 1s linear infinite alternate;`
    document.getElementById("circle2").style = `animation: slide1 1s linear infinite alternate;`
    document.getElementById("movementbox").style = `animation: load 0.5s linear infinite;`
    setTimeout(() => {
        location.reload()
    }, 3000);
}
