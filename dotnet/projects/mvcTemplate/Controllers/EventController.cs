using mvc.Data;
using Microsoft.AspNetCore.Mvc;
using mvc.Models;
using Microsoft.AspNetCore.Authorization;
public class EventController : Controller
{
    private const int PageSize = 5;
    private readonly ApplicationDbContext _context;
    public EventController(ApplicationDbContext context)
    {
        _context = context;
    
    }
   public ActionResult Index(string? searchTitle, DateTime? searchDate, int page = 1)
{
    var userRole = HttpContext.Session.GetString("UserRole");
    ViewBag.UserRole = userRole;

    var query = _context.Events.AsQueryable();

    if (!string.IsNullOrEmpty(searchTitle))
    {
        query = query.Where(e => e.Title.ToLower().Contains(searchTitle.ToLower()));
    }

    if (searchDate.HasValue)
    {
        query = query.Where(e => e.EventDate >= searchDate.Value);
    }

    query = query.OrderByDescending(e => e.CreatedAt);

        
    int totalEvents = query.Count();
    int totalPages = (int)Math.Ceiling((double)totalEvents / PageSize);

    var events = query.Skip((page - 1) * PageSize).Take(PageSize).ToList();
    var viewModel = new EventIndexViewModel
            {
                Events = events,
                CurrentPage = page,
                TotalPages = totalPages,
                SearchTitle = searchTitle,
                SearchDate = searchDate
            };

            return View(viewModel);

}



    public IActionResult ShowDetails(int id)
    {
        var userRole = HttpContext.Session.GetString("UserRole");
        ViewBag.UserRole = userRole;
        var eventToShow = _context.Events.FirstOrDefault(e => e.Id == id);
        if (eventToShow == null)
        {
            return NotFound();
        }
        return View(eventToShow);
    }

    [Authorize]
    public IActionResult Add()
    {
        return View();
    }

    
    [HttpPost, Authorize]
    public IActionResult Add(Event newEvent)
    {
        if (!ModelState.IsValid)
        {
            return View(newEvent);
        }
        
        _context.Events.Add(newEvent);
        _context.SaveChanges();
        TempData["SuccessMessage"] = "L'événement a été créé avec succès !";
        return RedirectToAction("Index");
    }

    [Authorize]
    public IActionResult Delete(int id)
    {
        var eventToDelete = _context.Events.FirstOrDefault(e => e.Id == id);
        if (eventToDelete == null)
        {
            return NotFound();
        }
        return View(eventToDelete);
    }


    [HttpPost, ActionName("Delete"), Authorize]
    public IActionResult DeleteConfirmed(int id)
    {
        var eventToDelete = _context.Events.FirstOrDefault(e => e.Id == id);
        if (eventToDelete == null)
        {
            return NotFound($"L'événement avec l'ID {id} n'a pas été trouvé.");
        }
        _context.Events.Remove(eventToDelete);
        _context.SaveChanges();
        TempData["SuccessMessage"] = "L'événement a été supprimé avec succès !";
        return RedirectToAction(nameof(Index));
    }

    public IActionResult Edit(int id)
    {
        var eventToUpdate = _context.Events.FirstOrDefault(e => e.Id == id);
        if (eventToUpdate == null)
        {
            return NotFound();
        }
        return View(eventToUpdate);
    }

    [HttpPost]
    public IActionResult Edit(Event updatedEvent)
    {
        if (!ModelState.IsValid)
        {
            return View(updatedEvent);
        }

        _context.Update(updatedEvent);
        _context.SaveChanges();
        TempData["SuccessMessage"] = "L'événement a été modifié avec succès !";
        return RedirectToAction(nameof(Index));
    }

}