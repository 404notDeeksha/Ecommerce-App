import { v4 as uuidv4 } from "uuid";

export const AddId = (array) => {
  const arrayNew = array.map((item) => {
    const key = uuidv4();
    return { id: key, ...item };
  });
  return arrayNew;
};
