import { useForm } from "react-hook-form";
import { useApi } from "../../../hooks/useApi";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const FormTrilha = () => {
    const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm();
    const { sendToApi } = useApi();
    const [formEnviado, setFormEnviado] = useState(false);

    const onSubmit = async (data) => {
        await sendToApi(data);
        setFormEnviado(true);
    };

    return (
        <div>
            {!formEnviado ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nome da trilha</label>
                    <input type="text"
                        className="input-forms"
                        placeholder="Digite o nome da trilha"
                        {...register("nomeTrilha", { required: true, maxLength: 100 })}></input>
                    {errors?.nomeTrilha && errors.nomeTrilha.type === "required" && isSubmitted && <p className="error-message">O campo não pode estar vazio.</p>}
                    {errors?.nomeTrilha && errors.nomeTrilha.type === "maxLength" && isSubmitted && <p className="error-message">O nome da trilha não pode ter mais de 100 caracteres.</p>}
                </div>
                <div className="espaco-dividido">
                    <div>
                        <label>Duração estimada (min)</label>
                        <input type="number" className="input-forms"
                            placeholder="Digite a duração em minutos"
                            {...register("duracao", { required: true, min: 1, max: 999, setValueAs: (value) => parseInt(value) })}></input>
                        {errors?.duracao && errors.duracao.type === "required" && isSubmitted && (<p className="error-message">O campo não pode estar vazio.</p>)}
                        {errors?.duracao && errors.duracao.type === "notZero" && isSubmitted && (<p className="error-message">A duração não pode ser zero.</p>)}
                        {errors?.duracao && errors.duracao.type === "min" && isSubmitted && (<p className="error-message">A duração deve ser maior que zero.</p>)}
                        {errors?.duracao && errors.duracao.type === "max" && isSubmitted && (<p className="error-message">A duração deve ter até 3 caracteres.</p>)}
                    </div>
                    <div>
                        <label>Trajeto (km)</label>
                        <input type="number" className="input-forms"
                            step={0.1}
                            placeholder="Digite a distância em km"
                            {...register("trajeto", { required: true, min: 1, max: 999999, setValueAs: (value) => parseInt(value) })}></input>
                        {errors?.trajeto && errors.trajeto.type === "required" && isSubmitted && (<p className="error-message">O campo não pode estar vazio.</p>)}
                        {errors?.trajeto && errors.trajeto.type === "notZero" && isSubmitted && (<p className="error-message">O trajeto não pode ser zero.</p>)}
                        {errors?.trajeto && errors.trajeto.type === "min" && isSubmitted && (<p className="error-message">O trajeto deve ser maior que zero.</p>)}
                        {errors?.trajeto && errors.trajeto.type === "max" && isSubmitted && (<p className="error-message">O trajeto deve ter até 6 caracteres.</p>)}
                    </div>
                </div>
                <div className="espaco-dividido">
                    <div>
                        <label>Cidade</label>
                        <input type="text" className="input-forms"
                            placeholder="Digite o nome da cidade"
                            {...register("cidade", { required: true, maxLength: 60 })}></input>
                        {errors?.cidade && errors.cidade.type === "required" && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                        {errors?.cidade && errors.cidade.type === "maxLength" && isSubmitted && <p className="error-message">Cidade não pode ter mais de 60 caracteres.</p>}
                    </div>
                    <div>
                        <label>Estado</label>
                        <select className="input-forms"
                            {...register("estado", {validate: (value) => {return value !== "0"}})}>
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
                <div className="espaco-dividido">
                    <div>
                        <label>Nome completo do usuário*</label>
                        <input type="text" className="input-forms"
                            placeholder="Seu nome completo"
                            {...register("nomeUsuario", { maxLength: 60 })}></input>
                        {errors?.nomeUsuario && errors.nomeUsuario.type === "maxLength" && isSubmitted && <p className="error-message">O nome do usuário não pode ter mais de 60 caracteres.</p>}
                    </div>
                    <div>
                        <label>Dificuldade</label>
                        <select className="input-forms"
                            {...register("dificuldade", {validate: (value) => {return value !== "0"}})}>
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
                        {...register("tipo", {validate: (value) => {return value !== "0"}})}>
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
                        {...register("UrlImage", { required: true, maxLength: 300 })}></input>
                    {errors?.UrlImage && errors.UrlImage.type === "required" && isSubmitted && <p className="error-message">O campo não pode estar vazio</p>}
                    {errors?.UrlImage && errors.UrlImage.type === "maxLength" && isSubmitted && <p className="error-message">A URL não pode ter mais de 300 caracteres.</p>}
                </div>
                <div>
                    <button className="botao-cadastro" type="submit">Cadastrar</button>
                    <Link to="/"><button className="botao-retornar">Voltar</button></Link>
                </div>
                </form>
            ) : (
                <div>Formulário enviado com sucesso!</div>
            )}
        </div>
    );
}

export default FormTrilha;