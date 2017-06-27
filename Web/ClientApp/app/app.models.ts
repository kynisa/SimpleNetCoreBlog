abstract class Entity {
    id: Number;
    createdOn: Date;
}

export class Post extends Entity {
    title: String;
    content: String;
    commmentsCount: number;
}

export class Comment extends Entity {
    author: String;
    content: String;
    postId: Number;
}