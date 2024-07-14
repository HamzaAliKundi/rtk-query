import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='contianer vh-100 justify-content-center align-items-center d-flex'>
        <div className='row'>
          <div className='col'>
            <Link to='/posts'>
              <button type='button' className='btn btn-primary'>
                Get posts
              </button>
            </Link>
          </div>
          <div className='col'>
            <Link to='/comments'>
              <button type='button' className='btn btn-success'>
                Get Comments
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
