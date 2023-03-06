var firstNa = document.querySelector("#validationServer01")
var lastNa = document.querySelector("#validationServer02")
var email = document.querySelector("#email")
var subject = document.querySelector("#subjectInput")
var textEra = document.querySelector("#validationTextarea");


firstNa.addEventListener("focusout", () => {
    validation(1);
})
lastNa.addEventListener("focusout", () => {
    validation(2);
})
email.addEventListener("focusout", () => {
    validation(3);
})
subject.addEventListener("focusout", () => {
    validation(4);
})
textEra.addEventListener("focusout", () => {
    validation(5);
})


validation = (number) => {
    switch (number) {
        case 1:
            if (firstNa.value == "") {
                firstNa.classList.remove("is-valid");
                firstNa.classList.add("is-invalid")
            }
            else {
                firstNa.classList.remove("is-invalid");
                firstNa.classList.add("is-valid");

            }; break;
        case 2:
            if (lastNa.value == "") {
                lastNa.classList.remove("is-valid");
                lastNa.classList.add("is-invalid")
            }
            else {
                lastNa.classList.remove("is-invalid");
                lastNa.classList.add("is-valid");

            }; break;
        case 3:
            if (email.value == "") {
                email.classList.remove("is-valid");
                email.classList.add("is-invalid")
            }
            else {
                if (email.value.includes("@")) {
                    email.classList.remove("is-invalid");
                    email.classList.add("is-valid");
                }
                else {
                    email.classList.add("is-invalid");
                    email.classList.remove("is-valid");
                }

            }; break;
        case 4:
            if (subject.value == "") {
                subject.classList.remove("is-valid");
                subject.classList.add("is-invalid")
            }
            else {
                subject.classList.remove("is-invalid");
                subject.classList.add("is-valid");
            }; break;
        case 5:
            if (textEra.value == "") {
                textEra.classList.remove("is-valid");
                textEra.classList.add("is-invalid")
            }
            else {
                textEra.classList.remove("is-invalid");
                textEra.classList.add("is-valid");
            }; break;
        default: break;
    }
}



