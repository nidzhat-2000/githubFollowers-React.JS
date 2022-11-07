const paginate = followers => {
  const ItemsPerPage = 9;
  const pages = Math.ceil(followers.length / ItemsPerPage);
  // console.log(pages);

  const newFollowers = Array.from({ length: pages }, (_, i) => {
    const start = i * ItemsPerPage;
    return followers.slice(start, start + ItemsPerPage);
  });

  return newFollowers;
};

export default paginate;
