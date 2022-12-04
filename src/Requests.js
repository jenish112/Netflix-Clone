const key = 'c38fbb1c0b603aedab92f55ba9866d48'

const requests = {
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requsetToprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requseLatest: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
};
export default requests