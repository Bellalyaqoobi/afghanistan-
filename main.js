// دادههای نمونه برای محصولات
const productsData = {
    featured: [
        {
            id: 1,
            name: "گوشی موبایل سامسونگ گلکسی A32",
            price: 12500000,
            originalPrice: 14500000,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.5,
            ratingCount: 124,
            seller: "فروشگاه الکترونیک پاسارگاد",
            badge: "پرفروش"
        },
        {
            id: 2,
            name: "لباس مجلسی زنانه طرح دار",
            price: 850000,
            originalPrice: 1200000,
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.8,
            ratingCount: 89,
            seller: "بوتیک مد و زیبایی",
            badge: "جدید"
        },
        {
            id: 3,
            name: "ماشین لباسشویی ال جی 8 کیلوگرم",
            price: 18500000,
            originalPrice: 22000000,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.6,
            ratingCount: 234,
            seller: "فروشگاه لوازم خانگی",
            badge: "تخفیف ویژه"
        },
        {
            id: 4,
            name: "کفش ورزشی مردانه نایک",
            price: 1250000,
            originalPrice: 1800000,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.3,
            ratingCount: 56,
            seller: "فروشگاه ورزشی",
            badge: null
        },
        {
            id: 5,
            name: "لپتاپ اچ پی 15 اینچ",
            price: 24500000,
            originalPrice: 28500000,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.7,
            ratingCount: 167,
            seller: "فروشگاه کامپیوتر",
            badge: "پیشنهاد ویژه"
        }
    ],
    dailyDeals: [
        {
            id: 6,
            name: "هدفون بلوتوثی سونی",
            price: 950000,
            originalPrice: 1500000,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.4,
            ratingCount: 78,
            seller: "فروشگاه الکترونیک پاسارگاد",
            badge: "فروش ویژه"
        },
        {
            id: 7,
            name: "ساعت مچی مردانه",
            price: 1850000,
            originalPrice: 2500000,
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.9,
            ratingCount: 45,
            seller: "فروشگاه اکسسوری",
            badge: "فروش ویژه"
        },
        {
            id: 8,
            name: "عطر مردانه آرمانی",
            price: 1250000,
            originalPrice: 1850000,
            image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.6,
            ratingCount: 112,
            seller: "فروشگاه سلامت و زیبایی",
            badge: "فروش ویژه"
        },
        {
            id: 9,
            name: "کیف دستی زنانه",
            price: 650000,
            originalPrice: 950000,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.2,
            ratingCount: 34,
            seller: "بوتیک مد و زیبایی",
            badge: "فروش ویژه"
        },
        {
            id: 10,
            name: "جاروبرقی فیلیپس",
            price: 2850000,
            originalPrice: 3500000,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            rating: 4.7,
            ratingCount: 189,
            seller: "فروشگاه لوازم خانگی",
            badge: "فروش ویژه"
        }
    ]
};

// دادههای سبد خرید
let cart = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // لود محصولات
    loadFeaturedProducts();
    loadDailyDeals();
    
    // تنظیم تایمر پیشنهادهای روز
    setupCountdownTimer();
    
    // راهاندازی اسلایدر
    setupSlider();
    
    // رویدادهای کلیک
    setupEventListeners();
    
    // نمایش اطلاعات کاربر
    loadUserInfo();
});

// لود محصولات پرفروش
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    container.innerHTML = '';
    
    productsData.featured.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const productHTML = `
            <div class="product-card">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        <span class="original-price">${formatPrice(product.originalPrice)} افغانی</span>
                        <span class="current-price">${formatPrice(product.price)} افغانی</span>
                        ${discount > 0 ? `<span class="discount">${discount}%</span>` : ''}
                    </div>
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStarRating(product.rating)}
                        </div>
                        <span class="rating-count">(${product.ratingCount})</span>
                    </div>
                    <div class="product-seller">
                        فروشنده: ${product.seller}
                    </div>
                    <div class="product-actions">
                        <button class="btn-wishlist" onclick="addToWishlist(${product.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="btn-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> افزودن به سبد
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += productHTML;
    });
}

// لود پیشنهادهای روز
function loadDailyDeals() {
    const container = document.getElementById('daily-deals');
    if (!container) return;
    
    container.innerHTML = '';
    
    productsData.dailyDeals.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const productHTML = `
            <div class="product-card">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        <span class="original-price">${formatPrice(product.originalPrice)} افغانی</span>
                        <span class="current-price">${formatPrice(product.price)} افغانی</span>
                        ${discount > 0 ? `<span class="discount">${discount}%</span>` : ''}
                    </div>
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStarRating(product.rating)}
                        </div>
                        <span class="rating-count">(${product.ratingCount})</span>
                    </div>
                    <div class="product-seller">
                        فروشنده: ${product.seller}
                    </div>
                    <div class="product-actions">
                        <button class="btn-wishlist" onclick="addToWishlist(${product.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="btn-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> افزودن به سبد
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += productHTML;
    });
}

// ساخت رتبهبندی ستارهای
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// فرمت قیمت
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// تنظیم تایمر پیشنهادهای روز
function setupCountdownTimer() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!hoursElement || !minutesElement || !secondsElement) return;
    
    // تنظیم تایمر به 12 ساعت آینده
    let hours = 12;
    let minutes = 45;
    let seconds = 30;
    
    function updateTimer() {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                }
            }
        }
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    // بهروزرسانی تایمر هر ثانیه
    setInterval(updateTimer, 1000);
}

// راهاندازی اسلایدر
function setupSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // مخفی کردن همه اسلایدها
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // غیرفعال کردن همه نقاط
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // نمایش اسلاید جاری
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // اسلاید بعدی
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }
    
    // اسلاید قبلی
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        showSlide(prevIndex);
    }
    
    // رویدادهای کلیک
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // رویدادهای نقاط
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // تغییر خودکار اسلایدها
    setInterval(nextSlide, 5000);
}

// تنظیم رویدادهای کلیک
function setupEventListeners() {
    // منوی کاربر
    const userDropdownTrigger = document.getElementById('user-dropdown-trigger');
    const userDropdown = document.getElementById('user-dropdown');
    
    if (userDropdownTrigger && userDropdown) {
        userDropdownTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
        });
        
        // بستن منو با کلیک بیرون
        document.addEventListener('click', function() {
            userDropdown.style.display = 'none';
        });
    }
    
    // جستجو
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // سبد خرید
    const cartBtn = document.querySelector('.cart-btn');
    const cartModal = document.getElementById('cartModal');
    const closeCartModal = document.getElementById('closeCartModal');
    
    if (cartBtn && cartModal) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openCartModal();
        });
    }
    
    if (closeCartModal && cartModal) {
        closeCartModal.addEventListener('click', function() {
            closeCartModalFunc();
        });
    }
    
    // بستن مودال با کلیک بیرون
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            closeCartModalFunc();
        }
    });
    
    // پنلهای مدیریت
    const adminPanel = document.getElementById('adminPanel');
    const sellerPanel = document.getElementById('sellerPanel');
    const userPanel = document.getElementById('userPanel');
    
    // نمایش پنل مدیریت برای مدیران
    const adminLink = document.querySelector('.admin-link');
    if (adminLink) {
        adminLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (adminPanel) {
                adminPanel.style.display = 'block';
                if (sellerPanel) sellerPanel.style.display = 'none';
                if (userPanel) userPanel.style.display = 'none';
            }
        });
    }
    
    // بستن پنلها
    const closeAdminPanel = document.getElementById('closeAdminPanel');
    const closeSellerPanel = document.getElementById('closeSellerPanel');
    const closeUserPanel = document.getElementById('closeUserPanel');
    
    if (closeAdminPanel && adminPanel) {
        closeAdminPanel.addEventListener('click', function() {
            adminPanel.style.display = 'none';
        });
    }
    
    if (closeSellerPanel && sellerPanel) {
        closeSellerPanel.addEventListener('click', function() {
            sellerPanel.style.display = 'none';
        });
    }
    
    if (closeUserPanel && userPanel) {
        closeUserPanel.addEventListener('click', function() {
            userPanel.style.display = 'none';
        });
    }
    
    // خروج
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    }
}

// جستجو
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const searchCategory = document.getElementById('search-category');
    
    if (searchInput && searchInput.value.trim()) {
        const query = searchInput.value.trim();
        const category = searchCategory.value;
        
        // در حالت واقعی، اینجا درخواست AJAX به سرور ارسال میشود
        alert(`جستجوی "${query}" در دسته "${searchCategory.options[searchCategory.selectedIndex].text}" انجام شد.`);
        
        // نمونه: انتقال به صفحه نتایج جستجو
        // window.location.href = `search.html?q=${encodeURIComponent(query)}&category=${category}`;
    } else {
        alert('لطفاً عبارت جستجو را وارد کنید.');
        searchInput.focus();
    }
}

// اضافه کردن به سبد خرید
function addToCart(productId) {
    // پیدا کردن محصول
    let product = null;
    
    // جستجو در محصولات پرفروش
    product = productsData.featured.find(p => p.id === productId);
    
    // اگر پیدا نشد، در پیشنهادهای روز جستجو کن
    if (!product) {
        product = productsData.dailyDeals.find(p => p.id === productId);
    }
    
    if (!product) {
        console.error('محصول یافت نشد');
        return;
    }
    
    // بررسی آیا محصول از قبل در سبد خرید وجود دارد
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // بهروزرسانی تعداد سبد خرید
    updateCartCount();
    
    // نمایش پیام موفقیت
    showNotification(`"${product.name}" به سبد خرید اضافه شد.`, 'success');
    
    // اگر سبد خرید باز است، آن را بهروزرسانی کن
    if (document.getElementById('cartModal').style.display === 'flex') {
        updateCartModal();
    }
}

// بهروزرسانی تعداد سبد خرید
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

// باز کردن مودال سبد خرید
function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        updateCartModal();
        cartModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// بستن مودال سبد خرید
function closeCartModalFunc() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// بهروزرسانی مودال سبد خرید
function updateCartModal() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartFooter = document.getElementById('cartFooter');
    const totalPriceElement = document.querySelector('.total-price');
    
    if (!cartItemsContainer || !emptyCartMessage || !cartFooter || !totalPriceElement) return;
    
    if (cart.length === 0) {
        // سبد خرید خالی است
        cartItemsContainer.innerHTML = '';
        emptyCartMessage.style.display = 'block';
        cartFooter.style.display = 'none';
    } else {
        // نمایش آیتمهای سبد خرید
        emptyCartMessage.style.display = 'none';
        cartFooter.style.display = 'block';
        
        cartItemsContainer.innerHTML = '';
        
        let totalPrice = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            
            const itemHTML = `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)} افغانی</div>
                        <div class="cart-item-actions">
                            <button class="remove-item" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i> حذف
                            </button>
                            <div class="quantity-control">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                                <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            cartItemsContainer.innerHTML += itemHTML;
        });
        
        // نمایش جمع کل
        totalPriceElement.textContent = `${formatPrice(totalPrice)} افغانی`;
    }
}

// حذف از سبد خرید
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
    showNotification('محصول از سبد خرید حذف شد.', 'info');
}

// بهروزرسانی تعداد محصول در سبد خرید
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        // اگر تعداد صفر یا منفی شد، محصول را حذف کن
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        
        updateCartCount();
        updateCartModal();
    }
}

// اضافه کردن به لیست علاقهمندیها
function addToWishlist(productId) {
    // در حالت واقعی، اینجا درخواست AJAX به سرور ارسال میشود
    showNotification('محصول به لیست علاقهمندیها اضافه شد.', 'success');
}

// نمایش اطلاعیه
function showNotification(message, type = 'info') {
    // ایجاد عنصر اطلاعیه
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // استایلهای اطلاعیه
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10002;
        min-width: 300px;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // استایل محتوا
    const contentStyle = `
        display: flex;
        align-items: center;
        flex: 1;
    `;
    
    notification.querySelector('.notification-content').style.cssText = contentStyle;
    
    // دکمه بستن
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        margin-right: 10px;
    `;
    
    // رویداد بستن
    closeBtn.addEventListener('click', function() {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    // افزودن به صفحه
    document.body.appendChild(notification);
    
    // حذف خودکار بعد از 5 ثانیه
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
    
    // افزودن انیمیشنها به استایلها
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(-100%);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// لود اطلاعات کاربر
function loadUserInfo() {
    // در حالت واقعی، اینجا درخواست AJAX به سرور ارسال میشود
    // برای نمونه، فرض میکنیم کاربر وارد شده است
    const user = {
        name: "محمد رضایی",
        role: "admin", // میتواند user، seller یا admin باشد
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    };
    
    // نمایش پنلهای مربوطه بر اساس نقش کاربر
    const adminPanel = document.getElementById('adminPanel');
    const sellerPanel = document.getElementById('sellerPanel');
    const userPanel = document.getElementById('userPanel');
    
    if (adminPanel && user.role === 'admin') {
        adminPanel.style.display = 'block';
    }
    
    if (sellerPanel && (user.role === 'seller' || user.role === 'admin')) {
        sellerPanel.style.display = 'block';
    }
    
    if (userPanel) {
        userPanel.style.display = 'block';
    }
    
    // بهروزرسانی منوی کاربر
    const userAvatar = document.querySelector('.user-avatar i');
    if (userAvatar && user.avatar) {
        userAvatar.style.display = 'none';
        userAvatar.parentElement.innerHTML = `<img src="${user.avatar}" alt="${user.name}" style="width: 40px; height: 40px; border-radius: 50%;">`;
    }
}

// خروج از حساب کاربری
function logout() {
    if (confirm('آیا میخواهید از حساب کاربری خود خارج شوید؟')) {
        // در حالت واقعی، اینجا درخواست AJAX به سرور ارسال میشود
        // و کوکیهای session پاک میشوند
        
        // پاک کردن دادههای محلی
        cart = [];
        updateCartCount();
        
        // پنهان کردن پنلها
        const adminPanel = document.getElementById('adminPanel');
        const sellerPanel = document.getElementById('sellerPanel');
        const userPanel = document.getElementById('userPanel');
        
        if (adminPanel) adminPanel.style.display = 'none';
        if (sellerPanel) sellerPanel.style.display = 'none';
        if (userPanel) userPanel.style.display = 'none';
        
        // ریدایرکت به صفحه ورود
        window.location.href = 'login.html';
    }
}
