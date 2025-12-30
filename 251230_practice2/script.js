const showInfo = document.getElementById('showInfo');
const nameToSearch = document.getElementById('nameToSearch');
const searchInfo = document.getElementById('searchInfo');


searchInfo.addEventListener('click',async()=>{
    const name = nameToSearch.value;
    try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (!res.ok) throw new Error("User Not Found");

    const data = await res.json();
    console.log(data);
    } catch(e) {
        throw e
    }
})