const sounds = {
    startup: new Audio("data:audio/wav;base64,UklGRnoAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YVAAAACAgICAgICAgICAgICAgICAgICAgICAeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4"),
    click: new Audio("data:audio/wav;base64,UklGRlQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YVAAAACAgICAgICAgICAgICAgICAgHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4"),
    logout: new Audio("data:audio/wav;base64,UklGRkoAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YVAAAACAgICAgICAgICAgICAgIB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4")
};

function playSound(type) {
    sounds[type].currentTime = 0;
    sounds[type].play().catch(() => {});
}

let currentUsername = "";
let currentPassword = "";

function login() {
    const userInp = document.getElementById('username').value;
    const passInp = document.getElementById('password').value;
    if (userInp && passInp) {
        currentUsername = userInp; currentPassword = passInp;
        playSound('startup');
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('desktop-screen').classList.remove('hidden');
        updateDisplay();
    }
}

function openApp(id) {
    playSound('click');
    document.getElementById(id).classList.remove('hidden');
}

function closeApp(id) {
    document.getElementById(id).classList.add('hidden');
}

function closeAll() {
    playSound('click');
    document.querySelectorAll('.window').forEach(win => win.classList.add('hidden'));
}

function updateDisplay() {
    document.getElementById('display-user').innerText = currentUsername;
    document.getElementById('display-pass').innerText = currentPassword;
}

function updateCredentials() {
    const u = document.getElementById('new-user').value;
    const p = document.getElementById('new-pass').value;
    if (u && p) {
        currentUsername = u; currentPassword = p;
        updateDisplay();
        playSound('click');
        closeApp('settings-app');
    }
}

function logout() {
    playSound('logout');
    location.reload(); // Quickest way to reset the whole state
}

// Clock logic
setInterval(() => {
    const clock = document.getElementById('clock');
    if (clock) {
        const now = new Date();
        clock.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}, 1000);