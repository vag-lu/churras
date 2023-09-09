export function useSessionStorage() {
  function setSessionStorage(tag: string, value: string) {
    sessionStorage.setItem(tag, value);
  }

  function getSessionStorage(tag: string) {
    return sessionStorage.getItem(tag);
  }

  return { setSessionStorage, getSessionStorage };
}
