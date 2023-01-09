function solve() {
    const recipientName = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const textArea = document.getElementById('message');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');

    addBtn.type = 'button';
    resetBtn.type = 'button';

    addBtn.addEventListener('click', addMail);

    resetBtn.addEventListener('click', resetInformation);

    const listMails = document.getElementById('list');
    const sentList = document.querySelector('.sent-list');
    const deleteList = document.querySelector('.delete-list');


    function resetInformation() {
        recipientName.value = '';
        title.value = '';
        textArea.value = '';
    }

    function addMail() {
        let li = document.createElement('li');

        let titleValue = title.value;
        let recipientNameValue = recipientName.value;
        let textAreaValue = textArea.value;

        if ((titleValue == '') || (recipientNameValue == '') || (textAreaValue == '')) {
            return;
        };

        let titleH4 = document.createElement('h4');
        let messageForTitle = `Title: ${titleValue}`;
        titleH4.textContent = messageForTitle;
        li.appendChild(titleH4);

        let recipentH4 = document.createElement('h4');
        let messageForRecipient = `Recipient Name: ${recipientNameValue}`;
        recipentH4.textContent = messageForRecipient;
        li.appendChild(recipentH4);

        let span = document.createElement('span');
        span.textContent = textAreaValue;
        li.appendChild(span);

        let div = document.createElement('div');
        div.id = 'list-action';

        let sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.textContent = 'Send';
        div.appendChild(sendBtn);

        sendBtn.addEventListener('click', () => sendingMails(recipientNameValue, titleValue));

        function sendingMails() {

            listMails.removeChild(li);

            let liToAppend = document.createElement('li');

            let firstSpan = document.createElement('span');
            firstSpan.textContent = `To: ${recipientNameValue} `;
            liToAppend.appendChild(firstSpan);

            let secondSpan = document.createElement('span');
            secondSpan.textContent = `Title: ${titleValue}`;
            liToAppend.appendChild(secondSpan);

            let div = document.createElement('div');
            div.classList.add('btn');

            let toDeleteBtn = document.createElement('button');
            toDeleteBtn.type = 'submit';
            toDeleteBtn.classList.add('delete');
            toDeleteBtn.textContent = 'Delete';

            toDeleteBtn.addEventListener('click', (ev) => {
                const liToRemove = ev.target.parentElement.parentElement;
                liToRemove.removeChild(div);
                deleteList.appendChild(liToRemove);
            })

            div.appendChild(toDeleteBtn);

            liToAppend.appendChild(div);

            sentList.appendChild(liToAppend);

        }

        let deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deletingElement(recipientNameValue, titleValue))

        function deletingElement() {

            listMails.removeChild(li);

            let liToAppend = document.createElement('li');

            let firstSpan = document.createElement('span');
            firstSpan.textContent = `To: ${recipientNameValue} `;
            liToAppend.appendChild(firstSpan);

            let secondSpan = document.createElement('span');
            secondSpan.textContent = `Title: ${titleValue}`;
            liToAppend.appendChild(secondSpan);

            deleteList.appendChild(liToAppend);

        }

        div.appendChild(deleteBtn);

        li.appendChild(div);

        listMails.appendChild(li);

        recipientName.value = '';
        title.value = '';
        textArea.value = '';

    }
}

solve();