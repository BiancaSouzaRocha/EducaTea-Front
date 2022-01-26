import { Produto } from "./Produto"

export class Usuario{
    public id: number
    public nomeUsuario: String
    public email: String
    public senha: String
	public foto: String	
    public produto: Produto[]
}