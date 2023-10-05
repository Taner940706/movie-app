class Movie{
    id: string;
    name: string;
    comment: string;
    score: string;
    src: string;

    constructor(movieName: string, movieSrc: string, movieComment: string, movieScore: string){
        this.name = movieName;
        this.comment = movieComment;
        this.score = movieScore;
        this.src = movieSrc;
        this.id = new Date().toISOString();
    }
}

export default Movie;