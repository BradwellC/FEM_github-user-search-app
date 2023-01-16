
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

const user = document.querySelector('.userGithub');
const username = document.querySelector('githubUsername');
const joined = document.querySelector('.joinedDate');
const repo = document.querySelector('.repoTotal');
const follower = document.querySelector('.followerTotal');
const followings = document.querySelector('.followingTotal');
const location = document.querySelector('.location');
const twit = document.querySelector('.twit');
const website = document.querySelector('.website');
const company = document.querySelector('.company');
const userBio = document.querySelector('.user_bio');

let img = document.createElement('img');
let imgBlock = document.querySelector('.user_img');

btn.addEventListener('click', function() {
  const url = `https://api.github.com/users/${input.value}`

  async function getUrl() {
    const res = await fetch(url);
    const data = await res.json();
    const dateData = data.created_at.slice(0, data.created_at.length - 10);

    img.src = data.avatar_url;
    imgBlock.appendChild(img);
    imgBlock.style.border = 'none';

    user.innerHTML = data.name;
    username.innerHTML = `@${data.login}`;
    joined.innerHTML = `Joined ${dateData}`;
  }
  getUrl()
  input.value = '';
})