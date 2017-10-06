export const LOAD_CURRENT_USER = 'LOAD_CURRENT_USER';

export function loadCurrentUser(currentUser) {
  return {
    type: LOAD_CURRENT_USER,
    currentUser,
  };
}
