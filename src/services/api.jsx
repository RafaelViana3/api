export const fetchCarros = async (marca) => {
    // Declaração da função fetchCarros como uma função assíncrona que aceita um parâmetro 'marca'
    const response = await fetch('./carros.json');
    // Realiza uma requisição HTTP GET para o arquivo 'carros.json'
    // O await é usado para esperar a resposta da requisição
    
    if (!response.ok) {
        // Verifica se a resposta da requisição não foi bem-sucedida (status de resposta não está no intervalo 200-299)
        throw new Error('Erro ao buscar carros');
        // Se a resposta não foi bem-sucedida, lança um erro com a mensagem 'Erro ao buscar carros'
    }

    const data = await response.json();
    // Converte a resposta da requisição em um objeto JavaScript (JSON)
    // O await é usado para esperar até que a conversão seja concluída

    return data.carros[marca] || [];
    // Acessa a propriedade 'carros' do objeto 'data' e, em seguida, acessa a propriedade correspondente à 'marca' fornecida
    // Se a propriedade 'marca' existir em 'carros', retorna os dados associados a essa marca
    // Se a propriedade 'marca' não existir, retorna um array vazio ([])
};
