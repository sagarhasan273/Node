let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let props in user) {
    console.log( props );
}