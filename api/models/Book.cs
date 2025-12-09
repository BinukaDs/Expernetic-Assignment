namespace Expernetic_Assignment.models;

public class Book
{
            public int Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Author { get; set; }

            public Book(int id, string title, string description, string author)
            {
                Id = id;
                Title = title;
                Description = description;
                Author = author;
            }



}