using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Repositories.Interfaces;
using Web.Repositories.Dtos;
using System.ComponentModel.DataAnnotations;
using Web.Extensions;

namespace WebApplicationBasic.Controllers
{
    [Route("api/[controller]")]
    public class BlogController : Controller
    {
        IPostRepository _posts;
        ICommentRepository _comments;

        public BlogController(IPostRepository posts, ICommentRepository comments)
        {
            _posts = posts;
            _comments = comments;    
        }

        [HttpGet("posts")]
        public async Task<IEnumerable<Post>> Posts(int offset = 0, int limit = 3)
        {
            return await _posts.Get(offset, limit);
        }

        [HttpGet("posts/{postId}")]
        public async Task<Post> Posts(int postId)
        {
            return await _posts.Get(postId);
        }

        [HttpGet("posts/{postId}/comments")]
        public async Task<IEnumerable<Comment>> Comments(int postId, int offset = 0, int limit = 5)
        {
            return await _comments.Get(postId, offset, limit);
        }

        [HttpPost("posts/{postId}/comments")]
        public async Task<Comment> Comments(int postId, [FromBody]Comment comment)
        {
            if (!ModelState.IsValid)
            {
                throw new ValidationException(ModelState.ErrorsString());
            }
            return await _comments.Create(comment);
        }
    }
}
