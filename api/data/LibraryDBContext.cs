using Microsoft.EntityFrameworkCore;
using Expernetic_Assignment.models;

public class LibraryDBContext : DbContext
{
    public DbSet<Book> Books {get; set;}
    public string DbPath {get;}

    public LibraryDBContext()
    {
        DbPath = Path.Join(AppContext.BaseDirectory, "experneticLibrary.db");
    }

      protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}