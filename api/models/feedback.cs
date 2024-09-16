using System;

namespace api.models
{
    public class Feedback
    {
        public int Id {get; set;}
        public string HeroReference {get; set;}
        public DateTime Timestamp {get; set;}
        public string Suggestion {get; set;}
    }
}