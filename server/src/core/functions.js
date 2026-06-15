
/**
 * @param {*} username
 * @param {*} password
 * @param {*} name
 * @returns
 */
function getMongoConnectionString(username, password, name) {
  return `
    mongodb+srv://
    ${username}:${password}
    @cluster0.lujih.mongodb.net/
    ${name}
    ?retryWrites=true&w=majority
  `.trim().replace(/\s+/g, '');
}

export { getMongoConnectionString };
