/**
 * particles.js
 * Tạo hiệu ứng hạt bụi / đom đóm (Floating Lights) bay lơ lửng trên Canvas.
 * Hoạt động mượt mà ở 60FPS bằng requestAnimationFrame.
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');

    let particlesArray = [];
    const numberOfParticles = 70; // Số lượng hạt sáng

    // Thiết lập kích thước canvas bằng kích thước cửa sổ trình duyệt
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    setCanvasSize();

    // Lắng nghe sự kiện thay đổi kích thước cửa sổ
    window.addEventListener('resize', () => {
        setCanvasSize();
        initParticles(); // Khởi tạo lại hạt để tránh bị dồn vào một góc khi phóng to/thu nhỏ
    });

    // Class Hạt (Particle)
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5; // Kích thước ngẫu nhiên từ 0.5 đến 2.5px
            this.speedX = Math.random() * 0.6 - 0.3; // Tốc độ trôi ngang (-0.3 đến 0.3)
            this.speedY = Math.random() * 0.6 - 0.3; // Tốc độ trôi dọc (-0.3 đến 0.3)
            this.opacity = Math.random() * 0.5 + 0.1; // Độ mờ ngẫu nhiên (0.1 đến 0.6)
        }

        // Cập nhật vị trí của hạt
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Nếu hạt bay ra khỏi màn hình, cho nó xuất hiện lại ở cạnh đối diện để tạo vòng lặp vô tận
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        // Vẽ hạt lên canvas
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Khởi tạo mảng chứa các hạt
    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    // Vòng lặp animation
    function animateParticles() {
        // Xóa toàn bộ canvas ở mỗi khung hình để vẽ lại
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Cập nhật và vẽ từng hạt
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }

        // Gọi lại khung hình tiếp theo
        requestAnimationFrame(animateParticles);
    }

    // Bắt đầu chạy
    initParticles();
    animateParticles();
});