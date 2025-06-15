// アロー関数
// const add = (x, y) => {
//    return x + y;
// }

const square = num => {
    // パラメータが一つの場合は（）省略できる
    return num*num;
}

//暗黙的なreturn省略。{}を()に変える必要がある。
const rolldice = () => (
    Math.floor(Math.random() * 6) +1);

//上のaddの省略。メソッドのカッコも取れる、短い場合はアリ
const add = (x, y) => x + y;

//mapからアロー関数への書き換え

/* movies = [title, score];
const newMovies = movies.map(function(movie) {
    return `${movie.title}  ${movie.score / 10}`;
}) */

const newMovies = movies.map(movie =>
     `${movie.title} ー ${movie.score / 10}`);
