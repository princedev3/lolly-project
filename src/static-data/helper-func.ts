export function sanitizeQuery(query: string) {
  const decodedQuery = decodeURIComponent(query);

  const sanitizedQuery = decodedQuery.replace(/[^a-zA-Z0-9\s-]/g, "");

  return sanitizedQuery;
}
