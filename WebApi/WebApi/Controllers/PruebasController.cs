using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using conexionDatos;
using Entidades;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [EnableCors("MyPolicy")]
    [Produces("application/json")]
    [Route("api/[controller]")]
    //[ApiController]
    public class PruebasController : Controller
    {
        public baseDatos bDATA = new baseDatos();

        [EnableCors("MyPolicy")]
        [HttpGet]
        public IActionResult Get()
        {
            List<Pruebas> values = bDATA.getValores(Startup.ConnectionString);

            return Ok(values);
        }

        [EnableCors("MyPolicy")]
        [HttpGet("{id}", Name = "PruebaCreada")]
        public IActionResult GetById(int id)
        {
            List<Pruebas> values = bDATA.getValores(Startup.ConnectionString);
            Pruebas p = values.Where(x => x.id == id).FirstOrDefault();
            return Ok(p);
        }

        [EnableCors("MyPolicy")]
        [HttpPost]
        public IActionResult Post([FromBody] Pruebas p)
        {
            if (ModelState.IsValid)
            {

                int values = bDATA.insertarValores(p, Startup.ConnectionString);

                if (values != 0)
                {
                    return new CreatedAtRouteResult("PruebaCreada", new { id = p.id }, p);
                }
            }
            return BadRequest(ModelState);
        }
    }
}