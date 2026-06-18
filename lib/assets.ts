const githubPagesBasePath = process.env.GITHUB_PAGES === "true" ? "/_Portfolio" : "";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? githubPagesBasePath;

export const basePath = configuredBasePath.replace(/\/$/, "");

export function assetPath(path: string) {
  if (/^(https?:)?\/\//.test(path)) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
