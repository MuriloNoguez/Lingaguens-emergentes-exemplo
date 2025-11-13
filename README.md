# Lingaguens-emergentes-exemplo

## 🗺️ Implementação da API do Google Maps

Este projeto demonstra como implementar e integrar a API do Google Maps em uma aplicação web moderna usando JavaScript modular.

### 👥 Desenvolvedores
- **Silvio Castilhos**
- **Murilo Noguêz**
- **Thiago Oliveira**

## 📋 Pré-requisitos

- Navegador web moderno
- Chave da API do Google Maps
- Servidor local (Live Server, http-server, etc.)

## 🚀 Como Obter a Chave da API do Google Maps

### Passo 1: Acessar o Google Cloud Console
1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Faça login com sua conta Google
3. Crie um novo projeto ou selecione um existente

### Passo 2: Ativar a API do Google Maps
1. No menu lateral, vá para **"APIs e Serviços"** > **"Biblioteca"**
2. Procure por **"Maps JavaScript API"**
3. Clique em **"Ativar"**

### Passo 3: Criar Credenciais
1. Vá para **"APIs e Serviços"** > **"Credenciais"**
2. Clique em **"Criar credenciais"** > **"Chave de API"**
3. Copie a chave gerada
4. Configure as restrições de segurança conforme necessário

## 🛠️ Estrutura do Projeto

```
src/
├── components/
│   └── MapComponent.js       # Componente principal do mapa
├── services/
│   └── GoogleMapsService.js  # Serviço de integração com a API
├── utils/
│   └── googleMapsLoader.js   # Carregador dinâmico da API
└── main.js                   # Arquivo principal da aplicação
```

## ⚙️ Configuração

### 1. Clone o Repositório
```bash
git clone [url-do-repositorio]
cd Lingaguens-emergentes-exemplo
```

### 2. Configure a Chave da API
No arquivo `src/main.js`, substitua `YOUR_API_KEY_HERE` pela sua chave:

```javascript
const GOOGLE_MAPS_API_KEY = 'SUA_CHAVE_AQUI';
```

### 3. Execute o Projeto
Use um servidor local para executar o projeto:

```bash
# Usando Live Server (VS Code)
# ou
npx http-server
# ou
python -m http.server 8000
```

## 🔧 Implementação Detalhada

### GoogleMapsService.js
Esta classe encapsula toda a lógica de interação com a API do Google Maps:

- **Inicialização do mapa** com configurações personalizadas
- **Gerenciamento de marcadores** (adicionar, remover, limpar)
- **Controle de zoom e centralização**
- **Estilos customizados** para o mapa

### MapComponent.js
Componente reutilizável que oferece uma interface simples para:

- Inicializar o mapa em qualquer container HTML
- Adicionar localizações com informações
- Gerenciar múltiplos marcadores
- Tratamento de erros

### googleMapsLoader.js
Utilitário para carregamento dinâmico da API:

- Carregamento assíncrono do script
- Prevenção de múltiplos carregamentos
- Tratamento de erros de carregamento

## 📍 Funcionalidades Implementadas

### ✅ Mapa Básico
- Exibição do mapa centrado em São Paulo
- Estilos customizados
- Controles de navegação

### ✅ Marcadores
- Adição de marcadores em coordenadas específicas
- InfoWindows com informações detalhadas
- Remoção e limpeza de marcadores

### ✅ Interatividade
- Botões para adicionar marcadores aleatórios
- Centralização do mapa
- Limpeza de todos os marcadores

### ✅ Tratamento de Erros
- Verificação de carregamento da API
- Validação de elementos DOM
- Mensagens de erro informativas

## 🎨 Personalização

### Estilos do Mapa
Os estilos podem ser modificados no arquivo `GoogleMapsService.js`:

```javascript
styles: [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      { fillOpacity: 0.7 },
      { strokeColor: "#000" }
    ]
  }
  // Adicione mais estilos conforme necessário
]
```

### Marcadores Personalizados
Para usar ícones customizados:

```javascript
const marker = this.mapsService.addMarker(
  { lat, lng },
  { 
    title: 'Título',
    icon: {
      url: 'caminho/para/icone.png',
      scaledSize: new google.maps.Size(32, 32)
    }
  }
);
```

## 🔒 Segurança

### Restrições da API Key
1. **Restrições de HTTP referrer**: Configure domínios autorizados
2. **Restrições de API**: Limite às APIs necessárias
3. **Quotas**: Configure limites de uso diário

### Exemplo de Restrições
```
Referrers HTTP:
- localhost:*
- seusitesite.com/*
- *.seusitesite.com/*
```

## 🐛 Troubleshooting

### Mapa não carrega
- Verifique se a chave da API está correta
- Confirme se a API está ativada no Google Cloud
- Verifique restrições de domínio

### Erro de CORS
- Use um servidor local (não abra direto no navegador)
- Verifique configurações de referrer

### Marcadores não aparecem
- Confirme se as coordenadas estão corretas
- Verifique se o mapa foi inicializado corretamente

## 📚 Recursos Adicionais

- [Documentação Google Maps API](https://developers.google.com/maps/documentation/javascript)
- [Exemplos de Estilos](https://snazzymaps.com/)
- [Guia de Otimização](https://developers.google.com/maps/documentation/javascript/optimization)

## 📄 Licença

Este projeto é desenvolvido para fins educacionais como parte do curso de Linguagens Emergentes.

---
**Desenvolvido por:** Silvio Castilhos, Murilo Noguêz, Thiago Oliveira