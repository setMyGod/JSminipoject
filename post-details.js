let url = new URL(location.href);
let search = url.searchParams.get('id');


fetch(' https://jsonplaceholder.typicode.com/posts/'+ search)
    .then(response => response.json())
    .then(posts => {
        let par = document.createElement('p');
        document.body.append(par)
        par.innerText = posts.body
        par.style.fontWeight = 'bold'
        par.style.fontStyle = '20px'
        par.style.width = '400px'
        par.style.height = '200px'
        par.style.border = '3px solid black'
        par.style.display = 'flex'
        par.style.marginLeft = '450px'
        par.style.background = 'silver'
        par.style.alignItems = 'center'
        par.style.boxShadow = '40px -15px black'
        par.style.marginTop = '80px'
        par.style.color = 'black'
        par.style.textAlign = 'center'
        par.style.justifyContent = 'center'
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => {
                let divcomments = document.createElement('div');
                document.body.append(divcomments)
                for (const i of comments) {
                    if (posts.id === i.postId){
                        let pcomment = document.createElement('p');
                        pcomment.innerText = i.body
                        divcomments.append(pcomment)
                        divcomments.style.display = 'flex'
                        divcomments.style.padding = '20px'
                        pcomment.style.border = '2px solid black'
                        pcomment.style.padding = '20px'
                        pcomment.style.marginLeft = '10px'
                        pcomment.style.marginRight = '10px'
                        pcomment.style.background = 'silver'

                    }
                }
            })






    })