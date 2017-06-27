using Dapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Repositories.Dtos;
using Web.Repositories.Interfaces;

namespace Web.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(string connectionString) : base(connectionString) { }

        public async Task<IEnumerable<Comment>> Get(int postId, int offset, int limit)
        {
            return await Database.QueryAsync<Comment>("SELECT Id, Author, CreatedOn, Content FROM Comment WHERE PostId = @postId AND IsDeleted = 0 ORDER BY CreatedOn OFFSET @offset ROWS FETCH NEXT @limit ROWS ONLY", new { postId, offset, limit });
        }

        public async Task<Comment> Create(Comment comment)
        {
            return await Database.QueryFirstAsync<Comment>("INSERT INTO Comment (Author, Content, PostId) OUTPUT INSERTED.* VALUES(@Author, @Content, @PostId)", comment);
        }
    }
}
