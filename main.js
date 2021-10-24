const linksRedesSociais = {
  github: 'isadoraraujo',
  facebook: 'isadora.araujo.14',
  instagram: '_isadoraraujo',
  twitter: '_isadoraraujo'
}

//camelCase boas práticas!

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksRedesSociais[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksRedesSociais.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      eu.src = data.avatar_url
      userGit.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

// i = i + 1
// i++

//ser humano 123456789
//computador 0123456789

//ARROW FUNCTION
// argumento => {} w/ then
