"use client"; // Adicione esta linha no início do arquivo

import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const templateParams = {
    from_name: formData.name,
    message: formData.message,
    email: formData.email,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_2sn8jw3", // Substitua pelo ID do seu serviço EmailJS
        "template_gynklnm", // Substitua pelo ID do seu template EmailJS
        templateParams,
        "dCjr0b7JbSmhgpq3T" // Substitua pela sua chave pública EmailJS
      );
      console.log(response);
      alert("Mensagem enviada com sucesso!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Erro: ", err);
      alert("Falha ao enviar a mensagem.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Seção de Mensagem */}
      <div className="flex-1 bg-gray-800 text-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg border border-gray-600 bg-opacity-60 m-6">
        <h3 className="text-4xl font-bold mb-4 text-orange-500">
          Entre em Contato
        </h3>
        <p className="text-lg text-center">
          Na Evolução Contabilidade, oferecemos serviços de contabilidade
          especializados para atender às necessidades de empresas e indivíduos.
          Com uma equipe experiente e dedicada, garantimos que todas as suas
          obrigações fiscais e contábeis sejam cumpridas com precisão e
          eficiência.
          <br />
          <br />
          Entre em contato conosco para mais informações sobre nossos serviços
          ou para agendar uma consulta. Estamos aqui para ajudar você a alcançar
          seus objetivos financeiros com tranquilidade.
        </p>
      </div>

      {/* Formulário de Contato */}
      <div className="flex-1 p-8 ml-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 bg-opacity-70">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-opacity-75"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-opacity-75"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black bg-opacity-75"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
