using Dapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Repositories.Dtos;
using Web.Repositories.Interfaces;

namespace Web.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(string connectionString) : base(connectionString) { }

        public async Task<IEnumerable<Post>> Get(int offset, int limit)
        {
            return await Database.QueryAsync<Post>("SELECT Id, Title, CreatedOn, ContentPreview FROM Post Where IsDeleted = 0 ORDER BY CreatedOn Desc OFFSET @offset ROWS FETCH NEXT @limit ROWS ONLY", new { offset, limit });
        }

        public async Task<Post> Get(int id)
        {
            return await Database.QueryFirstAsync<Post>("SELECT Id, Title, CreatedOn, Content, (SELECT COUNT(Id) FROM Comment WHERE Comment.PostId = Post.Id AND IsDeleted = 0) as CommentsCount FROM Post WHERE Id = @id", new { id });
        }
    }
}
