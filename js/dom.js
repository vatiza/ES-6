document.getElementById('apply-lg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
}
})
document.getElementById('center-btn').addEventListener('click', function () {
    const third = document.getElementById('third-frined');
    third.style.textAlign = 'center';
})
document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>something new added</p>
    `
    friendContainer.appendChild(friend);
})