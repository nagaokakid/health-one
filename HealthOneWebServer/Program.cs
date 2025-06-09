
using HealthOneWebServer.API.Remote;
using HealthOneWebServer.Services.Exercises;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddUserSecrets<Program>();

var rapidApiKey = builder.Configuration["RapidApi:Key"];
var rapidApiHost = builder.Configuration["RapidApi:Host"];

// Add services to the container.
builder.Services.AddHttpClient<RapidApiClient>(client =>
{
  client.BaseAddress = new Uri("https://exercisedb.p.rapidapi.com/");
  client.DefaultRequestHeaders.Add("x-rapidapi-key", rapidApiKey);
  client.DefaultRequestHeaders.Add("x-rapidapi-host", rapidApiHost);
});
builder.Services.AddScoped<ExercisesService>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
