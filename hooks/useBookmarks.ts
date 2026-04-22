import { useState } from 'react';

export const useBookmarks = () => {
  const [items, setItems] = useState<string[]>([]);
  const toggle = (id: string) => setItems((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  return { items, toggle };
};
