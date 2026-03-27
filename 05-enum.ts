(() => {
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        SuperAdmin = 'SuperAdmin',
        // Teacher,
        Teacher = 'Teacher',
        // Student,
        Student = 'Student',
        Admin = 'Admin',
    }

    // let userRole: Role = 0;
    let userRole: Role = Role.Student;
    console.log(userRole)
})()