const tabTimers = {};

chrome.tabs.onActivated.addListener(async activeInfo => {
  const tabId = activeInfo.tabId;
  const tabInfo = await getCurrentTabInfo();
  if (tabInfo) {
    console.log("Información de la pestaña actual:", tabInfo);
  } else {
    console.log("No se pudo obtener la información de la pestaña actual.");
  }
  console.log("Pestaña activada:", tabId);
});

chrome.tabs.onRemoved.addListener( async (tabId, removeInfo) => {

  sendUsageRecord(tabId);
});

const sendUsageRecord = async (tabId) => {
  try {
    const tab = await getTabInfo(tabId);
    console.log(tab)
    if (tab) {
      const muted = !tab.mutedInfo.muted;
      await chrome.tabs.update(tabId, { muted });
      console.log(`La pestaña ${tab.id} está ${muted ? "silenciada" : "no silenciada"}`);
    } else {
      console.log(`No se encontró información para la pestaña ${tabId}.`);
    }
  } catch (error) {
    console.error(error);
  }
};

const getTabInfo = (tabId) => {
  return new Promise((resolve, reject) => {
    chrome.tabs.get(tabId, (tab) => {
      if (chrome.runtime.lastError) {
        resolve(null);
      } else {
        resolve(tab);
      }
    });
  });
};


const getCurrentTabInfo = () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError));
      } else {
        const currentTab = tabs[0];
        resolve(currentTab);
      }
    });
  });
};

