using Blazored.LocalStorage;
using Microsoft.Extensions.DependencyInjection;

namespace Demo
{
	public class Module
	{
		public static void Main()
		{
			// this entrypoint should remain empty
		}

		public static void ConfigureServices(IServiceCollection services)
		{
			services.AddBlazoredLocalStorage();
		}
	}
}
