using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Linq;
using System.Text;

namespace Web.Extensions
{
    public static class ModelStateExtension
    {
        public static string ErrorsString(this ModelStateDictionary ms)
        {
            var result = new StringBuilder();
            foreach (var errorMessage in ms.Values.Select(item => item.Errors.FirstOrDefault()?.ErrorMessage).Where(item => item != null))
            {
                result.Append(errorMessage);
            }
            return result.ToString();
        }
    }
}
