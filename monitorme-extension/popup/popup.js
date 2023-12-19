document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('notificationButton').addEventListener('click', function () {
        notifyMe();
    });

    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== 'granted')
        Notification.requestPermission();

    chrome.tabs.query({}, function (tabs) {
        let tabList = document.getElementById('tabList');
        let tabsCounter = document.getElementById('tabCounter');
        tabsCounter.querySelector('p').textContent = tabs.length;
        tabs.forEach(function (tab, index) {
            let img = document.createElement('img');
            img.src = tab.favIconUrl;
            img.width = 25;
            img.height = 25;

            let li = document.createElement('li');
            li.appendChild(img);

            let titleSpan = document.createElement('span');
            titleSpan.textContent = tab.title;
            li.appendChild(titleSpan);

            li.addEventListener('click', function () {
                chrome.tabs.update(tab.id, { active: true });
            });

            tabList.appendChild(li);
        });
    });
    chrome.storage.sync.get("notification").then(res => {
        let tabsCounter = document.getElementById('notificactionCounter');
        tabsCounter.querySelector('p').textContent = res.notification;
    });
});

let notificationCounter = 0;
chrome.storage.sync.get("notification").then(res => {
    if (res.notification >= 0) {
        notificationCounter = res.notification
    }
});

function notifyMe() {
    if (Notification.permission === 'granted') {
        notificationCounter++;
        document.getElementById('notificationSound').play();
        new Notification(`Notificación ${notificationCounter}`, {
            icon: '/img/icon-48.png'
        });
        chrome.storage.sync.set({ notification: notificationCounter });

        let tabsCounter = document.getElementById('notificactionCounter');
        tabsCounter.querySelector('p').textContent = notificationCounter;
    }
}
