const URL = 'https://picsum.photos/640/400/?random';

export const fetchImage = () => {
  return fetch(URL, {
    method: 'GET'
  });
};

export const getUrl = async () => {
  const data = await fetchImage();
  return data.url;
}
