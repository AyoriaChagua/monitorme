const timer = (interval = 1000) => {
  let timerId;
  let timeElapsed = 0;
  let inPause = false;

  const start = () => {
    timerId = setInterval(() => {
      if (!inPause) {
        timeElapsed += interval;
      }
    }, interval);
  };

  const pause = () => {
    clearInterval(timerId);
    inPause = true;
  };

  const resume = () => {
    inPause = false;
    start();
  };

  const stop = () => {
    clearInterval(timerId);
    return timeElapsed / 1000;
  };

  return {
    start,
    pause,
    resume,
    stop,
  };
};

const tabTimers = {};
const tabData = {};

const startTimerForTab = (tabId, url) => {
  const domain = extractDomainFromUrl(url);
  if (domain && domain.toLowerCase() !== 'google.com') {
    if (!tabTimers[tabId]) {
      tabTimers[tabId] = timer();
      tabTimers[tabId].start();
      console.log('comenzó ', domain)
      tabTimers[tabId].domain = domain;
    } else {
      tabTimers[tabId].pause();
      tabTimers[tabId].resume();
    }
  }
};

const pauseTimerForTab = (tabId) => {
  if (tabTimers[tabId]) {
    tabTimers[tabId].pause();
  }
};

const stopTimerForTab = async (tabId) => {
  if (tabTimers[tabId]) {
    const duration = tabTimers[tabId].stop();
    const name = tabTimers[tabId].domain;

    if (!tabData[name]) tabData[name] = { duration: 0, domain: name };

    tabData[name].duration = duration;
    delete tabTimers[tabId];
    const tabsForDomain = Object.values(tabTimers).filter((tab) => tab.domain === name);

    if (tabsForDomain.length === 0) {
      await sendDataToApi({ name, duration: tabData[name].duration, computer: 'AyoriaXCh01', type: 'Web Application' });
      delete tabData[name];
    }
  }
};

const extractDomainFromUrl = (url) => {
  const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/g);
  const domainWithProtocol = match ? match[0] : null;
  if (domainWithProtocol) {
    const domain = domainWithProtocol.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
    return domain;
  }
  return null;
};

const sendDataToApi = async (data) => {
  try {
    const response = await fetch('http://localhost:3999/api/monitor/usage-record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}  ${response.statusText}`);
    }

    await response.json();
  } catch (error) {
    console.error('Error sending data to API:', error);
  }
};

chrome.tabs.onActivated.addListener((activeInfo) => {
  const { tabId } = activeInfo;
  chrome.tabs.get(tabId, (tab) => {
    if (tab.url) startTimerForTab(tabId, tab.url);
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) startTimerForTab(tabId, changeInfo.url);
});

chrome.tabs.onRemoved.addListener((tabId) => stopTimerForTab(tabId));
