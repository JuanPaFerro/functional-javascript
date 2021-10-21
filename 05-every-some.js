function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((el1) => {
      return goodUsers.some((el2) => {
        return el2.id === el1.id;
      });
    });
  };
}

module.exports = checkUsersValid;
