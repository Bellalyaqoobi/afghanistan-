// مدیریت داشبورد کاربران، فروشندگان و مدیران
document.addEventListener('DOMContentLoaded', function() {
    // بررسی نوع کاربر و نمایش داشبورد مناسب
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    if (!user.id) {
        // کاربر وارد نشده است، ریدایرکت به صفحه ورود
        window.location.href = 'login.html';
        return;
    }
    
    // بارگذاری اطلاعات داشبورد بر اساس نقش کاربر
    switch(user.role) {
        case 'admin':
            loadAdminDashboard();
            break;
        case 'seller':
            loadSellerDashboard();
            break;
        default:
            loadUserDashboard();
    }
});

function loadUserDashboard() {
    // بارگذاری اطلاعات کاربر عادی
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        welcomeMessage.textContent = `خوش آمدید ${user.name}`;
    }
    
    // بارگذاری آمار سفارشات
    loadUserStats();
    
    // بارگذاری آخرین سفارشات
    loadRecentOrders();
}

function loadSellerDashboard() {
    // بارگذاری اطلاعات فروشنده
    const sellerStats = {
        totalSales: 125400000,
        totalOrders: 245,
        totalProducts: 45,
        pendingOrders: 12
    };
    
    // نمایش آمار
    document.getElementById('totalSales').textContent = formatPrice(sellerStats.totalSales) + ' افغانی';
    document.getElementById('totalOrders').textContent = sellerStats.totalOrders;
    document.getElementById('totalProducts').textContent = sellerStats.totalProducts;
    document.getElementById('pendingOrders').textContent = sellerStats.pendingOrders;
    
    // بارگذاری نمودار فروش
    loadSalesChart();
}

function loadAdminDashboard() {
    // بارگذاری اطلاعات مدیریت
    const adminStats = {
        totalRevenue: 2458000000,
        totalUsers: 12450,
        totalSellers: 345,
        totalProducts: 12450,
        pendingVerifications: 23
    };
    
    // نمایش آمار
    document.getElementById('totalRevenue').textContent = formatPrice(adminStats.totalRevenue) + ' افغانی';
    document.getElementById('totalUsers').textContent = adminStats.totalUsers;
    document.getElementById('totalSellers').textContent = adminStats.totalSellers;
    document.getElementById('totalProducts').textContent = adminStats.totalProducts;
    document.getElementById('pendingVerifications').textContent = adminStats.pendingVerifications;
    
    // بارگذاری نمودارهای مدیریت
    loadAdminCharts();
}

function loadUserStats() {
    // آمار نمونه برای کاربر
    const stats = {
        totalOrders: 12,
        pendingOrders: 2,
        deliveredOrders: 8,
        cancelledOrders: 1
    };
    
    // نمایش آمار
    const statsContainer = document.getElementById('userStats');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-card">
                <h4>کل سفارشات</h4>
                <p class="stat-number">${stats.totalOrders}</p>
            </div>
            <div class="stat-card">
                <h4>سفارشات در انتظار</h4>
                <p class="stat-number">${stats.pendingOrders}</p>
            </div>
            <div class="stat-card">
                <h4>سفارشات تحویل شده</h4>
                <p class="stat-number">${stats.deliveredOrders}</p>
            </div>
            <div class="stat-card">
                <h4>سفارشات لغو شده</h4>
                <p class="stat-number">${stats.cancelledOrders}</p>
            </div>
        `;
    }
}

function loadRecentOrders() {
    // سفارشات نمونه
    const orders = [
        {id: 1001, date: '۱۴۰۲/۰۵/۱۵', total: 12500000, status: 'تحویل شده'},
        {id: 1002, date: '۱۴۰۲/۰۵/۱۸', total: 850000, status: 'در حال ارسال'},
        {id: 1003, date: '۱۴۰۲/۰۵/۲۰', total: 2850000, status: 'در انتظار پرداخت'}
    ];
    
    // نمایش سفارشات
    const ordersContainer = document.getElementById('recentOrders');
    if (ordersContainer) {
        let ordersHTML = '';
        
        orders.forEach(order => {
            const statusClass = getStatusClass(order.status);
            
            ordersHTML += `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.date}</td>
                    <td>${formatPrice(order.total)} افغانی</td>
                    <td><span class="status-badge ${statusClass}">${order.status}</span></td>
                    <td><a href="order-details.html?id=${order.id}" class="btn-view">مشاهده</a></td>
                </tr>
            `;
        });
        
        ordersContainer.innerHTML = ordersHTML;
    }
}

function getStatusClass(status) {
    switch(status) {
        case 'تحویل شده': return 'status-delivered';
        case 'در حال ارسال': return 'status-shipping';
        case 'در انتظار پرداخت': return 'status-pending';
        default: return 'status-default';
    }
}

function loadSalesChart() {
    // نمونه نمودار برای فروشندگان
    // در حالت واقعی از کتابخانهای مانند Chart.js استفاده میشود
    console.log('نمودار فروش بارگذاری شد');
}

function loadAdminCharts() {
    // نمونه نمودار برای مدیران
    console.log('نمودارهای مدیریت بارگذاری شد');
}
