class Movie{
    id: string;
    name: string;
    comment: string;
    score: number;
    src: string;

    constructor(movieName: string, movieComment: string, movieScore: number, movieSrc: string){
        this.name = movieName;
        this.comment = movieComment;
        this.score = movieScore;
        this.src = movieSrc;
        this.id = new Date().toISOString();
    }
}

export default Movie;