window.addEventListener('load', solve);

function solve() {

    let productTypeField = document.getElementById('type-product');
    let decsiptionField = document.getElementById('description');
    let clientNameField = document.getElementById('client-name');
    let clientPhoneField = document.getElementById('client-phone');
    let sendFormButton = document.querySelector('button');

    let recievedOrdersList = document.getElementById('received-orders');
    let finishedOrdersList = document.getElementById('completed-orders');
    let clearButton = document.querySelector('.clear-btn');
    clearButton.addEventListener('click', () => {
        let allCompleteOrders = Array.from(finishedOrdersList.querySelectorAll('div'));
        for (let order of allCompleteOrders){
            finishedOrdersList.removeChild(order);
        }
    });



    sendFormButton.addEventListener('click', sendForm);

    function sendForm(e) {

        e.preventDefault();

        let productType = productTypeField.value;
        let description = decsiptionField.value;
        let clientName = clientNameField.value;
        let clientPhone = clientPhoneField.value;

        if (!description || !clientName || !clientPhone) {
            return;
        }



        let div = document.createElement('div');
        div.classList.add('container');

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${productType}`;
        div.appendChild(h2);

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientName}, ${clientPhone}`;
        div.appendChild(h3);

        let problemDescriptionH4 = document.createElement('h4');
        problemDescriptionH4.textContent = `Description of the problem: ${description}`;
        div.appendChild(problemDescriptionH4);

        let startButton = document.createElement('button');
        startButton.textContent = 'Start repair';
        startButton.classList.add('start-btn');
        startButton.addEventListener('click', () => {
            finishButton.disabled = false;
            startButton.disabled = true;
        })
        div.appendChild(startButton);


        let finishButton = document.createElement('button');
        finishButton.textContent = 'Finish repair'
        finishButton.classList.add('finish-btn');
        finishButton.disabled = true;
        finishButton.addEventListener('click', () => {
            finishedOrdersList.appendChild(div);
            div.removeChild(startButton);
            div.removeChild(finishButton);
        });
        div.appendChild(finishButton);


        recievedOrdersList.appendChild(div);


        clearInputFields();
    }

    function clearInputFields() {
        productTypeField.value = '';
        decsiptionField.value = '';
        clientNameField.value = '';
        clientPhoneField.value = '';
    }

}