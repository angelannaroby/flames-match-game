import { FLAMES_RESULT_SEQUENCE } from "../constants/flames.constants";
import type { FlamesResultKey } from "../types/flames.types";

function getRemainingCharacterCount(name1: string, name2: string) {
  const first = name1.replace(/\s/g, "").toLowerCase().split("");
  const second = name2.replace(/\s/g, "").toLowerCase().split("");

  const secondCopy = [...second];

  const filteredFirst = first.filter((char) => {
    const index = secondCopy.indexOf(char);
    if (index !== -1) {
      secondCopy.splice(index, 1);
      return false;
    }
    return true;
  });

  return filteredFirst.length + secondCopy.length;
}

export function calculateFlamesResult(
  firstName: string,
  secondName: string,
): FlamesResultKey {
  let count = getRemainingCharacterCount(firstName, secondName);

  let sequence = [...FLAMES_RESULT_SEQUENCE];

  let index = 0;

  while (sequence.length > 1) {
    index = (index + count - 1) % sequence.length;
    sequence.splice(index, 1);
  }

  return sequence[0];
}