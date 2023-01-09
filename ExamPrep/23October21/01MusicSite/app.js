window.addEventListener('load', solve);

function solve() {
    let genreField = document.getElementById('genre');
    let nameField = document.getElementById('name');
    let authorField = document.getElementById('author');
    let dateField = document.getElementById('date');
    let submitButton = document.getElementById('add-btn');

    submitButton.addEventListener('click', submitSong);

    let songCollection = document.getElementById('all-hits');
    let allHitsContainer = songCollection.querySelector('.all-hits-container');
    let likesParagraph = document.getElementById('total-likes').querySelector('.likes p');
    let savedSongs = document.getElementById('saved-hits').querySelector('.saved-container');

    function submitSong(ev) {
        ev.preventDefault();

        let genre = genreField.value;
        let name = nameField.value;
        let author = authorField.value;
        let date = dateField.value;

        if (genre == '' || name == '' || author == '' || date == '') {
            console.log('in');
            return;
        }

        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = document.createElement('img');
        img.src = './static/img/img.png';
        div.appendChild(img);

        let genreH2 = document.createElement('h2');
        genreH2.textContent = `Genre: ${genre}`;
        div.appendChild(genreH2);

        let nameH2 = document.createElement('h2');
        nameH2.textContent = `Name: ${name}`;
        div.appendChild(nameH2);

        let authorH2 = document.createElement('h2');
        authorH2.textContent = `Author: ${author}`;
        div.appendChild(authorH2);

        let dateH3 = document.createElement('h3');
        dateH3.textContent = `Date: ${date}`;
        div.appendChild(dateH3);

        let saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save song';
        saveButton.addEventListener('click', () =>{
          savedSongs.appendChild(div);
          div.removeChild(saveButton);
          div.removeChild(likeButton);
        });
        div.appendChild(saveButton);

        let likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.textContent = 'Like song';
        likeButton.addEventListener('click', () => {
            likeButton.disabled = true;
           let currentLikes = Number(likesParagraph.textContent.split(' ')[2]);
           likesParagraph.textContent = `Total Likes: ${currentLikes + 1}`;
        });
        div.appendChild(likeButton);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            div.remove();
        })
        div.appendChild(deleteButton);

        allHitsContainer.appendChild(div);
        clearInputFields();
    }

    function clearInputFields() {
        genreField.value = '';
        nameField.value = '';
        authorField.value = '';
        dateField.value = '';
    }
}