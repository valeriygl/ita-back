type userType = {
  id: string;
  name: string;
};
let users: Array<userType> = [];

export const addUser = (id: string, name: string): string => {
  name = name.trim().toLowerCase();

  const isUserExist = users.find(user => user.name === name);

  if (!name) {
    return 'Name are required!';
  }

  if (isUserExist) {
    return 'This name is taken';
  }

  const user = { id, name };

  users.push(user);
  return null;
};

export const getUser = (id: string) => users.find(user => user.id === id);

export const removeUser = (id: string): void => {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    users.splice(index, 1)[0];
  }
};
