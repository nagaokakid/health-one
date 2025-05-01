using HealthOneWebServer.Model.Api;
using HealthOneWebServer.Api_Dal;
using Microsoft.AspNetCore.Mvc;

namespace HealthOneWebServer.Api_Bal
{
  public class ExercisesBal
  {
    private ExercisesDal _dal;
    public ExercisesBal(ExercisesDal dal)
    {
      _dal = dal;
    }

    public async Task<IActionResult> GetExerciseSet(ExerciseRequestDto request)
    {
      return await _dal.GetExerciseSet(request);
    }
  }
}
