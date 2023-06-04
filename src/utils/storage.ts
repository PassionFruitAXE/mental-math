export enum Storage {
  USER_INFO = "userInfo",
}

export function getItem<T = unknown>(key: string): T | undefined {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : void 0;
}

export function setItem(key: string, value: unknown) {
  if (value !== undefined && value !== null) {
    const valueString = JSON.stringify(value);
    sessionStorage.setItem(key, valueString);
  } else {
    sessionStorage.removeItem(key);
  }
}
