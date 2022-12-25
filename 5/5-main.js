const submitBtn = document.getElementById("submit");
const userInput = document.getElementById("user");
const userPara = document.getElementById("userPara");
const passInput = document.getElementById("pass");
const passPara = document.getElementById("passPara");
const repassInput = document.getElementById("repass");
const repassPara = document.getElementById("repassPara");
submitBtn.onclick = function() {
    const userName = userInput.value.trim();
    if (userName === "") {
        userPara.textContent = "الزامی";
        userInput.style.border = "2px solid red";
    } else {
        userPara.textContent = "";
        userInput.style.border = "1px solid black";
    }
    const passWordTrimmed = passInput.value.trim();
    const passWord = passInput.value;
    const passLenValid = passWord.length >= 8;
    const hasLetter = passWord.split('').some(function(char) {
        const ascii = char.charCodeAt(0);
        return ascii >= 65 && ascii <= 122;
    });
    const hasNum = passWord.split('').some(function(char) {
        const ascii = char.charCodeAt(0);
        return ascii >= 48 && ascii <= 57;
    });
    if (passWordTrimmed === "") {
        passPara.textContent = "الزامی";
        passInput.style.border = "2px solid red";
    } else if (!passLenValid || !hasLetter || !hasNum) {
        passPara.textContent = "رمز عبور باید شامل حداقل ۸ کاراکتر و حداقل یک عدد و یک حرف باشد";
        passInput.style.border = "2px solid red";
    } else {
        passPara.textContent = "";
        passInput.style.border = "1px solid black";
    }
    const repassWordTrimmed = repassInput.value.trim();
    const repassWord = repassInput.value;
    if (repassWordTrimmed === "") {
        repassPara.textContent = "الزامی";
        repassInput.style.border = "2px solid red";
    } else if (passWord !== repassWord) {
        repassPara.textContent = " رمزهای وارد شده یکسان نیستند ";
        repassInput.style.border = "2px solid red";
    } else {
        repassPara.textContent = "";
        repassInput.style.border = "1px solid black";
    }
}