import { useGetCommentsQuery } from '../../services/comments/api';

const Comments = () => {
  const { data } = useGetCommentsQuery();
  console.log('data : ', data);
  return (
    <>
      {' '}
      {data && (
        <ul>
          {data.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Comments;
