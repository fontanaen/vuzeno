import { siteConfig } from "../../../app/lib/site-config";

type GitHubRepositoryResponse = {
  stargazers_count: number;
};

function getRepositoryPath() {
  const url = new URL(siteConfig.links.github);

  return url.pathname.replace(/^\/|\/$/g, "");
}

export default defineCachedEventHandler(
  async () => {
    const repositoryPath = getRepositoryPath();
    const repository = await $fetch<GitHubRepositoryResponse>(`https://api.github.com/repos/${repositoryPath}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "vuzeno-docs",
      },
    });

    return {
      stargazersCount: repository.stargazers_count,
    };
  },
  {
    maxAge: 60 * 60,
  },
);
