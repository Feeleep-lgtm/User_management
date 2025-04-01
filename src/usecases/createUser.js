import { createUserEntity } from "../entities/user";

export const createUser = (userRepository) => async (userData) => {
  const user = createUserEntity(userData.nsme, userData.email);
  return userRepository.create(user);
};
