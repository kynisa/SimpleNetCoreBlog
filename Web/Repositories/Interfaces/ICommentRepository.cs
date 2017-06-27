using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Repositories.Dtos;

namespace Web.Repositories.Interfaces
{
    public interface ICommentRepository
    {
        Task<IEnumerable<Comment>> Get(int postId, int offset, int limit);

        Task<Comment> Create(Comment comment);
    }
}
