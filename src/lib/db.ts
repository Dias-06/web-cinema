
export const users: any[] = [];
export const findUserByEmail = (email: string) => {
  return users.find(user => user.email === email);
};