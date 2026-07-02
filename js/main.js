/**
 * main.js
 * Xử lý các logic chính: Render dữ liệu từ config, Enter screen, UI transitions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render dữ liệu từ file config.js
    const usernameDisplay = document.getElementById('username-display');
    const songTitleDisplay = document.getElementById('song-title-display');
    const avatarChat = document.getElementById('avatar-chat');
    if (typeof userConfig !== 'undefined') {
        usernameDisplay.textContent = userConfig.username;
        songTitleDisplay.textContent = userConfig.songTitle;
        avatarChat.textContent = userConfig.avatarBubbleText;
    } else {
        console.error("Không tìm thấy file config.js hoặc biến userConfig");
    }

    // 2. Thiết lập các thành phần giao diện
    const enterScreen = document.getElementById('enter-screen');
    const mainContent = document.getElementById('main-content');
    const typingTextElement = document.getElementById('typing-text');
    
    // Bỏ social-section ra khỏi danh sách animatedElements vì đã xóa
    const animatedElements = document.querySelectorAll('.profile-section, .music-player');
    
    const bioText = typeof userConfig !== 'undefined' ? userConfig.bio : "Lỗi tải bio";
    let isTypingStarted = false;

    /**
     * Sự kiện click vào màn hình Enter
     */
    enterScreen.addEventListener('click', () => {
        enterScreen.style.opacity = '0';
        enterScreen.style.visibility = 'hidden';
        
        setTimeout(() => {
            enterScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            animatedElements.forEach((el) => {
                el.classList.add('fade-in-up');
            });

            if (!isTypingStarted) {
                isTypingStarted = true;
                setTimeout(typeWriter, 800);
            }

            document.dispatchEvent(new Event('startMusic'));
        }, 500);
    });

    /**
     * Hàm xử lý hiệu ứng gõ chữ (Typewriter Effect)
     */
    let charIndex = 0;
    function typeWriter() {
        if (charIndex < bioText.length) {
            typingTextElement.textContent += bioText.charAt(charIndex);
            charIndex++;
            const typingSpeed = Math.floor(Math.random() * (80 - 40 + 1)) + 40;
            setTimeout(typeWriter, typingSpeed);
        }
    }
});