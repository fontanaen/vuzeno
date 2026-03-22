export function fixImport(content: string) {
  const regexBase = /@vuzeno\/ui\/(components|lib|composables)\/([\w-]+(?:\/[\w-]+)*)/g;
  const regexRegistry = /@vuzeno\/registry\/(ui)\/([\w-]+(?:\/[\w-]+)*)/g;

  function baseReplacement(match: string, kind: string, subpath: string) {
    if (kind === "components") {
      return `@/components/ui/${subpath}`;
    }
    if (kind === "lib") {
      return `@/lib/${subpath}`;
    }

    return match;
  }

  function registryReplacement(match: string, kind: string, subpath: string) {
    console.log(kind, subpath);
    if (kind === "ui") {
      return `@/components/${subpath}`;
    }

    return match;
  }

  return content.replace(regexBase, baseReplacement).replace(regexRegistry, registryReplacement);
}
