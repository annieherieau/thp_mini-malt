// USER ACTIONS
export function updateUserName(firstName, lastName) {
  const payload = { firstName: firstName, lastName: lastName };
  return { type: "user/updateUserName", payload: payload };
}

export function deleteUser() {
  return { type: "user/deleteUser" };
}
