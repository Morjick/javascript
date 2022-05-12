async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
    headers: {
      'Content-Type': 'application/json',
      Accept:  'application/json',
    },
    method: 'GET',
  })

  const posts = await response.json()
  const users = []

  const wrapper = document.getElementById('wrapper')

  posts.forEach((element) => {
    const title = element.title
    const body = element.body
    let sender 

    users.forEach((user) => {
      if(element.id == sender.id) sender = user.name
    })

    const post = `
      <div class="post">
        <span>${title}</span>
        <p>${body}</p>
        <span>${sender}</span>
      </div>
    `

    wrapper.append(post)
  })
}

getPosts()