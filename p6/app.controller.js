angular.module('studentApp')
    .controller('StudentController', function ($scope) {
        var vm = this;
        // Sample Student Data
        vm.students = [
            { name: 'Avinash', email: 'avinash@example.com', phone: '123-456-7890' },
            { name: 'John Doe', email: 'john@example.com', phone: '987-654-3210' }
        ];
        // Add New Student
        vm.addStudent = function () {
            if (vm.newStudent) {
                vm.students.push(vm.newStudent);
                vm.newStudent = {}; // Reset input fields
            }
        };
        // Edit Student
        vm.editStudent = function (index) {
            vm.newStudent = angular.copy(vm.students[index]);
            vm.students.splice(index, 1); // Remove current entry to avoid duplication
        };
        // Delete Student
        vm.deleteStudent = function (index) {
            vm.students.splice(index, 1);
        };
    });