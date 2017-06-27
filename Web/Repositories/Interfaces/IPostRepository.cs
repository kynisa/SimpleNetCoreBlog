using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Repositories.Dtos;

namespace Web.Repositories.Interfaces
{
    public interface IPostRepository
    {
        Task<IEnumerable<Post>> Get(int offset, int limit);
        Task<Post> Get(int id);
    }
}
