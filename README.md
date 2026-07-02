<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Cyberpunk Bio Link</title>
    <meta name="description" content="Personal Landing Page / Bio Link">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>

    <div id="cursor-dot" class="cursor-dot"></div>
    <div id="cursor-glow" class="cursor-glow"></div>

    <div class="background-container">
        <video id="bg-video" autoplay loop muted playsinline>
            <source src="assets/video/background.mp4" type="video/mp4">
        </video>
        <div class="bg-overlay"></div>
        <div class="bg-vignette"></div>
    </div>

    <canvas id="particles-canvas"></canvas>

    <audio id="bg-music" src="assets/audio/music.mp3" loop preload="auto"></audio>

    <div id="enter-screen" class="enter-screen">
        <h1 class="enter-text">Click Anywhere To Enter</h1>
    </div>

    <main id="main-content" class="main-content hidden">
        
        <div class="glass-card rgb-glow">
            
            <div class="profile-section">
                <div class="avatar-container">
                    <img src="assets/images/avatar.png" alt="User Avatar" class="avatar" onerror="this.src='https://via.placeholder.com/150/000000/FFFFFF/?text=Avatar'">
                    <div class="status-indicator">
                        <span class="ping"></span>
                        <span class="dot"></span>
                    </div>
                </div>
                <h1 class="username" data-text="Username">Username</h1>
                <div class="bio-container">
                    <p class="bio-text"><span id="typing-text"></span><span class="cursor-blink">_</span></p>
                </div>
            </div>

            <div class="social-section">
                <div class="social-grid">
                    
                    <a href="#" class="social-icon discord" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                        </svg>
                    </a>

                    <a href="#" class="social-icon github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>

                    <a href="#" class="social-icon facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>

                    <a href="#" class="social-icon instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                    </a>

                    <a href="#" class="social-icon spotify" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                    </a>

                    <a href="#" class="social-icon steam" target="_blank" rel="noopener noreferrer" aria-label="Steam">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M11.979 0C5.378 0 0 5.352 0 11.954 0 16.3 2.302 20.096 5.86 22.18l3.153-4.57c-.126-.264-.194-.555-.194-.863 0-1.161.942-2.103 2.102-2.103.111 0 .221.01.328.028l2.951-4.275V10.1c0-2.303 1.868-4.17 4.171-4.17S22.54 7.797 22.54 10.1s-1.868 4.17-4.17 4.17c-.896 0-1.728-.282-2.4-.761l-4.167 2.923c.01.077.017.155.017.234 0 1.161-.942 2.103-2.103 2.103-.984 0-1.81-.676-2.039-1.583l-3.38 4.901C7.458 23.364 9.645 24 11.98 24 18.618 24 24 18.636 24 11.986 24 5.371 18.618 0 11.979 0zM18.37 10.103c0-1.428-1.157-2.585-2.585-2.585-1.428 0-2.585 1.157-2.585 2.585 0 1.428 1.157 2.585 2.585 2.585 1.428 0 2.585-1.157 2.585-2.585zm-2.083 0c0 .276-.224.502-.502.502-.278 0-.502-.226-.502-.502 0-.278.224-.502.502-.502.278 0 .502.224.502.502zM10.932 16.766c0 .408-.332.74-.74.74-.407 0-.74-.332-.74-.74 0-.407.333-.74.74-.74.408 0 .74.333.74.74z"/>
                        </svg>
                    </a>

                    <a href="#" class="social-icon linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>

                    <a href="mailto:example@gmail.com" class="social-icon email" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </a>

                </div>
            </div>

            <div class="music-player">
                <div class="music-info">
                    <span class="music-icon">🎵</span>
                    <div class="music-details">
                        <p class="song-title">Song Title - Artist</p>
                        <div class="music-visualizer">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>
                </div>
                <div class="music-controls">
                    <button id="btn-play" class="control-btn" aria-label="Play/Pause">
                        <svg class="play-icon hidden" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        <svg class="pause-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    </button>
                    <button id="btn-mute" class="control-btn" aria-label="Mute/Unmute">
                        <svg class="volume-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                        <svg class="mute-icon hidden" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.11-.31 2.15-.82 3.06-1.47l2.67 2.67 1.27-1.27L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                    </button>
                    <div class="volume-slider-container">
                        <input type="range" id="volume-slider" min="0" max="1" step="0.01" value="0.5" class="volume-slider">
                    </div>
                </div>
            </div>

        </div>
    </main>

    <script src="js/particles.js"></script>
    <script src="js/cursor.js"></script>
    <script src="js/music.js"></script>
    <script src="js/main.js"></script>
</body>
</html> đây là code cũ nhưng tôi muốn xóa 8 cái mxh kia để chỗ đó viết tiểu sử