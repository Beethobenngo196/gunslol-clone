/**
 * lanyard.js
 * Kết nối Lanyard WebSocket cho giao diện thẻ Discord ngang
 */

// ĐIỀN DISCORD ID CỦA BẠN VÀO ĐÂY (Ví dụ: "842434768062775336")


document.addEventListener('DOMContentLoaded', () => {
    // ⚠️ QUAN TRỌNG: THAY BẰNG DISCORD ID CỦA BẠN
    const DISCORD_ID = "842434768062775336"; 

    const statusDot = document.getElementById('lanyard-status');
    const subText = document.getElementById('lanyard-subtext');
    const avatar = document.getElementById('lanyard-avatar');
    const username = document.getElementById('lanyard-username');

    const colors = {
        online: '#23a559',
        idle: '#f0b232',
        dnd: '#f23f43',
        offline: '#747f8d'
    };

    const ws = new WebSocket('wss://api.lanyard.rest/socket');

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        // Gửi lệnh theo dõi ID
        if (data.op === 1) {
            ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: DISCORD_ID } }));
            setInterval(() => ws.send(JSON.stringify({ op: 3 })), data.d.heartbeat_interval);
        }

        // Nhận dữ liệu cập nhật UI
        if (data.op === 0) {
            const userData = data.d;
            if (!userData || !userData.discord_user) return;

            // 1. Màu trạng thái (Online/Idle/DND/Offline)
            const status = userData.discord_status;
            statusDot.style.backgroundColor = colors[status];
            if (status === 'offline') {
                statusDot.classList.add('is-offline');
            } else {
                statusDot.classList.remove('is-offline');
            }

            // 2. Tự động lấy Avatar & Username Discord
            // (Nếu không muốn avatar/tên bị đổi theo discord, bạn có thể xóa 2 dòng này)
            avatar.src = `https://cdn.discordapp.com/avatars/${userData.discord_user.id}/${userData.discord_user.avatar}.png?size=512`;
            username.textContent = userData.discord_user.username;

            // 3. Subtext (Game/Spotify hoặc Offline/Online)
            const activities = userData.activities.filter(a => a.type !== 4);
            
            if (activities.length > 0) {
                const activity = activities[0];
                if (activity.name === 'Spotify') {
                    subText.textContent = `Listening to ${activity.details}`;
                } else {
                    subText.textContent = `Playing ${activity.name}`;
                }
            } else {
                // Nếu tắt Discord, nó sẽ nhảy thẳng vào đây và hiện chữ "Offline"
                subText.textContent = status === 'offline' ? 'Offline' : 'Online';
            }
        }
    };
});