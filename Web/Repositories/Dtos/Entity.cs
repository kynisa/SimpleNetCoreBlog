using System;

namespace Web.Repositories.Dtos
{
    public abstract class Entity
    {
        public int Id { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}