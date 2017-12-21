const app = "I don't do much.";
const token = '27ae170d30b5259ca0aafbd4a6b19138c967ffb5';
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json));