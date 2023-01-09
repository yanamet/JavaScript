window.addEventListener('load', solve);

function solve() {
    let modelField = document.getElementById('model');
    let yearField = document.getElementById('year');
    let descriptionField = document.getElementById('description');
    let priceField = document.getElementById('price');

    let addButton = document.getElementById('add');
    addButton.addEventListener('click', addFurniture);

    let furnitureList = document.getElementById('furniture-list');

    let totalPrice = document.querySelector('.total-price');

    function addFurniture(ev) {
        ev.preventDefault();

        let model = modelField.value;
        let year = yearField.value;
        let description = descriptionField.value;
        let price = Number(priceField.value).toFixed(2);

        if (model == '' || description == '' || year == '' || price == ''|| year <= 0 || price <= 0) {
            return;
        }

        let infoTr = document.createElement('tr');
        infoTr.classList.add('info');

        let modelTd = document.createElement('td');
        modelTd.textContent = model;
        infoTr.appendChild(modelTd);

        let priceTd = document.createElement('td');
        priceTd.textContent = Number(price).toFixed(2);
        infoTr.appendChild(priceTd);


        let buttonTd = document.createElement('td');
        let moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add('moreBtn');
        moreInfoBtn.textContent = 'More Info';
        moreInfoBtn.addEventListener('click', () => {
            if (moreInfoBtn.textContent == 'More Info') {
                moreInfoBtn.textContent = 'Less Info';
                descriptionTd.setAttribute('colspan', 3);
                hiddenTr.style.display = 'contents';
            }else if ( moreInfoBtn.textContent == 'Less Info'){
                moreInfoBtn.textContent = 'More Info';
                hiddenTr.style.display = 'none';

            }
        })
        buttonTd.appendChild(moreInfoBtn);

        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';
        buyBtn.addEventListener('click', () => {
            furnitureList.removeChild(infoTr);
            furnitureList.removeChild(hiddenTr);
            totalPrice.textContent = (Number(totalPrice.textContent) + Number(price)).toFixed(2);
        })
        buttonTd.appendChild(buyBtn);

        infoTr.appendChild(buttonTd);

        furnitureList.appendChild(infoTr);

        let hiddenTr = document.createElement('tr');
        hiddenTr.classList.add('hide');
        

        let yearTd = document.createElement('td');
        yearTd.textContent = `Year: ${year}`;
        hiddenTr.appendChild(yearTd);

        let descriptionTd = document.createElement('td');
        descriptionTd.textContent = `Description: ${description}`;
       
        hiddenTr.appendChild(descriptionTd);

        furnitureList.appendChild(hiddenTr);



        clearInputFields();

    }

    function clearInputFields() {

        modelField.value = '';
        yearField.value = '';
        descriptionField.value = '';
        priceField.value = '';
    }

}
