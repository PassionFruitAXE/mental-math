export enum Storage {
  USER_INFO = "userInfo",
}

export function getItem<T = unknown>(key: string): T | undefined {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : void 0;
}

export function setItem(key: string, value: unknown) {
  if (value !== undefined && value !== null) {
    const valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
  } else {
    localStorage.removeItem(key);
  }
}
