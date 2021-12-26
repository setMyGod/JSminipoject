
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.

let url = new URL(location.href);
console.log(url)
let oneuser = url.searchParams.get('id');
let firstdiv = document.createElement('div');
document.body.append(firstdiv)
fetch('https://jsonplaceholder.typicode.com/users/' + oneuser)
    .then(response =>response.json())
    .then(users => {
            let divfather = document.createElement('div');
           firstdiv.appendChild(divfather)
            let pid = document.createElement('p');
            let h1name = document.createElement('p');
            let h2username = document.createElement('p');
            let h3email = document.createElement('p');
            let padress = document.createElement('p');
            pid.innerHTML = users.id
            h1name.innerHTML = users.name
            h2username.innerHTML = users.username
            h3email.innerHTML = users.email
            padress.innerHTML = JSON.stringify(users.address)
            divfather.append(pid, h1name, h2username, h3email, padress);
            divfather.style.display = 'flex'
            divfather.style.flexDirection = 'column'
            let button = document.createElement('button');
            divfather.append(button)
            button.innerHTML = 'posts of current user'
            divfather.style.width = '800px'
            divfather.style.border = '4px solid black'
            divfather.style.boxShadow = '12px 12px 2px 1px gray'
            divfather.style.padding = '20px'
            divfather.style.background = 'silver'
            divfather.style.boxSizing = 'border-box'
            button.style.width = '80px'
            divfather.style.display = 'flex'
            divfather.style.alignItems = 'center'
            h1name.style.fontWeight = 'bold'
            h1name.style.color = 'black'
            pid.style.color = '#fff'
            pid.style.fontWeight = 'bold'
            pid.style.fontSize = '25px'
            h2username.style.fontWeight = 'bold'
            h1name.style.fontSize = '20px'
            h3email.style.fontWeight = 'bold'
            padress.style.fontWeight = 'bold'
            button.style.color = '#fff'
            button.style.background = 'black'
            firstdiv.style.display = 'flex'
            firstdiv.style.justifyContent = 'center'
            firstdiv.style.textAlign = 'center'




    })
