document.addEventListener("DOMContentLoaded", function () {
  const agreeAll = document.getElementById("agreeAll");
  const checkboxes = document.querySelectorAll(
    ".agree-options input[type='checkbox']"
  );

  // 전체 동의 클릭 시 각 동의 사항들을 전체 선택 또는 해제
  agreeAll.addEventListener("change", function () {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = agreeAll.checked;
      updateCheckboxStyle(checkbox);
    });
  });

  // 각 동의 사항들을 선택 시 전체 동의 체크 여부 확인
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const allChecked = Array.from(checkboxes).every(function (cb) {
        return cb.checked;
      });
      agreeAll.checked = allChecked;
      updateCheckboxStyle(checkbox);
    });
  });

  // 체크박스 스타일 업데이트 함수
  function updateCheckboxStyle(checkbox) {
    const label = checkbox.nextElementSibling;
    label.classList.toggle("checked", checkbox.checked);
  }
});

//빨간색
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (!this.value) {
        this.nextElementSibling.style.display = "inline";
      } else {
        this.nextElementSibling.style.display = "none";
      }
    });
  });

  const confirmPassword = document.getElementById("confirm-password");
  confirmPassword.addEventListener("blur", function () {
    const password = document.getElementById("password").value;
    const confirmMessage = document.getElementById("confirm-message");
    if (password !== this.value) {
      confirmMessage.style.display = "inline";
    } else {
      confirmMessage.style.display = "none";
    }
  });
});

///
// 비밀번호와 비밀번호 확인 필드의 값이 일치하는지 확인하는 함수
function validatePassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var passwordError = document.getElementById("passwordError");

  if (password !== confirmPassword) {
    // 비밀번호와 비밀번호 확인이 일치하지 않을 때 메시지를 표시하고, 필드 스타일을 변경함
    passwordError.style.display = "block";
    document.getElementById("password").classList.add("error");
    document.getElementById("confirmPassword").classList.add("error");
    return false;
  } else {
    // 일치할 경우 메시지를 초기화하고 필드 스타일을 초기화함
    passwordError.style.display = "none";
    document.getElementById("password").classList.remove("error");
    document.getElementById("confirmPassword").classList.remove("error");
    return true;
  }
}

// 폼 제출 시 비밀번호 일치 여부를 확인하는 함수를 호출함
function validateForm() {
  return validatePassword();
}

// 비밀번호 확인 필드의 값이 변경될 때마다 비밀번호 일치 여부를 확인함
document
  .getElementById("confirmPassword")
  .addEventListener("input", validatePassword);

// 회원가입 시 필수 입력 필드 확인하는 함수
function validateSignup() {
  const inputs = document.querySelectorAll("input");
  let allFieldsFilled = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.nextElementSibling.innerText = "필수 입력 항목입니다.";
      allFieldsFilled = false;
    } else {
      input.nextElementSibling.innerText = ""; // 메시지 초기화
    }
  });

  return allFieldsFilled;
}

// 폼 제출 시 필수 입력 필드 확인 함수 호출
function submitForm() {
  if (!validateSignup()) {
    return false; // 필수 입력 항목이 비어있으면 폼 제출 막음
  }

  // 여기에 폼 제출 로직 추가
  return true;
}
