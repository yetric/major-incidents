export function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'War': 'bg-red-500/20 text-red-300 border-red-500/30',
    'Terrorism': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'Political': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Science & Technology': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Disaster': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Natural Disaster': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  };
  return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
}
