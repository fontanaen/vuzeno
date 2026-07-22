export function fixImport(content: string) {
  const regexBase = /@vuzeno\/ui\/(components|lib|composables)\/([\w-]+(?:\/[\w-]+)*)/g;
  const regexRegistry = /@vuzeno\/registry\/(ui|legacy)\/([\w-]+(?:\/[\w-]+)*)/g;

  function baseReplacement(match: string, kind: string, subpath: string) {
    if (kind === "components") {
      return `@/components/ui/${subpath}`;
    }
    if (kind === "lib") {
      return `@/lib/${subpath}`;
    }

    return match;
  }

  function registryReplacement(_match: string, kind: string, subpath: string) {
    if (kind === "ui" || kind === "legacy") {
      return `@/components/${subpath}`;
    }

    return _match;
  }

  return content.replace(regexBase, baseReplacement).replace(regexRegistry, registryReplacement);
}
