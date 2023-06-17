let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr.filter((employee) => employee.profession === "developer");
  developers.map((developer) => console.log(developer));
}


function PrintDeveloperbyForEach() {
  const developers = [];
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });
  console.log(developers);
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  const newArray = [
    { id: 4, name: "emma", age: "22", profession: "developer" },
    { id: 5, name: "mike", age: "24", profession: "admin" },
    { id: 6, name: "lily", age: "21", profession: "developer" },
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
