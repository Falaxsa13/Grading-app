using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GradingApp.Server.Models;

/// <summary>
/// Represents the relationship between a user and universities they are associated with.
/// </summary>
public class UserUniversities
{
	[Key]
	[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
	public int Id { get; set; }

	[ForeignKey(nameof(UserModel))]
	public int UserId { get; set; }

	public UserModel User { get; set; }

	[ForeignKey(nameof(UniversityModel))]
	public int UniversityId { get; set; }

	public UniversityModel University { get; set; }
}