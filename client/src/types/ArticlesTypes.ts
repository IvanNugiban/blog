export interface IArticle {
    id: string;
    image: string;
    title: string;
    paragraph: string;
    commentaries: ICommentary[] | [];
    createdAt: string;
}

export interface IArticlesResponseData {
    category: string;
    articles: IArticle[];
}

export interface ICommentary {
    commentary: string;
    creator: string;
    dateOfCreation: string;
}
