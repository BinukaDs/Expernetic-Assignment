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


           var maxId = _context.Books.Any() ? _context.Books.Max(b => b.Id) : 0;
           newBook.Id = maxId + 1;

           var doesExist = _context.Books.Any(b => b.Title == newBook.Title && b.Author == newBook.Author);
              if(doesExist)
              {
                return Conflict("A book with that Title and Author already exists.");
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
            } else if(updatedBook == null)
            {
                return BadRequest();
            }

            Book.Title = updatedBook.Title;
            Book.Description = updatedBook.Description;
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

        [HttpDelete("multiple")]
        public ActionResult DeleteMultipleBooks(List<int> Ids)
        {

            if (Ids == null)
            {
                return BadRequest("No IDs provided.");
            }
            var booksDeleting = _context.Books.Where(b => Ids.Contains(b.Id)).ToList();
            if(booksDeleting.Count == 0)
            {
                return NotFound();
            }

            _context.Books.RemoveRange(booksDeleting);
            _context.SaveChanges();
            return NoContent();
        }
        
    }
}