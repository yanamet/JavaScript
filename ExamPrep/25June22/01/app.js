window.addEventListener("load", solve);

function solve() {
  let makeField = document.getElementById('make');
  let modelField = document.getElementById('model');
  let yearField = document.getElementById('year');
  let fuelField = document.getElementById('fuel');
  let originalCostField = document.getElementById('original-cost');
  let sellingPriceField = document.getElementById('selling-price');

  let tbody = document.getElementById('table-body');
  let carsList = document.getElementById('cars-list');

  let profit = document.getElementById('profit');

  let publishButton = document.getElementById('publish');
  publishButton.addEventListener('click', publish);

  function publish(ev) {
    ev.preventDefault();
    let make = makeField.value;
    let model = modelField.value;
    let year = yearField.value;
    let fuel = fuelField.value;
    let originalPrice = Number(originalCostField.value);
    let sellingPrice = Number(sellingPriceField.value);

    if (make == '' || model == '' || year == '' || fuel == '' || originalPrice == '' || sellingPrice == '') {
      return;
    }

    if (originalPrice > sellingPrice) {
      return;
    }

    let tr = document.createElement('tr');
    tr.classList.add('row');

    let makeTd = document.createElement('td');
    makeTd.textContent = make;
    tr.appendChild(makeTd);

    let modelTd = document.createElement('td');
    modelTd.textContent = model;
    tr.appendChild(modelTd);

    let yearTd = document.createElement('td');
    yearTd.textContent = year;
    tr.appendChild(yearTd);

    let fuelTd = document.createElement('td');
    fuelTd.textContent = fuel;
    tr.appendChild(fuelTd);

    let originalPriceTd = document.createElement('td');
    originalPriceTd.textContent = originalPrice;
    tr.appendChild(originalPriceTd);

    let sellingPriceTd = document.createElement('td');
    sellingPriceTd.textContent = sellingPrice;
    tr.appendChild(sellingPriceTd);

    let buttonTd = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      tr.remove();
      makeField.value = make;
      modelField.value = model;
      yearField.value = year;
      fuelField.value = fuel;
      originalCostField.value = originalPrice;
      sellingPriceField.value = sellingPrice;

    })
    buttonTd.appendChild(editBtn);

    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', () => {
      tr.remove();
      let li = document.createElement('li');
      li.classList.add('each-list');

      let makeAndModelSpan = document.createElement('span');
      makeAndModelSpan.textContent = `${make} ${model}`;
      li.appendChild(makeAndModelSpan);

      let yearSpan = document.createElement('span');
      yearSpan.textContent = `${year}`;
      li.appendChild(yearSpan);

      let priceDiffSpan = document.createElement('span');
      priceDiffSpan.textContent = `${sellingPrice - originalPrice}`;
      li.appendChild(priceDiffSpan);

      carsList.appendChild(li);

      profit.textContent = (Number(profit.textContent) + (sellingPrice - originalPrice)).toFixed(2);

    })
    buttonTd.appendChild(sellBtn);

    tr.appendChild(buttonTd);
    tbody.appendChild(tr);

    clearInputFields();

  }


  function clearInputFields() {
    makeField.value = '';
    modelField.value = '';
    yearField.value = '';
    fuelField.value = '';
    originalCostField.value = '';
    sellingPriceField.value = '';
  }


}
