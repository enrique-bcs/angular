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
    [Route("api/[controller]")]
    [ApiController]
    public class ComentariosController : ControllerBase
    {
        public comentariosBD objBd = new comentariosBD();

        [EnableCors("MyPolicy")]
        [HttpGet]
        public IActionResult Get()
        {
            List<Comentarios> values = objBd.getValuesA(Startup.ConnectionString);

            return Ok(values);
        }

        [EnableCors("MyPolicy")]
        [HttpGet("{id}", Name = "Comentarios")]
        public IActionResult GetById(int id)
        {
            List<Comentarios> values = objBd.getValuesA(Startup.ConnectionString);
            Comentarios p = values.Where(x => x.id == id).FirstOrDefault();
            return Ok(p);
        }

        [EnableCors("MyPolicy")]
        [HttpPost]
        public IActionResult Post([FromBody] Comentarios c)
        {
            if (ModelState.IsValid)
            {

                int values = objBd.insertValues(c, Startup.ConnectionString);

                if (values != 0)
                {
                    return new CreatedAtRouteResult("Comentarios", new { id = c.id }, c);
                }
            }
            return BadRequest(ModelState);
        }
    }
}