import { Request, Response } from "express";
import { UsuarioServices } from "../../services/usuarios/usuariosServices";



class UsuarioController {
  async CadastroUsuarios(req: Request, res: Response) {
    const { nome, email, password } = req.body;
    const usuarioServices = new UsuarioServices()
    const resposta = await usuarioServices.cadastrar_usuarios({
      nome,
      email,
      password
    })
    return res.json(resposta)
  }

  async consultarUsuarios(req: Request, res: Response) {
 
    const usuariosServices = new UsuarioServices()
    const resposta = await usuariosServices.consultarUsuarios()
   
    return res.json(resposta)
}
}

export { UsuarioController };
