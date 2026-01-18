"use server";

// Suggestions are no longer persisted - return empty array
export async function getSuggestions({ documentId }: { documentId: string }) {
  return [];
}
