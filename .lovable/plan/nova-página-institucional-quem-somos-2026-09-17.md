# Nova página institucional Quem Somos

## Objetivo
Criar `/quem-somos` como uma página institucional do mesmo universo visual da Click Mídia, explicando a Click Parts como ecossistema tecnológico do aftermarket sem alterar o conteúdo das páginas atuais.

## Implementação
1. **Compartilhar a estrutura existente**
   - Extrair o header e o footer atuais para componentes reutilizáveis, mantendo aparência, links, contato e comportamento.
   - Adicionar “Quem somos” como primeiro item do header da Click Mídia e usar o mesmo header na nova página.
   - Na nova página, manter Audiência, Inventário, Formatos e Pacotes apontando para suas âncoras atuais em `/click-midia`; “Anunciar” continuará abrindo o mesmo atendimento comercial.

2. **Criar o hero institucional**
   - Usar os textos fornecidos e destacar “Conectamos um setor inteiro”.
   - Construir uma representação tecnológica autoral do ecossistema, com participantes conectados ao núcleo Click Parts, sem fotografia genérica.

3. **Explicar o ecossistema e a tese**
   - Criar a seção dos elos Fabricante, Distribuidora, Autopeça, Oficina/Prestador e Consumidor como rede conectada, não como cadeia meramente linear.
   - Reproduzir integralmente os textos sobre o papel de cada elo e destacar “Conectar. Não substituir.”
   - Criar a seção minimalista sobre digitalização e infraestrutura operacional com o conteúdo exato fornecido.

4. **Construir a jornada operacional**
   - Criar um carrossel horizontal acessível com dez cenas ilustradas: Consumidor, Oficina, Busca, Geolocalização, Autopeça, Venda, Click Drive, Coleta, Entrega e Serviço.
   - Cada card terá composição própria com miniambientes, interfaces e fluxos visuais — não apenas ícones — além do texto solicitado.
   - Incluir controles anterior/próximo no desktop, indicador de progresso, rolagem suave e swipe nativo no mobile.
   - Fechar com a sequência completa da jornada e “Isso é conectar.”

5. **Representar dados e continuidade da cadeia**
   - Criar o Data Hub central com os doze sinais entrando e a transformação em Inteligência → Demanda → Comportamento → Oportunidade → Decisão.
   - Criar o ciclo de reposição mostrando produtos descendo pela cadeia e inteligência retornando no sentido inverso.
   - Dar destaque editorial a “Produtos descem pela cadeia. Inteligência sobe por ela.”

6. **Resumir o ecossistema e a instituição**
   - Criar o mapa final com Click Parts Brasil ao centro e os doze elementos organizados ao redor, com conexões finas e discretas.
   - Construir Missão, Visão e Valores com hierarquia editorial, evitando cards grandes e repetitivos.
   - Criar o encerramento com os textos fornecidos, botão “Conheça o ecossistema” levando ao início visual da página e “Anuncie no Click Mídia” levando à rota existente.

7. **Movimento, acessibilidade e responsividade**
   - Aplicar apenas animações sutis: pulsos de conexão, deslocamento de sinais e entrada leve de conteúdo.
   - Respeitar preferência por movimento reduzido.
   - Reorganizar diagramas e fluxos no mobile, sem poluição nem overflow; preservar swipe no carrossel e títulos legíveis.
   - Usar um único H1, estrutura semântica, textos alternativos quando aplicável e metadados próprios da rota.

8. **Validação final**
   - Corrigir o erro de sintaxe CSS já presente que impede a página atual de compilar, sem mudar seu visual.
   - Confirmar que `/click-midia` permanece intacta exceto pelo novo item do header.
   - Testar `/quem-somos` em 1440px, 1366px, tablet e aproximadamente 390px.
   - Verificar navegação, carrossel, swipe, CTAs, ausência de overflow e funcionamento das rotas existentes.

## Detalhes técnicos
- A nova página será criada como rota TanStack Start em `src/routes/quem-somos.tsx`, com metadados exclusivos.
- Header, footer e atendimento comercial serão compartilhados sem duplicar comportamento.
- As ilustrações serão construídas no próprio sistema visual com composição vetorial, mini-interfaces e elementos semânticos existentes, sem imagens genéricas ou logos não autorizados.
- As novas cores, linhas, superfícies, sombras e animações usarão os tokens globais atuais; a nova página terá classes próprias para evitar regressões na Click Mídia.
- Nenhum número, parceiro, depoimento ou alcance será adicionado.
