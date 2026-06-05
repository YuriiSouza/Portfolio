// Configurações centrais de contato e links do site.

// Número no formato internacional, sem símbolos (usado em wa.me).
export const WHATSAPP_NUMBER = "556237721440"

// Mensagem padrão pré-preenchida ao abrir o WhatsApp pela persona financeira.
export const WHATSAPP_MESSAGE =
  "Olá Yuri! Vi seu site e gostaria de agendar uma conversa sobre planejamento financeiro."

// Monta um link wa.me com mensagem opcional pré-preenchida.
export function whatsappLink(message = WHATSAPP_MESSAGE) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const SOCIAL_LINKS = {
  github: "https://github.com/YuriiSouza",
  linkedin: "https://www.linkedin.com/in/yuri-souza-b33013215/",
}

// E-mail corporativo usado na persona financeira.
export const CORPORATE_EMAIL = "yuri.souza@graoinvestimentos.com.br"

// CNPJ da atividade de planejamento financeiro (formatado).
export const CNPJ = "66.457.712/0001-42"

export const LOCATION = "Goiás, Brasil"
