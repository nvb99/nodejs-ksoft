const student = {
    name : "Jason"
}

function hello (city, country) {
    console.info("Hello %s, %s, %s", this.name, city, country)
}

hello.call(student, "HCM City", "Viet Nam")

hello.apply(student, ["HCM City", "Viet Nam"])

var bound = hello.bind(student);
bound("HCM City", "Viet Nam")