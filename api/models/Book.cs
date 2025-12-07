namespace Expernetic_Assignment.models;

public class Book
{
            public int Id { get; set; }
            public string Title { get; set; }
            public string PublishedYear { get; set; }
            public string Author { get; set; }

            public Book(int id, string title, string publishedYear, string author)
            {
                Id = id;
                Title = title;
                PublishedYear = publishedYear;
                Author = author;
            }



}