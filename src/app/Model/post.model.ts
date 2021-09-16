export class PostDTO {
    public ID: number = 0
    public text: string = ''
    public likes: number = 0
    public Comments: string = ''
    public PostDateTime: string = ''
    public Image: string = ''
    public LikeCount: number = 0
    public commentsCount: number = 0
    public lstcmt: CommentDTO[] = []
}

export class likesDTO {
    public ID: number = 0
    public pid: number = 0
    public LiketDateTime: string = ''
}

export class CommentDTO {
    public ID: number = 0
    public pid: number = 0
    public text: string = ''
    public Comments: string = ''
    public PostDateTime: string = ''
}
