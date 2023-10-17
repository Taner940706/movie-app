class Movie{
    id: string;
    name: string;
    comment: string;
    score: string;
    src: string;
    date: string;
    genre: string;
    duration: number;

    constructor(movieName: string, movieSrc: string, movieComment: string, movieScore: string, movieDate: string, movieGenre: string, movieDuration: number){
        this.name = movieName;
        this.comment = movieComment;
        this.score = movieScore;
        this.src = movieSrc;
        this.date = movieDate;
        this.genre = movieGenre;
        this.duration = movieDuration;
        this.id = new Date().toISOString();
    }
}

export default Movie;