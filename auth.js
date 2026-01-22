// مدیریت ورود و ثبتنام
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // اعتبارسنجی ساده
    if (!email || !password) {
        showNotification('لطفاً تمام فیلدها را پر کنید.', 'error');
        return;
    }
    
    // در حالت واقعی، اینجا درخواست AJAX به سرور ارسال میشود
    // برای نمونه، یک کاربر فرضی ایجاد میکنیم
    const user = {
        id: 1,
        name: "محمد رضایی",
        email: email,
        role: "user"
    };
    
    // ذخیره اطلاعات کاربر (در حالت واقعی باید ایمنتر باشد)
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // نمایش پیام موفقیت
    showNotification('ورود با موفقیت انجام شد.', 'success');
    
    // ریدایرکت به صفحه اصلی بعد از 1 ثانیه
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const terms = document.getElementById('terms').checked;
    
    // اعتبارسنجی
    if (!name || !email || !phone || !password || !confirmPassword) {
        showNotification('لطفاً تمام فیلدها را پر کنید.', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('رمز عبور و تکرار آن مطابقت ندارند.', 'error');
        return;
    }
    
    if (!terms) {
        showNotification('لطفاً قوانین و مقررات را بپذیرید.', 'error');
        return;
    }
    
    // در حالت واقعی، اینجا درخواست AJAX به سرور ارسال میشود
    // برای نمونه، یک کاربر فرضی ایجاد میکنیم
    const user = {
        id: 2,
        name: name,
        email: email,
        phone: phone,
        role: "user"
    };
    
    // ذخیره اطلاعات کاربر (در حالت واقعی باید ایمنتر باشد)
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // نمایش پیام موفقیت
    showNotification('ثبتنام با موفقیت انجام شد.', 'success');
    
    // ریدایرکت به صفحه اصلی بعد از 1 ثانیه
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}
