/**
 * cursor.js
 * Xử lý Custom Cursor (Dot & Glow) và các hiệu ứng khi hover.
 */

document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorGlow = document.getElementById('cursor-glow');

    // Tắt custom cursor nếu phát hiện người dùng đang dùng thiết bị cảm ứng (Mobile/Tablet)
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
        return;
    }

    // Khởi tạo vị trí ban đầu ở giữa màn hình
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Vị trí của vòng sáng (glow)
    let glowX = mouseX;
    let glowY = mouseY;

    /**
     * Bắt sự kiện di chuyển chuột
     */
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Dấu chấm nhỏ (dot) cập nhật vị trí ngay lập tức (không có độ trễ)
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
        
        // Sửa lại transform để tâm của dot khớp với đầu mũi tên chuột
        cursorDot.style.transform = `translate(-50%, -50%)`;
    });

    /**
     * Tạo hiệu ứng trễ (trailing effect) cho vòng sáng bằng requestAnimationFrame
     */
    function animateGlow() {
        // Thuật toán LERP (Linear Interpolation) 
        // Giúp vòng sáng di chuyển về phía chuột với tốc độ bằng 20% khoảng cách hiện tại
        glowX += (mouseX - glowX) * 0.2;
        glowY += (mouseY - glowY) * 0.2;

        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;
        cursorGlow.style.transform = `translate(-50%, -50%)`;

        requestAnimationFrame(animateGlow);
    }

    // Bắt đầu vòng lặp animation
    animateGlow();

    /**
     * Lắng nghe sự kiện hover vào các phần tử có thể tương tác
     */
    const clickables = document.querySelectorAll('a, button');
    
    clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursorGlow.classList.add('hover-active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorGlow.classList.remove('hover-active');
        });
    });
});