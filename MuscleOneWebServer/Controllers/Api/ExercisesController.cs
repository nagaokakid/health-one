using Microsoft.AspNetCore.Mvc;
using MuscleOneWebServer.Api_Bal;
using MuscleOneWebServer.Model.Api;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MuscleOneWebServer.Controllers.Api
{
  [Route("api/v1")]
  [ApiController]
  public class ExercisesController : ControllerBase
  {
    private readonly ExercisesBal _exercisesBal;

    public ExercisesController(ExercisesBal exercisesBal)
    {
      _exercisesBal = exercisesBal;
    }
    // GET: api/<Exercises>
    [HttpGet]
    public IEnumerable<string> GetExercise()
    {
      return new string[] { "value1", "value2" };
    }

    // POST api/<Exercises>/
    [HttpPost]
    [Route("exercises")]
    public async Task<IActionResult> GetExerciseSet([FromBody] ExerciseRequestDto request)
    {
      return await _exercisesBal.GetExerciseSet(request);
    }

    // PUT api/<Exercises>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<Exercises>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
