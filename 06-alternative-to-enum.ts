(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guess' | 'teacher' | 'student' = 'admin'

    userRole = 'admin' // this is ok
    // userRole = 'superadmin' // this is error. type "superadmin" is not assignable 

    function access(role: 'admin' | 'guess' | 'teacher' | 'student') {
        console.log(`Access granted for ${role}`)
    }
    access('teacher')
    access('student')

    access(userRole)
})()