import {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostsQuery,
} from '../../services/posts/api';

const Posts = () => {
  const { data } = useGetPostsQuery();
  const [addPostFnc] = useAddPostMutation();
  const [deletePostFnc] = useDeletePostMutation();

  const addPost = async () => {
    const time = Date.now();
    const obj = { id: `${time}`, title: `new post at ${time}`, views: 12312 };
    try {
      const data = await addPostFnc(obj).unwrap();
      console.log('data : ', data);
    } catch (error) {
      console.error('Failed to add post: ', error);
    }
  };

  const deletePost = async (id) => {
    deletePostFnc(id);
  };
  return (
    <>
      {data && (
        <ul>
          {data.map((post) => (
            <div key={post.id} className='d-flex mt-3 gap-2'>
              <li key={post.id}>{post.title}</li>
              <button
                className='btn btn-danger'
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      )}

      <button className='btn btn-warning' onClick={addPost}>
        Add post
      </button>
    </>
  );
};

export default Posts;
