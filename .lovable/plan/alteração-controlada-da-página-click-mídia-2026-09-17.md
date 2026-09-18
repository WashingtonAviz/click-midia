# Alteração controlada da página Click Mídia

## Objetivo
Reproduzir a página publicada em `/`, preservando sua identidade e seus comportamentos, com mudanças restritas ao título principal, ao bloco de Audiência e à condensação dos inventários antes de Pacotes.

## Implementação
1. **Reconstruir fielmente a base publicada**
   - Manter o header, navegação, logo, CTAs, hero, mockup principal, chips e composição responsiva observados na página original.
   - Alterar somente a headline para “Sua marca no momento da decisão de compra.”, mantendo “da decisão de compra.” no destaque atual.
   - Reutilizar os assets publicados da Click Parts no projeto, sem hotlinks e sem substituir os mockups existentes.

2. **Criar a nova seção Audiência / Intenção de Compra**
   - Construir a abertura “Não é audiência genérica. É intenção de compra.” com os dois textos curtos fornecidos.
   - Apresentar 32.186 buscas, últimos 30 dias e +61% no período em uma visualização de linha conceitual, sem números intermediários.
   - Incluir o card de categorias com exatamente os cinco percentuais fornecidos.
   - Criar o bloco de geolocalização com 107 municípios e a distribuição exata por estado.
   - Incluir um mapa reconhecível do Brasil, com pontos luminosos concentrados nas regiões informadas, usando contorno e efeitos discretos.
   - Fechar com o fluxo Estado → Cidade → Categoria → Veículo → Peça → Marca → Intenção e “Marca certa. Público certo. Momento certo.”

3. **Condensar os inventários em uma única jornada**
   - Substituir todo o trecho iniciado em “FORMATO 01” até imediatamente antes de “PACOTES”.
   - Criar “Onde sua marca aparece” com os três mockups originais: Marketplace, Sistema de gestão da oficina e Página de compra da oficina.
   - Organizar os três lado a lado no desktop e empilhados no mobile, com conexão visual de jornada e os textos exatos fornecidos.
   - Preservar os ids `inventario` e `formatos` na nova composição para manter as âncoras superiores e do rodapé funcionais.

4. **Preservar Pacotes e o conteúdo posterior**
   - Reproduzir sem mudanças os dois cards, preços, períodos, selos, textos, CTAs, aviso comercial, CTA final e rodapé da página publicada.
   - Manter os destinos de Marketplace, Serviços, Privacidade, Termos, telefone, e-mail e todos os botões “Anunciar”.

5. **Comportamento e validação**
   - Implementar o mesmo padrão dark premium, tipografia Inter/Roboto, gradientes vermelho–rosa–amarelo, linhas, bordas, sombras e animações discretas, respeitando redução de movimento.
   - Preservar a navegação responsiva, CTA fixo mobile e acessibilidade básica da referência.
   - Validar visualmente em 1440px, 1366px, tablet e 390px, verificando overflow, legibilidade, âncoras, botões, conteúdo numérico e a ausência do conjunto antigo de formatos.
   - Comparar novamente com a URL publicada antes da entrega e confirmar a lista de validação solicitada.

## Detalhes técnicos
- A página será implementada na rota inicial existente, sem criar novas URLs.
- Cores, gradientes, sombras, tipografia e movimentos serão definidos por tokens no sistema visual global.
- Os mockups serão componentes visuais fiéis aos observados, alimentados pelos mesmos assets originais baixados localmente.
- “Pacotes” e tudo abaixo serão tratados como área bloqueada para alterações de conteúdo e organização durante a implementação.
