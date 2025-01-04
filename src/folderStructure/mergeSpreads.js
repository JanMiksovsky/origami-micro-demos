import { trailingSlash, Tree } from "@weborigami/async-tree";

export default async function mergeSpreads(treelike) {
  const tree = Tree.from(treelike);

  const result = {};

  for (const [key, value] of await Tree.entries(tree)) {
    if (!key.startsWith("…")) {
      const normalizedKey = trailingSlash.remove(key);
      result[normalizedKey] = Tree.isAsyncTree(value)
        ? // Subtree
          mergeSpreads(value)
        : // Regular value
          value;
    } else {
      // Spread: add all values to the result
      const subtree = Tree.from(value);
      for (const [spreadKey, spreadValue] of await Tree.entries(subtree)) {
        result[spreadKey] = spreadValue;
      }
    }
  }

  return result;
}
