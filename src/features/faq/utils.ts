import { FAQ_GROUPS } from './constants';

export function getFaqItemsByCategory(category: string, searchQuery: string) {
  const items = FAQ_GROUPS.find((group) => group.category === category)?.items || [];
  const normalizedQuery = searchQuery.trim().toLowerCase();

  if (!normalizedQuery) {
    return items;
  }

  return items.filter((item) => {
    const searchableText = `${item.question} ${item.answer}`.toLowerCase();
    return searchableText.includes(normalizedQuery);
  });
}
