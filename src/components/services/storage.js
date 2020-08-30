
export function getItem(key, defaultValue) {
    let item = localStorage.getItem(key);
    if (item) {
        item = JSON.parse(item);
        return item;
    }
    return defaultValue;
}
export function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
export function removeItem(key) {
    localStorage.removeItem(key);
}

export function getSessionItem(key, defaultValue) {
    let item = sessionStorage.getItem(key);
    if (item) {
        item = JSON.parse(item);
        return item;
    }
    return defaultValue;
}
export function setSessionItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}
export function removeSessionItem(key) {
    sessionStorage.removeItem(key)
}