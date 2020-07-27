/*
joinLeft - подобна SQL LEFT JOIN
В стиле Lodash
 */

export function joinLeft(left: ReadonlyArray<object>, right: ReadonlyArray<object>, iterator: string | Function): Array<object> {
  if (typeof iterator === "function") {
    return left.reduce((accumulator: Array<object>, itemLeft: object): Array<object> => {
      accumulator.push({
        ...(right.find((itemRight: object | undefined) => iterator(itemLeft, itemRight)) || {}),
        ...itemLeft,
      });
      return accumulator;
    }, [] as Array<object>) as Array<object>;
  }
  if (typeof iterator === "string") {
    return left.reduce((accumulator: Array<object>, itemLeft: object): Array<object> => {
      accumulator.push({
        ...(right.find(
          (itemRight: object| undefined) => itemLeft[iterator] === itemRight[iterator] ) || {}),
        ...itemLeft,
      });
      return accumulator;
    }, [] as Array<object>) as Array<object>;
  }
}


