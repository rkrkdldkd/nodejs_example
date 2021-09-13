async function getUser(){
    try {
        const res =  await axios.get('/user');
        const user = res.data;
        alert(user.name);
        document.getElementById('user-info').firstChild.textContent = user.name;
        document.getElementById('user-info').firstChild.nextSibling.textContent = user.age;
      } catch (err) {
        console.error(err);
      }
    }

document.getElementById('user-form').addEventListener('submit', async (e) => {

    e.preventDefault();
    const name = e.target.username.value;
    const age = e.target.age.value;
    const married = e.target.married.checked;
    if(!name){
        return alert('이름을 입력하세요!!');
    }
    if(!age){
        return alert('나이를 입력하세요!!');
    }
    try{
        await axios.post('/user',{name,age,married});
        await getUser();
    }catch(err){
        console.error(err);
    }
    e.target.username.value="";
    e.target.age.value="";
    e.target.married.checked="";

});