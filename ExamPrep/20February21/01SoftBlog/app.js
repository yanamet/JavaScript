
function solve() {

   let authorField = document.getElementById('creator');
   let titleField = document.getElementById('title');
   let categoryField = document.getElementById('category');
   let contentField = document.getElementById('content');
   let createButton = document.querySelector('.btn.create');
   createButton.addEventListener('click', createPost);

   let section = document.querySelector('.site-content main section');
   let archiveSectionOl = document.querySelector('.archive-section ol');

   function createPost(ev) {

      ev.preventDefault();

      let author = authorField.value;
      let title = titleField.value;
      let category = categoryField.value;
      let content = contentField.value;

      let article = document.createElement('article');

      let titleH1 = document.createElement('h1');
      titleH1.textContent = title;
      article.appendChild(titleH1);

      let categoryP = document.createElement('p');
      categoryP.textContent = 'Category:';

      let strong = document.createElement('strong');
      strong.textContent = category;
      categoryP.appendChild(strong);
      article.appendChild(categoryP);


      let creatorP = document.createElement('p');
      creatorP.textContent = 'Creator:';

      let strongCreator = document.createElement('strong');
      strongCreator.textContent = author;
      creatorP.appendChild(strongCreator);
      article.appendChild(creatorP);

      let contentP = document.createElement('p');
      contentP.textContent = content;
      article.appendChild(contentP);


      let div = document.createElement('div');
      div.classList.add('buttons');

      let deleteButton = document.createElement('button');
      deleteButton.classList.add('btn');
      deleteButton.classList.add('delete');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
         article.remove();
      })
      div.appendChild(deleteButton);

      let archiveButton = document.createElement('button');
      archiveButton.classList.add('btn');
      archiveButton.classList.add('archive');
      archiveButton.textContent = 'Archive';
      archiveButton.addEventListener('click', (ev) => {
         let li = document.createElement('li');
         li.textContent = title;
         archiveSectionOl.appendChild(li);
         article.remove();

         let liArray = Array.from(archiveSectionOl.childNodes);
         liArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
         
         for(let i = 0; i < liArray.length; i++){
            archiveSectionOl.appendChild(liArray[i]);
         }

      });
      div.appendChild(archiveButton);

      article.appendChild(div);

      section.appendChild(article);
      clearInputFields();

   }

   function clearInputFields() {
      authorField.value = '';
      titleField.value = '';
      categoryField.value = '';
      contentField.value = '';
   }


}

solve();
