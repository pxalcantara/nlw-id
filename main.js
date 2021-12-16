const SocialMediaProfiles = {
  github: 'pxalcantara',
  youtube: '',
  instagram: '',
  facebook: '',
  twitter: ''
}

const image = document.querySelector('#userImage')
let click_count = 0
let key_count = 0

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${SocialMediaProfiles[social]}`
  }
}

function updateInfosFromGithub(github_data) {
  userName.textContent = github_data.name
  userBio.textContent = github_data.bio
  userImage.src = github_data.avatar_url
  userLink.href = github_data.html_url
  userLogin.textContent = github_data.login
}

function getGithubProfileInfos() {
  const github_url = `https://api.github.com/users/${SocialMediaProfiles.github}`

  fetch(github_url)
    .then(response => response.json())
    .then(github_data => {
      updateInfosFromGithub(github_data)
    })
}
function changeAvatarImageSrc() {
  click_count += 1
  if (click_count <= 4) {
    image.src = `images/ss${click_count}.jpeg`
  }
}

image.addEventListener('click', changeAvatarImageSrc)
changeSocialMediaLinks()
getGithubProfileInfos()
document.addEventListener('keydown', event => {
  console.log('Key ' + event.key)
  console.log(key_count)

  switch (event.key) {
    case 'ArrowDown':
      key_count += 1
      break
    case 'ArrowLeft':
      key_count += 1
      break
    case 'ArrowUp':
      key_count += 1
      break
    case 'y':
      key_count += 1
      break
  }

  if (key_count === 4) {
    image.src = `images/haduken.jpeg`
    key_count = 0
  }
})
