import { useEffect, useState } from 'react';

const GetPost = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        console.log(data);
        setPost(data);
        setError('');
      })
      .catch(err => {
        setLoading(false);
        setPost({});
        setError(err);
      });
  }, []);

  return (
    <div>
      {loading ? 'loading...' : post.title}
      {error || null}
    </div>
  );
};

export default GetPost;
