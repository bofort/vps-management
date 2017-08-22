using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Renci.SshNet;
using VPSManagment.Models;

namespace VPSManagment.Controllers
{
    [Route("api/[controller]")]
    public class CommandsController : Controller
    {

        // POST api/values
        [HttpPost]
        public Command Post([FromBody]Command command)
        {
            SshCommand result;

            var connectionInfo = new ConnectionInfo("92.222.83.59","root",
                                     new PasswordAuthenticationMethod("root", "VFBi2DCy"));
            if(command != null){
                using(var ssh = new SshClient(connectionInfo))
                {
                    ssh.Connect();
                    result = ssh.RunCommand(command.Text);
                    command.Result = new Result{
                        Text = result.Result,
                        Error = result.Error
                    };
                    ssh.Disconnect();
                }
            } 

            return command;
        }

    }

}
