using Microsoft.AspNetCore.Mvc;
using HealthOneWebServer.Model.Api;
using System.Reflection;
using HealthOneWebServer.Api_Dal;

namespace HealthOneWebServer.Api_Dal
{
  public class ExercisesDal
  {
    private readonly ApiNinjasClient _client;

    public ExercisesDal(ApiNinjasClient client)
    {
      _client = client;
    }
    public async Task<IActionResult> GetExerciseSet(ExerciseRequestDto request)
    {
      string endpoint = "exercises?";
      string queryString = BaseApiClient.ToUrlQueryString<ExerciseRequestDto>(request);
      var result = await _client.GetAsync<ExerciseResponseDto>(endpoint + queryString);
      return new OkObjectResult(result);
    }
  }
}
