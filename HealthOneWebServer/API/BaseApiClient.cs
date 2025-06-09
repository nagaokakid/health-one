using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace HealthOneWebServer.API.Remote
{
  public class BaseApiClient
  {
    private readonly HttpClient _httpClient;

    public BaseApiClient(HttpClient httpClient)
    {
      _httpClient = httpClient;
      
    }

    public async Task<List<TResponse?>> GetListAsync<TResponse>(string endpoint)
    {
      var response = await _httpClient.GetAsync(endpoint);
      Console.WriteLine(response);
      response.EnsureSuccessStatusCode();

      var content = await response.Content.ReadAsStringAsync();
      Console.WriteLine(content);


      return JsonSerializer.Deserialize<List<TResponse?>>(content, new JsonSerializerOptions
      {
        PropertyNameCaseInsensitive = true
      });
    }

    public static string CreateUrlQueryString<T>(T obj)
    {
      string queryString = string.Empty;
      Type type = obj.GetType();
      PropertyInfo[] properties = type.GetProperties();

      foreach (var param in properties)
      {
        if (param != null && !String.IsNullOrWhiteSpace(param?.GetValue(obj)?.ToString()))
        {
          queryString += param.Name.ToLower() + "=" + param?.GetValue(obj)?.ToString().ToLower() + "&";
        }
      }

      queryString = queryString.Remove(queryString.Length - 1);

      return queryString;
    }
  }
}
