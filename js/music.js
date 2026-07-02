/**
 * music.js
 * Quản lý Audio, các nút điều khiển Play/Pause, Volume, Mute và đồng bộ giao diện.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Lấy các phần tử DOM
    const audio = document.getElementById('bg-music');
    const playBtn = document.getElementById('btn-play');
    const muteBtn = document.getElementById('btn-mute');
    const volumeSlider = document.getElementById('volume-slider');
    const musicPlayer = document.querySelector('.music-player');

    // Lấy các icon SVG bên trong nút
    const playIcon = playBtn.querySelector('.play-icon');
    const pauseIcon = playBtn.querySelector('.pause-icon');
    const volumeIcon = muteBtn.querySelector('.volume-icon');
    const muteIcon = muteBtn.querySelector('.mute-icon');

    // Mặc định giao diện ở trạng thái Pause (vì nhạc chưa phát)
    musicPlayer.classList.add('paused');
    audio.volume = volumeSlider.value;

    /**
     * Sự kiện phát nhạc lần đầu (được gọi từ main.js sau khi click Enter)
     */
    document.addEventListener('startMusic', () => {
        audio.play().then(() => {
            // Nhạc phát thành công
            updatePlayState(true);
        }).catch((error) => {
            // Trình duyệt chặn Autoplay hoặc lỗi tải file nhạc
            console.warn("Trình duyệt chặn phát nhạc tự động hoặc không tìm thấy file nhạc:", error);
            updatePlayState(false);
        });
    });

    /**
     * Cập nhật giao diện theo trạng thái Play/Pause
     * @param {boolean} isPlaying - true nếu đang phát, false nếu đang dừng
     */
    function updatePlayState(isPlaying) {
        if (isPlaying) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            musicPlayer.classList.remove('paused'); // Kích hoạt sóng nhạc
        } else {
            pauseIcon.classList.add('hidden');
            playIcon.classList.remove('hidden');
            musicPlayer.classList.add('paused'); // Dừng sóng nhạc
        }
    }

    /**
     * Nút Play / Pause
     */
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            updatePlayState(true);
        } else {
            audio.pause();
            updatePlayState(false);
        }
    });

    /**
     * Kéo thanh trượt Volume
     */
    volumeSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        audio.volume = value;
        
        // Tự động tắt mute nếu người dùng kéo âm lượng lên lớn hơn 0
        if (value > 0 && audio.muted) {
            audio.muted = false;
            updateMuteState(false);
        }
        
        // Tự động bật mute nếu kéo về 0
        if (value == 0) {
            audio.muted = true;
            updateMuteState(true);
        }
    });

    /**
     * Cập nhật giao diện icon Mute
     * @param {boolean} isMuted 
     */
    function updateMuteState(isMuted) {
        if (isMuted) {
            volumeIcon.classList.add('hidden');
            muteIcon.classList.remove('hidden');
        } else {
            muteIcon.classList.add('hidden');
            volumeIcon.classList.remove('hidden');
        }
    }

    /**
     * Nút Mute / Unmute
     */
    muteBtn.addEventListener('click', () => {
        audio.muted = !audio.muted;
        updateMuteState(audio.muted);

        // Cập nhật thanh trượt về 0 nếu đang mute
        if (audio.muted) {
            volumeSlider.value = 0;
        } else {
            // Khôi phục lại mức âm lượng mặc định hoặc mức nhỏ nhất nếu kéo về 0 trước đó
            volumeSlider.value = audio.volume > 0 ? audio.volume : 0.5;
            audio.volume = volumeSlider.value;
        }
    });
});