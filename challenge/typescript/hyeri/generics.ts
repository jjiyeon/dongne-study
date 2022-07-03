type SuperPrint = {
  <T>(arr: T[]): void;
};

function prependType<T>(arr: T[], item: T) {
  arr.unshift(item);
}

const last: SuperPrint = (arr) => arr[arr.length - 1];

prependType([1, 2, 3], 4);
