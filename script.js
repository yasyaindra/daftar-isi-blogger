const content = document.querySelector('.content')
const ul = document.createElement('ul')
const allHeadings = document.querySelectorAll('h2')

allHeadings.forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a')

    item.setAttribute('id', item.innerHTML)
    a.setAttribute('href', `#${item.innerHTML}`)
    a.innerHTML = item.innerHTML

    li.append(a)
    ul.append(li)
})

content.append(ul)