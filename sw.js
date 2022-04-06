self.addEventListener('fetch', event => {
  console.log(event)
  if (event.request.url === 'https://api.github.com/path-errado') {
    event.respondWith(changeUrl(event))
  }
})

function changeUrl(event) {
  console.log('entrou')
  const newRequest = new Request('https://api.github.com/zen')

  return fetch(newRequest)
}