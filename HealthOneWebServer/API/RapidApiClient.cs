
using static System.Net.WebRequestMethods;

namespace HealthOneWebServer.API.Remote
{
  public class RapidApiClient : BaseApiClient
  {
    public RapidApiClient(HttpClient client) : base(client)
    {
    }
  }
}
