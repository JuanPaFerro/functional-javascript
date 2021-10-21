function getShortMessages(messages) {
  let filtered = [];

  messages
    .filter((x) => x.message.length < 50)
    .map((el) => filtered.push(el.message));
  return filtered;
}

module.exports = getShortMessages;
