//
// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку ,
// при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
let father = document.createElement('div');
document.body.append(father)
document.body.style.background = 'silver'

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const i of users) {
            let son = document.createElement('div');
            father.append(son)
            let identifacation = document.createElement('p');
            let nameofuser = document.createElement('p');
            identifacation.innerHTML = i.id
            nameofuser.innerHTML = i.name
            let link = document.createElement('a');
            link.href = ' user-details.html?id='+i.id
            link.innerHTML = 'Infromation of user'
            son.append(identifacation,nameofuser, link)
            father.style.display = 'flex'
            father.style.height = '100%'
            father.style.width = '500px'
            father.style.marginLeft = '400px'
            father.style.columnGap = '20px'
            father.style.flexWrap = 'wrap'
            son.style.width = '220px'
            son.style.height = '200px'
            son.style.background = 'silver'
            son.style.boxSizing = 'border-box'
            son.style.border = '4px solid black'
            son.style.boxShadow = '12px 12px 2px 1px gray'
            son.style.borderRadius = '5%'
            son.style.display ='flex'
            son.style.flexDirection = 'column'
            son.style.justifyContent = 'center'
            son.style.textAlign = 'center'
            son.style.marginTop = '20px'
            son.style.marginLeft = '20px'
            identifacation.style.fontSize = '15px'
            identifacation.style.color = 'white'
            identifacation.style.fontWeight = 'bold'
            nameofuser.style.fontSize = '20px'
            nameofuser.style.color = 'black'
            nameofuser.style.fontWeight = 'bold'
            link.style.fontSize = '16px'





        }
    })
