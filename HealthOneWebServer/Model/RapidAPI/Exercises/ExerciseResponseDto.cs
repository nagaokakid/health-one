namespace HealthOneWebServer.Model.RapidAPI.Exercises
{
  public class ExerciseResponseDto
  {
    public string Id { get; set; }
    public string Name { get; set; }
    public string Target { get; set; }
    public List<string> SecondaryMuscles { get; set; }
    public List<string> Instructions { get; set; }
    public string BodyPart { get; set; }
    public string Equipment { get; set; }
    public string GifUrl { get; set; }

  }
}
