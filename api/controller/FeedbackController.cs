using Microsoft.AspNetCore.Mvc;
using api.models;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;

namespace api.controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class FeedbackController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FeedbackController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitFeedback([FromBody] Feedback feedback)
        {
            if (feedback == null || string.IsNullOrEmpty(feedback.Suggestion))
            {
                return BadRequest("Invalid Feedback");
            }

            feedback.Timestamp = DateTime.UtcNow;
            _context.Feedbacks.Add(feedback);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Feedback submitted successfully." });
        }

    }
}