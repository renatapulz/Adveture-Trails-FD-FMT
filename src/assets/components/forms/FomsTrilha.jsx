import { useForm } from "react-hook-form";
import {useApi} from "../../../hooks/useApi";
import "./style.css";

const FormTrilha = () => {
    const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm();
    const { sendToApi } = useApi();

    const onSubmit = async (data) => {
        await sendToApi(data);
    };    

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nome da trilha</label>
                    <input type="text"
                        className="input-forms"
                        placeholder="Digite o nome da trilha"
                        {...register("nomeTrilha", {required: true})}></input>
                        {errors?.nomeTrilha && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                </div>
                <div>
                    <div>
                        <label>Duração estimada (min)</label>
                        <input type="number" className="input-forms"
                            placeholder="Digite a duração em minutos"
                            {...register("duracao", {required: true, setValueAs: (value) => parseInt(value)})}></input>
                            {errors?.duracao && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                    </div>
                    <div>
                        <label>Trajeto (km)</label>
                        <input type="number" className="input-forms"
                            placeholder="Digite a distância em km"
                            {...register("trajeto", {required: true, setValueAs: (value) => parseInt(value)})}></input>
                            {errors?.trajeto && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                    </div>
                </div>
                <div>
                    <div>
                        <label>Cidade</label>
                        <input type="text" className="input-forms"
                            placeholder="Digite o nome da cidade"
                            {...register("cidade", {required: true})}></input>
                            {errors?.cidade && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                    </div>
                    <div>
                        <label>Estado</label>
                        <select className="input-forms"
                            {...register("estado", {validate: (value) => {
                                return value !== "0"
                            }})}>
                            <option value="0">Selecione</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MT">MT</option>
                            <option value="MS">MS</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PR">PR</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SP">SP</option>
                            <option value="SE">SE</option>
                            <option value="TO">TO</option>
                        </select>
                        {errors?.estado && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                    </div>
                </div>
                <div>
                    <div>
                        <label>Nome completo do usuário</label>
                        <input type="text" className="input-forms"
                            placeholder="Seu nome completo"
                            {...register("nomeUsuario", {required: true})}></input>
                            {errors?.nomeUsuario && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                    </div>
                    <div>
                        <label>Dificuldade</label>
                        <select className="input-forms"
                            {...register("dificuldade", {validate: (value) => {
                                return value !== "0"
                            }})}>
                            <option value="0">Selecione</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediário</option>
                            <option value="Avancado">Avançado</option>
                        </select>
                        {errors?.dificuldade && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                    </div>
                </div>
                <div>
                    <label>Tipo</label>
                    <select name="Trilha" className="input-forms"
                        {...register("tipo", {validate: (value) => {
                            return value !== "0"
                        }})}>
                        <option value="0">Selecione</option>
                        <option value="Trilha">Trilha</option>
                        <option value="Caminhada">Caminhada</option>
                        <option value="Trekking">Trekking</option>
                    </select>
                    {errors?.tipo && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                </div>
                <div>
                    <label>URL imagem da trilha</label>
                    <input type="text" className="input-forms"
                        placeholder="Insira um link de uma imagem da trilha"
                        {...register("UrlImage", {required: true})}></input>
                        {errors?.UrlImage && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                </div>
                <div>
                    <button className="botao-cadastro" type="submit">Cadastrar</button>
                    <button className="botao-retornar">Voltar</button>
                </div>
            </form>
        </div>
    )
}

export default FormTrilha;