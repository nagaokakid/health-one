using HealthOneWebServer.Api_Dal;
using HealthOneWebServer.Api_Bal;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHttpClient<ApiNinjasClient>(client =>
{
  client.BaseAddress = new Uri("https://api.api-ninjas.com/v1/");
  client.DefaultRequestHeaders.Add("X-API-Key", "enter-api-key-here");
});
builder.Services.AddScoped<ExercisesDal>();
builder.Services.AddScoped<ExercisesBal>();
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
