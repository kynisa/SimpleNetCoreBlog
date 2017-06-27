using System;
using System.Data;
using System.Data.SqlClient;

namespace Web.Repositories
{
    public abstract class BaseRepository : IDisposable
    {
        protected IDbConnection Database;

        public BaseRepository(string connectionString)
        {
            Database = new SqlConnection(connectionString);
        }

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
