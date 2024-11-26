import { Router } from 'express'

import { ClienteController } from './controller/Clientes/cliente';

const router = Router()

router.post('/Clientes', new ClienteController().CadastroClientes)
router.get('/ConsultarCliente' , ClienteController().consultarClientes) 

export default router