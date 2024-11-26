import prismaCliente from "../../prisma";
 
 
interface Cliente {
    nome: string;
    email: string;
    password: string;
    cpf: string; 
}
class ClienteServices {
 
    async cadastrar_usuarios({ nome, email, password, cpf }: Cliente) {
        const cadastro = await prismaCliente.cadastrousuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: password
            }
        })
 
        return ({dados: "cadastro "})
    }
    async consultarClientes () {
        const resposta = await prismaCliente.cadastroclientes.findMany()
 
        return resposta
    }
}
 
export { ClienteServices }