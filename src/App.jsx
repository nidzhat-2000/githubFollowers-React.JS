import React, { useState, useEffect } from 'react';
import Follower from './Follower.jsx';
import useFetch from './useFetch.js';

function App() {
  const { loading, data } = useFetch();

  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;

    setFollowers(data[page]);
  }, [loading, page]);

  const nextpage = () => {
    setPage(oldPage => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevpage = () => {
    setPage(oldPage => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map(follower => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>

        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevpage}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  // onClick={() => handlePage(index)}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}

            <button className="next-btn" onClick={nextpage}>
              next
            </button>
            {/* <p>{page}</p>
            <button onClick={()=> setPage(page+1)}>another one</button> */}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
