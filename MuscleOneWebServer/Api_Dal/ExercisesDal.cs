using Microsoft.AspNetCore.Mvc;
using MuscleOneWebServer.Model.Api;
using System.Reflection;
using MuscleOneWebServer.Api_Dal;

namespace MuscleOneWebServer.Api_Dal
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
