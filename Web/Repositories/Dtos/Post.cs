namespace Web.Repositories.Dtos
{
    public class Post : Entity
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string ContentPreview { get; set; }
        public int CommentsCount { get; set; }
    }
}