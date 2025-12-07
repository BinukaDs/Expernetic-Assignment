var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<LibraryDBContext>();


var app = builder.Build();




app.MapControllers();
app.UseHttpsRedirection();
app.Run();


