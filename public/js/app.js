console.log('wesh');

const socket = io.connect('192.168.1.90:3000');

const $form= document.querySelector('form');
const $message = document.querySelector('input[type=text]');
const $container = document.querySelector('.container');
const $submit = document.querySelector('input[type=submit]');

const addMessage = (message) => {
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    newMessage.classList.add('row');
    $container.appendChild(newMessage);
}

$form.addEventListener('submit', () => {
    if ($message.value) {
        socket.emit('new-message', $message.value);
    }
})

socket.on('new-message', (message) => {
    addMessage(message);
});