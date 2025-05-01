namespace HealthOneWebServer.Model.Api
{
  public class ExerciseRequestDto
  {
    public string? Name { get; set; }
    public string? Type { get; set; }
    public string? Muscle {  get; set; }
    public string? Difficulty { get; set; }
    public string? Offset { get; set; }
  }
}
