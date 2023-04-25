const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

interface DataFromRequest {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = (url: string): Promise<DataFromRequest[]> => {
  return fetch(url).then((data) => data.json());
};

getData(COMMENTS_URL)
  .then((data: DataFromRequest[]) => {
    data.forEach((item: DataFromRequest) => {
      console.log(`ID: ${item.id} Email: ${item.email}`);
    });
  });
