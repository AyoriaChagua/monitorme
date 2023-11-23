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
        tabs.forEach(function (tab) {
            let img = document.createElement('img');
            img.src = tab.favIconUrl;
            img.width = 25; 
            img.height = 25; 
            let li = document.createElement('li');
            li.appendChild(img);
            let titleSpan = document.createElement('span');
            titleSpan.textContent = tab.title;
            li.appendChild(titleSpan);
            tabList.appendChild(li);
        });
    });
});

let notificationCounter = 0;

function notifyMe() {
    if (Notification.permission === 'granted') {
        notificationCounter++; 
        document.getElementById('notificationSound').play();
        new Notification(`Notificación ${notificationCounter}`, {
            icon: '/img/icon-48.png'
        });

        let tabsCounter = document.getElementById('notificactionCounter');
        tabsCounter.querySelector('p').textContent = notificationCounter;
    }
}
