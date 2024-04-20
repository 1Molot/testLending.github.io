// const tabs = document.querySelectorAll('.tab');
// const tabContents = document.querySelectorAll('.tab-content');
//
// tabs.forEach((tab, index) => {
//     tab.addEventListener('click', () => {
//         tabs.forEach(tab => tab.classList.remove('active'));
//         tabContents.forEach(content => content.classList.remove('active'));
//
//         tab.classList.add('active');
//         tabContents[index].classList.add('active');
//     });
// });


// active button
const button = document.querySelector('.button__travels');
const organizationButton = document.querySelector('.button__organization');
const employeesButton = document.querySelector('.button__employees');

button.addEventListener('click', function() {
    button.classList.toggle('active');
});

organizationButton.addEventListener('click', function() {
    organizationButton.classList.toggle('active');
});

employeesButton.addEventListener('click', function() {
    employeesButton.classList.toggle('active');
});
