const array = [2, 4, [22, "test"], false, null, { a: 2 }, [22, "test"], "null"];

function hasDuplicates(arr) {
  const seen = new Set();
  for (let item of arr) {
    const itemString =
      typeof item === "object" && item !== null ? JSON.stringify(item) : item;
    if (seen.has(itemString)) {
      return true;
    }
    seen.add(itemString);
  }
  return false;
}

console.log(hasDuplicates(array));
