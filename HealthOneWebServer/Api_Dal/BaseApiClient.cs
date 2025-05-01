using System.Reflection;
using System.Text.Json;

namespace HealthOneWebServer.Api_Dal
{
  public class BaseApiClient
  {
    private readonly HttpClient _httpClient;

    public BaseApiClient(HttpClient httpClient)
    {
      _httpClient = httpClient;
    }

    public async Task<TResponse?> GetAsync<TResponse>(string endpoint)
    {
      var response = await _httpClient.GetAsync(endpoint);
      response.EnsureSuccessStatusCode();

      var content = await response.Content.ReadAsStringAsync();

      return JsonSerializer.Deserialize<TResponse>(content, new JsonSerializerOptions
      {
        PropertyNameCaseInsensitive = true
      });
    }

    public static string ToUrlQueryString<T>(T obj)
    {
      string queryString = string.Empty;
      Type type = obj.GetType();
      PropertyInfo[] properties = type.GetProperties();

      foreach (var param in properties)
      {
        if (param != null && !String.IsNullOrWhiteSpace(param?.GetValue(obj).ToString()))
        {
          queryString += param.Name + "=" + param?.GetValue(obj).ToString() + "&";
        }
      }

      return queryString;
    }
  }
}
