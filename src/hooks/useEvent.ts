import { useEffect } from "react";

export default function useEvent(callback: () => void) {
  useEffect(() => {
    callback();
  }, []);
}
