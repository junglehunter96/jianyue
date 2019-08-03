//封装缓存方法

import Storage from "web-storage-cache";

const localStorage = new Storage();

function setLocalStorage(key, value) {
  return localStorage.set(key, value);
}
function getLocalStorage(key) {
  return localStorage.get(key);
}
function removeLocalStorage(key) {
  return localStorage.delete(key);
}
function clearLocalStorage() {
  return localStorage.clear();
}
function setBookObject(fileName, key, value) {
  let book = getLocalStorage(`${fileName}-info`);
  if (!book) {
    book = {};
  }
  book[key] = value;
  setLocalStorage(`${fileName}-info`, book);
}
function getBookObject(fileName, key) {
  let book = getLocalStorage(`${fileName}-info`);
  if (book) {
    return book[key];
  } else {
    return null;
  }
}
function getFontFamily(fileName) {
  return getBookObject(fileName, "fontFamily");
}
function saveFontFamily(fileName, font) {
  return setBookObject(fileName, "fontFamily", font);
}
function getMetadata(fileName) {
  return getBookObject(fileName, "metadata");
}

function saveMetadata(fileName, metadata) {
  setBookObject(fileName, "metadata", metadata);
}

function getCover(fileName) {
  return getBookObject(fileName, "cover");
}

function saveCover(fileName, cover) {
  setBookObject(fileName, "cover", cover);
}

function getTheme(fileName) {
  return getBookObject(fileName, "theme");
}

function saveTheme(fileName, theme) {
  setBookObject(fileName, "theme", theme);
}

function getFontSize(fileName) {
  return getBookObject(fileName, "fontSize");
}

function saveFontSize(fileName, fontSize) {
  setBookObject(fileName, "fontSize", fontSize);
}

function getHome() {
  return getLocalStorage("home");
}

function saveHome(home) {
  return setLocalStorage("home", home, 1800);
}

function getLocale() {
  return getLocalStorage("locale");
}

function saveLocale(locale) {
  return setLocalStorage("locale", locale);
}

function getLocation(fileName) {
  return getBookObject(fileName, "location");
}

function saveLocation(fileName, location) {
  setBookObject(fileName, "location", location);
}

function getBookmark(fileName) {
  return getBookObject(fileName, "bookmark");
}

function saveBookmark(fileName, bookmark) {
  setBookObject(fileName, "bookmark", bookmark);
}

function getReadTime(fileName) {
  return getBookObject(fileName, "time");
}

function saveReadTime(fileName, theme) {
  setBookObject(fileName, "time", theme);
}

function getProgress(fileName) {
  return getBookObject(fileName, "progress");
}

function saveProgress(fileName, progress) {
  setBookObject(fileName, "progress", progress);
}

function getNavigation(fileName) {
  return getBookObject(fileName, "navigation");
}

function saveNavigation(fileName, navigation) {
  setBookObject(fileName, "navigation", navigation);
}
const storage = {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  setBookObject,
  getBookObject,
  getFontFamily,
  saveFontFamily,
  getMetadata,
  saveMetadata,
  getCover,
  saveCover,
  getTheme,
  saveTheme,
  getFontSize,
  saveFontSize,
  getHome,
  saveHome,
  getLocale,
  saveLocale,
  getLocation,
  saveLocation,
  getBookmark,
  saveBookmark,
  getReadTime,
  saveReadTime,
  getProgress,
  saveProgress,
  getNavigation,
  saveNavigation
};
export default storage;
