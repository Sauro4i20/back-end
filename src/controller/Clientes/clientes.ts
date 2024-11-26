import { Request, Response } from "express";
import { UsuarioServices } from "../../services/clientes/clientesServices";



class UsuarioController {
  async CadastroUsuarios(req: Request, res: Response) {
    const { nome, email, password, cpf } = req.body;
    const usuarioServices = new UsuarioServices()
    const resposta = await usuarioServices.cadastrar_usuarios({
      nome,
      email,
      password,
      cpf
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
  