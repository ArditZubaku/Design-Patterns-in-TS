export function filterEmployees(httpClient, filters) {
  try {
    filters = removeDuplicateFilters(filters);
    httpClient
      .get('/api/employees')
      .then((employees) => {
        let result = applyFilters(employees);
        let list = document.createElement('employees-list');
        result.forEach((employee) => {
          let employeeItem = document.createElement('li');
          employeeItem.innerHTML = `<strong>${employee.lastName}</strong> ${employee.firstName}`;
          list.appendChild(employeeItem);
        });
        result.forEach((employee) => {
          httpClient.post('/api/employees/record', employee);
        });
      })
      .catch((err) => {
        console.error('Something went wrong while fetching te employees');
        let messageBox = new MessageBox();
        messageBox.show('Something went wrong while fetching te employees');
      });
  } catch (err) {
    console.error('Application critical error');
    let messageBox = new MessageBox();
    messageBox.show('Application critical error');
  }
}

function removeDuplicateFilters(filters) {}

function applyFilters(filters): any[] {
  return [];
}

export class MessageBox {
  show(msg, content = "") {}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// SINGLE RESPONSIBILITY
///////////////////////////////////////////////////////////////////////////////////////////////////////////
class HttpClient {}

const httpClient = new HttpClient();
filterEmployeesFixed(httpClient, []).then((employees) => {
  displayEmployees(employees);
  recordEmployee(employees, httpClient);
});

export function filterEmployeesFixed(httpClient, filters) {
  try {
    filters = removeDuplicateFilters(filters);
    return httpClient
      .get('/api/employees')
      .then((employees) => {
        let result = applyFilters(employees);
        return result;
      })
      .catch((err) => {
        handleError(err, 'Something went wrong while processing the employees');
      });
  } catch (err) {
    handleError(err, 'Application critical error');
  }
}

function recordEmployee(result: any[], httpClient: any) {
  result.forEach((employee) => {
    httpClient.post('/api/employees/record', employee);
  });
}

function displayEmployees(result: any[]) {
  let list = document.createElement('employees-list');
  result.forEach((employee) => {
    let employeeItem = document.createElement('li');
    employeeItem.innerHTML = `<strong>${employee.lastName}</strong> ${employee.firstName}`;
    list.appendChild(employeeItem);
  });
}

function handleError(err, msg) {
  console.error(msg, err);
  let messageBox = new MessageBox();
  messageBox.show(msg);
}
