using System.ComponentModel.DataAnnotations;

namespace Web.Repositories.Dtos
{
    public class Comment : Entity
    {
        [Required]
        [StringLength(100)]
        public string Author { get; set; }

        [Required]
        [StringLength(2000)]
        public string Content { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int PostId { get; set; }
    }
}