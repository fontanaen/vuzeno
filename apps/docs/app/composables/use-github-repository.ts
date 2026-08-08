export function useGithubRepository() {
  const { data } = useLazyFetch("https://ungh.cc/repos/fontanaen/vuzeno");

  const starCount = computed(() => {
    const count = (data.value as { repo?: { stars?: number } } | null)?.repo?.stars;
    if (!count) {
      return null;
    }

    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toLocaleString();
  });

  return {
    starCount,
  };
}
