
function solve() {

    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const birthday = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');

    const tbody = document.getElementById('tbody');

    const budget = document.getElementById('sum');

    const addWorkerButton = document.getElementById('add-worker');

    addWorkerButton.addEventListener('click', (e) => {

        if (firstName.value != '' && lastName.value != '' && email.value != ''
            && birthday.value != '' && position.value != '' && salary.value != '') {
            hirePerson(e);
            clearInputFields();
        }
    });



    function hirePerson(e) {

        e.preventDefault();

        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const emailValue = email.value;
        const birthValue = birthday.value;
        const positionValue = position.value;
        const salaryValue = salary.value;


        let tr = document.createElement('tr');
        let firstNameTd = document.createElement('td');
        firstNameTd.textContent = firstNameValue;
        tr.appendChild(firstNameTd);

        let lastNameTd = document.createElement('td');
        lastNameTd.textContent = lastNameValue;
        tr.appendChild(lastNameTd);

        let emailTd = document.createElement('td');
        emailTd.textContent = emailValue;
        tr.appendChild(emailTd);

        let birthdayTd = document.createElement('td');
        birthdayTd.textContent = birthValue;
        tr.appendChild(birthdayTd);

        let positionTd = document.createElement('td');
        positionTd.textContent = positionValue;
        tr.appendChild(positionTd);

        let salaryTd = document.createElement('td');
        salaryTd.textContent = salaryValue;
        tr.appendChild(salaryTd);

        let buttonTd = document.createElement('td');

        let firedButton = document.createElement('button');
        firedButton.classList.add('fired');
        firedButton.textContent = 'Fired';
        firedButton.addEventListener('click', () => {
            tr.remove();

            budget.textContent = (Number(budget.textContent) - Number(salaryValue)).toFixed(2);

        })
        buttonTd.appendChild(firedButton);

        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            tr.remove();
            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            email.value  = emailValue;
            birthday.value  = birthValue;
            position.value  = positionValue;
            salary.value  = salaryValue;

            budget.textContent = (Number(budget.textContent) - Number(salaryValue)).toFixed(2);

        })
        buttonTd.appendChild(editButton);

        tr.appendChild(buttonTd);

        tbody.appendChild(tr);

        budget.textContent = (Number(budget.textContent) + Number(salaryValue)).toFixed(2);
    }

    function clearInputFields() {
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birthday.value = '';
        position.value = '';
        salary.value = '';
    }

}

solve();
