let _notifier = null;
export function setNotifier(notifier) {
  _notifier = notifier;
}

function notifyUser(message) {
  if (_notifier) {
    _notifier(message);
  }
  console.log(message);
}

export async function executeApiRequest(uri, method, payload) {
  try {
    method = method || "GET";
    const response = await fetch(uri, {
      method,
      body: payload ? JSON.stringify(payload) : undefined,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      notifyUser(`server error ${response.status}`);
      return;
    }
    const returnValue = await response.json();
    return returnValue;
  } catch (err) {
    notifyUser(err);
  }
}
