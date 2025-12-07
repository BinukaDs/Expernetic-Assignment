using Microsoft.AspNetCore.Mvc;
using Expernetic_Assignment.models;
using Microsoft.AspNetCore.Http.HttpResults;


namespace Expernetic_Assignment.Controllers
{
        [ApiController]
        [Route("api/[controller]")]
        public class BooksController : ControllerBase
    {
        private readonly LibraryDBContext _context;

        public BooksController(LibraryDBContext context)
        {
            _context = context;
        }

            private static List<Book> books = new List<Book>
            {
                new Book(1, "The Great Gatsby", "1925", "F. Scott Fitzgerald"),
                new Book(2, "To Kill a Mockingbird", "1960", "Harper Lee"),
                new Book(3, "1984", "1949", "George Orwell")

            };
        
        [HttpGet]
        public ActionResult<List<Book>> GetBooks()
        {
            var books = _context.Books.ToList(); 
            return Ok(books);
        }

        [HttpGet("{id}")]
        public ActionResult<Book> GetBookById(int id)
        {
            var book = _context.Books.Find(id);
            if(book == null)
            {
                return NotFound();
            } 
                return Ok(book);
            
        }

        [HttpPost]
        public ActionResult<Book> AddBook(Book newBook)
        {
            if(newBook == null)
            {
                return BadRequest();
            } 

            var doesExist = _context.Books.Any(book => book.Id == newBook.Id);
            if(doesExist)
            {
                return Conflict("A book with the same ID already exists.");
            }

           
            _context.Books.Add(newBook);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetBookById), new { id = newBook.Id}, newBook);
        }

        [HttpPut("{id}")]
        public ActionResult<Book> UpdateBook(int id, Book updatedBook)
        {
            var Book = _context.Books.Find(id);
            if(Book == null)
            {
                return NotFound();
            }

            Book.Title = updatedBook.Title;
            Book.PublishedYear = updatedBook.PublishedYear;
            Book.Author = updatedBook.Author;
            _context.SaveChanges();

            return Ok(updatedBook);
            
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteBook(int id)
        {
            var book = _context.Books.Find(id);
            if(book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            _context.SaveChanges();
            return NoContent();
        }
        
    }
}