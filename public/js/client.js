let socket = io();

socket.on("connect", function (){
    console.log("client connected to the server");
});



document.querySelector("#submit-btn").addEventListener('click', function(e){
    e.preventDefault();
    // client emitting the message
    socket.emit('gettingMessage', {
        message : document.querySelector('textarea[name = "txtmsg"]').value
    })
});

