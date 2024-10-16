import prismaCliente from "../../prisma";
 
 
interface Usuario {
    nome: string;
    email: string;
    password: string;
}
class UsuarioServices {
 
    async cadastrar_usuarios({ nome, email, password }: Usuario) {
        const cadastro = await prismaCliente.cadastrousuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: password
            }
        })
 
        return ({dados: "cadastro "})
    }
    async consultarUsuarios () {
        const resposta = await prismaCliente.cadastrousuarios.findMany()
 
        return resposta
    }
}
 
export { UsuarioServices }