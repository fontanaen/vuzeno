type GithubRepository = {
  stargazersCount: number;
};

export async function useGithubRepository() {
  const { data } = await useFetch<GithubRepository>("/api/github/repository", {
    key: "github-repository",
    getCachedData(key, nuxtApp) {
      // Prerender can bake a GitHub rate-limit error into the payload; skip it on the client so we refetch.
      if (import.meta.client && nuxtApp.payload._errors[key]) {
        return undefined;
      }

      return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
    },
  });

  const starCount = computed(() => {
    if (!data.value?.stargazersCount) {
      return null;
    }

    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(data.value.stargazersCount);
  });

  return {
    repository: data,
    starCount,
  };
}
