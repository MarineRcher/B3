using mvc.Models;

public class EventIndexViewModel
{
    public List<Event> Events { get; set; }
    public int CurrentPage { get; set; }
    public int TotalPages { get; set; }
    public string? SearchTitle { get; set; }
    public DateTime? SearchDate { get; set; }
}