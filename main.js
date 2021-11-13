const SocialMediaProfiles = {
  github: 'pxalcantara',
  youtube: '',
  instagram: '',
  facebook: '',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${SocialMediaProfiles[social]}`
  }
}

function getGithubProfileInfos() {
  const github_url = `https://api.github.com/users/${SocialMediaProfiles.github}`

  fetch(github_url)
    .then(response => response.json())
    .then(github_data => {
      userName.textContent = github_data.name
      userBio.textContent = github_data.bio
      userImage.src = github_data.avatar_url
      userLink.href = github_data.html_url
      userLogin.textContent = github_data.login
    })
}

changeSocialMediaLinks()
getGithubProfileInfos()
