const guildUtils = {
  categoryName: (name: string) => name.split('-')
    .map(a => a.charAt(0).toUpperCase() + a.substring(1))
    .join('/')
}

export default guildUtils
