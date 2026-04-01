(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guest' | 'teacher' | 'student'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }

    let user: User = {
        name: "Caezarie",
        age: 22,
        role: 'guest', // this is ok
        permission: ['read', 'write']
    }
    console.log(user)
    // ...

    function access(role: Role) {
        console.log(`Access granted for ${role}`)
    }
    access('guest')

})()