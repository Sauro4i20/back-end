import { Router } from 'express'

import { UsuarioController } from './controller/Usuarios/usuarios';

const router = Router()

router.post('/Usuarios', new UsuarioController().CadastroUsuarios)
router.get('/ConsultarUsuarios' , new UsuarioController().consultarUsuarios) 

export default router