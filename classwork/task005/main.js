const paginationButtonEls = document.querySelectorAll('.pagination');
for (let i = 0; i < paginationButtonEls.length; i++) {
    const buttonEl = paginationButtonEls[i];
    buttonEl.addEventListener('click', async function () {
        const page = buttonEl.getAttribute('data-page');
        const users = await fetchUsers(page);
        renderUsers(users);
    });
}
 
async function fetchUsers(page) {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await response.json();
    return json.data;
}
 
function renderUsers(users) {
    let content = '';
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        content += `
        <div>
            <img src="${user.avatar}" alt="Аватарка ${user.first_name} ${user.last_name}">
            <p>${user.first_name} ${user.last_name}</p>
        </div>
        `;
    }
    document.querySelector('#app').innerHTML = content;
}