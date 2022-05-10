 console.log('Работает!')

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
    headers: {
      'Content-Type': 'application/json',
      Accept:  'application/json',
    },
    method: 'GET',
  })

  const posts = await response.json()
  
  console.log(posts)

  const wrapper = document.getElementById('wrapper')

  posts.forEach( (element) => {
      const div = document.createElement('div')
      const span = document.createElement('span')
      const p = document.createElement('p')

      div.id = 'post-' + element.id
      div.classList.add('post')

      p.textContent = element.body
      span.textContent = element.title

      div.prepend(span)
      div.append(p)

      wrapper.append(div)
  })
}

getPosts()