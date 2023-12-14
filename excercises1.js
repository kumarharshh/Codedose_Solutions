const employees = [
  {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    occupation: 'Software Engineer',
    id : 'hcpl12330'
  },
  {
    name: 'Jane Smith',
    age: 25,
    city: 'San Francisco',
    occupation: 'Web Developer',
    id : 'hcpl12331'
  },
  {
    name: 'Bob Johnson',
    age: 40,
    city: 'Los Angeles',
    occupation: 'Data Scientist',
    id : 'hcpl12332'
  }
];

const updatedEmployees = employees.map((employee) => {
  if(employee.id==="hcpl12332")
  {
    employee.city = "Liverpool";
  }else
  {
    return employee;
  }
  return employee;
});

console.log(employees);