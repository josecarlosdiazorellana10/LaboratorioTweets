
    // Función para agregar un tweet
    function agregarTweet() {
        var tweet = document.getElementById('tweetInput').value;

        if (tweet.trim() === '') {
            alert('Por favor ingresa un tweet válido.');
            return;
        }

        // Obtener los tweets actuales desde localStorage o inicializar un array vacío
        var tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        // Agregar el nuevo tweet al array
        tweets.push(tweet);

        // Guardar el array actualizado en localStorage
        localStorage.setItem('tweets', JSON.stringify(tweets));

        document.getElementById('tweetInput').value = '';

        mostrarTweets();
    }

    function mostrarTweets() {
        var tweetContainer = document.getElementById('tweetList');
        var tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        // Limpiar el contenido anterior
        tweetContainer.innerHTML = '';

        // Mostrar cada tweet con un botón para eliminarlo
        tweets.forEach(function(tweet, index) {
            var tweetElement = document.createElement('div');
            tweetElement.classList.add('tweet-item');

            var p = document.createElement('p');
            p.textContent = tweet;

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.onclick = function() {
                eliminarTweet(index);
            };

            tweetElement.appendChild(p);
            tweetElement.appendChild(deleteButton);
            tweetContainer.appendChild(tweetElement);
        });
    }

    function eliminarTweet(index) {
        var tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        
        // Eliminar el tweet por su índice
        tweets.splice(index, 1);

        // Guardar el array actualizado en localStorage
        localStorage.setItem('tweets', JSON.stringify(tweets));

        // Actualizar la lista de tweets mostrados
        mostrarTweets();
    }

    // Mostrar los tweets almacenados al cargar la página
    window.onload = function() {
        mostrarTweets();
    };

