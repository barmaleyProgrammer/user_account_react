

function togglePasswordVisibility() {

    const passwordInput = document.getElementById("pass");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";

    } else {
        passwordInput.type = "password";
    }
}
export default togglePasswordVisibility