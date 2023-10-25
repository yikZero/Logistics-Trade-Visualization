function convertTo0xFormat(color: string) {
  if (color.startsWith("0x")) {
    return parseInt(color, 16);
  }
  if (color.startsWith("#")) {
    return parseInt(color.slice(1), 16);
  }
  return parseInt(color, 16);
}

export default convertTo0xFormat;