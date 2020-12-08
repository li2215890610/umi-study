export function http2https(url: string) {
  if (url) {
    return url
      .replace(/http:\/\/s\./g, 'https://')
      .replace(/http%3A%2F%2Fs/g, 'https%3A%2F%2Fs1')
      .replace(/http:\/\//g, 'https://');
  }
  return '';
}
