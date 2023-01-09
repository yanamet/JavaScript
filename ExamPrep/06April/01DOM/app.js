window.addEventListener("load", solve);

function solve() {

  const title = document.getElementById('post-title');
  const category = document.getElementById('post-category');
  const content = document.getElementById('post-content');
  document.getElementById('publish-btn').addEventListener('click', publish);
  document.getElementById('clear-btn').addEventListener('click', clear);


  function publish() {
    console.log('cliked');
    const titleInput = title.value;
    const categoryInput = category.value;
    const contentInput = content.value;

    if (!titleInput || !categoryInput || !contentInput) {
      title.value = '';
      category.value = '';
      content.value = '';
      return;
    }

    title.value = '';
    category.value = '';
    content.value = '';

    const ul = document.getElementById('review-list');
    const liElement = document.createElement('li');
    liElement.classList.add('rpost');

    const ulPosted = document.getElementById('published-list');

    const article = document.createElement('article');

    const hElement = document.createElement('h4');
    hElement.textContent = titleInput;
    article.appendChild(hElement);

    const firstPElement = document.createElement('p');
    firstPElement.textContent = categoryInput;
    article.appendChild(firstPElement);

    const secondPElement = document.createElement('p');
    secondPElement.textContent = contentInput;
    article.appendChild(secondPElement);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.addEventListener('click', () => edit(hElement, firstPElement, secondPElement));
    article.appendChild(editBtn);

    const approveBtn = document.createElement('button');
    approveBtn.textContent = 'Approve';
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.addEventListener('click', () => approve(hElement, firstPElement, secondPElement));
    article.appendChild(approveBtn);



    liElement.appendChild(article);

    ul.appendChild(liElement);

    function edit(i, cat, cont) {
      liElement.remove();
      title.value = i.textContent;
      category.value = cat.textContent;
      content.value = cont.textContent;


    }

    function approve(h, p1, p2) {

      liElement.remove();

      const liApprove = document.createElement('li');
      liApprove.classList.add('rpost');

      const article = document.createElement('article');

      const hEl = document.createElement('h4');
      hEl.textContent = h.textContent;
      article.appendChild(hEl);

      const firstPar = document.createElement('p');
      firstPar.textContent = p1.textContent;
      article.appendChild(firstPar);


      const secondPar = document.createElement('p');
      secondPar.textContent = p2.textContent;
      article.appendChild(secondPar);

      liApprove.appendChild(article);


      ulPosted.appendChild(liApprove);
     

    }

  }

 function clear(){
  const posted = document.getElementById('published-list');

  while(posted.firstChild){
    posted.removeChild(posted.firstChild);
  }
}
 }

