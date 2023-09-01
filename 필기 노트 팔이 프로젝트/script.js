

function toggleElementDisplay(elementId, arrowId) {
    const element = document.getElementById(elementId);
    const arrow = document.getElementById(arrowId);
    if (element.style.display === "none") {
        arrow.style.transform = 'rotate(45deg)';
        arrow.style.top = '-7%';
        element.style.display = "block";
    } else {
        arrow.style.transform = 'rotate(225deg)';
        arrow.style.top = '7%';
        element.style.display = "none";
    }
}

document.getElementById('toggleFriendList').addEventListener('click', function () {
    const friendList = document.querySelector('.friend-list');
    friendList.classList.toggle('hide');
});

document.getElementById('toggletodo').addEventListener('click', function () {
    const todo = document.querySelector('.todo');
    todo.classList.toggle('hide');
});

document.getElementById('flip').addEventListener('click', function () {
    toggleElementDisplay('class1', 'arrow-1');
});

document.getElementById('flip2').addEventListener('click', function () {
    toggleElementDisplay('class2', 'arrow-2');
});

document.getElementById('flip3').addEventListener('click', function () {
    toggleElementDisplay('class3', 'arrow-3');
});

document.getElementById('logobtn').addEventListener('click', function (e) {
    e.preventDefault();
    const rectangleElement = document.querySelector('.rectangle-box');
    rectangleElement.scrollIntoView({ behavior: 'smooth' });
});