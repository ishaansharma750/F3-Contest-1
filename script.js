let employees = [];

function addEmployee(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;

    if (name === "" || profession === "" || age === "") {
        showMessage("Error: Please Make sure All the fields are filled before adding in an employee!", "error");
        return;
    }

    const employee = {
        id: employees.length + 1,
        name,
        profession,
        age: parseInt(age)
    };

    employees.push(employee);
    document.getElementById("employeeForm").reset();

    showEmployees();
    showMessage("Sucess: Employee added!", "success");
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    showEmployees();
}

function showEmployees() {
    const employeesDiv = document.getElementById("employees");
    employeesDiv.innerHTML = "";

    if (employees.length === 0) {
        const message = document.createElement("p");
        message.textContent = "You have 0 emplpoyees .";
        employeesDiv.appendChild(message);
    } else {
        employees.forEach(employee => {
            const employeeDiv = document.createElement("div");
            employeeDiv.className = "employee";
            employeeDiv.innerHTML = `
        <p><strong>Name:  </strong> ${employee.name}</p>
        <p><strong>Profession:  </strong> ${employee.profession}</p>
        <p><strong>Age:</strong> ${employee.age}</p>
        <button id="delete" onclick="deleteEmployee(${employee.id})">Delete</button>
      `;

            employeesDiv.appendChild(employeeDiv);
        });
    }
}

function showMessage(message, className) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.className = className;

    const form = document.getElementById("employeeForm");
    form.parentNode.insertBefore(messageDiv, form.nextSibling);

    setTimeout(function () {
        messageDiv.remove();
    }, 3000);
}

// document.getElementById("employeeForm").addEventListener("submit", addEmployee);
const button = document.getElementById('subbtn');
button.addEventListener('click', addEmployee);