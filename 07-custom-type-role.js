"use strict";
(() => {
    let user = {
        name: "Caezarie",
        age: 22,
        role: 'guest', // this is ok
        permission: ['read', 'write']
    };
    console.log(user);
    // ...
    function access(role) {
        console.log(`Access granted for ${role}`);
    }
    access('guest');
})();
