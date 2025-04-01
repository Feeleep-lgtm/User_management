export const createUserEntity = (name, email) => {
  if (!name || !email) throw new Error("Name and email are required");
  return { name, email };
};
