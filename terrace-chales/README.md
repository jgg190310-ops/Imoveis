# Terrace Chalés — Monte Verde (MG)

Site de apresentação dos chalés. Prévia **não autorizada** — a marca d'água sai quando o cliente fechar.

- **No ar em:** https://jgg190310-ops.github.io/Imoveis/terrace-chales/
- **Cliente:** Thiago e Anieli
- **WhatsApp:** (35) 98700-0736
- **E-mail:** contato@terrachales.com.br
- **Instagram:** @terracemonteverde
- **Endereço:** Av. Monte Verde, 2094 — Monte Verde, Camanducaia (MG), 37650-000
- **Motor de reservas:** https://hotels.cloudbeds.com/reservas/bjasvx

## Estrutura

```
terrace-chales/
  index.html          página única, tudo embutido (HTML + CSS + JS)
  fotos/
    logo.png          logo completa, fundo creme
    logo-transp.png   logo completa, fundo transparente
    mark.png          só o símbolo (oval + chalé) — usado na barra do topo
    favicon-32.png
    favicon-64.png
    apple-touch-icon.png
```

## Pendências

1. **Fotos ainda vêm do Cloudbeds.** As imagens são carregadas de `h-img*.cloudbeds.com`,
   o servidor do motor de reservas do próprio cliente. Funciona, mas se eles trocarem de
   plataforma o site quebra. **Baixar as 9 fotos e salvar em `fotos/`**, depois trocar as
   URLs no `index.html`.
2. **Confirmar com o cliente** se os 3 chalés são iguais entre si ou se cada um tem um
   diferencial — a seção "Os chalés" hoje descreve por diferencial (hidro / lareira / varanda).
3. Tirar a marca d'água de prévia depois do fechamento (bloco `#wm` no CSS e a `<div id="wm">`).

## Conteúdo confirmado pelo cliente

Chalés amplos · hidro dupla com vista · lareira ao pé da cama · frigobar · wi-fi ·
TV 50" 4K · estacionamento privativo · 3 chalés a 500 m do centro ·
9,9 no Traveller Review Awards 2025 (Booking.com)
