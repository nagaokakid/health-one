using MuscleOneWebServer.Model.Api;
using MuscleOneWebServer.Api_Dal;
using Microsoft.AspNetCore.Mvc;

namespace MuscleOneWebServer.Api_Bal
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
