import React from 'react'
import { Button, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import './cadastro.css'

import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    nome: yup.string().required(),
    idade: yup.number().required().moreThan(16),
    cpf: yup.string().required().matches(/^(\d{3}\.){2}\d{3}\-\d{2}$/),
    matricula: yup.string().required().matches(/^\d{9}$/),
    curso: yup.string().required(),
    endereco: yup.string().required(),
    numeroEndereco: yup.number().positive(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    cep: yup.string().required().matches(/^\d{2}.\d{3}\-\d{3}$/),
});

const initialValues = {
    nome: '',
    idade: '',
    cpf: '',
    matricula: '',
    curso: '',
    endereco: '',
    numeroEndereco: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: ''
}

const CadastroForm = () => {
    const cpfMask = value => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }

    const cepMask = value => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    }

    const handleSubmit = (data) => {
        console.log(data)
        alert(`Aluno cadastrado:
            Nome: ${data.nome}
            Idade: ${data.idade}
            Matrícula: ${data.matricula}
        `)
    }

    return (
        <div className="cadastro-form">
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={initialValues}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                        <Form noValidate onSubmit={handleSubmit} className="formulario" >
                            <Form.Group className="dadosAluno group">
                                <Form.Label>Dados do Aluno</Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="inputNome">
                                        <Form.Label>Nome Completo *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Informe o nome completo"
                                            name="nome"
                                            value={values.nome}
                                            isInvalid={!!errors.nome}
                                            isValid={!!values.nome && !errors.nome}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Nome é obrigatório
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="2" controlId="inputIdade">
                                        <Form.Label>Idade *</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="idade"
                                            value={values.idade}
                                            isInvalid={!!errors.idade}
                                            isValid={!!values.idade && !errors.idade}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Idade tem que ser maior que 16 anos
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="inputCPF">
                                        <Form.Label>CPF *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Informe o CPF"
                                            name="cpf"
                                            onChange={(e) => { e.target.value = cpfMask(e.target.value); handleChange(e) }}
                                            value={values.cpf}
                                            isInvalid={!!errors.cpf}
                                            isValid={!!values.cpf && !errors.cpf}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            CPF é obrigatório
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} md="3" controlId="inputMatricula">
                                        <Form.Label>Matrícula *</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Informe a Matrícula"
                                            name="matricula"
                                            onChange={handleChange}
                                            isInvalid={!!errors.matricula}
                                            isValid={!!values.matricula && !errors.matricula}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Matrícula é obrigatória
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="inputCurso">
                                        <Form.Label>Curso *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Informe o Curso"
                                            name="curso"
                                            onChange={handleChange}
                                            isInvalid={!!errors.curso}
                                            isValid={!!values.curso && !errors.curso}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Curso é obrigatório
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group className="dadosEndereco group">
                                <Form.Label>Dados do Endereço</Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="inputEndereco">
                                        <Form.Label>Endereço</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Informe o Endereço"
                                            name="endereco"
                                            onChange={handleChange}
                                            isInvalid={!!errors.endereco}
                                            isValid={!!values.endereco && !errors.endereco}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Endereço é obrigatório
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="2" controlId="inputNumeroEnd">
                                        <Form.Label>Número</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="numeroEndereco"
                                            onChange={handleChange}
                                            isInvalid={!!errors.numeroEndereco}
                                            isValid={!!values.numeroEndereco && !errors.numeroEndereco}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} md="4" controlId="inputComplemento">
                                        <Form.Label>Complemento</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Informe o Complemento"
                                            name="complemento"
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} md="3" controlId="inputBairro">
                                        <Form.Label>Bairro *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Informe o Bairro"
                                            name="bairro"
                                            onChange={handleChange}
                                            isInvalid={!!errors.bairro}
                                            isValid={!!values.bairro && !errors.bairro}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Bairro é obrigatório
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="3" controlId="inputCidade">
                                        <Form.Label>Cidade *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Informe a Cidade"
                                            name="cidade"
                                            onChange={handleChange}
                                            isInvalid={!!errors.cidade}
                                            isValid={values.cidade && !errors.cidade}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Cidade é obrigatória
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="3">
                                        <Form.Label>Estado *</Form.Label>
                                        <Form.Control as="select" name="estado" custom onChange={handleChange}>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} md="3" controlId="inputCEP">
                                        <Form.Label>CEP *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Informe o CEP"
                                            name="cep"
                                            value={values.cep}
                                            onChange={(e) => { e.target.value = cepMask(e.target.value); handleChange(e) }}
                                            isInvalid={!!errors.cep}
                                            isValid={!!values.cep && !errors.cep}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            CEP é obrigatório
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Form.Row>
                            </Form.Group>

                            <Button type="submit">Cadastrar</Button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default CadastroForm